\c chef_app_dev;

INSERT INTO users (
   uid, email, name, is_chef, cuisine, zip_code, availability)
VALUES 
    ('A7n839','chef_boyardee@gmail.com', 'Chef Boyardee', true, 'Italian', 10001, 'Monday, Tuesday'),
    ('B9op38', 'juliaChild23@yahoo.com', 'Julia Child', true, 'French', 23403, 'Wednesday, Thursday'),
    ('C123rt', 'lesliemann@gmail.com', 'Leslie Mann', false, NULL , NULL, NUll), 
    ('D456gh','morimoto4545@gmail.com', 'Masaharu Morimoto', true, 'Japanese', 13042, 'Friday, Sunday'),
    ('E789fv', 'butter@gmail.com', 'Paula Dean', true, 'Southern', 30144, 'Saturday, Sunday'),
    ('F543sw', 'vicCruz89@yahoo.com', 'Victor Cruz', false, NULL, NULL, NULL);


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
        ('A7n839', 'C123rt', 'Italian', '1-2', '511 Bakers St', NULL, 'Yonkers', 'NY', 10031, '2021-09-25 5:00:00', '2021-09-25 9:00:00');
        -- ('B9op38', 'E789fv', 'French', 'Sept 1, 2021', '19:00:00', '21:00:00'),
        -- ('D456gh', 'C123rt', 'Asian', 'March 8 , 2021', '18:00:00', '22:00:00' );
        -- YYYY-MM-DD hh:mm:ss[.nnn]

INSERT INTO availability (
    chef_id, sunday, monday, tuesday, wednesday, thursday, friday, saturday, time, is_booked, booked_by
)        
VALUES 
('A7n839', NULL,'10am - 3pm','10am - 3pm', NULL, NULL, NULL, NULL, NULL, false, 'B9op38'),
('B9op38', NULL, NULL,'10am - 3pm','10am - 3pm',NULL, NULL, NULL, NULL, false, 'D456gh'),
('D456gh', '10am - 3pm', NULL, NULL, NULL, NULL, '10am - 3pm', NULL, NULL, true, 'C123rt'),
('E789fv', '10am - 3pm', NULL, NULL, NULL, NULL, NULL,'10am - 3pm',  NULL, false, 'C123rt');

-- Populate the Interval table with every interval you're going to have in your calendar. 