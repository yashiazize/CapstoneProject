\c chef_app_dev;

INSERT INTO users (
    id, email, img_url, bio, first_name, last_name, is_chef, cuisine)
VALUES 
    ('285cfccb-2064-4794-a51d-6ca38e6580c6', 'kiara.azize@yahoo.com', 'https://i.imgur.com/T3JSBpH.jpg', 'Graduated from Culinary Insititue and worked at restaurants owned by Tom Colicchio', 'Kiara', 'Azize', true, 'French, Japanese, & New American' ),
    ('11389417-4ab2-44d5-90f0-e717ccd887f0', 'kellanwatanbe1@gmail.com', 'https://i.imgur.com/PdJtb04.jpg', 'Up and coming Chef', 'Kellan', 'Watanabe', true, 'Japanese' ),
    ('9e517784-98d3-43a5-bd2b-1e24772671f0', 'dannypetrose@hotmail.com', 'https://i.imgur.com/Bon7zjI.jpg', 'Cooked at many restaurants', 'Danny', 'Petrose', true, 'New American, Japanese, & Mediterranean '),
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
        pricing_option,
        party_size,
        address, 
        address2, 
        city, 
        state, 
        zip_code, 
		start_event,
        end_event) 
VALUES
        ('ahdjw82iks','chgwq72ijd' , 'Birthday Party', 'Comfort - $15', '1-2', '511 Bakers St', NULL, 'Yonkers', 'NY', 10031, '2021-09-25 5:00:00', '2021-09-25 9:00:00'),
        ('ahdjw82iks','nhyt54pgtn' , 'Birthday Party', 'Fine - $70', '1-2', '511 Bakers St', NULL, 'Yonkers', 'NY', 10031, '2021-09-25 5:00:00', '2021-09-25 9:00:00'),
        ('bsujdyh822','p0ot54fdh8' , 'Birthday Party', 'Casual - $30','1-2', '511 Bakers St', NULL, 'Yonkers', 'NY', 10031, '2021-09-25 5:00:00', '2021-09-25 9:00:00');

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
('ahdjw82iks', 'p0ot54fdh8', 'Victor Cruz', 'Always delicious food! Even my picky children ate all their veggies this time.', 5),
('ahdjw82iks', 'chgwq72ijd', 'Leslie Mann', 'Discovered this app through a friend and I love it! Have not stopped using it. I lost so much pandemic weight through the meal plans!', 4),
('bsujdyh822', 'p0ot54fdh8', 'Victor Cruz', 'An OK chef', 3),
('bsujdyh822', 'chgwq72ijd', 'Leslie Mann', 'Wow! Wow! Wow! The variety of cuisines is amazing!', 4),
('hytrkew345', 'chgwq72ijd', 'Leslie Mann', 'Since becoming a Savor client my life has been to much easier!', 4),
('nhyt54pgtn', 'p0ot54fdh8', 'Victor Cruz', 'Food is always delicious! Service is impeccable', 4);
