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
    availability TEXT,
    -- availability_id INT REFERENCES availability (id) NOT NULL,  
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
    chef_id INT REFERENCES users (id) NOT NULL,
    rating NUMERIC NOT NULL CHECK (rating >=0 AND rating <= 5), 
    -- booking_id INT REFERENCES bookings (id) NOT NULL
);

DROP TABLE IF EXISTS availability;

CREATE TABLE availability (
    id SERIAL PRIMARY KEY,
    chef_id INT REFERENCES users (id) NOT NULL,
    sunday TEXT DEFAULT NULL,
    monday TEXT DEFAULT NULL,
    tuesday TEXT DEFAULT NULL,
    wednesday TEXT DEFAULT NULL,
    thursday TEXT DEFAULT NULL,
    friday TEXT DEFAULT NULL,
    saturday TEXT DEFAULT NULL,
    -- might need to move is_booked and booked_by to the bookings table
    time TIME DEFAULT NULL,
    is_booked BOOLEAN DEFAULT NULL,
    booked_by INT REFERENCES users (id)
);

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