DROP DATABASE IF EXISTS chef_app_dev;
CREATE DATABASE chef_app_dev;
\c chef_app_dev;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    email VARCHAR(100) unique, 
    pw_hash TEXT NOT NULL, 
    name VARCHAR(100) NOT NULL, 
    is_chef BOOLEAN NOT NULL DEFAULT FALSE, 
    cuisine TEXT, 
    zip_code VARCHAR(5)
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY, 
    chef_id INT REFERENCES users (id), 
    user_id INT REFERENCES users (id), 
    status TEXT NOT NULL, 
    cuisine TEXT NOT NULL, 
    event_date DATE NOT NULL, 
    start_time TIME NOT NULL, 
    end_time TIME NOT NULL
);

CREATE TABLE ratings (
    rating NUMERIC NOT NULL CHECK (rating >=0 AND rating <= 5), 
    booking_id INT REFERENCES bookings (id) NOT NULL
);

