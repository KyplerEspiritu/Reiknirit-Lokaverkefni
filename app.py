from bottle import route, run, template, static_file, request


@route('/static/<filename:path>')
def send_static(filename):
    return static_file(filename, root='./static/')

@route("/")
def index():
    return  template("views/index.html")

run(host='localhost', port=8080, debug=True, reloader=True)
