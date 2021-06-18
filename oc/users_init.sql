CREATE TABLE users (
`user_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`username` VARCHAR(50) NOT NULL,
`password` VARCHAR(25) NOT NULL
);

CREATE TABLE users_entries (
`user_id` INT NOT NULL,
`emissions` FLOAT(24) NOT  NULL,
PRIMARY KEY(`user_id`, `emissions`)
);

INSERT INTO users (username, password)
VALUES ('jt', 'pw');

INSERT INTO users (username, password)
VALUES ('kn', 'pwd');

INSERT INTO users_entries (user_id, emissions)
VALUES (1, 3.4);

INSERT INTO users_entries (user_id, emissions)
VALUES (1, 0.6);

INSERT INTO users_entries (user_id, emissions)
VALUES (2, 2.0);

INSERT INTO users_entries (user_id, emissions)
VALUES (2, 1.5);
