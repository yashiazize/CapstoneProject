\c chef_app_dev;

INSERT INTO users (
    id, email, img_url, bio, first_name, last_name, is_chef, cuisine)
VALUES 
    ('ahdjw82iks','chef_boyardee@gmail.com', 'https://images.unsplash.com/photo-1576064535185-9f6e3f24b63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'I am an Italian-American chef who set up my own packaged food business named Chef Boyardee. Began my career as a kitchen helper, worked hard to eventually become the head chef of the Plaza Hotel in New York City.', 'Ettore', 'Boiardi', true, 'Italian'),
    ('bsujdyh822','juliaChild23@yahoo.com', 'https://images.unsplash.com/photo-1576064535185-9f6e3f24b63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'I am a cultural phenomenon who is the face of French cooking in America. I introduced Americans to culinary excellence but to fine dining as well. I made the drudgery and labour within the kitchen seem effortless and easy.' ,'Julia', 'Child', true, 'French' ),
    ('chgwq72ijd','lesliemann@gmail.com', NULL, NULL, 'Leslie', 'Mann', false, NULL),
    ('hytrkew345', 'morimoto4545@gmail.com', 'https://images.unsplash.com/photo-1576064535185-9f6e3f24b63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'Japanese chef who became famous for my appearances on the Food Networks program Iron Chef. I started out as an aspiring athlete from a poor family, turning to cooking after a severe injury. But once I set my heart on becoming a chef, it seemed like nothing could stand in my way.' ,'Masaharu', 'Morimoto', true, 'Japanese'),
    ('nhyt54pgtn', 'butter@gmail.com', 'https://images.unsplash.com/photo-1576064535185-9f6e3f24b63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'An American TV personality, cooking show host, author of numerous cookbooks and owner of various restaurants. I began my cooking career pretty late in my life with a catering service, but soon became popular with my southern cooking.', 'Paula', 'Dean', true, 'Southern'),
    ('p0ot54fdh8', 'vicCruz89@yahoo.com', NULL, NULL, 'Victor', 'Cruz', false, NULL);

INSERT INTO bookings (
    	chef_id,
        user_id,
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
        ('ahdjw82iks','chgwq72ijd' , 'Birthday Party', '1-2', '511 Bakers St', NULL, 'Yonkers', 'NY', 10031, '2021-09-25 5:00:00', '2021-09-25 9:00:00'),
        ('ahdjw82iks','nhyt54pgtn' , 'Birthday Party', '1-2', '511 Bakers St', NULL, 'Yonkers', 'NY', 10031, '2021-09-25 5:00:00', '2021-09-25 9:00:00'),
        ('bsujdyh822','p0ot54fdh8' , 'Birthday Party', '1-2', '511 Bakers St', NULL, 'Yonkers', 'NY', 10031, '2021-09-25 5:00:00', '2021-09-25 9:00:00');

INSERT INTO availability (
    chef_id, sunday, monday, tuesday, wednesday, thursday, friday, saturday, is_booked, booked_by
)        
VALUES 
('ahdjw82iks', NULL,'10am - 3pm','10am - 3pm', NULL, NULL, NULL, NULL, false, 'bsujdyh822');
-- ('bsujdyh822', NULL, NULL,'10am - 3pm','10am - 3pm', NULL, NULL, NULL, false, 'hytrkew345'),
-- ('hytrkew345', '10am - 3pm', NULL, NULL, NULL, NULL, '10am - 3pm', NULL,  true, 'chgwq72ijd'),
-- ('nhyt54pgtn', '10am - 3pm', NULL, NULL,  NULL, NULL,'10am - 3pm',  NULL, false, 'chgwq72ijd');

INSERT INTO ratings (chef_id, user_id, name, review, rating)
VALUES
('ahdjw82iks', 'p0ot54fdh8', 'Victor Cruz', 'Chef Boiardi creates delicious food! Even my picky children ate all their veggies this time.', 5),
('ahdjw82iks', 'chgwq72ijd', 'Leslie Mann', 'Discovered this app through a friend and I love it! Have not stopped booking Ched Boiardi. He is my personal chef and is helping me achieve my weight loss goals!', 4),
('bsujdyh822', 'p0ot54fdh8', 'Victor Cruz', 'Chef Julia Child is a good chef', 3),
('bsujdyh822', 'chgwq72ijd', 'Leslie Mann', 'Chef Julia Child had made a variety of foods.', 4),
('hytrkew345', 'chgwq72ijd', 'Leslie Mann', 'This app and ChefMasaharu Morimoto have made my life easier!', 4),
('nhyt54pgtn', 'p0ot54fdh8', 'Victor Cruz', 'Contrary to popular belief Chef Paula Dean does not use that much butter. Food is always delicious!', 4);
