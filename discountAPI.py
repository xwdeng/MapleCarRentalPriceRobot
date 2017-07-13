import requests
import re
from time import gmtime, strftime
import time
from datetime import timedelta
import datetime
import json
import pprint


report = ''
def add_to_report(location_num):
         report_gen_time_str= time.strftime("%a %Y-%m-%d %H:%M:%S") #strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())
         print('This is the DiscountCar Rent Price Check Robot:')
         print('Gen Time:' + report_gen_time_str)

         global report
         report += 'Gen Time:' + report_gen_time_str + '\n';

         flag = 0

         NXT_MONTH_REPORT_FMT = "%5.5s %4.4s %4.4s %4.4s %2.2s"
                              #   mm/dd  11.1 11.1 12.2 MON
                              #   W    DAY    DISC  ENTP  AVIS
         tb_title = NXT_MONTH_REPORT_FMT % ("DAY", "DI", "EN", "AV", "")
         DASH = '-----'
         tb_dash = NXT_MONTH_REPORT_FMT % (DASH, DASH, DASH, DASH, DASH)
         report += tb_title + '\n'
         report += tb_dash + '\n'
         for i in range(1,31):
         #i = 1
             today = datetime.date.today()

             PickupDate = today + datetime.timedelta(days=i)
             PickupDate_str = PickupDate.strftime("20%y/%m/%d")
             print(PickupDate_str)
             PickupTime = "08:30"

             PickupDate_mmdd = PickupDate.strftime("%m/%d")
             PickupDate_weekday = PickupDate.strftime("%a")

             ReturnDate = today + datetime.timedelta(days=i+1)
             ReturnDate_str = ReturnDate.strftime("20%y/%m/%d")
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

             data = '{"LocationId":' + location_num + ',"ReturnLocationId":' + location_num + ',"puDate":"' \
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
                     DayReport = NXT_MONTH_REPORT_FMT % (PickupDate_mmdd, str(minDayPrice), "??", "??", PickupDate_weekday)
             report += "\n" + DayReport
             print(DayReport)

             time.sleep(1.2)
