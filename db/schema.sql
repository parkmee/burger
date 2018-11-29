CREATE DATABASE burgers_db;

CREATE TABLE burgers (
    id int auto_increment NOT NULL,
    burger_name varchar(20) NOT NULL,
    devoured boolean DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);