CREATE DATABASE IF NOT EXISTS recipe_site;

USE recipe_site;

CREATE TABLE ingredients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO ingredients (name) VALUES
('Salt'),
('Pepper'),
('Garlic'),
('Olive Oil'),
('Lemon'),
('Thyme'),
('Basil'),
('Paprika'),
('Beef'),
('Chicken'),
('Pork'), 
('Buns'), 
('Barbecue Sauce'), 
('Taco Shells'); 

CREATE TABLE recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(255),
    instructions TEXT
);

INSERT INTO recipes (name, description, category, instructions) VALUES
('Beef Stew', 'A hearty stew made with tender beef chunks, vegetables, and broth.', 'Beef', 'Brown beef chunks in olive oil; Add garlic and sauté; Add thyme; Simmer for 2 hours'),
('Beef Tacos', 'Tacos filled with seasoned beef.', 'Beef', 'Cook beef with paprika and olive oil; Prepare taco shells; Fill taco shells with beef and toppings; Serve and enjoy');

INSERT INTO recipes (name, description, category, instructions) VALUES
('Chicken Spaghetti', 'Pasta dish with grilled chicken and Marinara sauce.', 'Chicken', 'Grill chicken and slice thinly; Boil pasta; Prepare marinara sauce; Mix pasta, sauce, and chicken'),
('Grilled Chicken', 'Tender grilled chicken breast seasoned with spices.', 'Chicken', 'Season chicken breasts with salt, pepper, and thyme; Grill chicken until cooked through');

INSERT INTO recipes (name, description, category, instructions) VALUES
('Pork Schnitzel', 'Breaded and fried pork cutlet.', 'Pork', 'Coat pork cutlets with breadcrumbs; Fry in olive oil until golden brown; Serve with lemon wedges'),
('Pulled Pork Sandwich', 'Slow-cooked pork, shredded and served on a bun with BBQ sauce.', 'Pork', 'Slow cook pork with BBQ seasoning for 8 hours; Shred the pork; Serve on buns with BBQ sauce');

CREATE TABLE recipe_ingredients (
    recipe_id INT,
    ingredient_id INT,
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE
);


INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(1, 1), -- Salt
(1, 3), -- Garlic
(1, 4), -- Olive Oil
(1, 6), -- Thyme
(1, 9); -- Beef

INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(2, 2), -- Pepper
(2, 4), -- Olive Oil
(2, 8), -- Paprika
(2, 9), -- Beef
(2, 14); -- Taco Shells

INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(3, 1), -- Salt
(3, 2), -- Pepper
(3, 3), -- Garlic
(3, 10); -- Chicken

INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(4, 1), -- Salt
(4, 2), -- Pepper
(4, 6), -- Thyme
(4, 10); -- Chicken

INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(5, 5), -- Lemon
(5, 6), -- Thyme
(5, 11); -- Pork

INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(6, 1), -- Salt
(6, 11), -- Pork
(6, 12), -- Buns
(6, 13); -- Barbecue Sauce