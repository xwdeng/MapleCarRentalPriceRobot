from redis import Redis
from rq import Queue
import time
import discountCarRentalAPI

q = Queue(connection=Redis())

from my_module import processPostUrlList
def chunks(seq, n):
    return (seq[i:i+n] for i in range(0, len(seq), n))

post_url_list = discountCarRentalAPI.GetNext30DayAvailableCarsWithRate(169)
results = []
EACH_WORKER_LOAD = 3
split_tasks = list(chunks(post_url_list, EACH_WORKER_LOAD))
for t in split_tasks:
    results.append(q.enqueue(processPostUrlList, t))

time.sleep(4)
for r in results:
	print(r.result)
