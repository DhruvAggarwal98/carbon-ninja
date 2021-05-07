from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from PIL import Image

class Predict(Resource):
  def post(self):
    file = request.files['image']
    img = Image.open(file.stream)
    return jsonify({'msg': 'success', 'size': [img.width, img.height]})