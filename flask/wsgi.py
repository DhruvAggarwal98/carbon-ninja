from flask import Flask
from api import application

if __name__ == "__main__":
    application.run(debug=True)