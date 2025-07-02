from flask import make_response, jsonify

def ok(data=None, status=200):
    return jsonify({"payload": data, "status": status}), status

def no_content(status=204):
    return make_response, status
