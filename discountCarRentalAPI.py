import requests
import randomUserAgent
import re
from time import gmtime, strftime
import time
from datetime import timedelta
import datetime
import json
import pprint

API_URL = 'https://www.discountcar.com/WebAPI/api/v1/home/'
HEADERS = {
        'Authorization': 'Basic QXJ0eTEyNTpkaXNjb3VudFNlY3JldFBhc3Ml',
        'Origin': 'https://www.discountcar.com',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2',
        'Authorization': 'Basic QXJ0eTEyNTpkaXNjb3VudFNlY3JldFBhc3Ml',
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json, text/plain, */*',
        'Referer': 'https://www.discountcar.com/reservation',
        'Connection': 'keep-alive',
        }
ua = randomUserAgent.UserAgent()

class POST_URL:
    def __init__(self, url, headers, data):
        self.url = url
        self.headers = headers
        self.data = data
#a = POST_URL('http://google',dict,dict)
def GetNext30DayAvailableCarsWithRate(PlaceId):
    today = datetime.date.today()
    post_url_list = []
    for i in range(1,31):
        PickupDate = today + datetime.timedelta(days=i)
        ReturnDate = today + datetime.timedelta(days=i+1)
        post_url_list.append(GetAvailableCarsWithRate(
            str(PlaceId),str(PlaceId),PickupDate, ReturnDate,"09:00", "09:00",
            ua.random()))
    return post_url_list

def GetAvailableCarsWithRate(LocationId, ReturnLocationId, puDate,rDate,pickupTime, dropOffTime, userAgent):
    url = API_URL + 'GetAvailableCarsWithRate'
    headers = HEADERS.copy()
    headers['User-Agent'] = userAgent
    data = {
      "LocationId": LocationId,
      "ReturnLocationId": str(ReturnLocationId),
      "puDate": puDate.strftime("20%y/%m/%d"),
      "rDate": rDate.strftime("20%y/%m/%d"),
      "pickupTime": pickupTime,
      "dropOffTime": dropOffTime,
      "PromotionId": "",
      "LangId": 1
    }
    return POST_URL(url, headers, data)



#LOCATION_API
#Request URL:POST https://www.discountcar.com/WebAPI/api/v1/home/GetAllLocations
