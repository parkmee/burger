CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int auto_increment NOT NULL,
    burger_name varchar(20) NOT NULL,
    devoured boolean DEFAULT false,
    createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(id)
);