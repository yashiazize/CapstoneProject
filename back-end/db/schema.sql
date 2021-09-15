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
    zip_code VARCHAR(5),
    availability TEXT 
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY, 
    chef_id INT REFERENCES users (id) NOT NULL, 
    user_id INT REFERENCES users (id) NOT NULL, 
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

CREATE TABLE availability (
    chef_id INT REFERENCES users (id) NOT NULL,
    day TEXT,
    time TIME NOT NULL,
    is_booked BOOLEAN DEFAULT NULL,
    booked_by INT REFERENCES users (id)
);
