import requests
import re
from time import gmtime, strftime
import time
from datetime import timedelta
import datetime
import json
import pprint

#from bs4 import BeautifulSoup
requests.packages.urllib3.disable_warnings()
#print('This tool is trying to help find the best price for car rent...\n')

# mm/dd/yyyy+hh:mm






class DiscountCarRentalQuery:
    def __init__(self):
        self.header = ''


    def setSingleDay(self, date):
        self.date = date


    def ReqMinimumPrice(self):
        s=requests.session()
        #webaddress= 'https://www.discountcar.com/Reservation.Vehicles.cfm?CarTruckReservation=1&PickupLocationID=169&ReturnLocationID=169&PickupDateTime=06%2F29%2F2015+07%3A30&ReturnDateTime=06%2F30%2F2015+07%3A30&PromotionID=&vehicleClassID=1'
        webaddress1='https://www.discountcar.com/Reservation.Vehicles.cfm?CarTruckReservation=1&PickupLocationID=169&ReturnLocationID=169&PickupDateTime='+self.PickupDateTime+    '&ReturnDateTime='+self.ReturnDateTime +   '&PromotionID=&vehicleClassID=1'
        #print(webaddress1)
        try:
            r=s.get(webaddress1);
            str_=r.content.decode('utf-8')
        #str_='<script>\n\nqrate = "59.99";\n\n</script>'
            all_qrate = re.findall( r'<script>\s*qrate = "[0-9]*.[0-9]*";\s*<.script>', str_)
        #DEBUG
        #f = open('respond.txt','w')
        #f.write(str_) # python will convert \n to os.linesep
        #f.close()
            getNum = re.compile(r'[0-9]*[.][0-9]*')
            minPrice = 100
            for item in all_qrate:
                p=getNum.findall(item)
                tmp=float(p[0])
        #   print(tmp+'\n')
                if tmp < minPrice:
                    minPrice = tmp
            return minPrice
        except Exception as inst:
            print(inst)
            return -1


if __name__ == '__main__':
#def gen_results():
    while(True):
        report=''

        report_gen_time_str= time.strftime("%a %Y-%m-%d %H:%M:%S") #strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())
        print('This is the DiscountCar Rent Price Check Robot:')
        print('Gen Time:' + report_gen_time_str)

        report='This is the DiscountCar Rent Price Check Robot:\n' + 'Gen Time:' + report_gen_time_str;

        flag = 0

        print("%5.5s  %5.5s  %5.5s   " % ("DAY", "DATE", ""))
        DASH = '-----'
        print("%5.5s  %5.5s  %5.5s   " % (DASH, DASH, DASH))
        for i in range(1,31):
        #i = 1
            today = datetime.date.today()

            PickupDate = today + datetime.timedelta(days=i)
            PickupDate_str = PickupDate.strftime("20%y/%02m/%02d")
            PickupTime = "08:30"

            PickupDate_str1 = PickupDate.strftime("%a  %m/%d")
            PickupDate_str2 = PickupDate.strftime("%a\t%m/%d")

            ReturnDate = today + datetime.timedelta(days=i+1)
            ReturnDate_str = ReturnDate.strftime("20%y/%02m/%02d")
            ReturnTime = "09:30"

            headers = {
            'Origin': 'https://www.discountcar.com',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2',
            'Authorization': 'Basic QXJ0eTEyNTpkaXNjb3VudFNlY3JldFBhc3Ml',
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json, text/plain, */*',
            'Referer': 'https://www.discountcar.com/reservation',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.63 Safari/537.36',
            'Connection': 'keep-alive',
}

            data = '{"LocationId":"169","ReturnLocationId":"169","puDate":"' \
                + PickupDate_str \
                + '","rDate":"' \
                + ReturnDate_str + \
                '","pickupTime":"10:30","dropOffTime":"10:30","PromotionId":"","LangId":1}'

            r = requests.post('https://rent.discountcar.com/hb_api/api/v1/home/GetAvailableCarsWithRate', headers=headers, data=data)
            r = r.content.decode('utf-8')
            #print(r.text)

            #print(PickupDate_str1)

            info = json.loads(r)
            #pprint.pprint(info)
            minDayPrice = 99999
            DayReport = 'ErrData'
            for item in info:
               # print(item)
                #print(item['carClassName'])
                #print('  ' + str(item['sampleVehicleName']))
                #print('  ' + str(item['averageRatePerDay']))
                if str(item['averageRatePerDay']) != 'None':
                    minDayPrice = min(minDayPrice, float(item['averageRatePerDay']))
                    DayReport = "%5.5s  %5.5s  %5.5s   " % (PickupDate_str1, str(minDayPrice), str(minDayPrice))

            print(DayReport)

            time.sleep(1.2)

        time.sleep(60*30)


