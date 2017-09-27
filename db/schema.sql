DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
id int AUTO_INCREMENT,
burger_name varchar(50) NOT NULL,
devoured BOOLEAN default false,
PRIMARY KEY (id),
date TIMESTAMP);

INSERT INTO burgers(burger_name) VALUES ('Macho Burger');
INSERT INTO burgers(burger_name) VALUES ('Quiona Vegetarian Burger');
INSERT INTO burgers(burger_name) VALUES ('Texas Bacon Burger');
INSERT INTO burgers(burger_name) VALUES ('Double Cheeseburger');
INSERT INTO burgers(burger_name) VALUES ('Big Mac Hamburger');
