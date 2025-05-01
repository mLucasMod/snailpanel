from flask import Flask, jsonify

def http_error(status, error, message=None):
    res = {"status": status, "error": error}
    if message:
        res["message"] = message
    return jsonify(res), status

def register_errors(app: Flask):
    @app.errorhandler(400)
    def bad_request(error):
        return http_error(400, "BAD_REQUEST")
    
    @app.errorhandler(401)
    def unauthorized(error):
        return http_error(401, "UNAUTHORIZED")

    @app.errorhandler(403)
    def forbidden(error):
        return http_error(403, "FORBIDDEN")

    @app.errorhandler(404)
    def not_found(error):
        return http_error(404, "NOT_FOUND")
    
    @app.errorhandler(405)
    def method_not_allowed(error):
        return http_error(405, "METHOD_NOT_ALLOWED")
    
    @app.errorhandler(409)
    def conflict(error):
        return http_error(409, "CONFLICT")
    
    @app.errorhandler(422)
    def unprocessable_entity(error):
        return http_error(422, "UNPROCESSABLE_ENTITY")
    
    @app.errorhandler(500)
    def internal_server_error(error):
        return http_error(500, "INTERNAL_SERVER_ERROR", str(error))
    
    @app.errorhandler(501)
    def not_implemented(error):
        return http_error(501, "NOT_IMPLEMENTED")

    @app.errorhandler(Exception)
    def unknown_error(error):
        return http_error(520, "UNKNOWN_ERROR", str(error))
