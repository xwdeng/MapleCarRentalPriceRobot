import os
import logging
import sys
import signal
import redis
import multiprocessing
from rq import Worker, Queue, Connection
listen = ['high', 'default', 'low']
redis_url = os.getenv('REDISTOGO_URL', 'redis://localhost:6379')
conn = redis.from_url(redis_url)


def sigint_handler(signum,frame):
    for i in pid_list:
        os.kill(i,signal.SIGKILL)
    logging.info("exit...")
    sys.exit()


def worker():
    logging.info('this is worker')
    with Connection(conn):
        worker = Worker(map(Queue, listen))
        worker.work()

def initLogging(logPath, fileName):
    logFormatter = logging.Formatter("%(asctime)s [%(threadName)-12.12s] [%(levelname)-5.5s]  %(message)s")
    rootLogger = logging.getLogger()
    rootLogger.setLevel(logging.INFO)
    '''
    CRITICAL	50
    ERROR	40
    WARNING	30
    INFO	20
    DEBUG	10
    NOTSET	0
    '''
    fileHandler = logging.FileHandler("{0}/{1}.log".format(logPath, fileName))
    fileHandler.setFormatter(logFormatter)
    rootLogger.addHandler(fileHandler)

    consoleHandler = logging.StreamHandler()
    consoleHandler.setFormatter(logFormatter)
    rootLogger.addHandler(consoleHandler)

pid_list = []
signal.signal(signal.SIGINT,sigint_handler)
if __name__ == '__main__':
    initLogging('log','startMultiWorkers')

    logging.info('Starting multi-workers...')
    pool = multiprocessing.Pool(processes=20)   #multiprocessing pool多进程池，processes=4 指定进程数
    for i in range(20):
        pool.apply_async(worker,)
    for i in multiprocessing.active_children():
        pid_list.append(i.pid)
        logging.info('  Append thread:' + str(i.pid))
    pid_list.append(os.getpid())
    pool.close()
    pool.join()
