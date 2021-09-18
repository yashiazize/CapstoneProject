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

DROP TABLE IF EXISTS bookings;

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

DROP TABLE IF EXISTS ratings;

CREATE TABLE ratings (
    rating NUMERIC NOT NULL CHECK (rating >=0 AND rating <= 5), 
    booking_id INT REFERENCES bookings (id) NOT NULL
);

DROP TABLE IF EXISTS availability;

CREATE TABLE availability (
    chef_id INT REFERENCES users (id) NOT NULL,
    sunday TEXT DEFAULT NULL,
    monday TEXT DEFAULT NULL,
    tuesday TEXT DEFAULT NULL,
    wednesday TEXT DEFAULT NULL,
    thursday TEXT DEFAULT NULL,
    friday TEXT DEFAULT NULL,
    saturday TEXT DEFAULT NULL,
    time TIME DEFAULT NULL,
    is_booked BOOLEAN DEFAULT NULL,
    booked_by INT REFERENCES users (id)
);
