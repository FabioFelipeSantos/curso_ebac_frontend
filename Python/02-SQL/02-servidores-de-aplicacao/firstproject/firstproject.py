from flask import Flask
application = Flask(__name__)
@application.route("/")
def hello():
    return "<h1 style='color: blue; background: hsl(125, 76%, 75%, 0.2)'>Hello There!</h1>"

if __name__ == "__main__":
    application.run()
