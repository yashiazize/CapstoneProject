\c chef_app_dev;

INSERT INTO users (
    email, pw_hash, name, is_chef, cuisine, zip_code, availability)
VALUES 
    ('chef_boyardee@gmail.com', 'flower24', 'Chef Boyardee', true, 'Italian', 10001, 'Monday, Tuesday'),
    ('juliaChild23@yahoo.com', 'biscuits001', 'Julia Child', true, 'French', 23403, 'Wednesday, Thursday'),
    ('lesliemann@gmail.com', 'foodIsYummy1', 'Leslie Mann', false, NULL , NULL, NUll), 
    ('morimoto4545@gmail.com', 'sushi11', 'Masaharu Morimoto', true, 'Japanese', 13042, 'Friday, Sunday'),
    ('butter@gmail.com', 'deepFried1', 'Paula Dean', true, 'Southern', 30144, 'Saturday, Sunday'),
    ('vicCruz89@yahoo.com', 'football88', 'Victor Cruz', false, NULL, NULL, NULL);


INSERT INTO bookings (
    		chef_id,
            user_id,
		-- status,
		cuisine,
        party_size,
        address, 
        address2, 
        city, 
        state, 
        zip_code, 
		start_event,
        end_event) 
VALUES
        (1, 3, 'Italian', '1-2', '511 Bakers St', NULL, 'Yonkers', 'NY', 10031, '2021-09-25 5:00:00', '2021-09-25 9:00:00');
        -- (2, 5, 'French', 'Sept 1, 2021', '19:00:00', '21:00:00'),
        -- (4, 3, 'Asian', 'March 8 , 2021', '18:00:00', '22:00:00' ),
        -- YYYY-MM-DD hh:mm:ss[.nnn]

-- INSERT INTO availability (
--     chef_id, sunday, monday, tuesday, wednesday, thursday, friday, saturday, time, is_booked, booked_by
-- )        
-- VALUES 
-- (1, NULL,'10am - 3pm','10am - 3pm', NULL, NULL, NULL, NULL, NULL, false, 2),
-- (2, NULL, NULL,'10am - 3pm','10am - 3pm',NULL, NULL, NULL, NULL, false, 4),
-- (4, '10am - 3pm', NULL, NULL, NULL, NULL, '10am - 3pm', NULL, NULL, true, 3),
-- (5, '10am - 3pm', NULL, NULL, NULL, NULL, NULL,'10am - 3pm',  NULL, false, 3);

INSERT INTO ratings (chef_id, booking_id, user_id, rating)
VALUES
(1, 7, 3, 1),
(2, 8, 5, 1),
(4, 9, 5, 1);

