import requests
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
