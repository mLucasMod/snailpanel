import json
import os

def get_api_config(name: str):
    config_path = os.path.join(os.path.dirname(__file__), "config/api.json")

    if not os.path.exists(config_path):
        raise FileNotFoundError(f"File not found : {config_path}")

    with open(config_path, "r") as file:
        return json.load(file).get(name, {})

def get_daemon_config():
    config_path = os.path.join(os.path.dirname(__file__), "config/daemon.json")

    if not os.path.exists(config_path):
        raise FileNotFoundError(f"File not found : {config_path}")

    with open(config_path, "r") as file:
        return json.load(file).get("daemon", {})

def get_database_config():
    config_path = os.path.join(os.path.dirname(__file__), "config/database.json")

    if not os.path.exists(config_path):
        raise FileNotFoundError(f"File not found : {config_path}")

    with open(config_path, "r") as file:
        return json.load(file).get("database", {})
