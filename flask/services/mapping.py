from fuzzywuzzy import fuzz
from fuzzywuzzy import process
from .mariadb import MariaDBService
import csv
import os
import pandas as pd

class FuzzySearchService():
    def __init__(self):
        self.db = MariaDBService() # connect to db
        self.food_list = self.db.get_all_foods() # get food list
        self.prediction_foods,  self.fuzzy_predictions, self.predictions, self.carbon_emissions = [], [], [], []
        self.total_emissions = 0
        self.fuzzy_threshold = 75

    def read_csv(self):
        food_choice_df = self.df.iloc[:,0]
        food_list = food_choice_df.values.tolist()
        return food_list
    
    def pull_image_data(self):
        with open(self.image, 'rb') as images_file:
            classes = self.classifier.classify(images_file,threshold='0.6',classifier_ids='food').get_result()
        print(classes)
        return classes

    def find_watson_prediction_choices(self, classes):
        for entry in classes['images'][0]['classifiers'][0]['classes']:
            self.prediction_foods.append(entry['class'])
        return self.prediction_foods

    def find_prediction(self, food_list, prediction_foods):
        for currpred in prediction_foods:
            (food_prediction, score) = process.extractOne(currpred, food_list)
            if (score > self.fuzzy_threshold) and (food_prediction not in self.fuzzy_predictions):
                self.fuzzy_predictions.append(food_prediction)
        if not self.fuzzy_predictions:
            print('no results found')
            self.carbon_emissions = self.total_emissions = "NONE"
            SystemExit()
        return self.fuzzy_predictions

    def find_carbon_emission(self, fuzzy_predictions):
        for prediction in fuzzy_predictions:
            prediction_row = self.df[self.df['Food product'] == prediction]
            carbon_emission = prediction_row.Total_emissions.item()
            self.carbon_emissions.append([prediction, carbon_emission])
            self.total_emissions = self.total_emissions + carbon_emission
        return self.carbon_emissions, self.total_emissions