import os
from flask import Flask
from api import application

if __name__ == "__main__":
    application.run(debug=os.environ.get('DEBUG_API', "False") == "True")