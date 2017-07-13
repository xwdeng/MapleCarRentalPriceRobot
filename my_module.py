import requests
import threading
import time
def count_words_at_url(url):
    print('start task...')
    resp = requests.get(url)
    time.sleep(5)
    print('test' + str(threading.get_ident()))
    return "{py:" + str(len(resp.text.split())) + "}";
