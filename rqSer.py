from redis import Redis
from rq import Queue
import time

q = Queue(connection=Redis())

from my_module import count_words_at_url
result = []
for i in range(10):
	result.append(q.enqueue(count_words_at_url, 'http://nvie.com'))
time.sleep(6)
for r in result:
	print(r.result)
