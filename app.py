from bottle import route, run, template, static_file, request


@route('/static/<filename:path>')
def send_static(filename):
    return static_file(filename, root='./static/')

@route("/")
def index():
    return  template("views/index.html")

run(host="0.0.0.0", port=os.environ.get('PORT', 8080), reloader=True, debug=True)
