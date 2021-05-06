import flask

application = flask.Flask(__name__)

@application.route('/', methods=['GET'])
def home():
    return "Call for Code"