from flask import Flask

from api.errors import register_errors
from api.extensions import init_extensions
from api.routes import register_routes
from config import get_api_config

class Api:
    def __init__(self):
        self.config = get_api_config("flask")

        self.app = Flask(__name__)
        self.app.url_map.strict_slashes = self.config.get("strict_slashes", False)

        init_extensions(self.app)
        register_errors(self.app)
        register_routes(self.app)

    def run(self):
        self.app.run(
            host=self.config.get("host", "127.0.0.1"),
            port=self.config.get("port", 5000),
            debug=self.config.get("debug", False)
        )
