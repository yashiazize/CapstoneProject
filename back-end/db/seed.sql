-- \c chef_app_dev;

INSERT INTO users (
    id, email, first_name, last_name, is_chef, cuisine)
VALUES 
    ('ahdjw82iks','chef_boyardee@gmail.com', 'Chef', 'Boyardee', true, 'Italian'),
    ('bsujdyh822','juliaChild23@yahoo.com', 'Julia', 'Child', true, 'French' ),
    ('chgwq72ijd','lesliemann@gmail.com', 'Leslie', 'Mann', false, NULL),
    ('hytrkew345', 'morimoto4545@gmail.com', 'Masaharu', 'Morimoto', true, 'Japanese'),
    ('nhyt54pgtn', 'butter@gmail.com', 'Paula', 'Dean', true, 'Southern'),
    ('p0ot54fdh8', 'vicCruz89@yahoo.com', 'Victor', 'Cruz', false, NULL);

INSERT INTO bookings (
    		chef_id,
            user_id,
		-- status,
		event_type,
        party_size,
        address, 
        address2, 
        city, 
        state, 
        zip_code, 
		start_event,
        end_event) 
VALUES
        ('ahdjw82iks','chgwq72ijd' , 'Birthday Party', '1-2', '511 Bakers St', NULL, 'Yonkers', 'NY', 10031, '2021-09-25 5:00:00', '2021-09-25 9:00:00');
        -- ('bsujdyh822', 5, 'French', 'Sept 1, 2021', '19:00:00', '21:00:00'),
        -- (4, 'chgwq72ijd', 'Asian', 'March 8 , 2021', '18:00:00', '22:00:00' );
        -- YYYY-MM-DD hh:mm:ss[.nnn]


INSERT INTO availability (
    chef_id, sunday, monday, tuesday, wednesday, thursday, friday, saturday, is_booked, booked_by
)        
VALUES 
('ahdjw82iks', NULL,'10am - 3pm','10am - 3pm', NULL, NULL, NULL, NULL, false, 'bsujdyh822');
-- ('bsujdyh822', NULL, NULL,'10am - 3pm','10am - 3pm', NULL, NULL, NULL, false, 'hytrkew345'),
-- ('hytrkew345', '10am - 3pm', NULL, NULL, NULL, NULL, '10am - 3pm', NULL,  true, 'chgwq72ijd'),
-- ('nhyt54pgtn', '10am - 3pm', NULL, NULL,  NULL, NULL,'10am - 3pm',  NULL, false, 'chgwq72ijd');


INSERT INTO ratings (chef_id, user_id, review, rating)
VALUES
('ahdjw82iks', 'chgwq72ijd', 'good', 3),
('ahdjw82iks', 'chgwq72ijd', 'meh', 1),
('bsujdyh822', 'chgwq72ijd', 'great', 4),
('bsujdyh822', 'chgwq72ijd', 'excellent', 5);
