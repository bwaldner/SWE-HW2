
CREATE DATABASE HW2; 
USE HW2;     


CREATE TABLE Ingredients
(
  IngredientID INT auto_increment,
  IngredientName varchar(50) NOT NULL,
  Info varchar(500) NOT NULL,
  PRIMARY KEY (IngredientID)
);

CREATE TABLE Recipe
(
  RecipeID INT NOT NULL,
  RecipeName varchar(50) NOT NULL,
  Protein varchar(50) NOT NULL,
  PrepTime float NOT NULL,
  CookTime float NOT NULL,
  Servings int NOT NULL,
  PRIMARY KEY (RecipeID)
);

-- i created a many to many table to link recipes and ingredients
CREATE TABLE RecipeToIngredients (
    RecipeID INT,
    IngredientID INT,
    FOREIGN KEY (RecipeID) REFERENCES Recipe(RecipeID),
    FOREIGN KEY (IngredientID) REFERENCES Ingredients(IngredientID)
);

INSERT INTO Ingredients (IngredientID, IngredientName, Info) 
VALUES ('Pasta Shells', 'Main base of the dish, one lb'),
		('Baked Beans', 'Adds a filling and hearty kick, one cup'),
        ('BBQ Sauce', 'Adds a nice tang to the dish, add as needed'),
        ('Butter', 'Thickens the cheese sauce, add as needed'),
        ('Powedered Cheese', 'The main base of the cheese sauce'),
		('Whole Milk', 'Adds creamy texture to cheese sauce,, one quarter of a cup'),
		('Shredded Cheese', 'Adds variety to flavor of cheese, ad as needed'),
		('Chicken Thigh', 'Soft cut of chicken soaked in BBQ sauce and cubed, then baked for 20 minutes at 400 degrees'),
		('White Bread', 'Toast in the toaster'),
        ('Tuna', 'Shred tuna with fork'),
        ('Tomato', 'Dice tomato and mix it with the tuna, put tuna mixture on toast'),
        ('Eggs', 'Crack three eggs into cup, add seasoning of your choice, scramble them and cook them on medium pan'),
        ('Flour tortillas', 'Lightly toast tortillas on pan or in oven'),
        ('Chicken Apple Sausage', 'Dice two sausage links and cook over medium heat until brown, mix them in with the eggs'),
        ('Shredded Cheese', 'Sprinkle cheese over eggs and stir until they are melted'),
        ('Salsa', 'Pour salsa over egg mixture and fill tortillas');


INSERT INTO Recipe (RecipeID, RecipeName, Protein, PrepTime, CookTime, Servings) 
VALUES (1, 'BBQ Mac and Cheese', 'Chicken', 0.15, 1.00, 6),
		(2, 'Tuna Melt', 'Tuna', 0.10, 0.05, 1),
        (3, 'Breakfast Tacos', 'Sausage', 5, 15, 3);
        
INSERT INTO RecipeToIngredients (RecipeID, IngredientID) 
VALUES (1, 01),  -- Pasta Shells
		(1, 02),  -- Baked Bean
        (1, 03),  -- BBQ Sauce
        (1, 04),  -- Butter
        (1, 05),  -- Powedered Cheese
		(1, 06),  -- Whole Milk
		(1, 07),  -- Shredded Cheese
		(1, 08),  -- Chicken Thigh
        (2, 9), -- White Bread
		(2, 10), -- Tuna
		(2, 11), -- Tomato
		(3, 12), -- Eggs
		(3, 13), -- Flour tortillas
		(3, 14), -- Chicken Apple Sausage
		(3, 15); -- Shredded Cheese
        (3, 16); --Salsa

