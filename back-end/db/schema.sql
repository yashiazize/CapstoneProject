DROP DATABASE IF EXISTS chef_app_dev;
CREATE DATABASE chef_app_dev;
\c chef_app_dev;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE,
    email VARCHAR(100) UNIQUE, 
    first_name VARCHAR(100) NOT NULL, 
    last_name VARCHAR(100) NOT NULL, 
    is_chef BOOLEAN DEFAULT FALSE, 
    cuisine TEXT, 
    availability TEXT
    -- availability_id INT REFERENCES availability (id) NOT NULL,  
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
    review TEXT NOT NULL,
    rating INT NOT NULL CHECK (rating >=0 AND rating <= 5) 
    -- booking_id INT REFERENCES bookings(id)
);

-- DROP TABLE IF EXISTS availability;

-- CREATE TABLE availability (
--     id SERIAL PRIMARY KEY,
--     chef_id INT REFERENCES users (id) NOT NULL,
--     sunday TEXT DEFAULT NULL,
--     monday TEXT DEFAULT NULL,
--     tuesday TEXT DEFAULT NULL,
--     wednesday TEXT DEFAULT NULL,
--     thursday TEXT DEFAULT NULL,
--     friday TEXT DEFAULT NULL,
--     saturday TEXT DEFAULT NULL,
--     -- might need to move is_booked and booked_by to the bookings table
--     -- time TIME DEFAULT NULL,
--     is_booked BOOLEAN DEFAULT NULL,
--     booked_by INT REFERENCES users (id)
-- );

-- STACKOVERFLOW 
-- https://stackoverflow.com/questions/4521020/calculate-open-timeslots-given-availability-and-existing-appointments-by-day
-- Create table Availability (person_id int, interval_id int);
-- Create table Appointment (person_id int, interval_id int, appointment_desc text);

-- Create table Interval(interval_id int primary key, interval_start datetime, interval_end datetime)

-- QUERY FOR AN OPENING
-- Select person_id, interval_id from Availability av
-- left join Appointment ap
-- on av.person_id = ap.person_id and av.interval_id = ap.interval_id
-- where ap.interval_id is null