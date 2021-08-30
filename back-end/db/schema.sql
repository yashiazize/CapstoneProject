DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    email VARCHAR(100) unique, 
    pw_hash TEXT NOT NULL, 
    name VARCHAR(100) NOT NULL, 
    is_chef BOOLEAN NOT NULL DEFAULT FALSE, 
    cuisine TEXT NOT NULL, 
    zip_code VARCHAR(5) NOT NULL, 
    image INT NOT NULL
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
)

CREATE TABLE ratings (
    rating NUMERIC NOT NULL CHECK (rating >=0 AND rating <= 5), 
    booking_id INT f_key: ref (bookings.id)
)