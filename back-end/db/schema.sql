-- DROP DATABASE IF EXISTS chef_app_dev;
-- CREATE DATABASE chef_app_dev;
-- \c chef_app_dev;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE,
    email VARCHAR(100) UNIQUE, 
    img_url TEXT,
    bio TEXT,
    first_name VARCHAR(100) NOT NULL, 
    last_name VARCHAR(100) NOT NULL, 
    is_chef BOOLEAN DEFAULT FALSE, 
    cuisine TEXT
);

DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY, 
    chef_id TEXT REFERENCES users (id) NOT NULL, 
    user_id TEXT REFERENCES users (id) NOT NULL, 
    event_type TEXT NOT NULL, 
    party_size TEXT NOT NULL, 
    address TEXT NOT NULL, 
    address2 TEXT, 
    city TEXT NOT NULL, 
    state TEXT NOT NULL, 
    zip_code VARCHAR(5),
    start_event TIMESTAMP,
    end_event TIMESTAMP
);

DROP TABLE IF EXISTS ratings;

CREATE TABLE ratings (
    id BIGSERIAL NOT NULL PRIMARY KEY, 
    chef_id TEXT NOT NULL REFERENCES users (id), 
    user_id TEXT NOT NULL REFERENCES users (id),
    name VARCHAR(100) NOT NULL, 
    review TEXT NOT NULL,
    rating INT NOT NULL CHECK (rating >=0 AND rating <= 5) 
);

DROP TABLE IF EXISTS availability;

CREATE TABLE availability (
    id SERIAL PRIMARY KEY,
    chef_id TEXT REFERENCES users (id) NOT NULL,
    sunday TEXT DEFAULT NULL,
    monday TEXT DEFAULT NULL,
    tuesday TEXT DEFAULT NULL,
    wednesday TEXT DEFAULT NULL,
    thursday TEXT DEFAULT NULL,
    friday TEXT DEFAULT NULL,
    saturday TEXT DEFAULT NULL,
    is_booked BOOLEAN DEFAULT NULL,
    booked_by TEXT REFERENCES users (id)
);
