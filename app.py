from bottle import *


@route('/static/<filename:path>')
def send_static(filename):
    return static_file(filename, root='./static/')

@route("/")
def index():
    return  template("index.tpl")

run(host="0.0.0.0", port=int(os.environ.get('PORT', 5000)), reloader=True, debug=True)
