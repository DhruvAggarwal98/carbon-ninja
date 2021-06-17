CREATE TABLE IF NOT EXISTS food_production(
   Food_product    VARCHAR(16) NOT NULL PRIMARY KEY
  ,Land_use_change NUMERIC(4,1) NOT NULL
  ,Animal_Feed     NUMERIC(3,1) NOT NULL
  ,Farm            NUMERIC(4,1) NOT NULL
  ,Processing      NUMERIC(3,1) NOT NULL
  ,Transport       NUMERIC(3,1) NOT NULL
  ,Packaging       NUMERIC(3,1) NOT NULL
  ,Retail          NUMERIC(3,1) NOT NULL
  ,Total_emissions NUMERIC(4,1) NOT NULL
  ,Serving_Size    INTEGER  NOT NULL
);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Wheat',0.1,0,0.8,0.2,0.1,0.1,0.1,1.4,16);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Rye',0.1,0,0.8,0.2,0.1,0.1,0.1,1.4,35);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Bread',0.1,0,0.8,0.2,0.1,0.1,0.1,1.4,50);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Maize',0.3,0,0.5,0.1,0.1,0.1,0,1.1,164);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Corn',0.3,0,0.5,0.1,0.1,0.1,0,1.1,164);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Barley',0,0,0.2,0.1,0,0.5,0.3,1.1,157);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Oatmeal',0,0,1.4,0,0.1,0.1,0,1.6,50);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Oats',0,0,1.4,0,0.1,0.1,0,1.6,48);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Rice',0,0,3.6,0.1,0.1,0.1,0.1,4,164);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Potatoes',0,0,0.2,0,0.1,0,0,0.3,148);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Cassava',0.6,0,0.2,0,0.1,0,0,0.9,103);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Cane Sugar',1.2,0,0.5,0,0.8,0.1,0,2.6,55);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Beet Sugar',0,0,0.5,0.2,0.6,0.1,0,1.4,55);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Beans',0,0,1.1,0,0.1,0.4,0,1.6,86);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Lentils',0,0,1.1,0,0.1,0.4,0,1.6,86);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Peas',0,0,0.7,0,0.1,0,0,0.8,86);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Nuts',-2.1,0,2.1,0,0.1,0.1,0,0.2,86);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Soymilk',0.2,0,0.1,0.2,0.1,0.1,0.3,1,240);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Tofu',1,0,0.5,0.8,0.2,0.2,0.3,3,150);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Soybean Oil',3.1,0,1.5,0.3,0.3,0.8,0,6,15);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Palm Oil',3.1,0,2.1,1.3,0.2,0.9,0,7.6,15);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Sunflower Oil',0.1,0,2.1,0.2,0.2,0.9,0,3.5,15);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Rapeseed Oil',0.2,0,2.3,0.2,0.2,0.8,0,3.7,15);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Olive Oil',-0.4,0,4.3,0.7,0.5,0.9,0,6,15);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Tomatoes',0.4,0,0.7,0,0.2,0.1,0,1.4,150);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Onions',0,0,0.2,0,0.1,0,0,0.3,110);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Leeks',0,0,0.2,0,0.1,0,0,0.3,90);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Carrots',0,0,0.2,0,0.1,0,0,0.3,61);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Sweet Potatoes',0,0,0.2,0,0.1,0,0,0.3,130);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Turnips',0,0,0.2,0,0.1,0,0,0.3,122);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Pepper',0,0,0.2,0,0.1,0,0,0.3,75);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Beets',0,0,0.2,0,0.1,0,0,0.3,136);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Garlic',0,0,0.2,0,0.1,0,0,0.3,42);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Radishes',0,0,0.2,0,0.1,0,0,0.3,40);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Turmeric',0,0,0.2,0,0.1,0,0,0.3,60);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Yams',0,0,0.2,0,0.1,0,0,0.3,130);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Bok Choy',0,0,0.3,0,0.1,0,0,0.4,85);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Arugula',0,0,0.3,0,0.1,0,0,0.4,85);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Broccoli',0,0,0.3,0,0.1,0,0,0.4,110);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Brussels sprouts',0,0,0.3,0,0.1,0,0,0.4,104);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Cabbage',0,0,0.3,0,0.1,0,0,0.4,119);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Lettuce',0,0,0.3,0,0.1,0,0,0.4,150);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Cauliflower',0,0,0.3,0,0.1,0,0,0.4,85);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Collard',0,0,0.3,0,0.1,0,0,0.4,118);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Kale',0,0,0.3,0,0.1,0,0,0.4,124);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Kohlrabi',0,0,0.3,0,0.1,0,0,0.4,85);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Napa cabbage',0,0,0.3,0,0.1,0,0,0.4,119);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Rape',0,0,0.3,0,0.1,0,0,0.4,76);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Rutabaga',0,0,0.3,0,0.1,0,0,0.4,150);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Oranges',-0.1,0,0.3,0,0.1,0,0,0.3,154);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Limes',-0.1,0,0.3,0,0.1,0,0,0.3,67);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Lemons',-0.1,0,0.3,0,0.1,0,0,0.3,100);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Bananas',0,0,0.3,0.1,0.3,0.1,0,0.8,118);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Apples',0,0,0.2,0,0.1,0,0,0.3,132);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Pears',0,0,0.2,0,0.1,0,0,0.3,166);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Grapes',0,0,0.7,0,0.2,0.2,0,1.1,138);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Strawberries',0,0,0.7,0,0.2,0.2,0,1.1,144);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Blackberries',0,0,0.7,0,0.2,0.2,0,1.1,144);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Blueberries',0,0,0.7,0,0.2,0.2,0,1.1,144);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Raspberries',0,0,0.7,0,0.2,0.2,0,1.1,144);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Kiwi',0,0,0.7,0,0.2,0.2,0,1.1,148);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Wine',-0.1,0,0.6,0.1,0.1,0.7,0,1.4,148);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Pineapple',0.1,0,0.4,0,0.2,0,0,0.7,165);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Mangoes',0.1,0,0.4,0,0.2,0,0,0.7,140);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Watermelon',0.1,0,0.4,0,0.2,0,0,0.7,154);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Honeydew',0.1,0,0.4,0,0.2,0,0,0.7,165);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Cantaloupe',0.1,0,0.4,0,0.2,0,0,0.7,165);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Avocado',0.1,0,0.4,0,0.2,0,0,0.7,201);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Coffee',3.7,0,10.4,0.6,0.1,1.6,0.1,16.5,237);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Dark Chocolate',14.3,0,3.7,0.2,0.1,0.4,0,18.7,25);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Beef',16.3,1.9,39.4,1.3,0.3,0.2,0.2,59.6,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Lamb',0.5,2.4,19.5,1.1,0.5,0.3,0.2,24.5,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Mutton',0.5,2.4,19.5,1.1,0.5,0.3,0.2,24.5,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Pig',1.5,2.9,1.7,0.3,0.3,0.3,0.2,7.2,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Bacon',1.5,2.9,1.7,0.3,0.3,0.3,0.2,7.2,38);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Pork Chops',1.5,2.9,1.7,0.3,0.3,0.3,0.2,7.2,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Pork Loin',1.5,2.9,1.7,0.3,0.3,0.3,0.2,7.2,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Chicken',2.5,1.8,0.7,0.4,0.3,0.2,0.2,6.1,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Turkey',2.5,1.8,0.7,0.4,0.3,0.2,0.2,6.1,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Milk',0.5,0.2,1.5,0.1,0.1,0.1,0.3,2.8,240);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Cheese',4.5,2.3,13.1,0.7,0.1,0.2,0.3,21.2,30);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Eggs',0.7,2.2,1.3,0,0.1,0.2,0,4.5,38);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Fish',0.5,0.8,3.6,0,0.1,0.1,0,5.1,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Salmon',0.5,0.8,3.6,0,0.1,0.1,0,5.1,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Tilapia',0.5,0.8,3.6,0,0.1,0.1,0,5.1,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Sea Bass',0.5,0.8,3.6,0,0.1,0.1,0,5.1,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Mahi mahi',0.5,0.8,3.6,0,0.1,0.1,0,5.1,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Catfish',0.5,0.8,3.6,0,0.1,0.1,0,5.1,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Crab',0.5,0.8,3.6,0,0.1,0.1,0,5.1,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Lobster',0.5,0.8,3.6,0,0.1,0.1,0,5.1,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Oysters',0.5,0.8,3.6,0,0.1,0.1,0,5.1,56);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Clams',0.5,0.8,3.6,0,0.1,0.1,0,5.1,85);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Cod',0.5,0.8,3.6,0,0.1,0.1,0,5.1,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Tuna',0.5,0.8,3.6,0,0.1,0.1,0,5.1,112);
INSERT INTO food_production(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packaging,Retail,Total_emissions,Serving_Size) VALUES ('Shrimps',0.2,2.5,8.4,0,0.2,0.3,0.2,11.8,112);
