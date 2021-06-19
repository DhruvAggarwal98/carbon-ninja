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
