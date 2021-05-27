CREATE TABLE IF NOT EXISTS mytable(
   Food_product    VARCHAR(16) NOT NULL PRIMARY KEY
  ,Land_use_change NUMERIC(4,1) NOT NULL
  ,Animal_Feed     NUMERIC(3,1) NOT NULL
  ,Farm            NUMERIC(4,1) NOT NULL
  ,Processing      NUMERIC(3,1) NOT NULL
  ,Transport       NUMERIC(3,1) NOT NULL
  ,Packging        NUMERIC(3,1) NOT NULL
  ,Retail          NUMERIC(3,1) NOT NULL
  ,Total_emissions NUMERIC(4,1) NOT NULL
);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Wheat',0.1,0,0.8,0.2,0.1,0.1,0.1,1.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Rye',0.1,0,0.8,0.2,0.1,0.1,0.1,1.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Bread',0.1,0,0.8,0.2,0.1,0.1,0.1,1.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Maize',0.3,0,0.5,0.1,0.1,0.1,0,1.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Corn',0.3,0,0.5,0.1,0.1,0.1,0,1.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Barley',0,0,0.2,0.1,0,0.5,0.3,1.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Beer',0,0,0.2,0.1,0,0.5,0.3,1.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Oatmeal',0,0,1.4,0,0.1,0.1,0,1.6);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Oats',0,0,1.4,0,0.1,0.1,0,1.6);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Rice',0,0,3.6,0.1,0.1,0.1,0.1,4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Potatoes',0,0,0.2,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Cassava',0.6,0,0.2,0,0.1,0,0,0.9);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Cane Sugar',1.2,0,0.5,0,0.8,0.1,0,2.6);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Beet Sugar',0,0,0.5,0.2,0.6,0.1,0,1.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Beans',0,0,1.1,0,0.1,0.4,0,1.6);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Lentils',0,0,1.1,0,0.1,0.4,0,1.6);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Peas',0,0,0.7,0,0.1,0,0,0.8);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Nuts',-2.1,0,2.1,0,0.1,0.1,0,0.2);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Peanuts',0.4,0,1.4,0.4,0.1,0.1,0,2.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Soymilk',0.2,0,0.1,0.2,0.1,0.1,0.3,1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Tofu',1,0,0.5,0.8,0.2,0.2,0.3,3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Soybean Oil',3.1,0,1.5,0.3,0.3,0.8,0,6);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Palm Oil',3.1,0,2.1,1.3,0.2,0.9,0,7.6);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Sunflower Oil',0.1,0,2.1,0.2,0.2,0.9,0,3.5);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Rapeseed Oil',0.2,0,2.3,0.2,0.2,0.8,0,3.7);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Olive Oil',-0.4,0,4.3,0.7,0.5,0.9,0,6);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Tomatoes',0.4,0,0.7,0,0.2,0.1,0,1.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Onions',0,0,0.2,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Leeks',0,0,0.2,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Carrots',0,0,0.2,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Sweet Potatoes',0,0,0.2,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Turnips',0,0,0.2,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Beets',0,0,0.2,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Garlic',0,0,0.2,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Radishes',0,0,0.2,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Turmeric',0,0,0.2,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Yams',0,0,0.2,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Bok Choy',0,0,0.3,0,0.1,0,0,0.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Arugula',0,0,0.3,0,0.1,0,0,0.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Broccoli',0,0,0.3,0,0.1,0,0,0.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Brussels sprouts',0,0,0.3,0,0.1,0,0,0.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Cabbage',0,0,0.3,0,0.1,0,0,0.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Cauliflower',0,0,0.3,0,0.1,0,0,0.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Collard',0,0,0.3,0,0.1,0,0,0.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Kale',0,0,0.3,0,0.1,0,0,0.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Kohlrabi',0,0,0.3,0,0.1,0,0,0.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Napa cabbage',0,0,0.3,0,0.1,0,0,0.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Rape',0,0,0.3,0,0.1,0,0,0.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Rutabaga',0,0,0.3,0,0.1,0,0,0.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Other Vegetables',0,0,0.2,0.1,0.2,0,0,0.5);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Oranges',-0.1,0,0.3,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Limes',-0.1,0,0.3,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Lemons',-0.1,0,0.3,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Grapefruit',-0.1,0,0.3,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Bananas',0,0,0.3,0.1,0.3,0.1,0,0.8);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Apples',0,0,0.2,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Pears',0,0,0.2,0,0.1,0,0,0.3);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Grapes',0,0,0.7,0,0.2,0.2,0,1.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Strawberries',0,0,0.7,0,0.2,0.2,0,1.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Blackberries',0,0,0.7,0,0.2,0.2,0,1.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Blueberries',0,0,0.7,0,0.2,0.2,0,1.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Raspberries',0,0,0.7,0,0.2,0.2,0,1.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Kiwi',0,0,0.7,0,0.2,0.2,0,1.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Wine',-0.1,0,0.6,0.1,0.1,0.7,0,1.4);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Pineapple',0.1,0,0.4,0,0.2,0,0,0.7);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Mangoes',0.1,0,0.4,0,0.2,0,0,0.7);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Watermelon',0.1,0,0.4,0,0.2,0,0,0.7);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Honeydew',0.1,0,0.4,0,0.2,0,0,0.7);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Cantelope',0.1,0,0.4,0,0.2,0,0,0.7);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Tomatoes',0.1,0,0.4,0,0.2,0,0,0.7);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Avocado',0.1,0,0.4,0,0.2,0,0,0.7);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Coffee',3.7,0,10.4,0.6,0.1,1.6,0.1,16.5);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Dark Chocolate',14.3,0,3.7,0.2,0.1,0.4,0,18.7);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Beef',16.3,1.9,39.4,1.3,0.3,0.2,0.2,59.6);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Lamb',0.5,2.4,19.5,1.1,0.5,0.3,0.2,24.5);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Mutton',0.5,2.4,19.5,1.1,0.5,0.3,0.2,24.5);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Pig',1.5,2.9,1.7,0.3,0.3,0.3,0.2,7.2);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Bacon',1.5,2.9,1.7,0.3,0.3,0.3,0.2,7.2);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Pork Chops',1.5,2.9,1.7,0.3,0.3,0.3,0.2,7.2);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Pork Loin',1.5,2.9,1.7,0.3,0.3,0.3,0.2,7.2);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Chicken',2.5,1.8,0.7,0.4,0.3,0.2,0.2,6.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Turkey',2.5,1.8,0.7,0.4,0.3,0.2,0.2,6.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Milk',0.5,0.2,1.5,0.1,0.1,0.1,0.3,2.8);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Cheese',4.5,2.3,13.1,0.7,0.1,0.2,0.3,21.2);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Eggs',0.7,2.2,1.3,0,0.1,0.2,0,4.5);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Fish',0.5,0.8,3.6,0,0.1,0.1,0,5.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Salmon',0.5,0.8,3.6,0,0.1,0.1,0,5.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Tilapia',0.5,0.8,3.6,0,0.1,0.1,0,5.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Sea Bass',0.5,0.8,3.6,0,0.1,0.1,0,5.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Mahi mahi',0.5,0.8,3.6,0,0.1,0.1,0,5.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Catfish',0.5,0.8,3.6,0,0.1,0.1,0,5.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Crab',0.5,0.8,3.6,0,0.1,0.1,0,5.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Lobster',0.5,0.8,3.6,0,0.1,0.1,0,5.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Oysters',0.5,0.8,3.6,0,0.1,0.1,0,5.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Clams',0.5,0.8,3.6,0,0.1,0.1,0,5.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Cod',0.5,0.8,3.6,0,0.1,0.1,0,5.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Tuna',0.5,0.8,3.6,0,0.1,0.1,0,5.1);
INSERT INTO mytable(Food_product,Land_use_change,Animal_Feed,Farm,Processing,Transport,Packging,Retail,Total_emissions) VALUES ('Shrimps',0.2,2.5,8.4,0,0.2,0.3,0.2,11.8);

