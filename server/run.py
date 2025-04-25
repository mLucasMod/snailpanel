import threading
from api.api import Api
from daemon.daemon import Daemon

def start_api():
    api = Api()
    api.run()

def start_daemon():
    daemon = Daemon()
    daemon.run()

if __name__ == "__main__":
    # api_thread = threading.Thread(target=start_api)
    # daemon_thread = threading.Thread(target=start_daemon)

    # api_thread.start()
    # daemon_thread.start()

    # api_thread.join()
    # daemon_thread.join()

    start_api()
