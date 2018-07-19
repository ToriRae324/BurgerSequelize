DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOL DEFAULT FALSE
);