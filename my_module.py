import json
import random
import asyncio
import time
import datetime
import asyncio
import aiohttp
'''
import json
url = 'https://api.github.com/some/endpoint'
payload = {'some': 'data'}
headers = {'content-type': 'application/json'}

await session.post(url,
                   data=json.dumps(payload),
                   headers=headers)
'''
import requests
import threading
import time
def count_words_at_url(url):
    print('start task...')
    resp = requests.get(url)
    time.sleep(5)
    print('test' + str(threading.get_ident()))
    return "{py:" + str(len(resp.text.split())) + "}"



async def post(post_url):
    #print('post: ', post_url.url)

    async with aiohttp.ClientSession() as session:
        async with session.post(post_url.url, data = json.dumps(post_url.data), headers = post_url.headers) as response:
            t = '{0:%H:%M:%S}'.format(datetime.datetime.now())
            #print('Done: {}, {} ({})'.format(t, response.url, response.status))
            randWait = random.uniform(0, 0.1)
            await asyncio.sleep(randWait)

            respJsonStr = await response.text()
            respJson = json.loads(respJsonStr)
            min_dRate = 10000.0
            res = ""
            for i in respJson:
                dRate = i['dailyRate']
                if isinstance(dRate, float):
                    if (dRate > 0 and dRate < min_dRate):
                        min_dRate = dRate
            if min_dRate != 10000.0:
                res = post_url.data['puDate'] + " min_dRate:" + str(min_dRate)
            return res

def processPostUrlList(post_url_list):
    loop = asyncio.get_event_loop()
    tasks = []
    for taskURL in post_url_list:
        tasks.append(asyncio.ensure_future(post(taskURL)))
    start = time.clock()
    loop.run_until_complete(asyncio.wait(tasks))
    timeSpend = "time spend: " + str(time.clock() - start) + "seconds."

    report = '';
    for t in tasks:
        report += t.result() + "\n"

    report += timeSpend
    return report
