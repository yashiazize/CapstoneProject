\c chef_app_dev;

INSERT INTO users (
    id, email, first_name, last_name, is_chef, cuisine, zip_code, availability)
VALUES 
    ('ahdjw82iks', 'chef_boyardee@gmail.com', 'Chef', 'Boyardee', true, 'Italian', 10001, 'Monday, Tuesday'),
    ('bsujdyh822', 'juliaChild23@yahoo.com', 'Julia', 'Child', true, 'French', 23403, 'Wednesday, Thursday'),
    ('chgwq72ijd', 'lesliemann@gmail.com', 'Leslie', 'Mann', false, NULL , NULL, NULL),
    ('gui09cytcj', 'morimoto4545@gmail.com', 'Masaharu', 'Morimoto', true, 'Japanese', 13042, 'Friday, Sunday'),
    ('byu45hfj92', 'butter@gmail.com', 'Paula',  'Dean', true, 'Southern', 30144, 'Saturday, Sunday'),
    ('i87gfde45g', 'vicCruz89@yahoo.com', 'Victor', 'Cruz', false, NULL, NULL, NULL);


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
       
        -- ('bsujdyh822', 'byu45hfj92', 'French', 'Sept 1, 2021', '19:00:00', '21:00:00'),
        -- ('gui09cytcj', 'chgwq72ijd', 'Asian', 'March 8 , 2021', '18:00:00', '22:00:00' );
        -- YYYY-MM-DD hh:mm:ss[.nnn]

INSERT INTO availability (
    chef_id, sunday, monday, tuesday, wednesday, thursday, friday, saturday, is_booked, booked_by
)        
VALUES 
('ahdjw82iks', NULL,'10am - 3pm','10am - 3pm', NULL, NULL, NULL, NULL, false, 'bsujdyh822'),
('bsujdyh822', NULL, NULL,'10am - 3pm','10am - 3pm',NULL, NULL, NULL, false, 'gui09cytcj'),
('gui09cytcj', '10am - 3pm', NULL, NULL, NULL, NULL, '10am - 3pm', NULL, true, 'chgwq72ijd'),
('byu45hfj92', '10am - 3pm', NULL, NULL, NULL, NULL, NULL,'10am - 3pm', false,'chgwq72ijd');

-- Populate the Interval table with every interval you're going to have in your calendar. 