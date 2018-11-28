CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int auto_increment primary key,
    burger_name varchar(20) not null,
    devoured boolean
);