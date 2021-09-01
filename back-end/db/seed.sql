\c chef_app_dev;

INSERT INTO users (
    email, pw_hash, name, is_chef, cuisine, zip_code)
VALUES 
    ('chef_boyardee@gmail.com', 'flower24', 'Chef Boyardee', true, 'Italian', 10001),
    ('juliaChild23@yahoo.com', 'biscuits001', 'Julia Child', true, 'French', 23403),
    ('lesliemann@gmail.com', 'foodIsYummy1', 'Leslie Mann', false, NULL , NULL), 
    ('morimoto4545@gmail.com', 'sushi11', 'Masaharu Morimoto', true, 'Japanese', 13042),
    ('vicCruz89@yahoo.com', 'football88', 'Victor Cruz', false, NULL, NULL);


INSERT INTO bookings (
    		chef_id,
            user_id,
		status,
		cuisine,
		event_date,
		start_time,
		end_time) 
VALUES
        (1, 3, 'pending', 'Italian', 'Dec 31, 2021', '20:00:00', '03:00:00' ),
        (2, 5, 'accepted', 'French', 'Sept 1, 2021', '19:00:00', '21:00:00'),
        (4, 3, 'rejected', 'Asian', 'March 8 , 2021', '18:00:00', '22:00:00' ),
        (4, 5, 'pending', 'Soul food', 'Nov 25, 2021', '11:00:00', '17:00:00');