from flask import Flask, jsonify

def register_errors(app: Flask):
    @app.errorhandler(400)
    def bad_request(error):
        return jsonify({"status": 400, "error": "BAD_REQUEST"}), 400
    
    @app.errorhandler(401)
    def forbidden(error):
        return jsonify({"status": 401, "error": "UNAUTHORIZED"}), 401

    @app.errorhandler(403)
    def forbidden(error):
        return jsonify({"status": 403, "error": "FORBIDDEN"}), 403

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({"status": 404, "error": "NOT_FOUND"}), 404
    
    @app.errorhandler(500)
    def internal_server_error(error):
        return jsonify({"status": 500, "error": "INTERNAL_SERVER_ERROR"}), 500
