CREATE TABLE users (
	user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_auth VARCHAR(255),
    user_password VARCHAR(255),
    user_name VARCHAR(255),
    user_lastname VARCHAR (255),
    user_register DATETIME
);