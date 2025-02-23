import os
import signal

from config import PID_FILE

def run():
    try:
        with open(PID_FILE, 'r') as pid_file:
            pid = int(pid_file.read().strip())
        
        os.kill(pid, signal.SIGTERM)

        os.remove(PID_FILE)

        print(f"Daemon with PID {pid} has been stopped.")

    except FileNotFoundError:
        print("PID file not found. The daemon might not be running.")

    except Exception as e:
        print(f"An error occurred while stopping the daemon: {e}")

if __name__ == "__main__":
    run()