import subprocess

print("Démarrage du daemon...")
subprocess.Popen(["python3", "daemon/run.py"])