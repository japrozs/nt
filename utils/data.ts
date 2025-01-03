export const POPULAR_DESTINATIONS: {
    img_url: string;
    city: string;
    name: string;
    description: string;
    object_bottom?: boolean;
}[] = [
    {
        img_url: "/img/ammy-singh.jpg",
        city: "Amritsar",
        name: "Golden Temple",
        description:
            "Golden temple is a sacred place to the Sikhs, who believe in oneness of all beings and the equality of everyone.",
    },
    {
        img_url: "/img/navnidh.jpg",
        city: "Agra",
        name: "Taj Mahal",
        description:
            "A white marble mausoleum built by Mughal emperor Shah Jahan in memory of his favourite wife",
        object_bottom: true,
    },
    {
        img_url: "/img/axp-photography.jpg",
        city: "jaipur",
        name: "Rajasthan",
        description:
            "Visit the most famous and precious UNESCO world heritage sites, forts and monuments of the subcontinent",
    },
];

export const POPULAR_PACKAGES: {
    img_url: string;
    name: string;
    duration: string;
    slug: string;
    tour: any;
}[] = [
    {
        img_url:
            "https://a-z-animals.com/media/2021/05/iStock-1420676204-1024x680.jpg",
        name: "Big Cat of India: Ranthambore, Gir and Bera",
        duration: "13 Nights • 14 Days",
        slug: "big-cat-of-india-ranthambore-gir-and-bera",
        tour: {
            location: "Ranthambore, Gir and Bera",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Ranthambore National Park, located in Rajasthan, is one of India's most renowned wildlife destinations, famous for its population of Bengal tigers. The park’s diverse landscapes, featuring dry deciduous forests, lakes, and ruins, create an exciting environment for thrilling safaris. In addition to tigers, wildlife enthusiasts can spot leopards, sloth bears, and numerous bird species. The park is also home to the ancient Ranthambore Fort, which offers a blend of history and natural beauty, making it a must-visit for adventure and heritage lovers alike.\nFor a more intimate wildlife experience, Gir National Park in Gujarat and Bera in Rajasthan provide unique opportunities to encounter rare species. Gir is the last sanctuary of the Asiatic lion, offering visitors the chance to witness these majestic creatures in the wild, alongside leopards and over 300 bird species. Bera, located near the Aravalli Hills, is known for its population of tigers and leopards, with rocky landscapes and tranquil lakes adding to its charm. Both destinations are off-the-beaten-path gems, offering an unforgettable blend of rugged wilderness and wildlife encounters.",
            destinations_covered: [
                {
                    name: "Ranthambore National Park",
                    description:
                        "Ranthambore, located in Rajasthan, is one of India's largest and most famous wildlife reserves. Known for its diverse wildlife, it is particularly renowned for its population of Bengal tigers. The park offers an exciting opportunity for wildlife enthusiasts to experience thrilling safari rides through dry deciduous forests, spotting tigers, leopards, and various other species.",
                },
                {
                    name: "Jaipur",
                    description:
                        'Jaipur, the capital of Rajasthan, is a vibrant city known for its royal heritage, stunning architecture, and rich history. Often referred to as the "Pink City" due to its distinctive pink-hued buildings, Jaipur is home to iconic landmarks like the Amber Fort, Hawa Mahal, and the City Palace. With its bustling bazaars, traditional Rajasthani cuisine, and rich cultural heritage.',
                },
                {
                    name: "Bera",
                    description:
                        "Bera, in Rajasthan, is a hidden gem for tiger safaris. Located near the foothills of the Aravalli range, Bera is renowned for its population of wild tigers, as well as leopards, crocodiles, and various bird species. The serene landscapes of Bera, with its rocky terrain and picturesque lakes, make it a perfect off-the-beaten-path destination for wildlife enthusiasts seeking an intimate experience with nature. ",
                },
                {
                    name: "Sasan Gir National Park",
                    description:
                        "Sasan Gir National Park, located in Gujarat, is the last refuge of the endangered Asiatic lion, making it a premier wildlife destination in India. Covering over 1,400 square kilometers, the park features diverse landscapes, including dry deciduous forests, grasslands, and wetlands, which support a variety of wildlife. In addition to Asiatic lions, visitors can spot leopards, wild boars, crocodiles, and a rich array of bird species.",
                },
                {
                    name: "Ahmedabad",
                    description:
                        "Ahmedabad, the largest city in Gujarat, is a vibrant blend of history, culture, and modernity. Known for its rich heritage, the city is home to stunning architectural marvels such as the Sidi Saiyyed Mosque, the Sabarmati Ashram, and the intricate step-wells of Adalaj. ",
                },
            ],
            itinerary_outline: [
                {
                    title: "Arrive in New Delhi (by flight)",
                    description:
                        "Arrive at New Delhi international airport where a Noble Travels representative will be present to greet and assist you on your blissful journey and help you transfer to the hotel. All the relevant details specific to the tour will be explained by our representative. Handover all the travel-related documents and get assisted for your journey and check-in at the hotel. \nOvernight stay at the hotel in New Delhi.\n",
                },
                {
                    title: "New Delhi – Ranthambhore (by day train)",
                    description:
                        "After an early breakfast, you will be transferred to the station to board a train at 0740hrs. A Noble Travels representative will assist you in boarding the train along with your baggage. With making you comfortable on your designated berth, basic amenities like water, and some fruits would be provided to you with our representative advising you on the journey, and where to get off. The train attendant will assist you in de-boarding at 1240hrs at Sawai Madhopur railway station where our representative will receive you at the railway station along with your name card and will assist you with your baggage and transfer to the resort.\nCheck-in at the resort.\nAfter lunch, proceed for the afternoon jeep safari. Dinner and overnight stay will be at the resort.",
                },
                {
                    title: "Ranthambore National Park",
                    description:
                        "Head for the morning & afternoon jeep safaris in the park. Your meals would be arranged at the resort and your overnight stay will be at the hotel in Ranthambhore.\nRanthambore National Park stands as a photographer’s delight which provides you all the angles, lighting, backdrop, and many frames of different kinds. A rich place for both wildlife and birdlife, Ranthambhore is home to around 300 species of birds. Some interesting resident species of birds that a birdwatcher can expect at this park are large Cormorant, Painted Spurfowl, Bronzed winged Jacana, Sandpiper, Kingfisher, Nightjar, Painted Sandgrouse, Great horned owl, and many more with regular winter migrants which come from their nesting ground north of Himalayas to Ranthambore and the surrounding areas. ",
                },
                {
                    title: "Ranthambhore National Park",
                    description:
                        "Head for the morning & afternoon jeep safaris in the park. Your all-day meals would be arranged at the resort.\nRanthambore is spread across an area of 400 sq. km that encompasses rocky hill crests which descend to open valleys between the Aravalli and Vindhya ranges, dotted with water pools and fruit trees. This park gets its name from the thousand-year-old fortress, which looms above the forest. Well known for the diurnal activity of tigers, Ranthambhore is a very special and unusual area where a natural present meets a historical past. The elusive leopard and tigers found in this reserve make it a good chance for tourists to see tigers during the safaris.\n",
                },
                {
                    title: "Ranthambore - Jaipur (By Road, 180kms / 3-hour drive)",
                    description:
                        "After a morning jeep safari in the national park, drive to Jaipur which is 180 km and a 3 hrs drive. On arrival, check-in at the hotel.\nThe rest of the day is free for leisure activities.\nJaipur – The capital of Rajasthan and famously addressed as the Pink city – the color associated with hospitality in the Rajput culture. This Pink City of fairy tale palaces, rugged fortresses perched on barren hills and broad avenues, is picturesque. The first planned city of its time, Jaipur is encircled by a formidable wall.\nOvernight stay in Jaipur.\n",
                },
                {
                    title: "Jaipur to Bera (By Road, 390 km / 7-hour drive)",
                    description:
                        "In the morning after breakfast, drive to Bera 390 km / 7 hrs drive through the countryside. On arrival, check into Castel Bera or camp.\nBera – Situated in Rajasthan, Bera is located quite near to the Jawai Dam. It is well-known for its magnificent sightings of Leopards. The experience is unique as it’s not a forest; instead, you will sight leopards near this sandy village. Bera, being home to several mammals and birds is an attraction to wildlife enthusiasts to spot evasive Leopard, the mighty Bluebell, the Crocodile, the ever so mischievous Hyena, the graceful Pelican, the Greylag Goose, Robin Accentor, Demoiselle Crane, Bar-headed Goose to name a few amongst the others.\nA late evening safari will be just around as you simply share the land of leopards. Dinner and overnight stay in hotel.\n",
                },
                {
                    title: "Bera (morning and noon safari)",
                    description:
                        "After breakfast, experience the golden mornings of Rajasthan blended perfectly with the wildlife sightings. Through the arrangements of morning and afternoon safaris, one can also get a chance to see the village life in Rajasthan. All meals at the hotel.\nApart from leopards, another magnificent wildlife that Bera is famous for is Crocodiles. What actors are they; 15 feet giants can fool anyone with their sleepy lying illusions. They could be as active as in the hunting process even if they are doing nothing. They won’t move, and hence sometimes create a camouflage with the rusty muddy ground near the reservoir and we have to focus as we see them from a distance. They sunbathe for an entire day and whenever hungry, they simply dive in the lake full of fish, which makes sightings go difficult when they are in action, however they will always be visible on a sunny day lying on the shore.",
                },
                {
                    title: "Bera (morning and noon safari)",
                    description:
                        "After breakfast, experience the golden mornings of Rajasthan blended perfectly with the wildlife sightings. Through the arrangements of morning and afternoon safaris, one can also get a chance to see the village life in Rajasthan. All meals at the hotel.\nApart from leopards, another magnificent wildlife that Bera is famous for is Crocodiles. What actors are they; 15 feet giants can fool anyone with their sleepy lying illusions. They could be as active as in the hunting process even if they are doing nothing. They won’t move, and hence sometimes create a camouflage with the rusty muddy ground near the reservoir and we have to focus as we see them from a distance. They sunbathe for an entire day and whenever hungry, they simply dive in the lake full of fish, which makes sightings go difficult when they are in action, however they will always be visible on a sunny day lying on the shore.",
                },
                {
                    title: "Bera - Ahmedabad (By Road, 280 km / 5-6 hour drive)",
                    description:
                        "After a morning jeep safari to Bera, drive to Ahmedabad distanced at 280 km, with a 5 to 6 hrs drive. On arrival, check into the hotel.\nOvernight stay at the hotel in Ahmedabad.\n",
                },
                {
                    title: "Ahmedabad – Sasan Gir (By Road, 350 km / 6-7 hour drive)",
                    description:
                        "After breakfast, drive to Sasan Gir National park which is 350 km far and will take 6-7 hrs by drive. On arrival, check into the resort.\nAfter lunch at the resort, head for an afternoon safari to the national park. Dinner and overnight will be at the resort.",
                },
                {
                    title: "In Sasan Gir",
                    description:
                        "Morning and afternoon jeep safaris to the National Park followed by breakfast and lunch at the resort.\nGir – The only home in India for the Asiatic Lion, with nearly 500 in the park. The Gir National Park lies in the Gujarat peninsula in South-Western India. The terrain is rugged with low hills and the vegetation is mixed deciduous, with stands of Teak, Acacia, Jamun, Tendu, and Dhak trees, interspersed with large patches of grasslands. The trees on the hills are sparse and stunted. Within the sanctuary, there are numerous human settlements of cattle herders called Maldharis with an estimated 20,000 head of livestock (which, incidentally, forms a significant part of Lion’s diet). There are also places of Hindu worship and pilgrimage and sulphur springs at Tulsi Shyam and Kankai Mata. The edges of the park have a good population of Indian Gazelle, protected by the religious sentiments of the local people.\nDinner and overnight stay at the resort.\n",
                },
                {
                    title: "In Sasan Gir",
                    description:
                        "A new day for morning and afternoon safaris to the National Park. Grab your lunch and dinner at the resort.\nThe largest compact tract of dry deciduous forest in the country, protected as Gir National Park and Sanctuary, covers an area of 1412 sq km in the Saurashtra region of Gujarat. Gir has evolved to host a very stable ecosystem with tremendous regenerating, self-supporting and self-sustaining capacity due to its richness of biodiversity: 606 different plant species, 39 species of mammals, 37 species of reptiles, and over 300 species of birds, and more than 2,000 species of insects.\nA breeding ground for migratory birds, the avifauna of Gir includes a variety of raptors and many other significant species, including Lesser Florican, Osprey, Indian Pitta, Red-headed Vulture, etc. It also supports a variety of reptiles, including the Indian python and the Indian star tortoise, and possibly one of the highest populations of Marsh crocodiles in the country. Gir also has one of the densest concentrations of leopards in India. Gir is also a great place to see Leopards with having more than 400 inhabit this park.\nDinner and overnight at the resort.\n\n",
                },
                {
                    title: "Sasan Gir – Rajkot – New Delhi (By Road, 180 km / 3 hrs drive + Flight)",
                    description:
                        "Head for morning safari to the national park and post having lunch, drive to Rajkot airport – 180 kms/3 hrs drive, to board a flight to New Delhi at 1930 hrs and arrive New Delhi at 2110 hrs. There, you will be met at the airport and will be transferred to the hotel.\nOvernight stay at the hotel in New Delhi.\n",
                },
                {
                    title: "New Delhi - Fly back home",
                    description:
                        "The morning is free for leisure activities and later transfer to International airport to board a flight back home or to onward destination. This marks your end towards the Big Cats of India Tour itinerary.\nEnd of our services\n",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better)",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "Remaining validity in passport after Bhutan tour must be min 6 month excluding travelling month",
                "Multiple entry visa for Indian if you entering Bhutan from India and reinterring to India after Bhutan tour",
                "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
            ],
        },
    },
    {
        img_url:
            "https://www.naturesafariindia.com/wp-content/uploads/2024/02/snow-leopard-in-LehUlley-1.jpg",
        name: " Big Cat Quest – Snow Leopard",
        duration: "10 Nights • 11 Days",
        slug: "big-cat-quest-snow-leopard",
        tour: {
            location: "Ladakh",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Embark on an unforgettable journey to the rugged mountains of Leh and Ulley, home to the elusive and majestic snow leopard. This remote region, nestled in the northernmost part of India, offers the perfect blend of breathtaking landscapes and rare wildlife encounters. As you trek through the pristine wilderness of the Trans-Himalayas, you'll have the chance to witness the elusive snow leopard in its natural habitat, alongside other unique wildlife species. With expert local guides and an immersive experience in the heart of Ladakh, this tour promises a rare opportunity to connect with nature in one of the world’s most awe-inspiring ecosystems.",
            destinations_covered: [
                {
                    name: "Leh",
                    description:
                        "Leh, the capital of Ladakh, is a mesmerizing destination set amidst the stark beauty of the Himalayas and the Karakoram range. Known for its ancient monasteries, vibrant culture, and dramatic landscapes, Leh offers a perfect blend of serenity and adventure. This high-altitude town is a gateway to some of the world's most spectacular trekking and wildlife experiences, making it a must-visit for nature lovers and adventure seekers alike.",
                },
                {
                    name: "Ulley",
                    description:
                        "Ulley, a remote village in the Ladakh region, is nestled in the stunning valleys of the Trans-Himalayas, offering a pristine and tranquil setting for wildlife enthusiasts and trekkers alike. Known for its rugged landscapes, clear skies, and proximity to snow leopard habitats, Ulley is a prime destination for those seeking an authentic experience of Ladakh’s natural beauty. Its serene atmosphere and panoramic views make it an ideal base for wildlife safaris, especially for tracking the elusive snow leopard in its natural environment.",
                },
            ],
            itinerary_outline: [
                {
                    title: "ARRIVAL IN DELHI",
                    description:
                        "Today you will arrive at Delhi International Airport. You will be met and greeted by a Noble Travels representative and transferred to your hotel near Airport. Room will be ready for immediate check in upon arrival.\nOvernight in Airport hotel in Delhi.\n",
                },
                {
                    title: "DELHI – LEH",
                    description:
                        "Packed breakfast and early transfer to the airport to board flight for Leh.\nUpon Arrival at Leh Airport (11400 ft) you are met by your guide and transferred to hotel .Check into the hotel. The rest of the day is at leisure as here will be no activity on your day of arrival as it is medically mandated that undergo minimal exertion to enable you to acclimatize to the rarefied oxygen levels at this high altitude.\nLate afternoon, you may take a stroll through the peaceful village of Stok and engage with the joyous local community. Welcome Dinner with Ladakhi Folk Dances at the Stok Palace.\nOvernight in Leh hotel on full board basis.\n",
                },
                {
                    title: "LEH",
                    description:
                        "Spend the day exploring the town of Leh at a relaxed pace. Walk through the labyrinth of winding streets and quaint bazaars. Visit the Leh Palace and the white -domed Buddhist Shanti Stupa.\nLater you will visit the Snow Leopard Conservancy, here you will meet with staff from the Snow Leopard Conservancy for a briefing on the history of snow leopard conservation in Ladakh with insight given into the current threats to snow leopards and the strategy’s adopted to combat these threats.\nOvernight in Leh hotel on full board basis.\n",
                },
                {
                    title: "LEH",
                    description:
                        "Today after breakfast, set out for an extraordinary drive eastwards towards the Taglang La pass and the villages of Gya, Lhato and Meru. The drive is spectacular taking you away from the valley of the Indus, up a subsidiary valley, to an extraordinary area that marks the line where the Indian mainland collided with and drove under the Asian landmass. The scenery is dramatic and you have a chance to spot wildlife including blue sheep, golden eagles and bearded vultures. You will carry a packed lunch. On the return visit there may be time to visit the Thikse monastery and receive special blessing from the monks to ensure good sightings!\nOvernight in Leh hotel on full board basis.\n",
                },
                {
                    title: "LEH-ULLEY",
                    description:
                        "Today’s road journey of approximately three hours takes you travelling westward on the road to Kargil and Srinagar. Following the Indus River, you will pass through the small town of Nimmu – one of the most important settlements of Ladakh, where the Zanskar River meets the Indus. After a little over an hour you will head north on a road to Likir – one of Ladakh’s famous Buddhist monasteries. This is all snow leopard country. The landscape here is expansive until you turn off onto a dirt road, winding up a narrow valley, following a stream called the Ulley Chhu. Smaller valleys intersect this area and your guides will have their heads craned at all times, scanning the hillsides and skyline for any silhouettes. This is also excellent ibex country and there are few more evocative sights than a magnificently horned male ibex standing vigil on an impossibly narrow outcropping, a few thousand feet over a plunging cliff. Ulley village, west of Leh, is an area that is only recently being developed for snow leopard viewing. But it is in the centre of three interlocking valleys that support approximately 12 snow leopards according to last census.\nCheck into Snow Leopard Lodge. The Lodge is located at an altitude of about 13,000 feet. With 6 – room lodge, simply furnished with 3 bathrooms and dining and sitting rooms looking out over the valley and the surrounding hills. The setup is basic but has comfortable beds, toilets and washing facilities.\nOvernight in Ulley hotel on full board basis.\n",
                },
                {
                    title: "ULLEY",
                    description:
                        "You will be based in Ulley over five nights and the advantage of Ulley is that it is relatively free of tourism and from here you will explore three valleys, which, apart from snow leopards, are great for finding Urial, Ibex, Wolf, Fox and an array of birds that survive the harsh winter landscape. Over the days you will have the opportunity to venture into the area on foot and by 4WD vehicle, with David and his team of expert trackers. They will interact closely with the local people and use their network of local intelligence to narrow down the likely sites. In the process, there will also be plenty of opportunity for you to gain insight into the region’s folklore, customs and traditions.\nOvernight in Ulley hotel on full board basis.\n",
                },
                {
                    title: "ULLEY",
                    description:
                        "Today, embark on a thrilling wildlife adventure as we head into the snow leopard’s territory. Our expert local guides will take you on a wildlife tracking expedition, walking through remote valleys and high-altitude meadows where snow leopards are known to roam. Keep your cameras ready as you may catch a rare glimpse of this elusive predator, along with other wildlife such as Himalayan ibex, blue sheep, and a variety of bird species. The day ends with a beautiful sunset over the mountain ranges, a perfect ending to an unforgettable wildlife experience.\nOvernight in Ulley hotel on full board basis.",
                },
                {
                    title: "ULLEY",
                    description:
                        "On this day, we’ll venture into the rugged trails surrounding Ulley, offering opportunities for breathtaking treks and nature walks. Explore hidden valleys, ancient monasteries, and traditional Ladakhi villages, all while taking in the stunning views of snow-capped peaks. Whether you’re a seasoned trekker or just love being in nature, Ulley offers a range of trails that cater to all levels of adventure.\nOvernight in Ulley hotel on full board basis.",
                },
                {
                    title: "ULLEY",
                    description:
                        " known for its pristine landscapes and as a prime habitat for the elusive snow leopard. Set against the rugged backdrop of the Trans-Himalayas, Ulley offers the perfect blend of adventure and tranquility. Enjoy a scenic walk through the village, absorbing the breathtaking views of the surrounding peaks and valleys.\nOvernight in Ulley hotel on full board basis.",
                },
                {
                    title: "ULLEY-LEH",
                    description:
                        "This morning drive back to Leh (60kms/37mi – 3 hrs) via the 11th century Alchi Monastry, one of the two oldest monasteries in Ladakh.\nThe wooden sculptures, stucco images and Indo-Tibetan art are exclusive and the style is not to be found in any other monastery in Ladakh. After your visit you will continue onwards to Leh.\nCheck into Hotel Grand Dragon\nOvernight in Leh hotel on full board basis.\n",
                },
                {
                    title: "LEH-DELHI",
                    description:
                        "This morning we say goodbye to Leh and board our flight to Delhi for connecting international flight.\nEnd of our Services\n",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better)",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
            ],
        },
    },
    {
        img_url:
            "https://www.ranthamborenationalpark.com/wp-content/uploads/2020/05/featured-image11.jpg",
        name: "Big Cat Quest – Tigers and Leopards",
        duration: "8 Nights • 9 Days",
        slug: "big-cat-quest-tigers-and-leopards",
        tour: {
            location: "RANTHAMBHORE",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                'Embark on an unforgettable adventure through India’s rich wildlife and majestic history with our "Big Cats: Tigers and Leopards" tour. This exclusive journey takes you deep into the heart of Ranthambore and Jawai, where you’ll track the iconic Bengal tiger and the elusive leopard in their natural habitats. Known for their stunning landscapes and thriving wildlife, these regions offer some of the best opportunities to spot these magnificent big cats.\nBut the adventure doesn’t end with wildlife! You’ll also explore the regal cities of Jaipur and Udaipur, where history and culture unfold before your eyes. Discover the architectural wonders of Jaipur’s Amber Fort and City Palace, and soak in the royal charm of Udaipur with its serene lakes and majestic palaces. This tour perfectly blends thrilling wildlife encounters with the grandeur of Rajasthan’s rich heritage, providing you with a truly immersive experience of India’s natural beauty and royal history.',
            destinations_covered: [
                {
                    name: "RANTHAMBORE NATIONAL PARK",
                    description:
                        "Ranthambore National Park, located in Rajasthan, is one of India’s most renowned wildlife sanctuaries, famous for its population of Bengal tigers. Nestled at the foothills of the Aravalli and Vindhya mountain ranges, the park’s diverse landscapes of dry deciduous forests, lakes, and ancient ruins create a stunning backdrop for wildlife sightings. Apart from tigers, Ranthambore is home to a rich variety of flora and fauna, including leopards, sloth bears, and numerous bird species, making it a must-visit destination for wildlife enthusiasts and photographers. The iconic Ranthambore Fort, perched within the park, adds a historical touch to your safari experience.",
                },
                {
                    name: "JAWAI",
                    description:
                        'Jawai, located in the rugged landscapes of Rajasthan, is a hidden gem known for its unique leopard population and striking natural beauty. Often referred to as the "Land of Leopards," Jawai is one of the best places in India to observe these elusive big cats in their natural habitat. The area is characterized by dramatic granite hills, winding rivers, and traditional villages, offering a rare combination of wildlife, culture, and scenic beauty. Apart from leopards, Jawai is home to a variety of wildlife, including hyenas, crocodiles, and a rich birdlife. The region also holds historical significance, with ancient temples and forts scattered across the landscape, making it a perfect destination for both wildlife lovers and history enthusiasts.',
                },
                {
                    name: "JAIPUR",
                    description:
                        'Jaipur, the vibrant capital of Rajasthan, is a city steeped in royal heritage and architectural splendor. Known as the "Pink City" due to its distinctive pink-hued buildings, Jaipur boasts a rich history that dates back to the 18th century. Visitors can explore its iconic landmarks, including the majestic Amber Fort, the intricate Hawa Mahal (Palace of Winds), and the impressive City Palace, all of which reflect the grandeur of Rajasthan’s royal past. Jaipur’s bustling bazaars are perfect for shopping, offering everything from traditional handicrafts to colorful textiles. With its blend of history, culture, and vibrant atmosphere, Jaipur is a must-see destination for anyone seeking to experience the essence of Rajasthan.',
                },
                {
                    name: "UDAIPUR",
                    description:
                        'Udaipur, often referred to as the "City of Lakes," is one of Rajasthan’s most enchanting destinations, known for its serene beauty and regal heritage. Set against the backdrop of the Aravalli Hills, Udaipur is famous for its picturesque lakes, especially the iconic Lake Pichola, which is surrounded by stunning palaces, temples, and ghats. The city’s crown jewel, the City Palace, is a majestic architectural marvel offering breathtaking views of the lakes and the surrounding landscape. Udaipur also boasts a rich cultural heritage with its exquisite miniature art, vibrant festivals, and ancient temples, making it an ideal destination for those seeking both tranquility and a glimpse into royal Rajput history.',
                },
            ],
            itinerary_outline: [
                {
                    title: "JAIPUR TO RANTHAMBORE",
                    description:
                        "Pick up from Jaipur Airport and transfer to Ranthambhore (160kms/100mi – 3.5 hrs). Check into Jungle Lodge/Camp and settle in with a walk-around the property and general familiarisation. This evening an introductory talk on Tigers and Ranthambhore by camp naturalist.\nNo game drives this day.\n\nOvernight in Ranthambore hotel on a half board basis.",
                },
                {
                    title: "RANTHAMBORE",
                    description:
                        "Today we look out for the king of the Jungle. To optimize chances for seeing the tiger, we depart for a full day game drive. This drive is limited to only 4 jeeps in the park on this special permit, which allows you access across all zones of the park. You will be accompanied by your expert naturalist, driver and forest guide, Drive in the AM (depending on time of year the Park entry will vary) and return to Camp post-sunset after a 12 hour drive in the Park.\n\nBreakfast and lunch are served at designated spots within the park.\n\nOR in case due to limitation you were unable to do full day game drive, you can do Morning and evening safaris in open 4X4 jeeps. Morning 6am-10am/Evening 3-6pm Sunset)\n\nOvernight in in Ranthambore hotel on a full board basis.",
                },
                {
                    title: "RANTHAMBHORE – DASTKAR, COOKING SESSION, GAME DRIVE",
                    description:
                        "Visit the local Women’s Cooperative “Dastkar” Dastkar Ranthambhore is a non-profit organization that produces handicrafts created by women from villages around the park. Founded in 1989, this was an effort to empower and provide income to villagers on the periphery of the National park. Interact with the women, speak with them and watch them work.\n\nReturn to camp for an interactive cooking session with the camp chef.\n\nPost lunch proceed for game drive, return to camp post-sunset.\n\nOvernight in Ranthambore hotel on full board basis.",
                },
                {
                    title: "RANTHAMBHORE – GAME DRIVE, HIKE TO RANTHAMBHORE FORT",
                    description:
                        "Depart for morning game drive, return to camp for breakfast. Post lunch hike to Ranthambhore Fort. You will hike through this formidable fort that was built in the 8th century and can see lots of Langurs, Peacocks, parrots and other wildlife. You would be walking through the ruins and some of the building are still intact. Continue trek up to the Ganesha (Elephant headed God) Temple, through the very heart of tiger territory. The views of the reserve from the battlements are breath-taking. Your guide will navigate you through the fort and its rich history.\n\nOvernight in Ranthambore hotel on full board basis",
                },
                {
                    title: "RANTHAMBHORE - JAIPUR",
                    description:
                        "Morning game drive and return to camp for breakfast. Check out depart for Jaipur (160 kms/100mi – 3.5 hours) Arrive at Jaipur .Check into hotel. Evening walk in the bustling streets of the city. Enjoy rest of evening and dinner at a palace.(Optional session with an astrologer)\n\nOvernight in Jaipur hotel on full board basis",
                },
                {
                    title: "JAIPUR – UDAIPUR - JAWAI",
                    description:
                        "Transfer to Jaipur airport for flight (one hour) to Udaipur and from their train to Jawai.\nArrive Udaipur and drive to Jawai (148kms/91mi – 3 hrs). Three hour drive brings us to the Jawai Camp parking, where we are transferred onto safari vehicles, which transport us deep into the wilderness to the luxurious Jawai Camp. Enjoy a freshly cooked light lunch and prepare for an afternoon safari to spot leopards in the boulder hills overlooking the Jawai Lake. Tea would be served on safari a return to the camp for a campfire and traditional Rajasthani dinner.\nJawai is a unique wilderness area where leopards have learnt to co-exist with people and their livestocks. The Government and the villagers have come together to make this area into community reserve to bring about balance between local culture and wildlife\n\nProceed on afternoon wilderness drive post lunch and return to camp post sunset for campfire dinner at Jawai Camp.\n\nOvernight in Jawai Camp on full board basis",
                },
                {
                    title: "JAWAI – GAME DRIVE, HIKE WITH HERDSMAN",
                    description:
                        "Depart Camp for a morning Game Drive and return to Camp for breakfast. Following lunch you will be accompanied by the naturalist and hike to the mountain peak and later walk and interact with Rabari Shepherds. The tall, proud men dressed in white with red turban herd goats and cows to graze each day. Rabari herdsmen have shared this land with the leopards for centuries, you will embark on this informative rural excursion to see their commitment to wildlife conservation and maintaining their cultural roots.\n\nOvernight in Jawai Camp on full board basis",
                },
                {
                    title: "JAWAI – BIRDWATCHING, CYCLING",
                    description:
                        "Depart Camp for the morning birdwatching excursion on the Jawai Bandh to view the abundant birdlife and crocodiles basking on the shore and return to camp for breakfast. Afternoon proceed on a cycling excursion past tribal settlements through landscape of towering granite formations, caves, kopjes, scrub and winding sand riverbeds. Return by sundown. Overnight in Jawai Camp on full board basis",
                },
                {
                    title: "JAWAI – UDAIPUR - MUMBAI",
                    description:
                        "After breakfast depart for Udaipur for connecting international flights to Mumbai\nBreakfast included.\nEnd of our Services.",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better)",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
            ],
        },
    },
    {
        img_url:
            "https://www.tigersafari.net/wp-content/uploads/2023/07/bengal-tigers-conservation-in-ranthambore-national-park.jpg",
        name: "Just Tigers and Golden Triangle",
        duration: "15 Nights • 16 Days",
        slug: "just-tigers-and-golden-triangle",
        tour: {
            location: "Maharashtra, Delhi, Rajasthan",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Explore the Wild Heart of India: Pench, Kanha, Bandhavgarh & Golden Triangle Tour\n\nEmbark on an extraordinary journey through India’s diverse landscapes, blending the thrill of wildlife safaris with the grandeur of royal heritage. This unique tour takes you to some of India’s most renowned national parks—Pench National Park, Kanha National Park, and Bandhavgarh National Park—each offering an unmatched opportunity to experience India’s rich wildlife in its natural habitat. From spotting majestic tigers, elusive leopards, and herds of elephants, to exploring dense forests teeming with birdlife, this wildlife adventure will captivate your senses and take you deep into the heart of India’s wilderness.\nThe tour also brings you to the iconic Golden Triangle—Delhi, Agra, and Jaipur—where history, culture, and architecture take center stage. Explore the bustling streets of Delhi, with its mix of ancient monuments and modern charm, marvel at the world-famous Taj Mahal in Agra, and immerse yourself in the royal grandeur of Jaipur, known for its palaces, forts, and vibrant markets. This journey seamlessly blends the thrill of wildlife exploration with the timeless beauty of India’s cultural landmarks, offering an unforgettable experience for every traveler.",
            destinations_covered: [
                {
                    name: "PENCH NATIONAL PARK",
                    description:
                        "Located in Madhya Pradesh, Pench National Park is a captivating wildlife destination known for its lush forests and rich biodiversity. The park is part of the Pench Tiger Reserve, named after the Pench River, and is famous for its thriving tiger population, making it a top spot for wildlife enthusiasts and photographers. The park offers a mix of dry deciduous forests, grasslands, and waterholes, providing an ideal habitat for a variety of wildlife, including tigers, leopards, and wild dogs.",
                },
                {
                    name: "KANHA NATIONAL PARK",
                    description:
                        "Kanha National Park, one of India's largest and most scenic wildlife reserves, is a haven for nature lovers and wildlife photographers. Set amidst dense forests and rolling meadows in Madhya Pradesh, it is known for its Bengal tigers, Indian wild dogs, and a significant population of barasingha (swamp deer). With its diverse landscapes and incredible biodiversity, Kanha offers one of the best chances to see the Royal Bengal Tiger in the wild, along with a wide array of other species.",
                },
                {
                    name: "BANDHAVGARH NATIONAL PARK",
                    description:
                        "Bandhavgarh National Park, in Madhya Pradesh, is renowned for its dense forests, picturesque landscapes, and high tiger density, making it one of the best places in India to spot tigers in the wild. The park is also home to leopards, wild boars, and various species of deer, as well as ancient ruins and forts scattered throughout. The thrilling jeep safaris, combined with the rich historical backdrop, offer a truly unforgettable experience for wildlife and history enthusiasts alike.",
                },
                {
                    name: "DELHI",
                    description:
                        "Delhi, the capital city of India, is a vibrant fusion of ancient history and modern life. From the grandeur of the Red Fort and Qutub Minar in Old Delhi to the colonial architecture of New Delhi, including landmarks like the India Gate and Humayun’s Tomb, the city offers a unique blend of cultural heritage and contemporary charm. Delhi is also known for its bustling markets, lively street food scene, and cosmopolitan atmosphere.",
                },
                {
                    name: "AGRA",
                    description:
                        "Agra, home to the world-famous Taj Mahal, is a city steeped in Mughal history and grandeur. Beyond the Taj, Agra is home to magnificent monuments like the Agra Fort and the abandoned city of Fatehpur Sikri, showcasing the splendor of the Mughal Empire. The city’s timeless architecture, vibrant bazaars, and rich cultural heritage make it an essential destination for travelers seeking to explore India’s imperial past.",
                },
                {
                    name: "JAIPUR",
                    description:
                        "Jaipur, also known as the Pink City, is a captivating blend of royal heritage, vibrant culture, and striking architecture. Famous for its magnificent forts, palaces, and temples, including the Amber Fort, City Palace, and Hawa Mahal, Jaipur reflects the opulence of Rajasthan’s royal past. The city’s bustling bazaars, vibrant handicrafts, and rich cuisine make it a sensory delight and a gateway to Rajasthan’s regal history.",
                },
            ],
            itinerary_outline: [
                {
                    title: "Arrive New Delhi (by flight)",
                    description:
                        "Meet and greet on arrival at the New Delhi airport by our representative. He will transfer you to the hotel, assist you in check-in at the hotel, hand over and explain all travel-related documents. Overnight stay at the Hotel.",
                },
                {
                    title: "New Delhi - Nagpur - Pench (flight + 100 kms - 2 hrs. drive)",
                    description:
                        "Early breakfast, and transfer to the airport in the morning to board a flight at 1020 hours to arrive Nagpur at 1200 hrs. Met at the airport and drive to Pench National Park 100 KMS / 2-hour drive. On arrival check into the lodge. After lunch goes for an afternoon jeep safari to the national park. Dinner and overnight stay at the lodge.\n\nA total of 758 Sq. KMS of this Southern Indian tropical moist deciduous forest has its extent mingling with the tropical dry deciduous teak. The area is crisscrossed by a number of streams and ‘Nallahs’ most of which are seasonal. Though the Pench River dries up in April end, a number of water pools locally known as ‘dohs’ are found which serve as water holes for the wild animals. The Pench Reservoir at the center of the park is the only major water source during the pinch period. ",
                },
                {
                    title: "In Pench",
                    description:
                        "Morning and afternoon Jeep safaris to the National park. Meals and overnight at the lodge.\n\nAs a prey concentration is high along the Pench River, the tiger usually inhabits and frequents this belt. Leopards though generally operate in the peripheral areas but are occasionally seen in the deep forest also. Jungle cats are commonly seen. Leopard cats, small Indian civets, and palm civets are seen rarely.\n\nIn Pench, Cheetal, Sambar, are commonly seen grazing on the open sites on roadsides and banks of river & reservoir. Jackals can be seen in search of food anywhere in the Park. Packs of up to 15 or more wild dogs can be seen near the Chhedia, Jamtara, Bodanala, and Pyorthadi areas of the Reserve. Herds of gaur can be spotted near streams and bamboo patches commonly in the summer months. Sloth beer occupies the rocky areas and favors Mahul bel infested forest. Chinkara is present in very small numbers and is found in open areas around Turia, Telia, and Dudhgaon villages.",
                },
                {
                    title: "Pench – Kanha (210 kms /4-5 hrs drive)",
                    description:
                        "Morning safari to the national park. After lunch drive to Kanha national park 210 KMS/ 5-hour drive. On arrival check into the Lodge. Dinner and overnight at the lodge in Kanha.",
                },
                {
                    title: "In Kanha",
                    description:
                        "This is the original Kipling country of which he wrote so vividly in his Jungle Book. Packed breakfast which comes from the Lodge is served at a designated spot and spread on the bonnet of the Safari vehicle. Enjoy your breakfast in the wilderness of Kanha.\n\nWake up at 0500hrs, have tea coffee with biscuits, and proceed for the morning safari to the National park.\n\nContinue your search for the elusive Tiger if you have not yet seen the same, and soak in the fresh, and energizing environment. Return from Safari around 1130hrs. Freshen up, and Lunch is served. Depart for afternoon jeep safari Kanha National Park. Return at 6 pm from safari. Dinner and overnight at the Lodge.",
                },
                {
                    title: "In Kanha",
                    description:
                        "Wake up, and get ready for another day of adventure in the National park. The forests of the Banjar valley and Halon valley, respectively forming Kanha’s western and eastern halves. By a special statute in 1955, Kanha National Park came into being. Since then, a string of stringent conservation programs has been launched, for the overall protection of the park’s fauna and flora. Kanha boasts about 38 species of mammals. Some of the inhabitants of this park are the gaur, the largest of the world’s cattle; the sambar, the largest Indian deer; and the Chausingha, the only four-horned antelope in the world.\nOther frequent visitors include the Nilgai antelope, the sloth bear, the dhole, or Indian wild dog, and an occasional Leopard. Some 300 species of birds inhabit the park, that includes the storks, egrets, black ibis, raptors, owls, and the Red-wattled lapwings.\n\nDepart for afternoon jeep safari Kanha National Park. Return at 6 pm from safari. Dinner and overnight at the Lodge.",
                },
                {
                    title: "Kanha – Bandhavgarh (by surface, 275kms, 6-hour drive)",
                    description:
                        "Morning jeep safari to the national park and after early lunch depart for Bandhavgarh, 280kms, 6-hour drive. On arrival check into the Lodge. Dinner and overnight at the Lodge.",
                },
                {
                    title: "In Bandhavgarh",
                    description:
                        "Morning and afternoon jeep safari to the national park.\n\nBandhavgarh: The national park is mainly known for the density of its tiger population. This is the place where the famous White Tigers of Rewa were discovered. The other wild attractions in the park include Leopards, Blue Bulls, Indian Gaur (Bison) Chausingha (Four Horned Antelopes), Spotted Deers, Sambar Deer, Wild Boar, Sloth Bears Fox, Jackals, Wild Dogs, etc. There are at least 22 mammal species and about 250 bird species in the Park. The other animals found in Bandhavgarh are Ratel, Porcupine, Small Indian Civet, Palm Squirrel, Lesser Bandicoot rat, the Jungle Cat, and the shy Hyenas. The reptile population in the park includes Cobras, Kraits, Vipers, Ratsnakes, Pythons, Monitor Lizards, and turtles. The two-primate species – the rhesus macaque and the Hanuman langur – inhabit Bandhavgarh.\n\nOvernight at the Lodge. (Breakfast, lunch, and dinner at the Lodge).",
                },
                {
                    title: "In Bandhavgarh",
                    description:
                        "Morning and afternoon jeep safari to the national park\n\nBandhavgarh has been a center of human activity and settlement for over 2000 years, and there are references to it in the ancient books, the Narad-Panch Ratra and the Shiva Purana.\n\nThe oldest sign of habitation in the park are caves dug into the sandstone to the north of the fort. Several contain Brahmi inscriptions dating from the 1st century B.C. Various dynasties have ruled the fort, for example, the Magha’s from the 1st century A.D., the Vakatakas from the 3rd century A.D. From that time onwards Bandhavgarh was ruled by a succession of dynasties including the Chandela Kings Bandhavgarh became more and more deserted until the forest overran the area band became the royal hunting reserve.\n\nThis helped to preserve the forest and its wildlife, although the Maharajas made full use of their rights. At independence, Bandhavgarh remained the private property of the Maharaja until he gave it to the state for the formation of the National Park in 1968. After the park was created poaching and hunting were brought under control and the number of animals rose dramatically. The Tigers in particular prospered and the 1986 extension provided much-needed forest to accommodate them.\nOvernight at the Lodge. (Breakfast, lunch, and dinner at the Lodge).",
                },
                {
                    title: "In Bandhavgarh",
                    description:
                        "Morning and afternoon safaris in the national park. Meals and overnight at the Lodge.",
                },
                {
                    title: "Bandhavgarh – Jabalpur – New Delhi (by road 200 kms / 4 hrs drive + Flight)",
                    description:
                        "Morning Jeep safari in the park. After lunch drive to Jabalpur airport, 200 KMS /4hrs drive to board a flight to New Delhi at 1630 hrs. Arrive in New Delhi at 1840 hrs. and transfer to the hotel. Overnight stay at the hotel.",
                },
                {
                    title: "New Delhi – Agra (by road – 220 Kms - 4 hours drive)",
                    description:
                        "After relaxed breakfast drive to Agra, 220kms, 4-hour drive. On arrival check into the hotel. Evening visit Mehtab Bagh to see Taj Mahal at Sunset. Mehtab Bagh is a Charbagh complex in Agra, North India. It lies north of the Taj Mahal complex and the Agra Fort on the opposite side of the Yamuna River, in the flood plains. The garden complex, square in shape, measures about 300 by 300 meters and is perfectly aligned with the Taj Mahal on the opposite bank.\n\nOvernight stay at the hotel in Agra.",
                },
                {
                    title: "Agra – Jaipur (by road, 235kms - 5-hours drive)",
                    description:
                        "Sunrise proceed to visit the famous white marble mausoleum, The Taj Mahal, which was built in the middle of the 17th century by the Moghul emperor Shah Jehan for his wife Mumtaz Mahal.\n\nCompleted in 1652, skilled craftsmen from Persia, Turkey, France, and Italy and some 20,000 laborers worked for 17 years to build this edifice. After relaxed breakfast proceed to visit the red sandstone AGRA FORT which stands like a crescent on the banks of Yamuna River enclosed by forbidding 20-meter high walls, with a 12- meter moat between them. Three successive Mughal emperors – Akbar, Jehangir, and Shah Jehan – helped create this massive structure which contains Hindu and Muslim architecture. [The Taj is closed on Friday]. Check out from the hotel.\n\nLater drive to Jaipur 235 kms/5-hours drive. On arrival check into the hotel. Overnight stay at the hotel.",
                },
                {
                    title: "In Jaipur",
                    description:
                        "This morning you will drive 11 km to the outskirts of the city stop at Jal Mahal to visit Amber Fort, the ancient capital of the State until 1728. Visit the Temple of Kali, the Hall of Victory, or Jai Mahal.\n\nLater visit the Observatory, the Palace of Winds, and the City Palace and Museum. The museum has an interesting textile section, which contains dresses and costumes of the former Maharajas and Maharanis of Jaipur. Jaipur is well known for its beautiful carpets, enameled ornaments, precious and semi-precious stones, brass ornaments, and many other arts and crafts. Spend time in crowded lanes & by lanes of the pink city, haggling, and souvenir-hunting in the evening. Return to the hotel for the overnight stay in Jaipur.",
                },
                {
                    title: "Jaipur - New Delhi (by road 260 Kms - 5 hrs drive)",
                    description:
                        "After relaxed breakfast drives back to New Delhi 260kms, 5 hrs. drive. Transfer to your hotel near to the airport.",
                },
                {
                    title: "Fly back home",
                    description:
                        "After breakfast transfer to the International airport to board a flight back home.\nEnd of our services\n",
                },
            ],
            important_information: [
                "The driving hours given above from one city to another are based on the normal conditions of the roads and may vary. Any break for Food / Tea / Toilets / Sightseeing on the way will take extra time than the above given hours. Bandhavgarh has National parks that are closed every Wednesday for afternoon jeep safari.",
                "Pench, Kanha, and Bandhavgarh national parks are closed for afternoon jeep safari every Wednesday.",
                "In case the hotel envisaged or normal category of rooms are waitlisted/sold out, alternate hotels/categories will be provided & we will keep you informed on the supplement/reduction involved.",
                "Safaris in Bandhavgarh, Kanha, and Pench will be provided in a 4X4 Jeep and Safari zone is subject to forest department permissions.",
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
            ],
        },
    },
    {
        img_url:
            "https://www.tripsavvy.com/thmb/6kkl9bEAFBzk1XDnb0aRgIcy4Yo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prayer-flags-and-dhaulagiri--annapurna--nepal-168349570-d8858302f0f8454dac29e180b57389f8.jpg",
        name: "Golden Triangle with Nepal",
        duration: "10 Nights • 11 Days",
        slug: "golden-triangle-with-nepal",
        tour: {
            location: "Jaipur – Agra – New Delhi – Kathmandu-Pokhara",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Experience the India through this tour of the Golden triangle tourist belt, which encompasses the three major places – Delhi, Agra and Jaipur. From Delhi’s historic monuments to Agra’s pristine Taj Mahal, bask in the creations of the Mughal Empire that boast till date of their glory and grandeur. Travel to Jaipur to explore the Hawa Mahal, City Palace, Jantar Mantar, while taking a brisk walk through the Pink City. Visit the capital of India, Delhi, which is famous for its ancient splendours. Take a tour through the popular tourist attractions of Old Delhi and New Delhi, including the Lotus Temple, the Red Fort, the Jama Masjid, the Rajghat and others. Bask in the glory of the pristine city of Agra, which is home to the monolithic Taj Mahal. Travel through the ancient city of Fatehpur Sikri famous for its Persian architecture. From here continue your journey to Nepal.\nLocked between the high Himalayas and the great Indian plains, Nepal is a land of snow-capped peaks, gorgeous nature, and an impressive and rich cultural heritage. During this itinerary we take you to explore the captivating Kathmandu with all the most amazing places and explorations to fascinate its visitors: from old-world streets, rich art and architecture dating back to centuries, to the finest temples and delicate handicrafts, the hustle and bustle of its colourful markets and top must try Nepali food. Then admire the marvelous views of Pokhara – a nature’s gem and one of Nepal’s most spectacular locations, Pokhara seduces with its amazing mountaneous surroundings and the charming Lake Phewa.\n",
            destinations_covered: [
                {
                    name: "JAIPUR",
                    description:
                        'Jaipur, the capital of Rajasthan, is a vibrant blend of royal heritage and architectural splendor. Known as the "Pink City" for its terracotta-hued buildings, Jaipur is home to majestic palaces like the City Palace, the iconic Amber Fort, and the elegant Hawa Mahal. With its rich culture, bustling bazaars, and grand forts, Jaipur offers a royal experience steeped in history and tradition.',
                },
                {
                    name: "AGRA",
                    description:
                        "Agra, the city of the timeless Taj Mahal, is a must-visit destination for history lovers and romantics alike. Apart from the Taj Mahal, the city boasts architectural gems such as the Agra Fort and Fatehpur Sikri, each showcasing the grandeur of the Mughal Empire. Agra offers a rich historical experience, where the past comes to life in magnificent monuments and vibrant local culture.",
                },
                {
                    name: "DELHI",
                    description:
                        "Delhi, India's dynamic capital, seamlessly blends ancient history with modernity. Explore the historic lanes of Old Delhi, with its iconic Red Fort and Jama Masjid, while the modern side of New Delhi offers grand avenues, the majestic India Gate, and cultural landmarks like the Qutub Minar. The city is a vibrant tapestry of cultures, cuisines, and shopping, making it a fascinating destination for travelers.",
                },
                {
                    name: "KATHMANDU",
                    description:
                        "Kathmandu, the capital of Nepal, is a city of rich cultural heritage and spiritual significance. Known for its ancient temples, stupas, and vibrant Thamel district, Kathmandu is a gateway to Nepal's natural beauty and Buddhist culture. Key highlights include the Swayambhunath Stupa (Monkey Temple), the UNESCO-listed Durbar Square, and the sacred Pashupatinath Temple.",
                },
                {
                    name: "POKHARA",
                    description:
                        "Pokhara, nestled in the foothills of the Himalayas, is a paradise for nature lovers and adventure seekers. Famous for its serene Phewa Lake, stunning views of the Annapurna Range, and adventure activities like trekking, paragliding, and rafting, Pokhara offers both tranquility and adrenaline. It is the perfect base for exploring Nepal's natural beauty and embarking on treks to the Himalayas.",
                },
            ],
            itinerary_outline: [
                {
                    title: "ARRIVE JAIPUR",
                    description:
                        "You land at Jaipur airport and after clearing Immigrations and Customs are met in the Arrival Hall by our colleague carrying the paging board with your names on it.\n\nTransfer to your hotel and check-in.\n \nIn the afternoon you enjoy a walk through the old bazaar and enjoy the hustle and bustle of the city.\n\nIn the evening you have the option of going to a local cinema Raj Mandir to watch a Bollywood movie.\n \nOvernight at hotel.",
                },
                {
                    title: "IN JAIPUR",
                    description:
                        "You have a full day of sightseeing ahead you.\n\nWhen prince, soldier and astronomer Sawai Jai Singh II built the pink harmonious city of Jaipur in 1727, he did it in accordance with a treatise on town planning and architecture, the Shilpa Shastra that is timely even today. In 1876, the Prince of Wales and Queen Victoria visited India on a tour. Since pink denotes the color of hospitality, Maharaja Ram Singh of Jaipur painted the whole city pink in colour to welcome the guests. It was then that Lord Albert exclaimed Jaipur to be a ‘Pink City’, and hence the name. Today many establishments and buildings still sport this colour and the name has stuck.\n\nYou start with a visit to Amber Fort.\n\nHill forts were always important to the Rajput rulers. Belonging to the Hindu “Kshatriya” or warrior class, they believed in the line from the sacred holy book, the Purana that “a fort is the strength of a king”. They built a number of such forts all over the state of Rajasthan; some made for purely defensive purposes, but most built as fort palaces. Amber is one of the finest examples of a fort palace, built similar in style to the surrounding richly decorated Mughal courts. Inside the Fort you must visit the Jagmandir or the ‘Hall of Victory’. Inside the Jagmandir is the famous Sheesh Mahal –‘Mirror Palace’ – a room with all the four walls and ceiling completely embedded with glittering mirror pieces, which were specially imported from Belgium during that period.\n\nOur value add-on: After Amber, also visit the Anokhi Museum of Hand Printing. The museum chronicles the regeneration of hand block printing techniques in Rajasthan using traditional methods and makes a great stop.\n\nIn the afternoon visit the sprawling City Palace, a superb marriage of the Rajput and Mughal styles of architecture. The seven storied Chandra Mahal (Moon Palace) is a sprawling complex with multiple courtyards, public buildings, astronomical observatory and zenana mahals (harems). Within the palace complex are several museums; including an interesting textile gallery exhibiting a fine selection of textiles and costumes from the royal collection.\n\nFrom the City Palace you enter the extraordinary “Jantar Mantar”, the astronomical observatory built by Raja Sawai Jai Singh II in 1827. Roughly translated the name means “The Formula of Instruments”. This is one of five observatories he built in northern India. The instruments resembling massive futuristic structures are actually highly sophisticated instruments which are accurate even today.\n\nThen drive though the busy streets for a photography stop at Hawa Mahal, the ornate pink façade an icon of the city. This five storied high “screen” composed of projected windows, balconies protected by fine latticed screens was destined to enable the ladies of the harem to observe the lively street scenes of the city from a position of privacy.\n\nYou return to your hotel by evening.\n\nOvernight at hotel.",
                },
                {
                    title: "JAIPUR – AGRA (BY ROAD)",
                    description:
                        "After breakfast, you check out and drive to your next destination, Agra. The drive will take approx. 6 hrs. excluding stops.\n\nAfter approx. four hours outside Jaipur is your first stop, Fatehpur Sikri. A typical visit to Sikri takes about an hour and is worth the time.\n\nA UNESCO World Heritage Site, Fatehpur Sikri was temporarily the capital of the Mughal Empire under Akbar the Great. Built by Emperor Akbar to honor the Saint Salim Chisti who foretold the birth of Akbars’ son and heir, this structure is constructed entirely in vibrant red sandstone, architecturally it draws its inspiration from Hindu, Persian and Islamic styles.\n\nSikri was the first planned city of the Mughals. The sloping levels of the city,  connected into terraces, were utilised for various complexes such as Jami masjid, Buland-Darwazah and tomb of Sheikh Salim Chishti; Khwabgah, Diwan-i-Khass, and Diwan-i-Am. The efficient system of drainage and water-supply adopted here suggest an extremely intelligent town-planning by the Mughal emperor but eventually, a lack of adequate water supply for a whole city lead to its abandonment 14 years later.\n\nThere are no more stops  now on the remaining drive to Agra, and you arrive by evening.\nTransfer directly to your hotel and check-in. Your room is booked for the night.\n\nOvernight at hotel.",
                },
                {
                    title: "AGRA - DELHI (BY ROAD)",
                    description:
                        "Your city exploration starts this morning after an early breakfast.\n\nTwo great Mughal monarchs, Akbar and Shah Jahan, transformed the little village of Agra into a befitting second capital of the Mughal Empire – giving it the name Dar-ul-Khilafat (seat of the Emperor). Today, a visitor to Agra is caught up in a world of contrasting edifices of red sandstone and white marble, narrow gullies and quaint buggies, and that irresistible charm that this favorite city of the Mughals still retains.\n\nYou start the tour at the Taj Mahal. This stunning mausoleum immortalized the name of Shah Jahan’s last wife Mumtaz Mahal, “light of the palace”. Built by Indian artisans and artisans from neighboring Islamic countries, it is aptly described by the poet laureate Tagore as “A tear on the face of eternity”. Decorated with a mosaic of semi-precious stones and Persian calligraphy recreating verses from the Koran, the mausoleum is an important place of pilgrimage since the empress died in childbirth making her a martyr. Prayers are said and passages from Koran are constantly recited in the mosque and cenotaph chamber.\n\nAfter the Taj Mahal you drive to the mighty Agra fort. When the Mughal Emperor Akbar established his supremacy in Northern India, he began his first architectural venture, rebuilding the fort as a beautiful fort palace.\n\nPost sightseeing leave for Delhi. Your drive will take approx. three hours. Check in.\n\nOvernight in your hotel in Delhi.",
                },
                {
                    title: "IN DELHI",
                    description:
                        "New Delhi is the capital of India and a microcosm of the country. It is a modern metropolis which still preserves its traditional values and manages its multiple personalities effortlessly, making it a perfect gateway city to any North India journey.\n\nHistorians believe that through Delhi’s 1000 year old history, the city has been destroyed and rebuilt eight times, each time built by a new dynasty/ruler. As a result Delhi grew and evolved, absorbing different religions, diverse cultures, both foreign and indigenous, and yet functioning as one organic entity and becoming the culturally secular city you see today.\n\nYour guide meets you in the lobby of your hotel after breakfast.\n \nThe sightseeing starts in Old Delhi, the former Imperial capital. Here, you trade your vehicle for cycle rickshaws and enjoy a ride through the crowded streets of the 300 years’ old Chandini Chowk market. It is said that the moonlight reflecting on the canal, earned it its name, ‘Chandini (Moonlit) Chowk (square). Today it is a busy market selling an extraordinary variety of items – silver, jewelry, aromatic spices, leather, fruit and vegetables. Apothecaries sell home grown medicinal items, and roadside dentists display their bizarre array of equipment and false teeth. It is a wonderful introduction into the world of organized chaos of India!\n\nDisembark at Jama Masjid, believed to be the largest in India and Shah Jahan’s last architectural legacy. Originally it was called Masjid-I-Jahanum which means “The mosque commanding a view of the world”. Begun in 1644, the mosque was not completed until 1658. It has three great gateways, four angle towers and two minarets standing 40m high constructed of alternating vertical strips of red sandstone and white marble.\n\nAfter your visit you board your waiting vehicle and drive to Raj Ghat. A simple square platform of black marble marks the spot where Mahatma Gandhi was cremated following his assassination in 1948. It is surrounded by a beautiful park with labelled trees planted by notables like Queen Elizabeth II, USA President Eisenhower, Ho Chi Minh and various others.\n\nIn the afternoon drive past Lutyens New Delhi. Known as ‘Rajpath’ or ’Kings Way’- the wide tree lined avenues served as the capital city for the former British Empire. Among the buildings you drive past are the Secretariat buildings, Parliament House, Presidential Palace (Rashtrapathi Bhawan), and India Gate, a memorial to 82,000 soldiers of the undivided Indian Army who died in the period 1914–21.\n \nFrom here drive to Qutub Minar complex which has many historic monuments. The first mosque in India – The Quwwat-Ul- Islam – built from the dressed and carved stones of demolished temples lies in this complex. It establishes the political victory of Islam in Northern India. The Qutb Minar itself began  in 1199 by Qutb ud din Aibak and was completed by his successors. This fluted elegant tower is decorated with elegant balconies and carvings.\n \nReturn to your hotel by evening.\n \nOvernight at hotel.",
                },
                {
                    title: "DELHI TO KATHMANDU (BY FLIGHT)",
                    description:
                        "After breakfast, transfer to Delhi International airport to baord your flight for Kathmandu.\n\nWelcome to Nepal! On arrival at Tribhuvan International Airport you will be greeted by our tour representative in the arrival hall. Proceed for a sightseeing tour of Pashupatinath at the Bagmavati River on the way to your hotel.\n\nKathmandu is a captivating embrace to be discovered while travelling in Nepal. It packs all the most amazing places and explorations to fascinate its visitors: from old-world streets, rich art and architecture dating back to centuries, to the finest temples and delicate handicrafts, the hustle and bustle of its colourful markets and top must try Nepali food.\n\nAfterwards drive to Pashupatinath Temple for sightseeing followed by interaction with Sadhu, a Hindu holy man, and then attend the evening Aarti Ceremony, lighting of lamps in devotion.\n\nPashupatinath is Nepal’s most important Hindu Temple and is situated on the banks of the holy river Bagmati. As the powerhouse of Hinduism, many pilgrims and devotees are coming here for blessings and are also choosing to be cremated on the banks of the holy river.\n\nProceed further from Pashupatinath temple to your hotel for your check-in.\n \nOvernight: Hotel in Kathmandu.",
                },
                {
                    title: "IN KATHMANDU",
                    description:
                        "Breakfast: Hotel in Kathmandu\n\nThis morning, go for a sightseeing tour of Bhaktapur Durbar Square along with a heritage walk through its medieval alleys.\nBhaktapur is situated 13 km to the East from Kathmandu. Bhaktapur translates to “place of devotees” and it is a very old and fascinating place, rich in history and Buddhist symbolism. Bhaktapur Durbar Square displays the most beautiful of Nepal’s ancient charms, especially the culture and work of Newari people. Strolling through its old traditional streets feels like going back in time. Walk further South to reach Pottery Square – here you can admire the beautiful handicrafts made by hand and you can also give it a try and see how good you are at spinning a clay pot.\n\nOptional:\n\nVisit a local family to gain insight into the lifestyle of the locals. The visit will include:\n\nHome Visit with Newari Traditional Welcome:\nThe guests will be offered typical Newari traditional welcome with a Pyala (clay cup) of Rakshi, local spirit made from rice.\nThe guests will be given a brief description on how Nepali people in general live and utilize their house for various purposes, and how they live together in harmony.\nA complete tour of the house\nIn the afternoon, go for a sightseeing tour of Bouddhanath Stupa.\n\nBouddhanath Stupa is the largest stupa in Nepal, rich in Buddhist symbolism and gathering daily thousands of pilgrims. Watch people coming here to light butter lamps, sing mantras, spin prayer wheels or simply stroll around the dome. In the evening, this place offers an amazing view with thousands of butter lamps lit up around the stupa.\n\nPost your full day city sightseeing proceed to your hotel.\n\nOvernight: Hotel in Kathmandu.",
                },
                {
                    title: "KATHMANDU - POKHARA (BY FLIGHT)",
                    description:
                        "Breakfast: Hotel in Kathmandu\n\nAfter your breakfast transfer to the domestic terminal of Kathmandu airport for your short flight to Pokhara. Upon arrival you continue to your hotel for check in.\n\nA nature’s gem and one of Nepal’s most spectacular locations, Pokhara seduces with its amazing mountaneous surroundings and the charming Lake Phewa. Amongst the many activities that Pokhara has to offers, such as fishing, paragliding, or walking around, admiring the mountain peaks mirrored in the calm waters of Phewa Lake, is simply an unforgettable experience.\n\nAfternoon at leisure to explore the area or relax in the hotel.\n\nOvernight: Hotel in Pokhara.",
                },
                {
                    title: "IN POKHARA",
                    description:
                        "Breakfast: Hotel in Pokhara\n\nEarly morning drive to Sarangkot hill which offers a fantastic view of the Annpurna mountain range of the Himlayas (subject to weather conditions). You will see the Fish Tail and do a short kike for guests that enjoy the same. This stunning setting at sunrise you will enjoy with a cup of chai tee and snacks.\n\nUpon your return to the hotel you have your late breakfast.\n\nPost late breakfast you will continue your sightseeing of Pokhara including Davi’s falls, the Tibetan camp, the International Mountain Museum as well as the lakeside and local market of Pokhara before you enjoy an afternoon boat ride on Fewa Lake.\n\nReturn to your hotel.\n\nOvernight: Hotel in Pokhara.",
                },
                {
                    title: "POKHARA - KATHMANDU (BY FLIGHT)",
                    description:
                        "Breakfast: Hotel in Pokhara.\n\nAfter breakfast, check out from the hotel to fly back to Kathmandu.\n\nUpon arrival at Kathmandu, transfer to the hotel.\n\nIn the afternoon/evening take a one hour Rickshaw drive through the bustling and colourful bazaars of Kathmandu to reach Thamel.\n\nIn Thamel you will feel the vibrant pulse of Kathmandu and explore the many shops, bars and restaurants. Spend a couple of hours for shopping, drinking and dining. Sit back, relax and enjoy the beautiful view of the sunset coming over Kathmandu.\n \nOvernight: Hotel in Kathmandu.",
                },
                {
                    title: "Kathmandu Departure",
                    description:
                        "Breakfast: Hotel in Kathmandu.\n\nToday your tour in Nepal comes to an end. We arrange your drop at the airport, from where you will board your onward flight. Our representative can be at hand to assist you with a smooth check out from the hotel and escort you to the airport.\n\nWe advise you to arrive at the airport at least 3 hrs prior to departure and keep your passport and a printout of airline ticket handy to avoid last minute hassles.\nEnd of our Services.",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
            ],
        },
    },
    {
        img_url:
            "https://images.cnbctv18.com/wp-content/uploads/2023/02/holi.jpeg?impolicy=website&width=640&height=360",
        name: "Golden Triangle and Holi",
        duration: "6 Nights • 7 Days",
        slug: "golden-triangle-and-holi",
        tour: {
            location: "Delhi – Agra – Jaipur",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Holi, the vibrant Festival of Colors, marks the arrival of spring and the triumph of good over evil, celebrated with great fervor across India. The festival is a joyful occasion where people throw colorful powders, dance, sing, and share delicious treats like gujiya and thandai. In cities like Delhi, Agra, and Jaipur, Holi takes on unique local flavors, combining traditional rituals with exuberant celebrations. In Delhi, Holi is celebrated with both grand street festivities and private parties, where people come together to enjoy music, dance, and playful color-throwing. Old Delhi is particularly lively, with crowds filling the streets to celebrate with family and friends.\nIn Agra, Holi is steeped in tradition, especially in the Braj region, where the festival is linked to the legends of Radha and Krishna. The city comes alive with joyous celebrations, especially near the Taj Mahal, while in Jaipur, the festival takes on a royal air, with elaborate bonfires and colorful processions featuring decorated elephants and camels. The celebrations in Jaipur’s palaces and gardens add a regal touch, making it a truly unique experience. Whether in the historic lanes of Agra, the bustling streets of Delhi, or the majestic courtyards of Jaipur, Holi in these cities offers a colorful, lively, and unforgettable experience, reflecting the spirit of togetherness, tradition, and joy.",
            destinations_covered: [
                {
                    name: "DELHI",
                    description:
                        "Delhi, a city where history and modernity seamlessly collide, offers a unique blend of ancient traditions and contemporary vibrance. In Old Delhi, narrow lanes bustle with life, where you can explore historic landmarks like the Red Fort and Jama Masjid, while savoring the street food and experiencing the colorful chaos of local markets. In contrast, New Delhi boasts wide avenues, grand government buildings, and modern attractions, creating a perfect mix of the old and the new.",
                },
                {
                    name: "AGRA",
                    description:
                        "Agra, home to the world-renowned Taj Mahal, is a city that embodies India's rich Mughal history and architectural splendor. Beyond the iconic white marble monument, Agra is home to other architectural gems like the Agra Fort and the Fatehpur Sikri, which showcase the grandeur of the Mughal Empire. Located on the banks of the Yamuna River, Agra offers a unique blend of history, culture, and beauty, making it an unmissable stop on any tour of India. Whether you’re marveling at the Taj Mahal at sunrise or exploring its bustling markets, Agra leaves a lasting impression of India’s majestic past.",
                },
                {
                    name: "JAIPUR",
                    description:
                        "Jaipur, the capital of Rajasthan, is a city steeped in royal history and vibrant culture, often referred to as the \"Pink City\" due to its stunning terracotta-colored architecture. Known for its majestic palaces, grand forts like the Amber Fort, and ornate buildings such as the Hawa Mahal, Jaipur offers a glimpse into India's regal past. The city's bustling bazaars, rich craftsmanship, and festivals like Teej and Diwali make it a sensory delight, blending tradition with modern-day vibrancy. Jaipur is an essential stop for anyone wanting to experience the grandeur and heritage of Rajasthan.",
                },
            ],
            itinerary_outline: [
                {
                    title: "ARRIVE IN DELHI",
                    description:
                        "Your flight lands in Delhi.\n\nAfter you clear Immigrations and Customs you are met by our representative and assisted with your transfer to your hotel.\n\nDelhi, a delightful paradox of the old and the new, quickly overwhelms the visitor with its myriad charms. Being a vibrant cultural melting pot and shaped by the influence of different powerful rulers over hundreds of years, the destination has acquired a character with many different shades for the traveller to explore and experience. If Old Delhi assails the senses with its age-old traditional bazaars and choc-a-block serpentine streets, New Delhi casts a spell with its pristine colonial-era landmarks and well-maintained monuments.\n\nOvernight at the hotel.",
                },
                {
                    title: "DELHI SIGHTSEEING",
                    description:
                        "After breakfast, proceed for a sightseeing tour of Old Delhi.\n\nYou disembark at Red Fort and climb on board your waiting cycle rickshaws. Sitting in your cycle rickshaws, you will drive through the narrow lanes of the 300 year old Chandni Chowk market. Originally a canal ran through the middle of the street as a part of the water supply scheme. It is said that the moonlight reflecting on the canal, earned it its name, ‘Chandini’ (Moonlit) ‘Chowk’ (square). Today, it is a busy market selling an extraordinary variety of items – silver, jewelry, aromatic spices, leather, fruit and vegetables. Apothecaries sell home grown medicinal items, and roadside dentists display their bizarre array of equipment and false teeth. This is an excellent introduction to the organized chaos of India!\n\nNote: In case of Sunday, there will be a few streets that remains closed. Rest assured, we will ensure you still get to experience the hustle and bustle of the market.\n\nYou disembark at the Jama Masjid. This mosque is believed to be Shah Jahan’s last architectural legacy. Begun in 1644, Jama Masjid was not completed until 1658. It has three great gateways, four angled towers and two minarets standing 40 meters high and constructed of alternating vertical strips of red sandstone and white marble.\n\nThe afternoon take a tour of New Delhi that will take you to Qutab Minar, Humayun’s Tomb and drive past India Gate, Parliament House and Rashtrapati Bhawan (President’s House).\n\nBuilt and restored in phases by different rulers, the Qutub Minar is a soaring 73 metre tall minaret and one of the most stunning structures in the country. There are many other monuments as well in the Qutub Minar complex.\n\nHumayun’s Tomb which you visit next is sublimely well proportioned, seeming to float above its symmetrical gardens. It’s thought to have inspired the Taj Mahal, which it predates by 60 years. Constructed for the Mughal emperor in the mid-16th century by Haji Begum, Humayun’s Persian-born wife, the tomb marries Persian and Mughal elements, with restrained decoration enhancing the architecture. The arched facade is inlaid with bands of white marble and red sandstone, and the building follows strict rules of Islamic geometry, with an emphasis on the number eight.\n\nOn your drive back to the hotel, you pass India Gate, an Arc-de-Triomphe style archway built as a war memorial in the honour of 60,000 soldiers of the British Indian Army who died in the Afghan wars and the First World War. High on Raisina Hill stands the Rashtrapati Bhawan or the erstwhile Viceroy’s House. It is larger than Versailles. The Presidential Palace is flanked by the identical Secretariat buildings ‘North’ and ‘South Blocks, which are colloquially called the corridors of power. The Parliament House, built in a circular coliseum design, is the place where the constitution of independent India was drafted.\n\nThe evening is at leisure. Overnight at the hotel.",
                },
                {
                    title: "DELHI - AGRA BY ROAD (204 KMS - 4 HRS DRIVE)",
                    description:
                        "Post breakfast, check out and drive to Agra. On arrival, check in to the hotel.\n\nA legacy of the Mughal dynasty, Agra is world famous for the romance of the world’s most celebrated ode to eternal love, the magnificent white marble Taj Mahal. Besides the glorious Mughal era, Agra has witnessed the rule of many other mighty dynasties as well. The likes of Sikandar Lodi, the Jats, the Marathas and finally the British have all influenced the city’s culture and history.\n\nAfter lunch, you meet your guide and together you visit the Agra Fort. The now UNESCO World Heritage site of Agra Fort was built in 1571 by the Mughal Emperor Akbar. The walls of this mammoth red sandstone structure run for a length of almost three kilometres!\n\nNext, drive to Taj Mahal.\n\nDecorated with a mosaic of semi-precious stones and Persian calligraphy recreating verses from the Koran, this monument is the beautiful outcome of the grief-stricken Emperor Shah Jahan’s tribute to his deceased wife, Mumtaz Mahal. Built by Indian artisans and artisans from neighbouring Islamic countries, it is aptly described by the poet laureate Tagore as “A tear on the face of eternity”.\n\nStay at the Taj until sunset before returning to your hotel.\n\nThe evening is at leisure.\n\nOvernight at the hotel.",
                },
                {
                    title: "AGRA - JAIPUR BY ROAD (221 KMS- 5-6 HRS. DRIVE)",
                    description:
                        "Post breakfast, check out and drive to Jaipur. The drive is long but we break it up to make it interesting.\n\nOn the way, approximately 2 hrs outside of the city you stop at Fatehpur Sikri.\n\nBuilt by Emperor Akbar in the honour of Sufi saint Salim Chishti, Fatehpur Sikri (city of victory) was the Mughal capital for 13 years. It was the first planned city of the Mughals and also the first one to be designed with an amalgamation of Indian, Persian and Islamic architectural styles.\n\nAfter Sikri, a short distance away is your next stop; for lunch. Enjoy a hot meal and stretch your legs before resuming the drive to Jaipur.\n\nArrive by evening and transfer directly to your hotel.\n\nThe evening is at leisure.\n\nOvernight at the hotel.",
                },
                {
                    title: "IN JAIPUR",
                    description:
                        "Start your sightseeing with a visit to Amber Fort.\n\nThe weather-beaten façade of the nearly 420-year old Amer Fort belies the elegant beauty of its majestic interiors. Some of the most spectacular structures of the fort are ‘Diwan-i-Aam’ (hall of public audience), ‘Sheesh Mahal’ (glass palace), and ‘Sukh Mahal’ (pleasure palace).\n\nOn the way to Amber Fort, there will be a brief photography stop at Hawa Mahal. This five-storeyed palace strongly fascinates with its pyramidal shape and hundreds of jharokhas (windows). Hawa Mahal means ‘Palace of Winds’ and it truly lives up to its name as the palace stays breezy even during the blistering summers of Rajasthan.\n\nThis afternoon take a tour of Jantar Mantar. It’s the world’s largest observatory carved in stone and marble. Many of the huge ancient instruments here are still in working condition.\n\nAlso on the itinerary is a visit to the Maharaja’s City Palace.\n\nBuilt on the orders of Sawai Jai Sigh II, the City Palace is a blend of Mughal, Rajput and European architectural styles as it was built in parts by different succeeding rulers. The Chandra Mahal (Moon Palace) here has been turned into a museum and has lots of interesting exhibits.\n\nEnd the day with a stroll through the busy streets of Johri Bazaar.\n\nIt is a great fun experience. You can’t get the variety of silver jewellery, handmade footwear, or multi-coloured leheriya saris anywhere else in the country. Neither can you get the choice of cotton textiles, bangles, blue pottery, bags, cushion covers, bedspreads – the list is endless. And haggling over prices with the shopkeeper simply adds to the experience!\n\nOvernight at the hotel.",
                },
                {
                    title: "IN JAIPUR",
                    description:
                        "Today is Holi.\n\nAfter a relaxed breakfast you change into a white kurta pyjamas (India attire same for men and women) which will be specially procured for you.\n\nHoli (also called holaka) is an annual festival celebrated to welcome spring and to commemorate various events in Hindu mythology. Market places are abuzz with activity as frenzied shoppers start making preparations for the festival. Heaps of various hues of gulal and abeer can be seen on the roadside days before and on the day of this very popular festival.\n\nWe have arranged special festivities for you to participate in and celebrate the festival of Holi with the locals.\n\nAt our Holi celebrations venue, you will be welcomed with chung, a traditional holi festival instrument and drummers will lead you to an exclusive venue which will be well stocked up with thalis (plates) of dry organic gulal (red) colour made from cornflower. There will also be drums of coloured water as well. Once you are done playing with dry and wet colours, you can wash & change before sitting down for lunch. There will be a live performance of music and dance as well that will keep you entertained.\n\nReturn back to you hotel at your convenience and the remainder of the day is at leisure.\n\nYour vehicle is available at your disposal.\n\nOvernight at the hotel.",
                },
                {
                    title: "JAIPUR - DELHI (271 KMS - 5 HRS. DRIVE)",
                    description:
                        "Check-out this morning after a leisurely breakfast.\n\nThe drive is comfortable and there are plenty of options en route for food and comfort stops.\n\nArrive into Delhi by late afternoon and transfer to your hotel located near the airport. Here, you have a room booked until your departure later to the international airport for your next destination. Your vehicle is at your disposal until departure.\nEnd of our Services",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
            ],
        },
    },
    {
        img_url:
            "https://socialstudieshelp.com/wp-content/uploads/2024/02/A-Journey-Through-the-Colors-of-India-Festivals-and-Traditions.webp",
        name: "Colors of India",
        duration: "12 Nights • 13 Days",
        slug: "colors-of-india",
        tour: {
            location: "Delhi – Agra – Jaipur – Udaipur – Mumbai",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Unveil the vibrant tapestry of India with our \"Colors of India\" tour, a captivating exploration that takes you through the heart of the country's most iconic cities. From the historical grandeur of Delhi to the majestic Taj Mahal in Agra, the regal charm of Jaipur, the romantic lakes of Udaipur, and the lively spirit of Mumbai, this tour promises an unforgettable adventure. Immerse yourself in the rich colors of India's heritage, culture, architecture, and modern life as you traverse through centuries-old forts, palaces, temples, and bustling streets. With every stop, you’ll witness the unique blend of tradition and modernity that makes India one of the world’s most fascinating destinations.",
            destinations_covered: [
                {
                    name: "DELHI",
                    description:
                        "Delhi, a city where history and modernity seamlessly collide, offers a unique blend of ancient traditions and contemporary vibrance. In Old Delhi, narrow lanes bustle with life, where you can explore historic landmarks like the Red Fort and Jama Masjid, while savoring the street food and experiencing the colorful chaos of local markets. In contrast, New Delhi boasts wide avenues, grand government buildings, and modern attractions, creating a perfect mix of the old and the new.",
                },
                {
                    name: "AGRA",
                    description:
                        "Agra, home to the world-renowned Taj Mahal, is a city that embodies India's rich Mughal history and architectural splendor. Beyond the iconic white marble monument, Agra is home to other architectural gems like the Agra Fort and the Fatehpur Sikri, which showcase the grandeur of the Mughal Empire. Located on the banks of the Yamuna River, Agra offers a unique blend of history, culture, and beauty, making it an unmissable stop on any tour of India. Whether you’re marveling at the Taj Mahal at sunrise or exploring its bustling markets, Agra leaves a lasting impression of India’s majestic past.",
                },
                {
                    name: "JAIPUR",
                    description:
                        "Jaipur, the capital of Rajasthan, is a city steeped in royal history and vibrant culture, often referred to as the \"Pink City\" due to its stunning terracotta-colored architecture. Known for its majestic palaces, grand forts like the Amber Fort, and ornate buildings such as the Hawa Mahal, Jaipur offers a glimpse into India's regal past. The city's bustling bazaars, rich craftsmanship, and festivals like Teej and Diwali make it a sensory delight, blending tradition with modern-day vibrancy. Jaipur is an essential stop for anyone wanting to experience the grandeur and heritage of Rajasthan.",
                },
                {
                    name: "UDAIPUR",
                    description:
                        'Udaipur, often called the "City of Lakes," is a picturesque gem in Rajasthan, renowned for its stunning palaces, serene lakes, and romantic ambiance. The majestic City Palace, perched on the banks of Lake Pichola, offers breathtaking views, while the tranquil waters of the lake reflect the grandeur of Jag Mandir and the Lake Palace. With its winding streets, historic temples, and rich Rajput heritage, Udaipur is a city that captures the essence of royal Rajasthan, offering an enchanting blend of history, culture, and natural beauty.',
                },
                {
                    name: "MUMBAI",
                    description:
                        "Mumbai, India’s bustling financial and entertainment capital, is a city of contrasts and energy. From the iconic Gateway of India and the colonial grandeur of Chhatrapati Shivaji Maharaj Terminus to the glamorous skyline and vibrant nightlife, Mumbai offers a unique mix of history, culture, and modernity. Known as the heart of the Bollywood film industry, the city is also home to serene spots like Marine Drive and the historic Elephanta Caves, making it an exciting destination where tradition meets progress and every corner tells a different story.",
                },
            ],
            itinerary_outline: [
                {
                    title: "ARRIVE IN DELHI",
                    description:
                        "Arrive into New Delhi’s Indira Gandhi International Airport Terminal (T3).\n\nUpon arrival, you will be met by a representative of at the Aerobridge itself. Our representative will then provide facilitation and assistance to you to clear through the immigration, collect baggage from the baggage belt and then guide you through the Green Channel gate of Indian Customs. As you step into the “Meet & Greet Hall”, you will be handed over to our airport representative or concierge waiting who will then escort you to your vehicle and accompany you in the chauffeur driven vehicle to your hotel. At Hotel, our concierge will assist you with the necessary check-in formalities. (Room reserved from 1400 hours of this day).\n\nOptional, Temple Tour: Private sightseeing tour of Delhi’s Temples. Begin with a visit to the Lakshmi Narayan Temple or the Birla Temple as it is popularly known. The temple enshrines Lord Vishnu – the preserver of the Hindu Trinity is built in the Nagara style of architecture, the temple is interspersed with modern influences. The entire temple is adorned with relief carvings depicting the scenes from mythology.\n\nSpend three nights in Delhi.",
                },
                {
                    title: "SIGHTSEEING OF OLD DELHI",
                    description:
                        "Breakfast at the hotel.\n\nSalaam Balak Trust Walk with Street Children (operates on all days except on Saturdays, Sundays and Public Holidays) (0930 – 1130 Hours).\n\nThis morning we have organized a very special walk for you near and around the New Delhi Railway Station. Your guide on this particular walk will be a young adult who lived on the streets before being given shelter and reformed. Your guide will also accompany you. The Salaam Balak Trust works with street children in Delhi providing them with a secure environment as well as health and education. The Trust has developed a city walk through the inner city, and your guides are the young people who have been rescued and know the area intimately.This is not a slum tour as the walk does not take you into the slums and photography is not allowed in certain sections of the walk. The tour is seeing the city and life in the city through the eyes of your young guides. The walk lasts approximately 2 hours.\n\nLater we will explore the walled city of Old Delhi, where traditional life has changed little. See the Jama Masjid, the largest mosque in India. (Throughout India, it is often necessary to take off shoes at various sites; it is recommended to carry airline or other socks at all times. Proper covering is required at certain sights). We then hop on rickshaws (pedi-cabs) to ride around the old Chawri Bazaar and savor the ambience of an Oriental and Indian marketplace.\n\nWe then explore a traditional market offering a delightful amalgam of craft, food, and cultural activities. There are permanent stalls devoted to the major types of handicrafts intrinsic to each part of the country – from intricate rosewood and sandalwood carvings, embellished camel hide footwear, gems, beads, brass ware, metal crafts to sophisticated fabric and drapery. Lose yourself in the kaleidoscope of colors and sounds as you explore this exotic bazaar.\n\nLater visit the magnificent Red Fort (closed on Mondays) on the western bank of the river Yamuna. Built all out of red stone in 1638, Mughal Emperor Shah Jahan started the construction of this massive fort, when he decided to shift the capital from Agra to Delhi.\nOvernight in Delhi.",
                },
                {
                    title: "SIGHTSEEING OF NEW DELHI",
                    description:
                        "Breakfast at the Hotel.\n\nLater proceed for a visit of New Delhi covering Humayun’s Tomb the first garden-tomb in the Indian subcontinent and the inspiration for several monuments including the Taj Mahal & the Qutub Minar, one of the finest Islamic structures ever raised in India. Explore the government buildings, the President’s house, the India Gate and Gandhi Smriti (closed on Mondays). Gandhi Smriti, is the sacred place where Mahatma Gandhi’s epic life ended on 30th January 1948. On display in the museum are photographs, sculptures, paintings, frescos, inscriptions on rocks and relics pertaining to the years Mahatma Gandhi spent here. The meagre personal effects of Gandhiji too are carefully preserved.\n\nFrom here you visit the Gurudwara Bangla Sahib (the temple of the followers of the Sikh religion) and time your visit with the lunch service.\n\nThe Sikhs, which means “disciples”, are one of the country’s most recognizable groups. Beards and turbans give them a distinctive look. Unlike Hinduism, they believe in one God, and that everyone, regardless of their station in life, should do “seva” or rendering social services. This resulted in the “Langar” or community kitchen, where every member of the religion considers it an honor to come and put in a couple of hours cooking thousands of Indian breads, making huge vat loads of curry, to feed the poor and underprivileged. The food served at the Langar is simple, but fresh and wholesome. You have the option of volunteering (serving, cleaning, chopping, there is a host of activities you can opt to do) before you join the hundreds to eat the vegetarian meal being served for lunch today. Your escort will carry mineral water for you as well.\n\nSHOPPING WITH A PERSONAL SHOPPER – AT AN ADDITIONAL COST\nA paradise for those who love to buy specialties of the place as souvenirs and keepsakes or as gifts for themselves or their loved ones, Delhi is the one stop to shop. We provide you with a personal shopper to save on to time and take you to the best of the shops, stores and boutiques.\n\nOvernight in Delhi.",
                },
                {
                    title: "DELHI – KEETHAM – AGRA",
                    description:
                        "After breakfast in the hotel, transfer by road to Agra enroute visiting a Bear Rescue Centre at Keetham (approximately 05 hours’ drive including stop).\n\nThe Agra Bear Rescue Facility is the largest Sloth Bear Rescue Facility in the world. Established in 1999 by Wildlife SOS in collaboration with the state government, it currently houses over 210 sloth bears as well as many other species of wildlife in large forested enclosures with ponds and shady trees.\n\nFor over 400 years, the Sloth Bear had been a target of human exploitation. A nomadic tribe known as the Kalandars began ‘dancing’ sloth bears for the emperors during the Mughal era. Over centuries, as the kingdoms in India disappeared, the ‘dancing’ bear trade transitioned to become entertainment for villagers and tourists who paid to watch the bears jump in agony.\n\nOn arrival in Agra, our representative will meet you and assist with the check-in at the hotel.\n\nSheroes Hangout: Visit this unique café run by 5 acid attack survivors. Sheroes Hangout is located on the road leading to Taj Mahal and includes a café which serves snacks, a library that has been set up with contributions, a section for handicrafts, and a boutique. The café has been set up entirely through crowd funding. Campaigns to create awareness issues for acid attacks and discussions on feminism, women’s empowerment, personality development, skill enhancement, and different cultural events are organised here.\n\nSpend two nights in Agra.",
                },
                {
                    title: "AGRA SIGHTSEEING",
                    description:
                        "Start your day early in the morning in Agra by visiting Taj Mahal (at the time of sunrise; Sunrise visit is subject to good weather conditions) built by Shah Jahan as an eternal symbol of his love for his favourite wife, whom he called Mumtaz Mahal (“Jewel of the Palace”). The monument has immortalized him forever as one of the great architectural patrons of the world. The structure took 20,000 laborers and 22 years to complete. (Note: Taj Mahal is closed on Fridays).\nReturn to the hotel for breakfast.\n\nAfter breakfast, visit Agra Fort, which was built by Emperor Akbar. The construction of Agra Fort commenced in 1565 and completed in 1571. Built with red sandstone, Agra Fort is a mixture of the Islamic and Hindu styles of architecture. This will be followed by a visit to Pearl Mosque and the Tomb of Itmad ud-Daulah built by Empress Noorjehan in memory of her father. You can also visit the souvenir market of Agra.\n\nRest of the day is at leisure OR evening again visit Taj Mahal by sunset.\n\nKOHINOOR JEWELLERS\nThe Kohinoor family, with their love for exquisite jewels and tasteful designs became jewellers of great repute. Their design, craftsmanship and techniques earned them the honour of becoming the jewellers to the Mughal’s themselves for generations. Today, they are listed as one of the exquisite shopping experiences in India by Conde Nast Traveler. The store loans its work to museums in New York and London and its craftsmen are regularly awarded with national honours. We can, on request, organise a private visit for you to this landmark establishment where you can spend time admiring stunning gems to talking to the craftsmen in the back rooms as they intricately create masterpieces – this is a must-do in Agra.\n\nDINNER AT THE PRIVATE BALCONY OF YOUR ROOM\nAdmire breath-taking views of the Taj Mahal from the private balcony. Enjoy a romantic dinner set with flowers and candles on the private balcony of their room. Savour bespoke delicacies selected from our international restaurant cartes, or design a special menu in consultation with our dedicated masterchefs, beside the romantic shadow of the Taj Mahal.\n\nOvernight in Agra.",
                },
                {
                    title: "AGRA – FATEHPUR SIKRI – JAIPUR",
                    description:
                        "Breakfast at the hotel.\n\nLater transfer by road to Jaipur enroute Fatehpur Sikri (approximately 06 hours and 30 minutes drive including stop).\n\nWe will provide packed refreshments from the hotel.\n\nFatehpur Sikri – The political capital of India’s Mughal Empire under Akbar’s reign from 1571 until 1585 and regarded as the crowning glory of his architectural legacy, this majestic ancient palace/fort had to be deserted shortly after its completion because of lack of water supply. To this day, its grand edifice as well as delicate decorations are almost intact.\n\nOn arrival, our representative will meet you at the airport and assist with the check-in at the hotel.\n\nJaipur, the capital of Rajasthan State, the City of Victory, is chaotic and congested, though it still has a habit of tickling travelers pink. Here, stunning hilltop forts and glorious palaces fit like footprints from a rich royal past, candy floss-bright turbans blaze a trail through brilliant bargain-filled bazaars, and fluttering saris catch the eye like butterflies.\n\nVISIT TO LADLI\nLadli is located in Jaipur. For most of the abandoned children in the city, their alternative is begging, child labour, or even prostitution, but at Ladli they learn to make jewellery and handicrafts – valuable skills in Jaipur. The children are also taught Hindi, English, Art and Dance, and are provided nutrition, medical check-ups and counselling. Most importantly of all, they gain confidence, hope and self-esteem. We believe that in addition to providing children education and employability, Ladli is a place where emotional trauma and the stresses of poverty can in some way be healed.\n\nSpend two nights in Jaipur.",
                },
                {
                    title: "JAIPUR SIGHTSEEING",
                    description:
                        "YOGA TRICKS (0700 – 0800 Hours)\nFrom hobby to passion, Mita Kakkar is spreading the Indian form all over the world.\nDuring the times when Yoga has finally caught the attention of Indians as well as foreigners, a woman in Jaipur — Mita Kakkar, has been taking Yoga classes for the tourists who visit the city. The 45-year-old is herself been practicing Yoga from past ten years and before this, she used to take such classes for the visiting American students from the University of Minnesota, where she was working as the student coordinator. Personalised Yoga kit (including Yoga bag, Yoga mat, Yoga attire, Yoga slippers, Yoga Aasna book), this shall be delivered to guests’ room the previous evening along with a personalised yoga concept note explaining the benefits of Yoga (at an additional cost).\n\nAfter breakfast at hotel, excursion to Amber Fort enroute you will have a brief photography stop (05 minutes) at Hawa Mahal – The Palace of Winds followed by city sightseeing.\n\nTURBAN TIEING DEMONSTRATION\nA turban is a type of headwear that is made by cloth winding. It is traditionally worn as a customary headwear by men in Rajasthan & other parts of North India. In different faith communities, the headgear is also worn as a part of religious observance. Additionally, turbans have also come to be known as the headwear worn by women in the West. Whatever your reason for tying a turban, it’s important to know how to master the wrapping technique so the turban can securely and comfortably stay on your head.\n\nEnjoy an Elephant ride (Uphill) to Amber Fort and return downhill by jeeps. Amber is a classic, romantic Rajasthani Fort Palace. The rugged, time-ravaged walls of the Fort may not look beautiful from the outside, but the interior is a virtual paradise. Miniatures painted on the walls depict hunting and war scenes, apart from festivals. Precious stones and mirrors are embedded into the plaster. A major attraction at Amber is the Elephant Ride all the way up to the Fort entrance. Elephants are bound to enrich your memories with the Royal lifestyle of the Maharajas and leave you with a truly unforgettable experience. (Elephant ride is available in morning only 0800 – 1000 hours).\n\nInside the Fort, visit the Jag Mandir or the Hall of Victory. Inside the Jag Mandir is the famed Sheesh Mahal – a room with all the four walls and ceiling completely embedded with glittering mirror pieces, which were specially imported from Belgium during that period.\n\nVisit Jantar Mantar, which is the largest stone and marble crafted observatory in the world. Situated near the gate of the City Palace, the observatory has 17 large instruments, many of them still in working condition.\n\nLater proceed (05 minute walk) to visit to the Maharaja’s City Palace, the former Royal residence, part of which is converted into a museum. A small portion is still used by the Royal family of Jaipur. Built in the style of a fortified campus, the palace covers almost one-seventh in area of the city. One of the major attractions in the museum is the portion known as Armoury. Museum houses an impressive array of weaponry-pistols, blunderbusses, flintlocks, swords, rifles and daggers. The royal families of Jaipur once used most of these weapons.\n\nPRIVATE TOUR OF SOME OF THE RESIDENTIAL AREAS OF THE CITY PALACE\nAt City Palace we will organize an exclusive private tour of some of the residential areas of the Palace followed by Indian champagne in the royal living room served to you by the personal butlers of the royal family. Many notable personalities including the Queen have bene entertained here; today you are the only guests as you sip your drink and soak in the lovely surroundings.\n\nPRIVATE DINNER AT CITY PALACE (AT AN ADDITIONAL COST): Arrive at the private entrance of the Palace where you would be received by the Maharaja’s men. Musicians will lead the procession while ladies in Rajasthani dresses would shower rose petals. On arrival and thereafter witnesses a colorful procession of the Maharaja’s antique cars, carriages, etc. You will be escorted to the main residential Palace of the Maharaja where the members of the Royal family would receive you. Enjoy cocktails with the members of the Royal family at Chandra Mahal and later proceed to Sukh Niwas to dine on the beautiful lalique table (or another suitable venue at the Palace). (Presence of Royal family is subject to their availability & acceptance). Royal Dress for the evening, which will be tailored for each guest, for the occasion, by the Tailor from the Royal family can be organised (at an additional cost).\n\nOvernight in Jaipur.",
                },
                {
                    title: "JAIPUR – UDAIPUR",
                    description:
                        "After early / packed breakfast transfer to Jaipur airport for the flight to Udaipur.\n\nUdaipur – City of lakes and gardens, water and white stone, its sensual heritage is manifested in two palaces that seem to float in the middle of Lake Pichola.\n\nOn arrival you will be met by our representative and will visit the Old City where you will get to see the ephemeral art of Jal Sanjhi.\n\nPresently, the art of Sanjhi painting is practiced by only a select few and remains a living tradition only in some of the temples of India. Our attempt is to try and revive this unique art form and all proceeds from the funds go towards preservation of this dying art form.\n\nLater we explore the bustling by-lanes of Udaipur which have artisans practicing their traditional crafts handed down to them by their elders. Khari printers do decorative floral patterns in gold and silver on plain or printed fabric. Block printers print various designs and patterns in different colors with the help of wooden blocks. You’ll also find artisans carving furniture, making puppets and traditional wooden toys. Along with engraving and embossing on brass, silver, jewellery, copper and even pottery, Meenakari is a specialty of this region. Udaipur also specializes in stone carving, especially in marble and sandstone, with artisans working hard at chiseling their finest filigree work. Color as usual plays an important role in the life of Udaipur as in Rajasthan. It is wonderfully evident in ghagharas (long flowing skirts), cholis (blouses), and odhnis (long scarves) of the women as well as the turbans of the men.\n\nWe will organize an opportunity for you to talk to these traditional businessmen and get an insight into their history and background as you admire the skill that they bring to their art.\n\nFollowed by a visit to Vintage car museum – the collection of the Maharajah of Udaipur, housed in a heritage circular garage. The garage was built at the time where no one else in Udaipur owned cars, and includes an original Burmah Shell petrol pump.\n\nLater check-in at the hotel. (Note: Hotel check in is at 1400 hours; early check in is subject to availability).\n\nEarly evening, enjoy a private boat ride on Lake Pichola (approximately for 45 minutes).\n\nYou will sail past the lovely Jag Mandir which witnessed two important historical events. This 17th century water palace was the refuge for Prince Khurram (later known as Shah Jahan) when he was exiled by his father. His palace here is a curiosity – the upper floor is designed in the Hindu style while the lower floor is built in the Muslim style. Later in during the uprising of 1857, the Rana of Mewar offered safety to several British families who fled from nearby Neemuch.\n\nSpend three nights in Udaipur.",
                },
                {
                    title: "UDAIPUR – RANAKPUR – UDAIPUR",
                    description:
                        "After breakfast in the hotel, excursion to Ranakpur Jain Temples (approximately 02 hours and 30 minutes drive each way).\n\nRanakpur is a popular place of pilgrimage and thus a living temple. During your visit you will see each shrine is attended by either a devotee or a priest. The rituals in a Jain Temple differ to those in a Hindu Temple. The temple was built in 1439 and is dedicated to the first Jain Tirthankara or saint. The whole, including the extraordinary collection of 1144 uniquely carved pillars, the richly decorated ceilings, and the friezes depicting the lives of the 24 Jain Tirthankara’s is fascinating. (Only audio guides available and Temples are open for Non Jains from 1200 – 1600 hours only).\n\nLunch at Mountabatten Lodge.\n\nOvernight in Udaipur.",
                },
                {
                    title: "UDAIPUR SIGHTSEEING",
                    description:
                        "After breakfast proceed for the city tour.\n\nUdaipur, a splash of colour in Rajasthan that is brighter when tinged with the tones of local lore and legends. Visit the City Palace, built in 1725, which houses the Dilkhush Mahal, Sheesh Mahal – studded with glittering Belgium Mirrors, Moti Mahal and the Palace of Lord Krishna all of which are ornately decorated. Later visit the Jagdish Temple. This temple was built in 1651 and is dedicated to Lord Vishnu, the preserver in the Hindu Trinity of Gods. Also visit the Sahelion Ki Bari gardens and fountains. Later drive around the Fatehsagar Lake.\n\nLater visit to Crystal Museum at Darbar Hall (city Palace).\n\nCrystal Gallery is a sparkling paradise of overwhelming crystal collection located inside Fateh Prakash Palace (a part of City Palace Complex) in Udaipur. This haven of Oslers Crystals is around 129 years old but for almost a hundred years it was not open for public. Maharana Sajjan Singh bought these sparkling and best quality crystals from the famous manufacturers, F and C Osler Company, Birmingham, England. ‘Magnum opus’, a unique crystal, can also be seen here. A visit to the gallery is a rare chance of self-rewarding oneself with something incredible. The honey bottles, trays, cups and plates, glasses, candle stands and coasters all made up of glass shows a great deal of honed skills in glass work. And the bigger items include rich hangings, tables, throne-like chairs, table fountain and sofa set. As you walk by, you will experience a different world.\n\nENJOY LEARNING SECRET COOKING RECIPES WITH GOURMANDS SERVING THE ROYALS\nThe Bedla family has had the distinction of serving their cuisine to Queen Elizabeth, Jacqueline Kennedy and Pandit Jawarlal Nehru the first prime minister of independent India. Your guests who wish to learn about royal cuisines and enjoy dining with one have this opportunity to get a comprehensive set of cooking lessons following with a delicious lunch. Each guest shall be provided with a customised & personalised apron with your logo & name of each guest while learning about Indian Cuisine. Post lunch family shall present each guest India cook book with traditional recipes, signed by the family with the date of visit & their address.\n\nRest of the day is at leisure.\n\nOvernight in Udaipur.",
                },
                {
                    title: "UDAIPUR – MUMBAI",
                    description:
                        "After breakfast in the hotel, transfer to Udaipur airport for the flight to Mumbai.\n\nBefore you check in to your hotel, you enjoy a half day tour of this wonderful city. The first stop is at Dharavi. It is easy to think of it as the slum depicted in popular culture and movies like Slumdog Millionaire. But inspite of all the grunginess and squalor, Dharavi is one of the prime contributors to the GDP of Mumbai. With thousands of small scale industries thriving in the area, Dharavi generates revenue of almost $500 million US Dollars annually!\n\nAs history has it, Dharavi was a fishing village, with the kolis, or the fisher folks, as its main inhabitants. Due to the construction of a dam, the Dharavi creek dried up, making the fisher folk move to wetter pastures and paving way for new settlements to come in. The potters came in from Saurashtra to manufacture and sell earthen pots. Tanners came from Tamil Nadu to start the famous and lucrative leather industry. The artisans of Uttar Pradesh came in and set up embroidery industries and bakers from South set up sweet and savoury bakeries.\n\nOther than the above mentioned industries, you will also tour the cardboard industries, the recycle industry, the Papaddam industry and finally take a walk down the winding route through the narrow residential areas – truly utilitarian in terms of architecture.\n\nAfter the tour, you won’t call Dharavi a ‘slum’, but a land of opportunity. Stop for lunch on your drive to your hotel and upon reaching, check -in. The rest of the evening is at leisure.\n\nDrive along the picturesque Marine Drive, fondly known as the ‘Queen’s Necklace.’\n\nSpend two nights in Mumbai.",
                },
                {
                    title: "MUMBAI SIGHTSEEING",
                    description:
                        "MUMBAI BY DAWN\nIt is a very early start for you this morning. Mumbai by Dawn is a unique offering, where you see the bustling city of Mumbai wake up. You get a peek into the little seen activities of the city, and get insights into what makes this magnificent Industrial capital of India tick and function.\n\nOn this morning’s walk you see hundreds of newspaper vendors sort out newspapers of 7 different languages, experience one-of-its-kind, fish auction of 20 tonnes of fish, observe an ‘only green’ herb market get set up for business across a popular bridge, watch the milkmen drive past with filled canisters, enjoy the melee of color at the flower markets, and soak in the clamour and chaos of the arrival of over 100 tonnes of vegetables, fruits and meat –‘Mumbai by Dawn’ truly defines the mercurial character of Mumbai, like none other.\n\nWhat’s interesting is that when you walk the same lanes a few hours later, you won’t find any evidence of the morning’s hustle bustle. But this sneak peek comes at a price, waking up at 5.15 AM for one!\n\nYou return to your hotel by 8:30 AM\n\nAfter breakfast in the hotel, enjoy sightseeing tour of Mumbai\n\nDrive past the Parsi Towers of Silence, and the Jain temple. You also get a wonderful view of the Haji Ali Mosque, a shrine in honor of a Muslim Saint on an island 500 meters out at sea and is linked by a causeway to the mainland.\n\nVisit Mani Bhawan (closed on public holidays), the house where the ‘Father of the Nation’, Gandhi, stayed on his early visits to the city. We drive up to the Malabar Hill to the lovely ‘Hanging Gardens’ and the Kamla Nehru Park from where you will get a wonderful view of Mumbai and the Arabian Sea. Then visit the Prince of Wales Museum housing rare artwork and archaeological finds.\n\n1130 hours: Take a look at Dabbawallas activities\n\nA dabbawala is a person in India, most commonly in Mumbai, who is part of a delivery system that collects hot food in lunch boxes from the residences of workers in the late morning, delivers the lunches to the workplace, predominantly using bicycles and the railway trains, and returns the empty boxes to the worker’s residence that afternoon. They are also used by meal suppliers in Mumbai, where they ferry ready, cooked meals from central kitchens to the customers and back. If desired a more personalised version can be made available (at an additional cost), where we shall visit a typical Mumbai house and the lady of the house shall prepare a lunch box, which will be later picked up by Dabbawallas. This lunch box will have a note from the guests to ensure the authenticity of the process. The lunch box shall be delivered by Dabbawallas at our specified location to our guest and guests can open and see their note kept inside.\n\nIn Mumbai, most office workers prefer to eat home-cooked food in their workplace rather than eat outside at a food stand or at a local restaurant, usually for reasons of taste and hygiene, hence the concept. A number of work-from-home women also supply such home-cooked meals, delivering through the dabbawala network.\n\nThe Mumbai dabbawallas are international figures thanks to Forbes Global. The Forbes story details the efficiency which with they deliver the dabbas or tiffins of their customers. Around 5,000 dabbawallas deliver 175,000 lunches every day and take the empty tiffin back. They make one mistake in 2 months. This means there is one error on every 16 million transactions! This is a six sigma performance (a term used in quality assurance if the percentage of correctness is 99.999999) – the performance which has made companies like Motorola and GE world famous for their quality!\n\nAlso stop at the ‘Dhobi Ghat’ (public laundries), where Mumbai’s ‘dirties’ are scrubbed, bashed, dyed, and hung out to dry. Watch as the local trains pass close by packed full of city commuters. (Photo stop only)\n\nAfternoon visit Crawford Market followed by any one of the tours mentioned below:\n\nCrawford Market: Spread over a vast area of 72,000 sq. yards, Crawford Market is extremely famous for its architecture. The impressive frieze at the entrance of the market will astonish the tourists. The place is also designed in such a manner so that it receives ample sunlight during the day. One of the main features of this market is the Clock Tower, adorned with intricate Victorian carvings. Built in 1871, this market was designed and conceptualized by William Emerson. Another interesting fact is that the market first got electricity in 1882, and became the first market in India to receive electricity.\n\nThe major things to buy in Crawford Market are fresh produce such as fruits and vegetables, as well as daily necessities apart from seasonal and luxury fruits and vegetables. During the Alphonso Mango season (April-May) this is the place to get the largest range in the city. While most stalls sell a range of produce, there are dedicated outlets, such as one that sells only bananas, but a wide range of different types to suit all tastes or uses. Also in the market, at the other end, there is a large pet animal market where dogs, puppies, cats, kittens, fish, parrots and songbirds are displayed and sold.\n\nChor Bazaar: This is a walk through Mumbai’s famous Thieves Market – Chor in English means thief.\nChor Bazaar has a whole range of products on offer, from genuine bargains to mass-produced junk. You can find brassware, ceramics, handicrafts, glass lamps, clocks, gramophones, old maps, paintings, dowry chests, coffee tables, rocking chairs, and everything else under the sun. Be prepared to rummage around if you want to buy something! If you do not want to shop, this walk can still be fun.\n\nDr. Bhau Daji Lad Museum (Closed on Wednesdays and certain Public Holidays)\nThe Dr. Bhau Daji Lad Mumbai City Museum seeks to serve the community as an institution dedicated to excellence in cultural education through exhibitions and different visual and intellectual media. To engage the community, especially children, to promote a greater appreciation of Mumbai’s artistic, cultural and economic history and development and to promote cross cultural understanding and cultural awareness at all levels.\n\nCollections Stories: As Mumbai’s oldest museum, the Dr. Bhau Daji Lad Museum showcases the city’s cultural heritage and history through a rare collection of 19th century fine and decorative arts that highlight early modern art practices and craftsmanship in the erstwhile Bombay Presidency and beyond. The permanent collection includes miniature clay models, dioramas, maps, lithographs, photographs, and rare books that document the life of the people of Mumbai and the history of the city from the late 18th to early 20th centuries. Since the establishment of the Museum Trust in 2003, the Museum has augmented its permanent collection with new acquisitions, to create a comprehensive representation of the city’s art and culture from the 19th century onwards, including contemporary art. The curatorial strategy and display highlight the primary themes within the collection.\n\nOvernight in Mumbai.",
                },
                {
                    title: "DEPART MUMBAI",
                    description:
                        "Breakfast in the hotel.\n\nNote: Hotel check out is at 1200 hours\n\nLater in time transfer to Mumbai International Airport Terminal 2 to board the flight for onward journey.\nEnd of our Services",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
            ],
        },
    },
    {
        img_url:
            "https://www.agoda.com/wp-content/uploads/2024/06/ancient-Varanasi-city-architecture-featured.jpg",
        name: "Classical India Itinerary",
        duration: "9 Nights • 10 Days",
        slug: "classical-india-itinerary",
        tour: {
            location: "Jaipur – Agra – Khajuraho – Varanasi",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                'This memorable tour will take you to the world famous Golden Triangle destinations of Delhi, Agra and Jaipur.The Golden Triangle Tour in India is a captivating journey that takes you through some of the country’s most iconic and culturally rich destinations: Jaipur, Agra, Khajuraho, and Varanasi. Starting in Jaipur, the "Pink City," you\'ll be enchanted by its royal palaces, majestic forts, and vibrant markets. In Agra, the world-famous Taj Mahal awaits, a symbol of love and architectural brilliance. The tour then takes you to Khajuraho, renowned for its stunning temples adorned with intricate, ancient sculptures depicting diverse aspects of life. Finally, the spiritual heart of India, Varanasi, offers an immersive experience of sacred rituals along the Ganges River, where the timeless traditions of India come to life. This golden route offers a perfect blend of history, art, spirituality, and architectural grandeur, making it an unforgettable exploration of India’s cultural legacy.',
            destinations_covered: [
                {
                    name: "DELHI",
                    description:
                        "Delhi, the vibrant capital of India, is a fascinating blend of old-world charm and modernity. From the historic monuments of Red Fort and Qutub Minar to the bustling markets of Chandni Chowk and the grand avenues of Lutyens' Delhi, the city offers a rich tapestry of history, culture, and contemporary energy. With its mix of ancient traditions and cosmopolitan flair, Delhi serves as a captivating gateway to India’s diverse heritage.",
                },
                {
                    name: "JAIPUR",
                    description:
                        "Jaipur, the capital of Rajasthan, is a city steeped in royal history and vibrant culture, often referred to as the \"Pink City\" due to its stunning terracotta-colored architecture. Known for its majestic palaces, grand forts like the Amber Fort, and ornate buildings such as the Hawa Mahal, Jaipur offers a glimpse into India's regal past. The city's bustling bazaars, rich craftsmanship, and festivals like Teej and Diwali make it a sensory delight, blending tradition with modern-day vibrancy. ",
                },
                {
                    name: "AGRA",
                    description:
                        "Agra, home to the world-renowned Taj Mahal, is a city that embodies India's rich Mughal history and architectural splendor. Beyond the iconic white marble monument, Agra is home to other architectural gems like the Agra Fort and the Fatehpur Sikri, which showcase the grandeur of the Mughal Empire. Located on the banks of the Yamuna River, Agra offers a unique blend of history, culture, and beauty, making it an unmissable stop on any tour of India. Whether you’re marveling at the Taj Mahal at sunrise or exploring its bustling markets, Agra leaves a lasting impression of India’s majestic past.",
                },
                {
                    name: "KHAJURAHO",
                    description:
                        "Khajuraho, a UNESCO World Heritage site in Madhya Pradesh, is famous for its stunning temples adorned with intricate and sensual sculptures that depict various aspects of life, from divine to earthly. The Khajuraho Group of Monuments showcases remarkable artistry, with over 85 temples originally built between the 9th and 12th centuries, though only around 20 have survived. These temples, dedicated to Hindu and Jain deities, are not just architectural wonders but also a celebration of India's rich cultural heritage, offering a fascinating glimpse into ancient Indian art, spirituality, and history.",
                },
                {
                    name: "VARANASI",
                    description:
                        "Varanasi, one of the oldest continuously inhabited cities in the world, is the spiritual heart of India and a major pilgrimage destination for Hindus. Situated on the banks of the sacred Ganges River, the city is a mesmerizing blend of ancient traditions, religious rituals, and vibrant street life. The iconic ghats of Varanasi, where devotees perform daily rituals and ceremonies, provide a powerful and evocative experience, especially during sunrise. With its narrow lanes, historic temples like Kashi Vishwanath, and timeless spiritual atmosphere, Varanasi offers an unforgettable journey into India's profound cultural and spiritual heritage.",
                },
            ],
            itinerary_outline: [
                {
                    title: "ARRIVE IN DELHI",
                    description:
                        "Meeting, assistance on arrival and transfer to hotel by our representative.\n\nDelhi, a delightful paradox of the old and the new, quickly overwhelms the visitor with its myriad charms. Being a vibrant cultural melting pot and shaped by the influence of different powerful rulers over hundreds of years, the destination has acquired a character with many different shades for the traveller to explore and experience. If Old Delhi assails the senses with its age-old traditional bazaars and choc-a-block serpentine streets, New Delhi casts a spell with its pristine colonial-era landmarks and well-maintained monuments.\nIn the afternoon, there will be a quick orientation tour followed by a visit to Bangla Sahib (Sikh Gurudwara). It’s one of the holiest Sikh shrines and has a sacred pool. Overnight at the hotel.",
                },
                {
                    title: "DELHI SIGHTSEEING",
                    description:
                        "After breakfast, proceed for a sightseeing tour of Old Delhi. Drive past the magnificent Red Fort. This huge fort in red sandstone was built by the Mughal emperor Shah Jahan and was home to generations of royals till 1857.\n\nAlso, visit Jama Masjid, the last example of Shah Jahan’s architectural genius. It remains one of the grandest mosques in the world and the courtyard alone can accommodate more than 25,000 people. The traditional markets of Old Delhi are a delightful mix of craft, food, and cultural activities. You will also experience a cycle rickshaw ride through the winding alleys and bazaars of Chandni Chowk. The Raj Ghat is a lush green memorial park on the banks of the River Yamuna. There is a simple black-marble platform here marking Mahatma Gandhi’s cremation site.\n\nThe afternoon tour of New Delhi will take you to Qutab Minar, Humayun’s Tomb, and Laxminarayan Temple. You will also drive past India Gate, Parliament House and Rashtrapati Bhawan (President’s House).\n\nBuilt and restored in phases by different rulers, the Qutub Minar is a soaring 73 metre tall minaret and one of the most stunning structures in the country. There are many other monuments as well in the Qutub Minar complex. Humayun’s Tomb is an outstanding symbol of the love of a lady for her man! This stunning monument was built on the orders of Humayun’s wife in his memory. It is even said that Shah Jahan was inspired to build the Taj Mahal by Humayun’s Tomb.\n\nThe Laxminarayan Temple or Birla Mandir is dedicated to Lord Vishnu and his consort, Goddess Laxmi. The temple complex is spread over 7.5 acres and has many shrines, fountains, and a large garden with.\n\nThe India Gate is an Arc-de-Triomphe kind of archway built as a war memorial in the honour of 60,000 soldiers of the British Indian Army who died in the Afghan wars and the First World War. High on Raisina Hill stands the Rashtrapati Bhawan or the erstwhile Viceroy’s House. It is larger than Versailles. The Presidential Palace is flanked by the identical Secretariat buildings ‘North’ and ‘South Blocks, which are colloquially called the corridors of power. The Parliament House, built in a circular coliseum design, is the place where the constitution of independent India was drafted. It’s the seat of the ‘powers that be’.\n\nOvernight at the hotel.",
                },
                {
                    title: "DELHI - JAIPUR BY ROAD (265 KMS / 05 HRS DRIVE)",
                    description:
                        "In the morning, we will drive to Jaipur and stop for lunch at Samode. The Samode Palace, Samode Haveli and Samode Bagh (Garden) are royal heritage structures with centuries’ old history. These are now part of the Heritage group of hotels under the flagship name of ‘Samode’.\n\nJAIPUR:\n\nFood fit for royalty, lots of stunningly beautiful historical monuments, a merry shopping scene and legendary Rajput hospitality – Jaipur offers all this and a lot more. The thriving bazaars abound with rich traditional textiles, handicrafts and exquisite gemstones. At sunset, the mellow golden rays bathe the largely pink façade of Jaipur’s buildings in an indescribably beautiful way.\n\nIn the evening, attend an ‘aarti’ (prayer ritual ceremony) at Birla Mandir (modern Hindu temple).\nOvernight at the hotel.",
                },
                {
                    title: "JAIPUR SIGHTSEEING",
                    description:
                        "Head to Amer Fort in the morning. You will ride an elephant to the fort.\n\nThe weather-beaten façade of the nearly 420-year old Amer Fort belies the elegant beauty of its majestic interiors. Some of the most spectacular structures of the fort are ‘Diwan-i-Aam’ (hall of public audience), ‘Sheesh Mahal’ (glass palace), and ‘Sukh Mahal’ (pleasure palace). On the way to Amer Fort, there will be a brief photography stop at Hawa Mahal. This five-storeyed palace strongly fascinates with its pyramidal shape and hundreds of jharokhas (windows). Hawa Mahal means ‘Palace of Winds’ and it truly lives up to its name as the palace stays breezy even during the blistering summers of Rajasthan.\n\nAfternoon city tour begins with a visit to the Maharaja’s City Palace. Built on the orders of Sawai Jai Sigh II, the City Palace is a blend of Mughal, Rajput and European architectural styles as it was built in parts by different succeeding rulers. The Chandra Mahal (Moon Palace) here has been turned into a museum and has lots of interesting exhibits. Later, you will visit Jantar Mantar. It’s the world’s largest observatory carved in stone and marble. Many of the huge ancient instruments here are still in working condition.\n\nOvernight at the hotel.",
                },
                {
                    title: "JAIPUR - AGRA BY ROAD (221 KMS / 05 HRS DRIVE)",
                    description:
                        "In the morning, drive to Agra.\n\nOn the way, we will stop at Fatehpur Sikri. Built by Emperor Akbar in the honour of Sufi saint Salim Chishti, Fatehpur Sikri (city of victory) was the Mughal capital for 13 years. It was the first planned city of the Mughals and also the first one to be designed with an amalgamation of Indian, Persian and Islamic architectural styles. Continue your drive to Agra. On arrival, check in at the hotel.\n\nVisit Taj Mahal in the afternoon (closed on Fridays). The beautiful outcome of the grief-stricken Emperor Shah Jahan’s tribute to his deceased wife, stands tall in its pristine beauty and shelters Shah Jahan and Mumtaz who lie united in death here. Also visit the Agra Fort. The now UNESCO World Heritage site of Agra Fort was built in 1571 by the Mughal Emperor Akbar. The walls of this mammoth red sandstone structure run for a length of almost three kilometres!\n\nOvernight at the hotel.",
                },
                {
                    title: "AGRA - JHANSI BY TRAIN",
                    description:
                        "We leave Agra early today to catch the train to Jhansi and depart to Agra at 0800 hrs by Shatabdi Express and arrive at Jhansi at 1040 hrs.\n\nJHANSI-KHAJURAHO BY ROAD (198 KMS/06 HRS)\n\nOn arrival, drive to Khajuraho. On the way, we will stop at Orchha. The town of Orchha is full of spectacular palaces and temples built by the Bundela rulers in the 16th and 17th centuries. A prominent highlight is the Jehangir Mahal. This exceptionally beautiful specimen of Mughal architecture is built on a rectangular base and has a circular tower at each corner surmounted by a dome.\n\nContinue with your drive to Khajuraho. On arrival, check in to the hotel.\n\nIn the temple architecture of India, the Khajuraho Group of Monuments remains unique. This UNESCO World Heritage Site comprises a group of Hindu, Buddhist and Jain temples. The temples are well known for their nagara-style architectural symbolism and some erotic sculptures, supposedly based on the ancient Indian treatise called Kama Sutra. The erotic art sculptures form only a minority as most of the other sculptures are based on meditative postures, spiritual teachings, royalty and other aspects of life. Most of the temples were constructed during 950 AD to 1050 AD and today just about 20 temples survive out of the original 85 built during the 12th century. The temples are grouped into three geographical divisions: western, eastern and southern.\nOvernight at the hotel.",
                },
                {
                    title: "KHAJURAHO SIGHTSEEING",
                    description:
                        "You will go on a temple tour in the morning.\n\nThe Western group of temples is the largest and paramount group roughly split into two rows. The LakshmanaTemple, the Matangesvara Temple and the Varaha Temple form one complex, while the Visvanatha and Nandi temples are situated nearby. The Kandariya Mahadeva Temple, dedicated to Lord Shiva, is the largest of Khajuraho’s temples and is also considered to be one of the best examples of India’s medieval-era temples.\n\nThe Eastern group, situated in close proximity to the Khajuraho village, includes three Brahmanical temples known as Brahma, Vamana and Javari and three Jain temples; the Ghantai, Shantinath and Parshvanatha. The temple of Parshvanatha is the largest of the Jain temples in Khajuraho and the finest. It was originally dedicated to Adinath and later to Parshvanatha and is an excellent example of sensitive art without any sexual motifs. The Shantinath Temple has been classified as a Monument of National Importance by the Archaeological Survey of India.\n\nOvernight at the hotel.",
                },
                {
                    title: "KHAJURAHO - VARANASI BY FLIGHT",
                    description:
                        "Assisted transfer to the airport for your flight to Varanasi.\n\nUpon arrival, our assistant will meet you and help with transfer to hotel.\n\nVaranasi, the religious capital of Hinduism, is one of the oldest continuously inhabited cities in the world. The celebrated author, Mark Twain, rather philosophically described it as ‘older than history, older than tradition, older even than legend, and looks twice as old as all of them put together’. Full of deeply revered old temples, the city attracts countless pilgrims. Many Hindus believe that the one who dies in Varanasi attains Nirvana. The Ghats (steps leading to the water) of Varanasi on the banks of the Ganges are amongst the holiest places in India. In short, Varanasi offers a deeply moving spiritual experience. In the evening, experience this ancient town intimately by going on a leisurely rickshaw ride through its narrow streets and alleys.\n\nThe Ghats and temples are lit up with oil-lamp lights or candles. Participate in an `aarti’ ceremony (collective prayer) and watch the floating `diyas’ (lamps) on the river Ganges.\n\nOvernight at the hotel.",
                },
                {
                    title: "VARANASI - DELHI BY FLIGHT",
                    description:
                        "Go on an early morning boat cruise on the River Ganges and watch the ‘acts of faith’ performed on the Ghats lining the western banks of the Ganges. Right at the crack of dawn, devotees start offering prayers to the rising sun and perform other rituals. During the boat ride, you will get the chance to see the mesmerising sunrise on the Ganges.\n\nAlso enjoy Yoga session with a local yoga teacher.\n\nIn the late morning, go on an excursion to Sarnath, around 10 km away. It’s one of the most important Buddhist pilgrim sites and is full of ancient relics, including stupas, monasteries and pillar edicts. Visit the Archaeological Museum, famed for its Ashokan symbol of four lions sitting back to back in a circle. Another prominent highlight is the Dhamek Stupa; it’s believed to be the spot where the Buddha gave the first sermon to his first five Brahmin disciples after attaining enlightenment.\n\nFinally, you will be assisted with airport transfer for your flight to Delhi. On arrival, assistance at airport and transfer to hotel.\n\nOvernight at the hotel.",
                },
                {
                    title: "LEAVE DELHI",
                    description:
                        "Assisted transfer to the international airport for your flight.\nEnd of our Services",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
            ],
        },
    },
    {
        img_url:
            "https://festorage.blob.core.windows.net/futurecreatures2021-22/files/entries/50507/image-3afd9423.jpeg",
        name: "Black Panther",
        duration: "6 Nights • 7 Days",
        slug: "black-panther",
        tour: {
            location: "Nagarhole",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Nestled in the picturesque Kodagu district of Karnataka, Nagarhole National Park, also known as Rajiv Gandhi National Park, is a sanctuary of untamed beauty and ecological diversity. Spanning across verdant forests, rolling hills, and tranquil lakes, this breathtaking park offers a glimpse into the heart of India’s rich wildlife heritage. Renowned for its lush landscapes and vibrant ecosystems, Nagarhole is home to a spectacular variety of flora and fauna, making it a must-visit destination for nature enthusiasts and wildlife lovers alike.\nThe park is particularly famous for its elusive and majestic residents, including the rare Black Panther, which roams the dense forests, and the regal Royal Bengal Tiger that prowls through the undergrowth. Nagarhole’s diverse habitats also support an array of other wildlife, including elephants, leopards, sloth bears, and over 270 species of birds, making it a haven for biodiversity.\nApart from its thriving wildlife, Nagarhole is also historically significant for its rich sandalwood timber and teak trees, which have long been prized for their quality and value. The forests of Nagarhole are not just a sanctuary for animals but also a source of natural wealth, with the legendary sandalwood standing as a testament to the region's ancient heritage.\nWhether you're a wildlife photographer, a nature enthusiast, or simply someone looking to escape into the tranquility of the wilderness, Nagarhole National Park promises an unforgettable journey through one of India’s most captivating natural wonders.",
            destinations_covered: [
                {
                    name: "Bengaluru",
                    description:
                        'Bengaluru, the capital of Karnataka, is a dynamic blend of modernity and tradition, known for its thriving tech industry, lush parks, and rich cultural heritage. Often called the "Silicon Valley of India," the city is renowned for its innovative spirit, lively cafes, and cosmopolitan atmosphere, all set against a backdrop of historical landmarks and vibrant street markets. ',
                },
                {
                    name: "Nagarhole",
                    description:
                        "Nagarhole National Park, located in Karnataka's Kodagu district, is a pristine wildlife sanctuary renowned for its rich biodiversity and lush landscapes. Home to iconic species like the Bengal Tiger, Black Panther, and Indian Elephant, it offers a captivating escape into nature. The park’s diverse ecosystems, from dense forests to serene lakes, make it a paradise for wildlife enthusiasts and nature lovers.",
                },
            ],
            itinerary_outline: [
                {
                    title: "Arrive Bengaluru (by flight)",
                    description:
                        "On arrival at Bengaluru International Airport, you will be greeted by our representative who will transfer you to the hotel, explain and hand over all the travel-related documents, and further assist you in check-in at the hotel. Overnight stay at the hotel in Bangalore.",
                },
                {
                    title: "Bengaluru – Nagarhole (Flight + around 270 Kms - 6.5-hour drive)",
                    description:
                        "After breakfast drive to Nagarhole National Park. On arrival check into the Kabini River Lodge. After lunch goes for afternoon shared jeep safari /Jungle Activities to the national park.",
                },
                {
                    title: "Nagarhole (1/3 days)",
                    description:
                        "After breakfast, morning and afternoon jeep safari/activities. \nNagarhole National Park is one of India’s premier Tiger Reserves along with the adjoining Bandipur Tiger Reserve. This park was declared the thirty sevenths Project Tiger, Tiger reserves of India in 1999. It is part of the Nilgiri Biosphere Reserve. The Western Ghats Nilgiri sub-cluster of 6,000 km2 (2,300 sq. mi), including all of Nagarhole National Park, is under consideration by the UNESCO World Heritage Committee for selection as a World Heritage Site.\nThe park has rich forest cover, small streams, hills, valleys, and waterfalls. The park has a healthy predator-prey ratio, with many tigers, Gaur, elephants, Indian leopards, and deer (Chital, Sambar, etc.)\nMeals and overnight at Kabini River Lodge.\n\n",
                },
                {
                    title: "Nagarhole (2/3 days)",
                    description:
                        "After breakfast, morning and afternoon jeep safari/activities. \nA jeep safari in Nagarhole National Park is the ultimate way to explore its diverse ecosystems and spot some of its most elusive wildlife. As you journey through the park’s dense forests and open grasslands, you may encounter Bengal Tigers, Black Panthers, elephants, and a myriad of bird species. Guided by expert naturalists, the safari offers an immersive experience, with the chance to learn about the park’s rich flora and fauna. For an added thrill, the early morning and late afternoon safaris often provide the best opportunities to witness the park’s wildlife in action.\nMeals and overnight at Kabini River Lodge.",
                },
                {
                    title: "Nagarhole (2/3 days)",
                    description:
                        "After breakfast, morning and afternoon jeep safari/activities. \nThe safari experience in Nagarhole is truly unparalleled, offering a thrilling and intimate encounter with wildlife in its natural habitat. Whether it’s the adrenaline rush of spotting a Royal Bengal Tiger or the awe-inspiring sight of a herd of elephants crossing the trail, every safari promises a sense of adventure and discovery. The park's varied terrain—from dense forests and grassy meadows to serene lakes—provides a perfect backdrop for wildlife sightings, making each safari a unique and unforgettable journey. With expert guides who share their deep knowledge of the park's ecosystem, Nagarhole is not just a safari destination; it’s an adventure that connects you to the wild in its purest form.\nMeals and overnight at Kabini River Lodge.",
                },
                {
                    title: "Nagarhole (3/3 days)",
                    description:
                        "After breakfast, morning and afternoon jeep safari/activities. \nOther mammals at Nagarhole National Park include the gray langur (Presbytes entellus), bonnet macaque (Macaca radiata), jungle cat, slender loris (Loris tadigradus), leopard cat (Felis bengalensis), civet (Viverricula indica and Paradoxurus Hermaphroditus), mongoose (Herpestes Fuscus and Herpestes Vitticollis), European otter (Lutra lutra), Indian giant flying squirrel (Petaurista petaurista), Indian giant squirrel (Ratufa indica), porcupine, golden jackal, chevrotain (Tragulus meminna), hare and pangolin (Manis crassicaudata). Over 250 species of birds are found at Nagarhole National Park. Besides the enormous variety of woodland birds, there are large congregations of waterfowl in the Kabini river. Birds range from blue-bearded bee-eater, scarlet minivet, and Malabar whistling thrush to the more common ospreys, herons and ducks. \nOvernight at Kabini River Lodge.",
                },
                {
                    title: "Nagarhole – Bengaluru – Fly back (around 250 Kms, 6.5-hour drive)",
                    description:
                        "This morning we say goodbye to Nagarhole National Park and drive down to board our flight to Bengaluru.\nEnd of our services !",
                },
            ],
            important_information: [
                "The driving hours given above from one city to another are based on the normal conditions of the roads and may vary. Any break for Food / Tea / Toilets / Sightseeing on the way will take extra time than the above given hours.",
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Multiple entry visa for India if you entering Bhutan from India and reinterring to India after. Bhutan tour",
            ],
        },
    },
    {
        img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CKBI8vEFAwH06RfgF149hqGDlz2u2RpBSQ&s",
        name: "Royal Rajasthan",
        duration: "9 Nights • 10 Days",
        slug: "royal-rajasthan",
        tour: {
            location: "Rajasthan",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                'Rajasthan is a land of kings, opulent palaces, stunning forts, and vibrant culture. Known for its rich history and royal heritage, it is one of India’s most captivating destinations for travelers seeking a blend of history, architecture, and natural beauty. Our Rajasthan Tour takes you through some of the most iconic cities in this royal state, beginning with Udaipur. Known as the "City of Lakes," Udaipur is famous for its majestic City Palace, serene Lake Pichola, and the intricate Jag Mandir. The romantic setting of Udaipur, surrounded by rolling hills and tranquil lakes, provides a perfect introduction to Rajasthan’s royal past. The city exudes a charm that has inspired filmmakers and travelers alike, making it a must-visit destination for those seeking history and natural beauty.\n\nThe journey then moves on to Ranakpur, a peaceful town in the Aravalli Range, which is home to the stunning Ranakpur Jain Temple. Known for its incredible marble architecture and intricate carvings, this temple is a serene and spiritual stop on your Rajasthan journey. From Ranakpur, head to Jodhpur, the "Blue City," famous for its vibrant blue-painted houses and the magnificent Mehrangarh Fort. The city’s historic charm is complemented by its bustling markets and traditional handicrafts. Next, explore Pushkar, a holy town with its sacred Pushkar Lake and the only Brahma Temple in the world, offering a unique spiritual experience. Finally, visit Jaipur, the capital city, also known as the "Pink City," where iconic landmarks like the Amber Fort, Hawa Mahal, and City Palace stand as testaments to the region’s royal legacy. Each city in this tour reflects the regal splendor of Rajasthan, offering travelers an unforgettable experience of majestic architecture, culture, and traditions.',
            destinations_covered: [
                {
                    name: "DELHI",
                    description:
                        "As the capital of India, Delhi is a bustling metropolis that blends rich history with modernity. From the imposing Red Fort and Qutub Minar to the grand India Gate, Delhi offers a window into India’s past. The vibrant streets of Chandni Chowk, alongside the serenity of Lotus Temple and Humayun’s Tomb, provide a complete experience of diverse cultures, monuments, and culinary delights. A true fusion of tradition and contemporary life, Delhi sets the stage for your Rajasthan journey.",
                },
                {
                    name: "UDAIPUR",
                    description:
                        'Udaipur, often called the "City of Lakes," is one of Rajasthan’s most romantic cities, renowned for its stunning Lake Pichola and the majestic City Palace. This city is a blend of historical grandeur and natural beauty, with beautiful palaces, temples, and gardens nestled beside peaceful lakes. The intricate Jag Mandir, the mesmerizing boat rides on Lake Pichola, and the surrounding Aravalli hills create a magical atmosphere, making Udaipur a dream destination for travelers.',
                },
                {
                    name: "RANAKPUR",
                    description:
                        "Ranakpur is a serene town nestled in the Aravalli Range, famous for its stunning Ranakpur Jain Temple, one of the most intricate and beautiful examples of Jain architecture in India. The temple, built in white marble, features 1,444 exquisitely carved pillars, each unique in design. Surrounded by lush forests and hills, Ranakpur offers a peaceful retreat for travelers seeking a blend of spiritual solace and architectural marvels.",
                },
                {
                    name: "JODHPUR",
                    description:
                        'Known as the "Blue City," Jodhpur is a vibrant blend of history, culture, and stunning architecture. The majestic Mehrangarh Fort, which rises above the city, offers panoramic views of the blue-painted houses below. The bustling Sardar Market and the beautiful Umaid Bhawan Palace further add to the city’s royal charm. Jodhpur is a perfect blend of Rajasthan’s regal past and lively present, with every corner showcasing the grandeur of the Marwar region.',
                },
                {
                    name: "PUSHKAR",
                    description:
                        "Pushkar is one of the most sacred towns in Rajasthan, famous for its holy Pushkar Lake and the only Brahma Temple in the world. This spiritual town, with its tranquil atmosphere, draws pilgrims and tourists alike. The lively Pushkar Bazaar is filled with colorful markets, vibrant handicrafts, and traditional Rajasthani culture. A visit to Pushkar offers a peaceful yet culturally immersive experience, ideal for those seeking spiritual serenity and local charm.",
                },
                {
                    name: "JAIPUR",
                    description:
                        'Jaipur, also known as the "Pink City," is a dazzling blend of royal history, architectural splendor, and vibrant culture. The iconic Amber Fort, the delicate latticework of the Hawa Mahal, and the grand City Palace are among the must-see landmarks in this historical city. The bustling bazaars, where you can shop for traditional Rajasthani handicrafts and jewelry, add to the city\'s allure. As the capital of Rajasthan, Jaipur encapsulates the grandeur and charm of royal Rajasthan, offering a rich cultural experience.',
                },
                {
                    name: "AGRA",
                    description:
                        "Agra, located on the banks of the Yamuna River, is home to one of the most iconic landmarks in the world—the Taj Mahal. This UNESCO World Heritage Site, a symbol of eternal love, is renowned for its stunning Mughal architecture and intricate marble craftsmanship. Agra is also home to other architectural marvels such as the Agra Fort, a UNESCO World Heritage Site, and the Fatehpur Sikri complex, showcasing the grandeur of the Mughal Empire. With its rich history and majestic monuments, Agra offers an unforgettable glimpse into India’s glorious past.",
                },
            ],
            itinerary_outline: [
                {
                    title: "ARRIVE IN DELHI",
                    description:
                        "We welcome you in the capital city of India, for a journey across the fascinating history-markers of medieval north India. Wars were fought and rulers changed in Delhi but ordinary lives were lived in relative continuity. Glimpses of these can be seen even today as the character of the city underwent massive changes in the last decades. In the lands fabled to have seen seven cities, signs of the old are continuously jostling with the new, presenting an ever-fascinating panorama. We welcome you to its chaos and stability, into its steadfastness and its impatience and into a delightful rainbow of amalgamation, producing a world completely its own.\nOvernight at the hotel.",
                },
                {
                    title: "SIGHTSEEING OF DELHI – LATE FLIGHT TO UDAIPUR",
                    description:
                        "Delhi is often distinguished as the old and new, the old referring to the pre –British habitations and the new is Lutyen’s Delhi, built to suit British sensibilities and the rapidly expanding city of independent India. However as we walk you through this city which has fascinated one and all for centuries, you will see that these demarcations are fluid with an intermixing of the old and new Delhi’s producing a supremely fascinating pulse to its city life.\n\nAfter breakfast we visit old Delhi, the capital built by emperor Shahjahan. The narrow winding lanes best traversed by a cycle-rickshaw house some of the oldest inhabitants and also the oldest trading establishments of the city. Visit the historic Jama Masjid, drive past the Red Fort. On our way back contrast the swift architectural changes brought by the colonial rulers mirroring styles from across Europe and adapted to the Indian environment. Drive past the Rashtrapati Bhavan (Presidential Palace) and the secretariat buildings, the impressive Rajpath and the World War I memorial arch, the India Gate.\n\nAfter lunch we will visit one of the oldest monuments of Delhi- next to the ruins of Quwat-ul-Islam (Light of Islam) Mosque in Mehrauli, standing tall with pride is the Qutub Minar. Learn about Delhi’s most curious antique here, the un-corroded Iron Pillar, which dates back to the 4th century AD believed to be sitting on the head of a ferocious snake. But more interesting than the mythology is the metallurgical skills of the ironsmith who produced this puzzle cast in iron. \n\nLater in the evening catch flight to Udaipur.\nOvernight at the hotel.",
                },
                {
                    title: "SIGHTSEEING IN UDAIPUR",
                    description:
                        "Enjoy an early breakfast before departing to a Maasai village followed by a morning game drive. The Maasai Mara National Reserve is home to millions of wild animals, including the fabled Big Five of lions, leopards, elephants, buffaloes and black rhinos as well as antelopes, gazelles and wildebeest among others. Return to the lodge for lunch and perhaps a siesta before setting off for an afternoon game drive, then returning to the lodge as the sun sets.\n\nAn optional early morning hot air balloon safari is available today. Pick-up is at about 04:30 hours and drop off is at about 10:00 hours. Flight time is approximately one hour and champagne breakfast and return transfers are included.\nOvernight in Maasai Mara on a full board basis.",
                },
                {
                    title: "DRIVE FROM UDAIPUR TO JODHPUR (262 KM / 05 HRS. DRIVE)",
                    description:
                        "We drive through the hills of Rajasthan, now showing signs of renewed life towards Jodhpur. On the way lies the beautiful and majestic Jain temple of Ranakpur. Built completely in marble, it took a whole 65 years to complete the carvings that adorn the temple walls and pillars and ceilings. Admire the fine craftsmanship which produced these dreamy creations bursting with life. For a long time a local legend has persisted that no one can count the real number of pillars that hold up the temple. So don’t be surprised if someone challenges you to do just that.\n\nLater we continue our drive to Jodhpur, lying at the very edge of the Thar dessert. Upon arrival, check-in at your hotel.\nOvernight at the hotel.",
                },
                {
                    title: "DRIVE FROM JODHPUR TO PUSHKAR (186 KM / 04 HRS. DRIVE)",
                    description:
                        "Amongst the many princely settlements of Rajasthan, Jodhpur is one of the most distinctive. Countless tales of courage speak of a 500 year old history and a culture which take pride in its strength and valour. The Mehrangarh fort stands witness to many battles. Learn about the intensely captivating history as you wander through the city. In an area prone to droughts, the shades of blue give a sense of relief. Look down from the fort at the soothing colours in sight, shimmering like a lake, an oasis, stuff that make the dreams of a desert people.\n\nAfter visiting Jaswant Thada, an imposing marble cenotaph we will turn towards the local bazaar. Whether you try out your bargaining skills of bargaining or simply prefer the visual treat that men and women unfold in the bazaars with their exquisite craftsmanship, you will take back one of your most vivid memories of artful puppets of the region. In the afternoon we start our journey to the breath taking Pushkar.\n\nAfter checking into Hotel we are free to explore, as the winds now cool, bring relief to the hot sands. The lights from the temples glistening in the lake waters transport us to a magical world.\n\nOvernight at the hotel.",
                },
                {
                    title: "DRIVE FROM PUSHKAR TO JAIPUR (143 KM / 04 HRS. DRIVE)",
                    description:
                        "Spend morning walking through the narrow lanes of Pushkar village dotted with hundreds of temples before we start our journey to Jaipur.\n\nIn the evening we will ride the rickshaw in the lively and colorful bazaar of the ‘Pink City’.\nOvernight at the hotel.",
                },
                {
                    title: "JAIPUR",
                    description:
                        "Compare the city of Old Delhi with the city of Jaipur, a city unique amongst its medieval contemporaries. The streets, palaces, temples, residences, shopping place are all in accordance to the ancient Hindu rules of Vastu Shastra. The pink wash was added in 1853 in honour of the visit of Prince Albert. Perched atop the hill looking down majestically is the Amber fort. We ride up into the palace astride elephants just like the Maharajas of yore. The plain and time worn exteriors belie the exquisite detail with which the interiors were crafted. Notice the gentle breeze which cools the interiors as it filters in through the jails, a special feature of building in Rajasthan. In the famed Sheesh Mahal look up and be prepared to feel a surge of color as the optical effect makes you a part of this royal past. Back in the city, we will drive past Hawa Mahal, where again notice the jails. The Maharaja’s City Palace, much of which has been converted into a museum covers almost one-seventh area of the city in a fortified unit. Here the Armoury Museum housing an impressive array of weaponry-pistols, blunderbusses, flintlocks, swords, rifles and daggers. Become one with the planetary bodies at Jantar Mantar, the largest stone and marble crafted observatory in the world.\n\nJaipur is also an interesting place for those interested in jewellery, clothes, carpets and other handicrafts items. The city is a veritable paradise for those seeking souvenirs of the craftsmanship of Rajasthan.\nOvernight at the hotel.",
                },
                {
                    title: "DRIVE FROM JAIPUR TO AGRA BY SURFACE (258 KM / 06 HRS)",
                    description:
                        "From the romance of the deserts we move towards the monument of a man’s love for his beloved, the city which treasures a lover’s dream. On our way we stop at Fatehpur sikri. In its imposing red sandstone structure lies the city envisioned by Emperor Akbar only to be abandoned a mere fourteen years later due to water scarcity. Upon arrival, check-in at your hotel.\nOvernight at the hotel.",
                },
                {
                    title: "AGRA – DELHI BY SURFACE (204 KM / 05 HRS. DRIVE)",
                    description:
                        "We get our first glimpse of the Taj in an early morning visit. Bathed in the morning sunlight is truly a labor of love, not only of the man who had it built but the over 20,000 men who labored for over 17 years. Look at the fine setting of stones into the marble, the craftsmanship that structured the towers, and the massive dome. Notice that the verses of the Quran appear engraved in the same size and the skill which went into it.\n\nLearn the many stories, myths, and legends surrounding this structure, which for years stood deserted on the banks of the river surrounded by forests not too long ago.\n\nWe will visit the Agra fort, strolling through its various portions, built successively over generations. Visit the extravagant chamber where Shah Jahan was imprisoned by his son. Ironically he was allowed the single pleasure of staring at the resting place of his beloved queen from a distance.\n\nTake back a memory of the Taj, indulge yourself in the exquisite marble artifacts being produced by the artisans of Agra.\n\nWe then drive to Delhi. Upon arrival, check-in at your hotel.\nOvernight at the hotel",
                },
                {
                    title: "DEPARTURE FROM DELHI",
                    description:
                        "We bid farewell to our guests in Delhi. As we journeyed through these romantic lands we hope that you fell in love just as much as we do with the beauty of our country.End of our Services.",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
            ],
        },
    },
    {
        img_url:
            "https://nws.ams3.cdn.digitaloceanspaces.com/content/668BC1E948ADB83BC3443FBBAF59257C/6283-2048.webp",
        name: " Red Panda and Rhino Trip",
        duration: "10 Nights • 11 Days",
        slug: "red-panda-and-rhino-trip",
        tour: {
            location: "Assam",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Red Panda and Rhino Trip offers a unique opportunity to explore two of India's most remarkable national parks—Singalila National Park and Kaziranga National Park—while immersing yourself in the rich flora and fauna of these diverse ecosystems. Starting with Singalila National Park, situated in the highest reaches of West Bengal, this park offers a spectacular range of altitudes from 2400 to 3636 meters, creating varied forest types such as Maling Bamboo, Magnolia, Oak, Rhododendron, and Silver Fir. As you trek through its dense forests, you’ll encounter rare and elusive wildlife like the Himalayan Black Bear, Red Panda, and Clouded Leopard, along with an array of colorful bird species like the Kalij Pheasant and Blood Pheasant. The park’s pristine surroundings and diverse habitats make it a haven for nature lovers and wildlife photographers alike.\n\nThe adventure continues at Kaziranga National Park, home to the world’s largest population of the endangered one-horned rhinoceros. Known for its vast grasslands, swamps, and woodlands, Kaziranga is a UNESCO World Heritage Site and a sanctuary for a variety of wildlife, including tigers, wild buffalo, and elephants. Experience the thrill of an exclusive jeep safari through the park, where you’ll have the chance to witness these majestic creatures up close in their natural habitat. This combination of exploring the high-altitude forests of Singalila and the wetlands of Kaziranga offers a rare opportunity to witness some of the rarest and most magnificent animals, including the Red Panda and the One-Horned Rhinoceros, making the Red Panda and Rhino Trip an unforgettable wildlife adventure.",
            destinations_covered: [
                {
                    name: "SINGALILA NATIONAL PARK",
                    description:
                        "Singalila National Park, located in the eastern Himalayas of West Bengal, is renowned for its breathtaking landscapes and rich biodiversity. The park stretches across altitudes of 2400 to 3636 meters, offering a diverse range of flora, including rare species like Rhododendron, Magnolia, and Silver Fir. It is home to elusive wildlife such as the Red Panda, Himalayan Black Bear, and Clouded Leopard, making it a haven for nature lovers and wildlife enthusiasts. With its stunning views of the Kanchenjunga mountain range and unique ecosystem, Singalila is a must-visit for those seeking adventure and tranquility in the heart of the Himalayas.",
                },
                {
                    name: "KAZIRANGA NATIONAL PARK",
                    description:
                        "Kaziranga National Park, located in Assam, is a UNESCO World Heritage Site known for its vast grasslands, wetlands, and rich wildlife. Famous for hosting the world’s largest population of the one-horned rhinoceros, Kaziranga is a sanctuary for some of India’s most iconic species, including tigers, wild buffalo, and elephants. The park’s diverse landscapes provide the perfect setting for thrilling jeep safaris, where visitors can explore the wild up close. With its abundance of flora and fauna, Kaziranga offers an unforgettable wildlife experience in one of India’s most important conservation areas.",
                },
            ],
            itinerary_outline: [
                {
                    title: "Arrive New Delhi (by flight)",
                    description:
                        "On arrival at the New Delhi airport, you will be met by our representative who will transfer you to your hotel and assist you in check in at the hotel. He will also hand over and explain all travel-related documents. Overnight stay is at the hotel.",
                },
                {
                    title: "New Delhi – Guwahati – Kaziranga (by flight + 250 kms/5 hrs drive)",
                    description:
                        "Early morning get transfer to the airport to board a flight to Guwahati at 0710 hrs to reach Guwahati at 0935 hrs. Meet our assistance on arrival at the Guwahati airport and drive to Kaziranga National Park 250kms / 5hrs drive. On arrival check into the resort. Lunch at resort and afternoon jeep safari to the national park.\n\nKaziranga National Park lies partly in Golaghat District and partly in Nagaon District of Assam. It is the oldest park in Assam and covers an area of 430 sq km along the river Brahmaputra in the North and the Karbi Ang long hills in the South. The National Highway 37 passes through the parking area and tea estates, hemmed by table-top tea bushes. The Park is a world heritage site and was declared a National Park in 1974. The landscape is of sheer forest, tall elephant grass, rugged reeds, marshes, and shallow pools.\n\nKaziranga National Park a world heritage site is famous for the Great Indian one-horned rhinoceros, the landscape of Kaziranga is of sheer forest, tall elephant grass, rugged reeds, marshes & shallow pools. It has been declared a National Park in 1974. Dinner and overnight at Resort.",
                },
                {
                    title: "Kaziranga",
                    description:
                        "Morning and afternoon jeep safaris to the national park. Breakfast and lunch at the Resort.\n\nKaziranga National Park is one of the last areas in eastern India undisturbed by a human presence. It is inhabited by the world’s largest population of one-horned rhinoceroses, as well as many mammals, including tiger, elephant, water buffalo, gaur, leopard cat, otter, and monitor lizard. Some of the birds that can be commonly sighted are the flamingo, crane, grey-headed fishing eagle, whistling teal, crested serpent eagle, open-billed stork, swamp partridge, osprey, cormorant, heron, and marsh harrier. Dinner and overnight stay at the resort.",
                },
                {
                    title: "Kaziranga",
                    description:
                        "Morning and afternoon jeep safaris to the national park. Breakfast and lunch at the Resort.Dinner and overnight stay at the resort.",
                },
                {
                    title: "Kaziranga – Guwahati – Bagdogra – Singalila (Flight + by surface 100 Kms/4 hour)",
                    description:
                        "Early breakfast, and transfer to the airport in the morning to board a flight at 1035 hours to arrive at Bagdogra at 1140 hrs. Met at the airport and drive to Singalila National Park gate (Manebhanjan) takes around 4 hrs. Then take safari Land Rovers to Habre’s Nest which takes another 2-2.30 hrs through the National Park. On arrival check into the Habre’s Nest. Dinner and overnight stay at the Habre’s Nest.",
                },
                {
                    title: "Singalila National Park",
                    description:
                        "The morning will start wildlife activity around Habre’s Nest after breakfast. Go for birding with an in-house bird studio setup. Later proceed in search of Red Panda for the whole day with necessary breaks. Foods will be served at homestay or on fields depending on the activities.\n\nThe jungles in the east are treasure houses to the most precious and strange flora and fauna. One such treasure in the east is Singalila National Park in West Bengal. Established in 1986, the park is one of the few places on earth where you will come across Red Panda.\n\nThe incandescent view of Kanchenjunga Massif adorns the clear blue skies above the park. Each and every turn unfurls a pleasant surprise of wilderness and scenic beauty. Located in the Eastern Himalayas, you get the virgin views of the mountains spanning from Nepal to Bhutan.\n\nYou may get tired of clicking photos from your DSLR, but the park won’t stop bombarding you with beautiful vistas and wonders of nature. It is a heaven for wildlife photographers, nature lovers, and adventure enthusiasts. Overnight stay at Habre’s Nest.",
                },
                {
                    title: "Singalila National Park",
                    description:
                        "Follow the same schedule as the previous day. After breakfast goes for birding and in search of rare and exotic Red Panda.\nAll meals and overnight stay at Habre’s Nest.\n\nHabre’s Nest is an Indo-Nepal joint venture towards sustainable tourism around Red Panda and its conservation. Red Panda & their habitat is hugely threatened in this world and pushing them further towards extinction; we all need to save them for a better world. Habre’s Nest is dedicated to this cause and shares 20% of its profit for the Red Panda & its habitat conservation.",
                },
                {
                    title: "Singalila National Park",
                    description:
                        "Enjoy the similar schedule as the previous day. After breakfast goes for birding and in search of rare and exotic Red Panda.Monitor the surrounding Red Panda habitat for Red Panda conservation and research. Undoubtedly the best trackers around with a 100% success rate till now. Who better to have as your host! Members of the house are unique in their own way and ever-ready to give you the exclusive experience.\nAn experiential homestay that provides the highest quality Red Panda tour experience above 10,000 ft bordering India (Singalila) & Nepal (Illam). Unlike resorts & lodges at Habre’s Nest, guests are part of a villager’s Home and experience their life.\nAll meals and overnight stay at Habre’s Nest.",
                },
                {
                    title: "Singalila National Park",
                    description:
                        "\nEnjoy the similar schedule as the previous day. After breakfast goes for birding and in search of rare and exotic Red Panda.\nTinchule-Singalila is a Birding Paradise. More than 300 species of birds found here. It has a huge list of exotic birds like- Blood Pheasant, Satyr Tragopan, Kalij Pheasant, Brown and Fulvous Parrotbills, Rufous-vented Tit, and Old World babblers like the Fire-tailed Myzornis and the Golden-breasted Fulvetta, Rosefinchs, bull finches, Wran Babblers, Laughingthrushes, Nuthatchs, Treecreepers, Yahunas, Minivets, Partriges and many more. One of the best places to see sunrise and sunsets, Sandakhphu top is the highest peak in West Bengal and offers the best view of Kangchenjunga also known as “Sleeping Buddha” or Sleeping Shiva”.\nAll meals and overnight stay at Habre’s Nest.",
                },
                {
                    title: "Singalila – Bagdogra – New Delhi (Flight + by surface 100 Kms/4 hour)",
                    description:
                        "After Breakfast check out from The Habre’s Nest drive to Bagdogra by 2 pm. After reaching the airport board a flight to New Delhi at 1550 hours. Arrive in New Delhi at 1805 hrs. and transfer to the hotel. Overnight stay at New Delhi hotel.",
                },
                {
                    title: "New Delhi Fly back home",
                    description:
                        "After breakfast leave for the international airport to board a flight back home or onward destinations.\nEnd of our services.",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "The driving hours given above from one city to another are based on the normal conditions of the roads and may vary. Any break for Food / Tea / Toilets / Sightseeing on the way will take extra time than the above given hours.",
            ],
        },
    },
    {
        img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cUJy--T6W3GgckNmmPkUyOhpY5VDV4yUjQ&s",
        name: "On Forsyth trail Satpura and Pench national park safari",
        duration: "9 Nights • 10 Days",
        slug: "on-forsyth-trail-satpura-and-pench-national-park-safari",
        tour: {
            location: "Madhya Pradesh",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "\nForsyth Trail Satpura and Pench National Park Safari is an exciting adventure curated by our travel company to explore two of India’s most enchanting wildlife destinations—Satpura National Park and Pench National Park. This tour takes you on a thrilling journey through the lush forests, diverse wildlife, and captivating landscapes of the central Indian hinterland. Starting with the lesser-explored Satpura National Park, you will experience the rich biodiversity of the region, including sightings of tigers, leopards, sloth bears, and various species of birds. The park is known for its pristine wilderness, diverse terrain, and unique opportunities for jungle walks and boat safaris along the Denwa River.\n\nNext, the tour leads you to the famous Pench National Park, which inspired Rudyard Kipling’s The Jungle Book. Here, you’ll embark on exciting safari rides through dense forests and open meadows, with the chance to spot the elusive Bengal tiger, wild dogs, deer, and an abundance of birdlife. The journey through these two incredible parks offers a perfect mix of adventure, nature, and wildlife photography. Whether you’re a nature enthusiast or a seasoned safari-goer, the Forsyth Trail Satpura and Pench National Park Safari promises an unforgettable experience, immersing you in the heart of India’s wildlife heritage.",
            destinations_covered: [
                {
                    name: "PENCH NATIONAL PARK",
                    description:
                        "It is great fun to experience the raw nature, rustic culture of wildlife resorts and not to forget the mesmerizing opportunity to sight wild animals in their natural behavior.  Pench National Park is the first and the most important site for tiger lovers and this package allows one to explore this site in a brilliant way. Spot important animals in this park are leopards, wild dogs, wild cats, foxes, sloth bears, hyenas, langurs, wild boars, and jackals. Reptiles including pythons, cobras, krait, and other varieties of snakes are also found in this National Park.",
                },
                {
                    name: "SATPURA NATIONAL PARK",
                    description:
                        "Satpura National Park is among the priceless gems in the crown of the rich biodiversity of Madhya Pradesh. This amazing wildlife park of Madhya Pradesh, teeming with an exotic diversity of flora and fauna, was established in 1981, and since then, it is enticing wildlife lovers from India and outside. In fact, you do not necessarily have to be a wildlife enthusiast in order to love this wildlife park, it is equally heavenly for nature lovers and explorers too. This wildlife haven caters to all kinds of visitors.  Owing to an impressive variety of flora and fauna, and scenic landscapes, Satpura National Park is a popular name among nature photographers as well as naturalists.",
                },
            ],
            itinerary_outline: [
                {
                    title: "Arrive New Delhi",
                    description:
                        "On arrival at the New Delhi airport, you will be met by our representative who will transfer you and assist you in check-in at the hotel. He will hand over and explain all the travel-related documents. Overnight stay at the hotel in New Delhi.",
                },
                {
                    title: "New Delhi – Bhopal – Satpura (Flight + 180 kms, 3hrs drive )",
                    description:
                        "Early morning transfer to airport to board a flight to Bhopal at 0555 hrs. Met at Bhopal airport at 0720 hrs and transfer to Satpura National park 180kms, 3 hrs drive. On arrival check into the lodge. Lunch and afternoon game drive to the national park. Dinner and overnight stay at the lodge.",
                },
                {
                    title: "Satpura",
                    description:
                        "Host of activities in this national park to choose from apart from the Jungle safari, like, choice of Canoe, Motor Boat, walking safari, elephant ride & night safaris in the buffer forest.\n\nSatpura National Park is very rich in bio-diversity. Its fauna comprises of Spotted Dear, Indian Bison(Gaur), Tigers, Leopards, Wild boar, Wild dog (locally called Dholes), Sloth bear, Blackbuck (unique attraction), Porcupine, Sambhar, Four Horned antelopes (Chowsingha), Smooth otter, Pangolin, Marsh crocodile, Languars, etc. Indian Giant squirrel is the special feature of Satpura National Park as it is rare in India now. Sighting of Leopards, Gaurs, Wild Dog, Sloth Bear is good in comparison to other national parks of Central India. Bird-watching in Satpura National Park is great. Here very frequently we can see a variety of birds during stay and safari. Tiger sighting of this national park is not so impressive as compared to nearby Bandhavgarh, Kanha, or Pench national parks. So it is required when we go for jungle safari in National park, we should not go with the single mindset of tiger-sighting but enjoy sighting all members of National park as they equally share the jungle with tigers and are extremely beautiful creatures of nature.\nMeals and overnight at Jungle Lodge.",
                },
                {
                    title: "Satpura",
                    description:
                        "Morning game drives to the national park and later we will depart for Churna Camp through the national park with a Reni Pani Jungle Lodge naturalist between 2:30 and 3:30 pm. On this drive, guests may see Leopard, Sloth Bear, Indian Giant Squirrel, Four-Horned Antelope, Muntjac, and other common herbivores. If lucky, there is also a chance of seeing Wild Dog and Tiger. We reach Churna Camp by sunset where guests will be served early drinks and dinner. Food will be basic vegetarian Indian cuisine cooked at the Forest Rest House. At the camp, there is a resident Giant Flying Squirrel that we will attempt to see.\nOvernight at forest guest house at Churna Camp.",
                },
                {
                    title: "Satpura",
                    description:
                        "Wake up will be half an hour before sunrise and departure at sunrise. We will do a short game drive in the forests around Churna where there is a significant amount of predator movement. Near Churna Camp there is a site with pre-historic rock paintings. If you are interested in seeing these rock shelters the early morning hours can be used to arrange a visit. After the drive, we will have breakfast at the camp. Post breakfast we will depart for the Lodge and end the safari before 11:00 am. Lunch at the lodge and afternoon boat safari, canoeing, walking safari & elephant safari subject to availability. Overnight stay at the lodge",
                },
                {
                    title: "Satpura - Pench (260 kms/5-6 hrs drive)",
                    description:
                        "Morning game drive to the national park and later drive to Pench national park 260 kms/5-6 hrs drive. On arrival check into the lodge.\nDinner and overnight stay at the lodge.",
                },
                {
                    title: "Pench",
                    description:
                        "Breakfast and lunch at the hotel. Morning Jeep safari to the National park and afternoon visit to Khursapar zone of the national park.\nPench welcomes you with open arms and without conditions. This park is located between four different Mountain Ranges – Aravali, Vindhyanchal, Satpura, and Maikal. The tracks are smoother, the trees are thicker with dense undergrowth, perhaps one reason why the herbivore population here is larger in size compared to Kanha and Bandhavgarh.\nThe skies are home to eagles and their distinctive calls. Pench National Park, nestling in the lower southern reaches of the Satpura hills is named after Pench River which flows from north to south through the Pench National Park. It is located on the southern boundary of Madhya Pradesh.\nIn 1992, Pench has been included under the umbrella of “Project Tiger” as the 19th Project Tiger Reserve.\nA total of 758 Sq.kms of this Southern Indian tropical moist deciduous forest has its extent mingling with the tropical dry deciduous teak. The area is crisscrossed by a number of streams and ‘Nallahs’ most of which are seasonal. Though the Pench River dries up in April end, a number of water pools locally known as ‘dohs’ are found which serve as water holes for the wild animals. The Pench Reservoir at the center of the park is the only major water source during the pinch period.\nAs a prey concentration is high along the Pench River, the tiger usually inhabits and frequents this belt. Leopards though generally operate in the peripheral areas but are occasionally seen in the deep forest also. Jungle cats are commonly seen. Leopard cats, small Indian civets, and palm civets are seen rarely.\nIn Pench, Cheetal, Sambar, are commonly seen grazing on the open sites on roadsides and banks of river & reservoir. Jackals can be seen in search of food anywhere in the Park. Packs of up to 15 or more wild dogs can be seen near Chhedia, Jamtara, Bodanala, and Pyorthadi areas of the Reserve. Herds of gaur can be spotted near streams and bamboo patches commonly in the summer months. Sloth beer occupies the rocky areas and favors Mahul bel infested forest. Chinkara is present in very small numbers and is found in open areas around Turia, Telia, and Dudhgaon villages.\nDinner and overnight say at the lodge",
                },
                {
                    title: "Pench",
                    description:
                        "Morning visit to Turia zone of the national park and afternoon visit to Teliya zone of the national park which is known for Wolf sighting.\n\nReturn to resort freshen up and ready for the night safari about 2 hrs to Wolf Sanctuary Zone permits Night safari within the Wild Jungles of Pench. Truly charming and surreal are among the few words which might truly describe the feeling of cool breeze as you roam in the national park. you’ll be able to feel a hypnotic pull as Mother Nature simply mesmerizes you, displaying her immense beauty in all forms and shapes. The safari starts just as the sun begins to set, making the trip more than simply bearable compared to the morning heat. as the guides begin reading the tracks and paw marks, a little bit of excitement stirs up as you know the tiger is close. Following the tracks one comes across all species of wildlife, from deer to hyenas to wild dogs, exotic birds to proud peacocks displaying their majestic feathers, basking in the last rays of sunlight for the day.\n\nMeals and overnight stay at the resort in Pench",
                },
                {
                    title: "Pench – Nagpur - New Delhi e(by road 100kms/2 hrs drive + Flight)",
                    description:
                        "Morning game drive to the national park and after lunch transfer to Nagpur airport to board at 1720 hrs to arrive New Delhi at 1900 hrs. Met at airport and transfer hotel. Overnight stay at the hotel in New Delhi",
                },
                {
                    title: "New Delhi Fly back home",
                    description:
                        "Morning free for leisure activities and later transfer to International airport to board a flight back home or onward destination.\nEnd of our services.",
                },
            ],
            important_information: [
                "Walking safari & elephant safari subject to the availability.",
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "The driving hours given above from one city to another are based on the normal conditions of the roads and may vary. Any break for Food / Tea / Toilets / Sightseeing on the way will take extra time than the above given hours. Satpura National park is closed every Wednesday for afternoon jeep safari.",
            ],
        },
    },
    {
        img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO4bFB5oypPZIJRDLoZ8gFvEuNdfDqb7wSFQ&s",
        name: "Multi Activity Ladakh",
        duration: "10 Nights • 11 Days",
        slug: "multi-activity-ladakh",
        tour: {
            location: "Ladakh",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "\nWelcome to Multi Activity Ladakh, your ultimate gateway to exploring the wonders of one of the most breathtaking destinations in the world! Nestled in the northernmost region of India, Ladakh is a land of rugged mountains, pristine lakes, vibrant culture, and untamed beauty. Whether you are an adventure seeker, a nature enthusiast, or a cultural explorer, our range of multi-activity tours and experiences ensures that there is something for everyone.\n\nFrom thrilling treks across the snow-capped peaks of the Himalayas to the serene landscapes of Pangong Lake, from biking on the world’s highest motorable roads to immersing yourself in the spiritual sanctuaries of ancient monasteries—Ladakh offers a unique blend of activities that promise to leave you awestruck.\n\nAt Multi Activity Ladakh, we specialize in curating customized itineraries that combine adventure, culture, nature, and relaxation. Our expert guides will lead you through some of the most iconic and off-the-beaten-path locations, ensuring that you experience the best of Ladakh, whether you are seeking a high-octane adventure or a peaceful retreat.\n\nJoin us on a journey through this magical land, and let Ladakh’s timeless beauty, warm hospitality, and exhilarating activities make your travel experience unforgettable!",
            destinations_covered: [
                {
                    name: "STOK",
                    description:
                        "A quaint village nestled at the base of the Stok Range, is known for its stunning views of the surrounding peaks and valleys. The Stok Palace, home to the royal family of Ladakh, offers a glimpse into the region's regal past, while the Stok Kangri trek attracts adventure enthusiasts seeking to summit one of the highest peaks in the Ladakh range. Stok is also a great starting point for exploring the true essence of Ladakhi culture and landscape.",
                },
                {
                    name: "NIMMU",
                    description:
                        "Nimmu is a picturesque village, located at the confluence of the Zanskar and Indus Rivers. Known for its dramatic landscapes and traditional Ladakhi architecture, it offers a serene retreat amidst rugged mountains and lush green valleys. Nimmu is also famous for its ancient Nimmu Monastery, a site of religious and cultural significance, making it a perfect destination for both adventure seekers and spiritual travelers.",
                },
                {
                    name: "ULLE",
                    description:
                        "Ulle is a peaceful, remote village known for its breathtaking natural beauty. Surrounded by snow-capped peaks and lush fields, it offers travelers a chance to experience Ladakh's untouched landscapes. The area is ideal for those looking to disconnect and immerse themselves in nature, with hiking and photography opportunities at every turn. Ulle is a true hidden gem, perfect for those seeking tranquility away from the bustling tourist trails.",
                },
                {
                    name: "HEMIS SHUKPACHU",
                    description:
                        "Hemis Shukpachu is a charming and lesser-explored region that is home to the famous Hemis Monastery, one of the largest and most important Buddhist monasteries in Ladakh. The area is rich in history and culture, and the annual Hemis Festival, showcasing traditional music, dance, and rituals, is a major draw for travelers. The surrounding landscapes of rolling hills and valleys further add to the spiritual and serene atmosphere of this area.",
                },
                {
                    name: "SASPOCHEY VILLAGE",
                    description:
                        "It is a traditional Ladakhi village located on the banks of the Indus River, where time seems to stand still. The village’s cobbled streets, terraced fields, and vibrant houses provide a glimpse into the authentic lifestyle of Ladakhi people. Saspochey is a peaceful destination for travelers seeking a cultural immersion, with opportunities to visit local monasteries, learn about farming techniques, and experience Ladakhi hospitality at its best.",
                },
                {
                    name: "LADAKHI HIMALAYAS",
                    description:
                        "The Ladakhi Himalayas are a mesmerizing range of snow-capped peaks, deep valleys, and vast plateaus that offer some of the most spectacular trekking experiences in the world. The region is home to rugged terrain and high-altitude landscapes, making it ideal for trekking and mountaineering. With towering peaks like Stok Kangri, and remote villages tucked away in the mountains, the Ladakhi Himalayas promise unforgettable adventures and awe-inspiring views.",
                },
                {
                    name: "TSOMORIRI",
                    description:
                        "Tsomoriri Lake, one of Ladakh’s most pristine and mesmerizing high-altitude lakes, is surrounded by the majestic Tsomoriri Wetland Conservation Reserve, a haven for birdwatchers and wildlife enthusiasts. The lake’s turquoise waters, framed by snow-dusted peaks, create a breathtaking contrast against the arid, barren landscape. The serene beauty of Tsomoriri makes it a perfect destination for those seeking peace and solitude, as well as an ideal spot for camping and photography.",
                },
                {
                    name: "KARZOK MONASTERY",
                    description:
                        "Perched on the shores of the magnificent Tsomoriri Lake, Karzok Monastery is a spiritual sanctuary that offers travelers a glimpse into the monastic life of Ladakh. This remote monastery is home to a small but dedicated group of monks, and its serene surroundings are perfect for introspection and meditation. The monastery is also a base for exploring the breathtaking beauty of the Tsomoriri region, including trekking trails and opportunities to interact with the local nomadic community.  Each of these destinations offers a unique facet of Ladakh's diverse beauty—whether it’s the tranquility of the valleys, the grandeur of the mountains, or the cultural richness of its monasteries, there’s an adventure waiting for every traveler.",
                },
                {
                    name: "ULEY VALLEY",
                    description:
                        "The tranquil Uley Valley is a pristine paradise for nature lovers and adventure seekers alike. Known for its clear skies, alpine meadows, and majestic mountain views, the valley offers a perfect mix of relaxation and outdoor activities. Uley is also an excellent base for exploring the surrounding wilderness, with hiking trails that take you through dense forests, past picturesque lakes, and into remote villages where you can experience traditional Ladakhi culture firsthand.",
                },
            ],
            itinerary_outline: [
                {
                    title: "Delhi – Leh – Stok",
                    description:
                        "This morning, transfer to the airport for your flight to Leh (3500/11482ft).\n\nFollowing your arrival in Leh, you will be met for a half-hour transfer to Stok, where you check in to your hotel, Stok Palace. The rest of the day is at leisure, as here on your day of arrival it is medically mandated to undergo minimal exertion to enable your body to acclimatize to lower oxygen levels at this high altitude. Because of this, we won’t be partaking in any strenuous activities today. In the late afternoon, perhaps take a stroll through the peaceful village of Stok and engage with the friendly local community, followed by a welcome dinner featuring Ladakhi folk dances at the Stok Palace.\n\nLate afternoon, you may take a stroll through the peaceful village of Stok and engage with the joyous local community.\n\nWelcome Dinner with Ladakhi Folk Dances at the Stok Palace. Overnight Stok.",
                },
                {
                    title: "Stok",
                    description:
                        "Begin today with a guided meditation with a monk and become in tune with your surroundings. Have breakfast before we depart on a hike to Stok Nala (nala means ‘stream’). The trail goes through the village and ascends gradually for an hour, past barley fields, enclosed gardens and apricot orchards, to the head of the alluvial plain where it enters the stream’s gorge. The worn trail is used for the summer movement of cattle and sheep to the higher pastures and by donkeys and zos carrying food and other supplies between camps and villages. Return to the hotel for lunch.\n\nLater, we visit the Thiksey Monastery. This hilltop monastery houses a beautifully golden two-story statue of the Maitreya Buddha seated on a lotus and boasts a spectacular view of the valley. After lunch, continue on an orientation tour of Leh, visiting popular landmarks, including the magnificent Leh Palace. Continue on foot on a walking tour passing some enchanting old houses to the LAMO – Ladakh Arts & Media Organization. Listen to a short presentation by a Ladakhi scholar on the architectural heritage of the old city. Enjoy the views of the old city from the terrace of the Munshi House as you sip on a cup of special Ladakhi tea with light snacks. The heritage exploration continues through the old city ending in the bazaar. The tour will end at the white-domed Shanti Stupa, perched upon a great vantage point over Leh, with spectacular views of the mountains.\nAccommodation: Stok Palace\nMeals: Breakfast, Lunch, Dinner\nActivity: 3 hrs Hike / Cooking demonstration / 3 hrs sightseeing tour",
                },
                {
                    title: "Stok - Nimmu",
                    description:
                        "Enjoy a delicious breakfast to start the day.\n\nThis morning you will take part in a ceremony at local monastery, where many people gather to take part. Check out from the palace hotel and depart to the entry point to raft on the Indus River. Board the raft and paddle past Ladakhi villages as we negotiate gentle low grade rapids till we reach the Indus – Zanskar confluence at Nimmu (10,300 ft), where we can witness the point where the two colors of the rivers combine. Here, we get off the raft and drive to today’s final destination of Nimmu House. In the evening, explore the tiny village of Nimmu and its peaceful surroundings, seeing its monasteries, old caravanserai, gardens and orchards.\nAccommodation: Nimmu House\nMeals: Breakfast, Lunch, Dinner\nTransfer: 2 hrs\nActivity: 1 hrs Monastery Ceremony / 2 hrs Rafting / 1 hr Nimmu village walk",
                },
                {
                    title: "Nimmu - Ulley",
                    description:
                        "This morning we check out from Nimmu House after breakfast and hit the road to make our first stop at Alchi Monastery, also known as Alchi Gompa, located near the small village of Saspul. It is one of the oldest monasteries built in Ladakh, dating back to the 11th century. You will then be driven to the beautiful villages of Tingmosgang and Tia, then continue our drive for an hour and half to today’s end destination of Uley.\n\nWe will stay the next three nights at the Snow Leopard Lodge, located at an altitude of about 13,000 feet. The six-room lodge is simply furnished with three bathrooms, and dining and sitting rooms that look out over the valley and the surrounding hills. The setup is basic but has comfortable beds, toilets and washing facilities.\nAccommodation: Snow Leopard Lodge\nMeals: Breakfast, lunch, Dinner\nTransfer: 2 hrs\nActivity: 1 hr Alchi Monastery visit / 2 hrs village visit",
                },
                {
                    title: "Ulley - Hike to Hemis Shukpachu",
                    description:
                        "Uley is located in the center of three interlocking valleys. These valleys house the villages of Saspul and the more substantial Hemis-Shukpachu. Today, after breakfast, we hike to the village of Hemis-Shukpachu (12,073 ft) which is a gradual hike up and down hills which will take four to five hours, with many opportunities to see wildlife, such as the bearded vulture, golden eagles, Tibetan hares, Himalayan marmots and Nayan sheep. We stop to enjoy a picnic lunch. Hemis-Shukpachu is a tranquil village with a small gompa, green pastures and babbling brook, making for an easy place to relax. In the village, enjoy a walk around and have tea at one of the local houses and converse with locals. We then drive back to Uley. In the evening, learn how to cook a Ladakhi meal in a traditional Ladakhi kitchen.\nAccommodation: Snow Leopard Lodge\nMeals: Breakfast, lunch, Dinner\nActivity: 4-5 hrs hike / Cooking demonstration",
                },
                {
                    title: "Ule - Hike to Saspochey",
                    description:
                        "Start the day with a tasty breakfast. Today we hike to Saspochey village (12,175 ft). Today’s hike is more difficult than the previous day which will take us around five hours, crossing a small stream and then hiking uphill until we reach the first ridge, where you can marvel at the amazing views of the Uley Valley. Enjoy a picnic lunch on route. We then head downhill for a small patch and later climb up the second ridge from where you will have the first view of Saspochey village. The hike from the ridge is downhill to the tiny village. Upon reaching the village, we sit in one of the local houses to relax and enjoy a cup of local tea. After a brief walk around the village we drive back to Uley.\n\nAccommodation: Snow Leopard Lodge\nMeals: Breakfast, lunch, Dinner\nActivity: 5 hrs hike",
                },
                {
                    title: "Ulley - Likir - Saboo - Cycling",
                    description:
                        "After breakfast and a short safety briefing, you will be ready to cycle approximately three hours down the Ladakhi Himalayas from Uley to Likir. The road crisscrosses its way on the mountainside up to the village. On arrival to Leh we visit REWA Ability Center Ladakh, where we meet and interact with differently abled children. Children from all over the Leh Valley come for treatment here and they love a friendly visit. We then transfer to a vehicle and drive to the village of Saboo (11,627 ft) located east of Leh to our hotel.\n\nAccommodation: Saboo Resort\nMeals: Breakfast, lunch, dinner\nTransfer: 2 hrs\nActivity: 3 hrs cycling / 1 hr REWA visit",
                },
                {
                    title: "Saboo - Tsomoriri",
                    description:
                        "Today after breakfast we embark on a full-day drive to Tso Moriri (14,835 ft), stopping along the way at the villages of Gya, Meru and Lhato (the place where the Indian plate collided with the Eurasian plate). Then we move across the very scenic and dizzying Tanglang La Pass (17,582 ft) – the world’s second highest motorable pass. Continue to the Tso Kar wetlands, comprising of twin lakes, separated by a freshwater stream which gives the place its unique characteristic of having both a brackish water lake as well as a freshwater lake naturally making this highly favorable in terms of habitat for the creatures that inhabit them. The drive takes you through some key ecosystems and protected wildlife areas.\n\nThe Tso Kar high altitude wetlands are considered to be one of the most protected biomes in the country, supporting strategic migrations and breeding grounds for some of the most endangered animals. Key species here include the Tibetan Wolf, Tibetan argali, blue sheep, red fox, sand fox, weasel, kiang (wild ass) and marmots. These lakes also host key breeding grounds for migrant avian species. Finally, drive uphill arriving to Tso Moriri. The brackish Tso Moriri is surrounded by snow-capped mountains. This unique habitat attracts many migratory waterbirds including Brahminy ducks, black-necked cranes, great crested grebes, teals, sand plovers and the rare bar-headed geese, which cross the Himalaya to breed here during the summer around the inlets of the lakes, along with the last population of Tibetan wild kiang in India, Tibetan gazelles among other amazing wildlife.\n\nThe tents are with all basic facilities, quality quilt and bedding with apt lightings and water connections. Electricity works from 6 pm to 10 pm only. Hot water bucket is provided on request and hot water bottle is also provided for the night. All meals are provided in a separate dining tent.\n\nAccommodation: Tented Camp\nMeals: Breakfast, Lunch, Dinner\nTransfer: 8 hrs",
                },
                {
                    title: "Tsomoriri - Changpa Nomads",
                    description:
                        "Start the day with breakfast at the camp. Spend the day hiking around the lake showcasing a myriad of colors and unique mammal and birdlife. Visit the small but interesting Karzok Monastery and explore this fascinating high-altitude desert which is the home of the Changpa nomads. Explore their ingenious way of life attuned now to this unforgiving terrain as they abide by their millennia-old legacies and legends – from yak wool tents, shearing Pashmina goats and stories of a thousand mountain spirits.\n\nAccommodation: Tented Camp\nMeals: Breakfast, lunch, dinner\nActivity: Full day to hike, birding, and interacting with local nomads (Walk at leisurely pace – 3 hrs morning / 3 hrs afternoon)",
                },
                {
                    title: "Tsomoriri - Leh",
                    description:
                        "After breakfast, depart on an early morning drive back to Leh (11,500 ft altitude) via Chumathang. Check into Hotel Grand Dragon in town and visit the markets for any last-minute purchases. Enjoy a farewell dinner at a local restaurant.\n\nAccommodation: Grand Dragon\nMeals: Breakfast, lunch, Dinner\nTransfer: 8 hrs",
                },
                {
                    title: "Leh - Delhi",
                    description:
                        "After breakfast, depart on an early morning drive back to Leh (11,500 ft altitude) via Chumathang. Check into Hotel Grand Dragon in town and visit the markets for any last-minute purchases. Enjoy a farewell dinner at a local restaurant.\n\nAccommodation: Grand Dragon\nMeals: Breakfast, lunch, Dinner\nTransfer: 8 hrs\nEnd of our Services.",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better)",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
            ],
        },
    },
    {
        img_url:
            "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2019/04/og-for-hemis-festival.jpg",
        name: "LADAKH – HEMIS FESTIVAL TOUR",
        duration: "6 Nights • 7 Days",
        slug: "ladakh-hemis-festival-tour",
        tour: {
            location: "Ladakh",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Embark on a once-in-a-lifetime journey to Ladakh, a land where the rugged beauty of the Himalayas and Karakoram ranges meets the tranquility of Buddhist spirituality. Ladakh, with its barren landscapes, pristine lakes, and ancient monasteries, offers a unique experience for travelers seeking both adventure and serenity. On this tour, you’ll explore the charming town of Leh, nestled in the heart of Ladakh, where Tibetan Buddhist culture thrives amidst breathtaking mountain vistas. Visit iconic monasteries like Thiksey, Spituk, and Hemis, each rich in history and spiritual significance, providing insight into the region's deep-rooted Buddhist traditions. As you explore, the stunning landscapes of Pangong Lake, Nubra Valley, and Tso Moriri will leave you in awe, offering an unforgettable experience of nature's grandeur.\n\nThe highlight of this tour is the vibrant Hemis Festival, one of Ladakh’s most significant cultural events. Held annually at the Hemis Monastery, this two-day festival celebrates the birth of Guru Padmasambhava, with a series of mesmerizing Cham dances, prayers, and rituals performed by the monks. The festival is not just a spiritual event but a cultural spectacle, showcasing Ladakhi music, traditional attire, and colorful festivities. As part of the tour, you will also have the chance to visit lesser-known gems like the Aryan Valley and Ridzong Gompa, where the untouched beauty of Ladakh's villages and monasteries provide a peaceful escape. With its blend of culture, spirituality, and natural beauty, the Ladakh – Hemis Festival Tour offers a deep dive into the heart of this magical land.",
            destinations_covered: [
                {
                    name: "LEH",
                    description:
                        "The capital of Ladakh, Leh is a charming town set amidst the rugged landscapes of the Himalayas. Known for its vibrant culture, ancient monasteries, and historical sites, Leh serves as the perfect base for exploring the region. With its picturesque markets, narrow lanes, and proximity to natural wonders like Pangong Lake and Nubra Valley, Leh offers a unique blend of adventure, culture, and serenity.",
                },
                {
                    name: "STOK PALACE",
                    description:
                        "Perched on the slopes of the Stok Range, Stok Palace is the traditional residence of the royal family of Ladakh. This 19th-century palace offers a glimpse into the region’s royal history and features beautiful architecture, intricate carvings, and a collection of royal artifacts. The palace is also a great starting point for treks to the Stok Kangri, one of the highest peaks in Ladakh, offering stunning views of the surrounding valleys and mountains.",
                },
                {
                    name: " LIKIR GOMPA",
                    description:
                        "Situated on a hill, Likir Gompa is known for its majestic 25-foot-tall Buddha statue. Founded in the 11th century, the monastery features beautiful frescoes and offers an insight into Ladakhi Buddhist culture, along with panoramic views of the surrounding mountains and valleys.",
                },
                {
                    name: "RIDZONG GOMPA",
                    description:
                        ' Ridzong Gompa: Ridzong Gompa, also known as the "Meditation Monastery," is a peaceful Buddhist monastery located in the remote Ridzong Valley. Set against a dramatic backdrop of barren mountains, this serene site is known for its striking architecture and spiritual ambiance. The monastery is an important center for meditation and monastic life, attracting those seeking tranquility and a deeper connection to Ladakhi Buddhist traditions.',
                },
                {
                    name: "PHYANG MONASTERY",
                    description:
                        "Phyang Monastery is a prominent Buddhist monastery located on a hilltop near Leh. Founded in the 16th century, this monastery is known for its impressive collection of Buddhist scriptures, murals, and a large golden statue of Maitreya Buddha. The monastery also hosts the Phyang Festival, a colorful celebration of Ladakhi culture and Buddhist rituals, offering visitors a unique cultural experience.",
                },
                {
                    name: "SPITUK GONAPA",
                    description:
                        "Perched on a hill overlooking the Indus River, Spituk Gonpa is one of Ladakh’s most important monasteries, dating back to the 11th century. The monastery is famous for its stunning views, a large collection of ancient Buddhist artifacts, and the annual Spituk Gustor Festival, which features traditional dance and religious ceremonies. Spituk offers a tranquil atmosphere and is an excellent spot to learn about Ladakhi Buddhism and culture.",
                },
                {
                    name: "HEMIS FESTIVAL",
                    description:
                        "The Hemis Festival is one of the most vibrant and widely celebrated cultural events in Ladakh, held annually at the Hemis Monastery. This two-day festival, typically celebrated in June or July, honors the birth anniversary of Guru Padmasambhava, the founder of Tibetan Buddhism. The highlight of the festival is the spectacular Cham dance, where monks perform intricate masked dances, embodying various deities and mythical figures to drive away evil spirits. The festival is also marked by traditional music, prayers, and the display of the sacred Guru Rinpoche Thangka, a large religious painting that is unveiled during the occasion. Attracting both locals and tourists, the Hemis Festival provides a unique opportunity to witness Ladakh's rich cultural heritage, Buddhist rituals, and lively celebrations. It’s a must-visit event for those wishing to experience the deep spiritual and cultural essence of Ladakh.",
                },
                {
                    name: "ALCHI",
                    description:
                        "Alchi Monastery, a UNESCO World Heritage Site, is renowned for its ancient Buddhist murals, statues, and intricate wood carvings. Situated along the banks of the Indus River, this 11th-century monastery stands as a testament to Ladakh’s cultural and religious history.",
                },
                {
                    name: "LAMAYURU",
                    description:
                        "Lamru is a remote and picturesque area near Leh, known for its striking lunar landscapes and traditional monasteries. The region's unique topography and quiet atmosphere make it a perfect place for trekking and spiritual exploration. With its rugged beauty and peaceful environment, Lamuru offers travelers a rare opportunity to connect with Ladakh’s untouched wilderness.",
                },
            ],
            itinerary_outline: [
                {
                    title: "LEH KUSHOK BAKULA AIRPORT",
                    description:
                        "Arrival at Leh Kushok Bakula airport our representative will meet & Greet you and transfer to the Hotel. This flight is one of the most sensational flights in the world. On a clear day from one side of the aircraft can be seen in the distance the peaks of K2, Nanga Parbat, Gasherbrum and on the other side of the aircraft, so close that you feel you could reach out and touch it, is the Nun Kun massif. You would take a little time to settle in and acclimatize since you have gone from a relatively low elevation in New Delhi to over (Altitude 11,000 feet). Overnight in Hotel.",
                },
                {
                    title: "VISIT STOK-TAKTHOK-CHEMDAY (4-5 hrs)",
                    description:
                        "Morning after the breakfast you will visit the Stok palace, Located in a tiny village on the outskirts of Leh, this palace has been the Ladakhi royal family’s residence for the last 150 years since the Dogra armies invaded the Leh Palace. One may have a chance encounter with the royals here too. It houses a museum, which is said to have the best collection of exquisite Thangka paintings in the whole of Ladakh. The other things housed here are crown jewels, dresses, coins, peraks encrusted with turquoise and lapis lazuli as well as religious objects. Then Takthok Monastery. The Takthok (the monastery with rock ceiling); 50km. east of Leh, this is the only monastery belonging to the Nimgmapa school of order. The monastery came into existence when Guru Padma Sambhava visited this place and blessed it in the 8th century. The Gonpa was merely a meditation cave of Padma Sambhava, with footprints and many other signs, until the reign of King Tsewang Namgail. When Mahasiddha Kunga Phunstog introduced monastic community. It was given the name of Takthok Padmalinggon. The Takthok Festival is held in the month of July or August.\n\nThe Chemday Monastery is well famous for the Chemday festival that takes place every year here. This festival takes place on every ninth month according to Tibetan calendar on the two days – 28th as well as 29th of that month. In this festival, sacred & sanctified dance takes place which is an old custom of the monastery and dance custom is carried out on only one of these above mentioned dates. The monks, who perform this consecrated dance, wear a kind of mask on their faces. People from other places are also allowed to take part in this ceremony of dance. Overnight Leh.",
                },
                {
                    title: "LEH -ALCHI- LIKIR (4-5 hrs)",
                    description:
                        "Morning drive to Alchi via Likir monastery LIKIR GOMPA: Founded in the 11th century and rededicated to a different monastic order in the 15th century, its earlier Gompa was destroyed in a fire. The present Gompa dated back to the 18th century. Skilled craftsmen producing excellent Thankas, earthen pots and carved wooden folding stools, live here in the village. Majestically situated, Likir commands a spectacular view. The monastery belong to the Yellow sect and the head Lama is the younger brother of Dalia Lama,\n\n Then Alchi monastery it is famous for the paintings built by the translator Rinchen zangpo, ALCHI GOMPA One of its walls features thousands of miniature sized pictures of the Buddha. Three large sized images made of clay and painted brightly are its focal attractions. No longer an active religious center, it is looked after by monks from the Liker monastery. This is the only monastery amongst 34 monasteries, which is not located on a hilltop. Dinner and overnight at Alchi.",
                },
                {
                    title: "ALCHI - LAMAYURU - RIZDONG - ALCHI (5 hrs.)",
                    description:
                        "We drive to Lamayuru monastery which is the oldest monastery in Ladakh and famous for its landscape, more than 1000 years back the great Tibetan master Naropa had visited this place and meditate at this place and you can visit the cave also, hot lunch in the monastery hotel and drive back to ule on the way RIDZONG GOMPA: Rizong is the most isolated monastery of all the monastery of Ladakh. There is no entry fee in this monastery, Lamas used to meditate for years cutting themselves from the rest of the world except for an one feet square outlet window from where they accept the one time meal of the day the monastery was built by Tsultim Nima. CHULICHAN: Chulichan, the nunnery is around one and half Kms. Below the Rizong monastery; around 20 Nuns resides at Chulichan. They provide food and cloths to the monks and perform morning and evening prayers. Dinner and overnight at Ule.",
                },
                {
                    title: "Alchi-PHYANG-SPITUK-LEH (4-5 hrs.)",
                    description:
                        "Morning we drive to Leh on the way visit Phyang Monastery: Phyang Monastery, 17km. west of Leh is remarkably built on the hilltop, similar to the Likir monastery. This monastery belongs to the Degungpa Order. It was the first monastery, which introduced the Degungpa teaching of ‘Skyob Jigsten Gonbo’ in Ladakh that was founded by Chosje Danma Kunga, during the reign of King Jamyang Namgyal in the 16th Century A.D. It has about 50 monks in residence. Phyang also has a festival called ‘Phyang Tseruk’ on the 2nd & 3rd of the 6th month of Tibetan Calendar.  Later visit Spituk Monastery: The Spituk Gonpa “Exemplary”; 7km. to southwest of Leh, was founded by Od-Ide, in the 11th century AD; when the monastic community was introduced. Meanwhile, Lotsava Rinchen Zangpo (the great translator) visited this monastery. In those days the Gonpa belonged to the Kadampa School but Gelukpa order was introduced during the reign of king Dragspa Bum-Lde, when Lama Lhawang Lotus restored the monastery. The “Spituk Gustor” takes place in the courtyard of the monastery, on the 18th and 19th of the 11th month of Tibetan Calendar. Overnight Leh.",
                },
                {
                    title: "HEMIS FESTIVAL",
                    description:
                        "Hemis is 46 km from Leh, morning drive to Hemis for the festival. The Hemis festival is dedicated to Lord Padmasambhava (Guru Rimpoche) venerated as the Dance Performance at Hemis Monastery representative reincarnate of Buddha. He is believed to have been born on the 10th day of the fifth month of the Monkey year as predicted by the Buddha Shakyamuni. It is also believed that his life mission was, and remains, to improve the spiritual condition of all living beings. And so on this day, which comes once in a cycle of 12 years, Hemis observes a major extravaganza in his memory. The observance of these sacred rituals is believed to give spiritual strength and good health. The Hemis festival takes place in the rectangular courtyard in front of the main door of the monastery. The space is wide and open save two raised square platforms, three feet high with a sacred pole in the center. A raised dias with a richly cushioned seat with a finely painted small Tibetan table is placed with the ceremonial items – cups full of holy water, uncooked rice, tormas made of dough and butter and incense sticks. A number of musicians play the traditional music with four pairs of cymbals, large-pan drums, small trumpets and large size wind instruments. Next to them, a small space is assigned for the lamas to sit.\n\nThe ceremonies begin with an early morning ritual atop the Gompa where, to the beat of drums and the resounding clash of cymbals and the spiritual wail of pipes, the portrait of “Dadmokarpo” or “Rygyalsras Rimpoche” is then ceremoniously put on display for all to admire and worship.\n\nThe most esoteric of festivities are the mystic mask dances. The Mask Dances of Ladakh are referred collectively as chams Performance. Chams performance is essentially a part of Tantric tradition, performed only in those gompas which follow the Tantric Vajrayana teachings and the monks perform tantric worship. Overnight in Leh.",
                },
                {
                    title: "TRANSFER TO THE AIR PORT",
                    description:
                        "Transfer to the Leh Airport to fly back home.\nEnd of our services.",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
            ],
        },
    },
    {
        img_url:
            "https://www.lehladakhindia.com/wp-content/uploads/2024/07/6-Days-Leh-Ladakh-Bike-Tour-Package-1.jpeg",
        name: "LADAKH BIKE TOUR",
        duration: "8 Nights • 9 Days",
        slug: "ladakh-bike-tour",
        tour: {
            location: "Ladakh",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Nestled in the northernmost region of India, Ladakh is a breathtaking desert plateau surrounded by the towering peaks of the Himalayas and the Karakoram ranges. Known for its otherworldly landscapes, Ladakh offers a unique blend of dramatic mountains, crystal-clear lakes, and ancient Buddhist monasteries. The region’s stark beauty, with its vast barren valleys, snow-capped peaks, and shimmering lakes like Pangong Tso and Tso Moriri, makes it a dream destination for nature lovers and adventure enthusiasts alike. Whether you’re exploring the high-altitude deserts, trekking through rugged terrain, or marveling at the breathtaking views, Ladakh promises an unforgettable experience.\n\nBeyond its natural beauty, Ladakh is a land rich in culture and history. The region is home to a vibrant Buddhist heritage, with monasteries like Hemis, Thiksey, and Lamayuru offering a glimpse into the spiritual life of the Ladakhi people. Ladakh’s unique blend of Tibetan and Indian influences is reflected in its festivals, cuisine, and traditions. A visit to this high-altitude wonderland is not just a journey through spectacular landscapes, but also an opportunity to immerse yourself in a culture that has remained largely untouched by the outside world. Whether you seek adventure, spirituality, or serenity, Ladakh is an exceptional destination that offers something for every traveler.",
            destinations_covered: [
                {
                    name: "LEH",
                    description:
                        "The capital of Ladakh, Leh is a charming town set amidst the rugged landscapes of the Himalayas. Known for its vibrant culture, ancient monasteries, and historical sites, Leh serves as the perfect base for exploring the region. With its picturesque markets, narrow lanes, and proximity to natural wonders like Pangong Lake and Nubra Valley, Leh offers a unique blend of adventure, culture, and serenity.",
                },
                {
                    name: "STOK PALACE",
                    description:
                        "Perched on the slopes of the Stok Range, Stok Palace is the traditional residence of the royal family of Ladakh. This 19th-century palace offers a glimpse into the region’s royal history and features beautiful architecture, intricate carvings, and a collection of royal artifacts. The palace is also a great starting point for treks to the Stok Kangri, one of the highest peaks in Ladakh, offering stunning views of the surrounding valleys and mountains.",
                },
                {
                    name: "LIKR",
                    description:
                        "Located on a hilltop in the Indus Valley, Likir Monastery is a prominent Buddhist site known for its stunning 25-foot-tall Buddha statue and beautiful frescoes. Founded in the 11th century, this monastery is one of Ladakh's oldest and features traditional Ladakhi architecture. It offers panoramic views of the surrounding mountains and valleys, making it a peaceful and spiritual destination for travelers.",
                },
                {
                    name: "ALCHI",
                    description:
                        "Alchi Monastery, a UNESCO World Heritage Site, is renowned for its ancient Buddhist murals, statues, and intricate wood carvings. Situated along the banks of the Indus River, this 11th-century monastery stands as a testament to Ladakh’s cultural and religious history.",
                },
                {
                    name: "ARYAN VALLEY(BEMA)",
                    description:
                        "The Aryan Valley, also known as the Bema Valley, is home to one of the last remaining communities of Aryan descent in India. The valley’s remote and lush landscape is dotted with traditional villages where people still follow ancient customs and practices. The unique culture, language, and lifestyle of the Aryan people make this area a fascinating destination for travelers looking to explore Ladakh’s rich diversity.",
                },
                {
                    name: "LAMAYURU",
                    description:
                        'Often called the "Moonland" due to the unique landscape surrounding it, Lamayuru Monastery is one of the oldest and most revered monasteries in Ladakh. It is known for its stunning architecture, rich collection of sacred texts, and dramatic surroundings, offering a serene and spiritual atmosphere.',
                },
                {
                    name: "NUBRA",
                    description:
                        'Nubra Valley, often referred to as the "Valley of Flowers," is a stunning region in Ladakh, known for its unique blend of desert and alpine beauty. The valley is home to lush green fields, charming villages, monasteries, and the famous double-humped Bactrian camels, making it a fascinating destination for nature lovers and adventurers.',
                },
                {
                    name: "SUMUR",
                    description:
                        "Located in the heart of Nubra Valley, Sumur is a picturesque village famous for its lush greenery, apricot orchards, and the ancient Samstanling Monastery. The village offers a tranquil retreat surrounded by vast sand dunes and snow-capped peaks. Sumur is a perfect spot to explore traditional Ladakhi life, with opportunities for nature walks, cultural experiences, and photography.",
                },
                {
                    name: "WARILA PASS ",
                    description:
                        "At an altitude of over 5,300 meters, Warila Pass is one of Ladakh's most scenic and high-altitude passes, connecting the Nubra Valley with the Indus Valley. Known for its rugged terrain and panoramic views of the surrounding mountains, the pass offers a thrilling adventure for trekkers and travelers. The road crossing the pass is a beautiful journey through barren landscapes, offering a true sense of Ladakh's untouched wilderness.",
                },
                {
                    name: "PANAMIK",
                    description:
                        "Panamik is a remote village in Nubra Valley, famous for its hot springs and stunning views of the surrounding snow-covered peaks. The village is located near the border with China and is known for its Tibetan-style homes, traditional monasteries, and unique landscape. Panamik’s warm sulfur springs are believed to have therapeutic properties, making it a popular stop for travelers seeking relaxation and rejuvenation.",
                },
            ],
            itinerary_outline: [
                {
                    title: "LEH KUSHOK BAKULA AIRPORT",
                    description:
                        "Arrival at Leh Kushok Bakula airport our representative will meet & Greet you and transfer to the Hotel. This flight is one of the most sensational flights in the world. On a clear day from one side of the aircraft can be seen in the distance the peaks of K2, Nanga Parbat, Gasherbrum and on the other side of the aircraft, so close that you feel you could reach out and touch it, is the Nun Kun massif. You would take a little time to settle in and acclimatize since you have gone from a relatively low elevation in New Delhi to over (Altitude 11,000 feet). Overnight in Hotel",
                },
                {
                    title: "LEH - STOK - SHEY - LEH (3-4 HRS)",
                    description:
                        "In the morning you drive to* Stok Palace,* which is the present residence of the former royal family of Ladakh. King Teswang Thondup Namgyal built the palace in 1825. The last king of Ladakh died here in 1974. The main palace is five storeys high. The palace museum displays the collections of the royal family.   In the queen’s chamber can be seen royal ornaments such as the beautifully crafted turquoise studded perak (head dress), the queen’s crown as well as the necklace of the Balti Princess, Gyal Khatun. Within the king’s room are displayed exquisite thangkas, most significant of which is the set of 35 thangkas depicting the stories relating to the former lives of Buddha.   Other artifacts include silver chortens, the king’s crown and a 7th century image of Avalokitesvara as well as jade cups, fine porcelain and ritual objects. After the visit you proceed to *Shey*, which is 15 km from Leh town. Overlooking a small lake, the palace and fortification of Shey was the site of one ofthe former capitals of Ladakh. In the 10th century the first ruler of Western Tibet, Nyima-Gon, laid the foundations of the first dynasty of Ladakh. On a large rock below the palace is an engraving in shallow relief of the Five Dhyniyai Buddhas, credited to him. His son constructed the small place and made it the first capital of Ladakh. During subsequent reigns the palace was expanded and the present structure dates back to the time of Deldan Namgyal who lived here for the better part of his reign. The significance of the sight is apparent from the large number of chortensthat dot the entire landscape around Shey. You will return to your hotel for lunch. Thereafter in the afternoon you are free to explore Leh town on your own. Overnight stay in your hotel.",
                },
                {
                    title: "LEH – LIKIR- ALCHI (3100 Mtrs.) 60 KM 4-5 HRS",
                    description:
                        "After breakfast you drive downstream along the River Indus. You may like to take a brief photo stop just before the village of Nimoo at a spot that affords an excellent view of the confluence of River Indus with the Zanskar River. Just before Saspul a road to the right takes you for your visit to the *Likir Monastery*, which is situated at the head of the village by the same name. The name Likir derives from the word Lukhgil (coiled snake) as the site appears to be encircled by two great serpent spirits – Nanda and Taksako. The monastery is believed to date back to the 11th century. In the 15th century Lama Lhawag Lhotos established the Gelug-pa order here. Likir is one of the most active monasteries in the region. The monastery has a fine collection of thangkas some of which are now housed in its museum. As you drive up to the monastery a recently installed colossal gilded image of the Maitreya out in the open is one of the most impressive sights in Ladakh. After visiting the Monastery you continue your drive along the River Indus then arrive Alchi.  In the afternoon visit Alchi Monastery, is also known by the name of Alchi Choskhor. Though traditionally, the credit for the construction of the monastery goes to the great translator Rinchen Zangpo (958-1055), the oldest monuments preserved here date back to the middle of the 12th century. The significance of the monastery also lies in the fact that it is the only one that has been built on a flat ground.\n\nThe monastery complex houses two main temples – Alchi Du-khang and the Sum-tsek. Apart from these, other smaller structures of the monastery complex include The Temple of Manjushri, Lotsawa Lha-khang, Lha-khang Soma and 3 Ka-ka-ni (entrance) chortens. Today, the monastery is managed by monks of Likir Monastery, overnight Alchi",
                },
                {
                    title: "ALCHI-ARYAN VALLEY(BEMA) (2750 Mtrs.) 90 KM - 3-4 HRS",
                    description:
                        "Morning after the breakfast drive to Bema (Aryan Valley) on the way visit Skurbuchan village and the monastery, upon arrival in Bema later explore the village. Dha-Hanu people belongs to the Aryan race their cultural and language is different from then the Ladakhi’s, Drokpa Community considered to be the last race of Aryans confined to the valley. Their feature is pure Indo Aryan and they have preserved their racial purity down the centuries. Their culture and religious practices are very similar to ancient pre- Buddhist religion known as Bon-Chos, dinner and overnight in camp.",
                },
                {
                    title: "BEMA-LAMAYURU –LEH (165 KMS - 6-7 HRS)",
                    description:
                        "Morning after the breakfast at the camp to leh on the way Lamayuru Monastery, visit the Monastery: The 11th century *LamayuruMonastery*, which is spectacularly located along the valley plain and surrounded by mountains on all sides. According to legend, the arhat Madhyantika, a disciple of Buddha offered “*torma’* (sacred food) and water to the spirits inhabiting the site to satisfy them. A handful of rain spilled on the soil which caused barley plants to sprout in the shape of Yung-drung (swastika), hence its name Yung-Drung. The great yogi Naropa meditated in a cave, which today forms part of the monastery. The monastery has gradually expanded over the years and newer structures have been built around a large courtyard. The antiquity of this site is evident from the large number of chortens, similar to those at Alchi.  And have lunch there after lunch drive to Leh, overnight.",
                },
                {
                    title: "LEH -NUBRA (3050 Mtrs.) - OVER KHARDUNG LA 5602 Mtrs. (126 KMS- 5-6 HRS)",
                    description:
                        "The road journey from Leh to Nubra Valley passes over Khardung La (the highest motorable road in the world) at 5602 M, around 39 km from Leh.  From the pass, one can see all the way south over the Indus valley to seemingly endless peaks and ridges of the Zanskar range, and north to the giants of the Saser massif. It is situated in the north of Ladakh between the Karakoram and Ladakh ranges of the Himalayas. The road after crosses Khalsar Bridge at Shyok River & enters Nubra. In the afternoon Diskit is famous for 515 years old Buddhist Monastery, lying magnificently situated on a hilltop, facing the entire Valley. After your visit to the monastery and shortly after leaving Diskit you will comes across sand dunes on the right of the road. Seen in isolation you could well be amongst the sand dunes of the Thar Desert in Rajasthan. It is indeed strange sights since immediately on the left of the road are Rocky Mountains that characterize the Ladakhi landscape and in the distance can be seen snow- capped mountains. Overnight Nubra.",
                },
                {
                    title: "TIRITH -SUMUR - PANAMIK –DISKIT",
                    description:
                        "Morning after breakfast, drive to Village Sumur Visit the Samtanling monastery to witness the prayer to witness the prayers. Later drive to Panamik – famous for hot Sulphur Springs. You may take a bath at the springs, which is said to be very good for the skin lunch at the camp. Post lunch  visit Diskit monastery and the village. Overnight stay at Nubra.",
                },
                {
                    title: "NUBRA-WARILA PASS –LEH (5-6 HRS)",
                    description:
                        "Today you will drive to Leh  via Agyam and Tangyar village , Wari La Pass is situated at an altitude of 17400 Feet and was fifth pass of our trip. After crossing Khalsar Village, you need to move towards Agham Village, leaving the upper route going towards Khardung La. Once you reach Agham village there are two routes to Pangong Tso, one on left goes via Shyok Village. This route via Shyok village is quite short and one can reach Pangong Tso within 4-5 Hrs from this route. However, we had to take the right one, which ascends to Wari La Pass, then goes down to Sakti Village, Via Karu, overnight in sakti.",
                },
                {
                    title: "DEPART LEH -KUSHOK BAKULA AIRPORT",
                    description:
                        "Morning after breakfast, transfer to airport board your flight towards Destination Covered, to enjoy yet again, a beautiful flight over the great Himalayas.\nEnd of our services",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
            ],
        },
    },
    {
        img_url:
            "https://www.enfieldtoursindia.com/images/nubra-valley-leh-ladakh.jpg",
        name: "LADAKH 10 DAYS SPECIAL ITINERARY",
        duration: "9 Nights • 10 Days",
        slug: "ladakh-10-days-special-itinerary",
        tour: {
            location: "Ladakh",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Nestled in the northernmost region of India, Ladakh is a breathtaking desert plateau surrounded by the towering peaks of the Himalayas and the Karakoram ranges. Known for its otherworldly landscapes, Ladakh offers a unique blend of dramatic mountains, crystal-clear lakes, and ancient Buddhist monasteries. The region’s stark beauty, with its vast barren valleys, snow-capped peaks, and shimmering lakes like Pangong Tso and Tso Moriri, makes it a dream destination for nature lovers and adventure enthusiasts alike. Whether you’re exploring the high-altitude deserts, trekking through rugged terrain, or marveling at the breathtaking views, Ladakh promises an unforgettable experience.\n\nBeyond its natural beauty, Ladakh is a land rich in culture and history. The region is home to a vibrant Buddhist heritage, with monasteries like Hemis, Thiksey, and Lamayuru offering a glimpse into the spiritual life of the Ladakhi people. Ladakh’s unique blend of Tibetan and Indian influences is reflected in its festivals, cuisine, and traditions. A visit to this high-altitude wonderland is not just a journey through spectacular landscapes, but also an opportunity to immerse yourself in a culture that has remained largely untouched by the outside world. Whether you seek adventure, spirituality, or serenity, Ladakh is an exceptional destination that offers something for every traveler.",
            destinations_covered: [
                {
                    name: "LEH",
                    description:
                        "The capital of Ladakh, Leh is a charming town set amidst the rugged landscapes of the Himalayas. Known for its vibrant culture, ancient monasteries, and historical sites, Leh serves as the perfect base for exploring the region. With its picturesque markets, narrow lanes, and proximity to natural wonders like Pangong Lake and Nubra Valley, Leh offers a unique blend of adventure, culture, and serenity.",
                },
                {
                    name: "SABU TREK",
                    description:
                        "The Sabu Trek is a lesser-known yet spectacular trek in Ladakh, offering a blend of natural beauty and cultural exploration. This moderate trek takes you through remote villages, traditional Ladakhi homes, and lush valleys, offering breathtaking views of the surrounding peaks. It provides a peaceful escape for those seeking a quieter adventure away from the more popular trekking routes.",
                },
                {
                    name: "SASPOL VILLAGE",
                    description:
                        "Saspol Village is a quaint village located along the Indus River, known for its scenic beauty and historical significance. The village is home to ancient rock-cut monasteries and is an excellent place to experience the traditional Ladakhi way of life. Surrounded by terraced fields and barren mountains, Saspol offers a peaceful retreat for travelers looking to immerse themselves in the natural and cultural wonders of Ladakh.",
                },
                {
                    name: "ULE",
                    description:
                        "Ule is a peaceful village located along the banks of the Ule River, known for its serene landscapes and rich biodiversity. It’s an ideal stop for travelers seeking tranquility, offering mesmerizing views of the surrounding mountains and a chance to witness traditional Ladakhi life. The village is also known for its lush gardens, making it a hidden gem for nature lovers and photographers.",
                },
                {
                    name: "LAMAYURU",
                    description:
                        "Lamru is a remote and picturesque area near Leh, known for its striking lunar landscapes and traditional monasteries. The region's unique topography and quiet atmosphere make it a perfect place for trekking and spiritual exploration. With its rugged beauty and peaceful environment, Lamuru offers travelers a rare opportunity to connect with Ladakh’s untouched wilderness.",
                },
                {
                    name: "LIKIR MONASTERY",
                    description:
                        "Located on a hilltop in the Indus Valley, Likir Monastery is a prominent Buddhist site known for its stunning 25-foot-tall Buddha statue and beautiful frescoes. Founded in the 11th century, this monastery is one of Ladakh's oldest and features traditional Ladakhi architecture. It offers panoramic views of the surrounding mountains and valleys, making it a peaceful and spiritual destination for travelers.",
                },
                {
                    name: "NUBRA VALLEY",
                    description:
                        "Nestled between the Karakoram and Zanskar Ranges, Nubra Valley is a breathtaking region known for its unique combination of desert, lush valleys, and snow-capped peaks. Famous for its Bactrian camels, monasteries like Diskit and Samstanling, and picturesque landscapes, Nubra offers travelers an opportunity to experience Ladakh’s natural beauty and rich culture in a tranquil setting.",
                },
                {
                    name: "SUMUR VILLAGE",
                    description:
                        "A serene village in Nubra Valley, Sumur Village is renowned for its peaceful atmosphere and lush agricultural landscapes. Home to the historic Samstanling Monastery, Sumur offers an authentic glimpse into Ladakhi rural life. With its apricot orchards, traditional mud-brick houses, and proximity to the valley’s sand dunes, Sumur is a charming retreat for nature lovers and those seeking tranquility.",
                },
                {
                    name: "PANAMIK",
                    description:
                        "Panamik is a remote village in Nubra Valley, famous for its hot springs and stunning views of the surrounding snow-covered peaks. The village is located near the border with China and is known for its Tibetan-style homes, traditional monasteries, and unique landscape. Panamik’s warm sulfur springs are believed to have therapeutic properties, making it a popular stop for travelers seeking relaxation and rejuvenation.",
                },
                {
                    name: "PANGONG LAKE",
                    description:
                        "One of Ladakh’s most iconic destinations, Pangong Lake is a stunning high-altitude lake that stretches across India and China. Known for its strikingly vivid blue waters, surrounded by barren mountains, Pangong offers a surreal and peaceful experience. Whether you choose to camp by its shores or simply admire the view, Pangong Lake is a must-visit for its breathtaking beauty and serene ambiance.",
                },
            ],
            itinerary_outline: [
                {
                    title: "ARRIVE LEH (3500 Mtrs.): VISIT LAMO",
                    description:
                        "Arrival at Leh Kushok Bakula airport our representative will meet & Greet you and transfer to the Hotel. This flight is one of the most sensational flights in the world. On a clear day from one side of the aircraft can be seen in the distance the peaks of K2, Nanga Parbat, Gasherbrum and on the other side of the aircraft, so close that you feel you could reach out and touch it, is the Nun Kun massif. You would take a little time to settle in and acclimatize since you have gone from a relatively low elevation in New Delhi to over (Altitude 11,000 feet). Rest for the acclimatization in the hotel till Afternoon.\n\nIn the afternoon walk to LAMO (Ladakh Arts and Media Organization)The Ladakh Arts and Media Organisation (LAMO) is a public charitable trust established to articulate an alternative vision for the arts and media in Ladakh. The organization set up the LAMO Centre in Leh, the main town of the region, to provide a space for the understanding and development of the arts. The complex on which the Centre is located comprises two historical houses below the 17th century Lechen Pelkhar (Leh Palace). The houses were restored by LAMO and converted to an arts space with galleries, offices, a library and reading room, screening room, conference room, and open-air performance site. The Centre is designed to conduct outreach programs, lectures, film screenings, research and documentation projects, workshops and exhibitions that showcase Ladakh’s material and visual culture, performing arts and literature\n\nMission & Objectives\nThe Himalayan region of Ladakh has a rich artistic heritage. Despite its harsh terrain, Ladakh has long been a location where people, commerce and cultures intermingled and its art forms reflect multicultural influences. Each art form contains a storehouse of information, making it important for the dissemination of the vital cultural material that is part of a community’s shared heritage. Today, the arts are vulnerable to dramatic transformations in the economic and social world of Ladakh. Knowledge and skills are endangered as the pressures of globalization and modernity have resulted in the marginalization of key arts practices.\n\nLAMO aims to revitalize living art forms, which are a rich resource of potential livelihood and knowledge about the history and life of the people who created them. Its work is founded on the principle that culture is not merely rooted in tradition but is also open to change and innovation.\nOvernight in Leh.",
                },
                {
                    title: "LEH-SABU TREK ( 3-4 HRS), LUNCH IN LADAKH FAMILY HOUSE STOK",
                    description:
                        "Morning after the breakfast at your hotel we will start the trek from the hotel only we will pass by the polo ground the first leg of the trek is uphill until you cross the two small mountains. Then the trail leads from a dry valley towards the village of Saboo which you can view from a distance from the top you can see the Stok Kangri peak 6200 mt on the opposite side of the Indus river, then walk down towards Sabu village. The you transferred to Ladakhi local family house in Stok for lunch with the family where local show you the cooking demonstration of the ladakhi food and will service you the best home cooked food for the lunch with local butter tea with Chang (local beer) , later drive to Stok and visit the royal palace of present king and queen which constructed by the king Tsespal Tondup Namgyal in 1825. Inside the palace, you see great collection of ancient royal ornaments, Thankas and old statues then drive back to Leh overnight in hotel.",
                },
                {
                    title: "LEH –SASPOL CAVES-ALCHI-ULETOKPO (3200 Mtrs.). 5-6 HRS (ON THE WAY RAFTING)",
                    description:
                        "Today you will drive to Ule Ethnic Resort via Nimoo where you will have a short stop for photo of the confluence of Zanskar and Indus river further drive via Basgo later reach Saspol village, then we will visit Saspol Caves – amazing rock-cut temples. Four of these caves are richly adorned with paintings of Buddhist panting from 13th – 15th century AD, representing a fusion of Indian and Tibetan Buddhist art.There opens wide, beautiful view in Indus valley from the caves.Entrance in the main temple – Cave 2 – is painted with orange color. Earlier it was hard to access, now there are made stairs. Paintings in Cave 1 (counted from the west) are bleached. Cave 3 is the upper part of two-storied cave. Cave 4 is located higher than others.\nThe drive to other side of the river and visit the famous alchi monastery, Alchi Choskor “Religious Enclave” is 69 km. west of Leh, the most famous and largest of all the Gonpa built by Lotsava Rinchen Zangpo. He appointed four families to look after Choskor, as there was no monastic community introduced, then in the 15th century Choskor was taken over by the Lekir Monastery since then Choskor is being taken care of by Lekir Monastery. The monastery comprises of Dukhang (Assembly Hall), Sumtsek Lhakhang (three tier) the Lhakhang Soma (New Temple), Jamyang Lhakhang (Munjushri Temple), Lotsava Lhakhang (Translator Temple) and Kangur Lhakhang. The Sculptors and Wood carvers are said to be brought from Kashmir around in 11th Century. \nOvernight in Ule.",
                },
                {
                    title: "ULE –LAMAYURU-WANLA-ULE (5-6 HRS)",
                    description:
                        "The Lamayuru “Yungdrung” Gonpa is remarkably built on a rock, west of Leh, on the Leh Srinagar highway. Lamayuru belongs to the Drigunpa order of Tibetan Buddhism. The history of the monastery begins with the visit of Arahat Nimagung to this place, when there was merely a lake here. It is said that Arahat made a prophecy that “a monastery will come up at this spot” and he made offerings (prayer with grains of corn) to the Nagaserpent spirits. The corns mixed with the earth and formed in the shape of Swastika (Yungdrung), later it came to be known as Yungdrung Monastery. The Great Translator Rinchen Zangpo constructed a temple here in eleventh century.\nNaropa also visited Lamayuru and meditated here. Gelukspa or Kadampa school of Tibetan Buddhism initially looked after Lamayuru, but later; it was taken over by Digungpa Order. Its monastic festival is called “Yuru Kabgyat”, takes place on 17th and 18th of 5th month of the Tibetan Calendar. Lunch in Lamayuru.\nLater drive to Wanla, Wanla (Wamda originally, mean a bow shape valley) . Above village, tiny medieval Wanla Gompa is dramatically perched on a towering knife-edge ridge flanked by two shattered tower remnants of a now-destroyed 14th-century fortress. Its carved porch is reminiscent of Alchi’s and a single, spookily dark chamber contains three large statues backed by ancient smoke-blackened murals. There is an old temple deep in the valley, with a protector deity, is unique and hardly any tourist goes there. On the way have chance to meet a local doctor who tell you about the tibetian medicine, on the way we have chance to meet a local doctor who will tell us about Tibetan Medicine , overnight in Ule.",
                },
                {
                    title: "ULE-LEH VIA LIKIR MONASTERY ( 3-4 HRS)",
                    description:
                        "Morning drive to Leh on the visit Likir monastery LIKIR GOMPA: Founded in the 11th century and rededicated to a different monastic order in the 15th century, its earlier Gompa was destroyed in a fire. The present Gompa dated back to the 18th century. Skilled craftsmen producing excellent Thankas, earthen pots and carved wooden folding stools, live here in the village. Majestically situated, Likir commands a spectacular view. The monastery belong to the Yellow sect and the head Lama is the younger brother of Dalia Lama, Lunch in Leh after lunch free,  Overnight hotel.",
                },
                {
                    title: "LEH – (NUBRA) VIA KHARDUNGLA PASS 125KM (5-6 HRS)",
                    description:
                        "Early morning proceed to Nubra Valley via the World Highest Motorable road (5602 Meters) -Khardungla pass. After crossing the pass stop at Khardung village to explore the area and visit to local school. Arrive Nubra and check in own camp. In the evening go for a small walk and explore the village.\n\nHunder Village: Hunder is a beautiful village to stay with lot of trees and you will really enjoy your stay at Hunder. It has a small monastery and ruined fort above the village. The walk or Camel Safari (Double Hump Bactrian camels) from Hunder to Diskit, through sand dunes for two hours is wonderful. Overnight in camp.",
                },
                {
                    title: "TIRITH -SUMUR - PANAMIK –DISKIT",
                    description:
                        "Morning after breakfast, drive to Village Sumur Visit the Samtanling monastery to witness the prayer to witness the prayers. Later drive to Panamik – famous for hot Sulphur Springs. You may take a bath at the springs, which is said to be very good for the skin lunch at the camp. Post lunch  visit Diskit monastery and the village. Overnight stay at camp.",
                },
                {
                    title: "NUBRA-LEH",
                    description:
                        "After Breakfast drive back to Leh via Khardungla pass the World Highest Motorable road. Evening explore Leh bazaar for souvenir,  overnight in hotel.",
                },
                {
                    title: "LEH-PANGONG LAKE (4300 Mtrs. - 9 HRS)LEH",
                    description:
                        "In the morning visit Panamik,this is famous for Hot Springs then dirve to Pangong Lake which is the largest brackish lake in Asia, with a larger part of it extending into Tibet. The lake is 130 km long and 5 km at its widest point with half of it running to the other side of the Indo-China border. Despite of being a salt-water lake, it freezes completely during winter. There is no marine life here, save for a few migrating birds now and then like gulls and brahminy ducks.\nBeing at the border, the furthest point one is allowed to go to, is Spangmik, about 7 km along its western bank, but it is enough to take back the most beautiful memories of Ladakh. The very barren-ness and vastness of the area contributes to its striking beauty. Spangmik offers spectacular views of the mountains of the Changchenmo range to the north, and their reflections in the ever-changing blues and greens of the lake’s brackish waters. Above Spangmik, one can see the glaciers and snowcapped peaks of the Pangong range. Later drive back to leh. Overnight in camp",
                },
                {
                    title: "LEH- DELHI FLIGHT",
                    description:
                        "Morning after breakfast, transfer to airport board your flight towards Destination Covered, to enjoy yet again, a beautiful flight over the great Himalayas.\nEnd of our services.",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
            ],
        },
    },
    {
        img_url: "https://static.toiimg.com/photo/92360678.cms",
        name: "Ladakh 9 Days Tour",
        duration: "8 Nights • 9 Days",
        slug: "ladakh-9-days-tour",
        tour: {
            location: "Ladakh",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Nestled in the northernmost region of India, Ladakh is a breathtaking desert plateau surrounded by the towering peaks of the Himalayas and the Karakoram ranges. Known for its otherworldly landscapes, Ladakh offers a unique blend of dramatic mountains, crystal-clear lakes, and ancient Buddhist monasteries. The region’s stark beauty, with its vast barren valleys, snow-capped peaks, and shimmering lakes like Pangong Tso and Tso Moriri, makes it a dream destination for nature lovers and adventure enthusiasts alike. Whether you’re exploring the high-altitude deserts, trekking through rugged terrain, or marveling at the breathtaking views, Ladakh promises an unforgettable experience.\n\nBeyond its natural beauty, Ladakh is a land rich in culture and history. The region is home to a vibrant Buddhist heritage, with monasteries like Hemis, Thiksey, and Lamayuru offering a glimpse into the spiritual life of the Ladakhi people. Ladakh’s unique blend of Tibetan and Indian influences is reflected in its festivals, cuisine, and traditions. A visit to this high-altitude wonderland is not just a journey through spectacular landscapes, but also an opportunity to immerse yourself in a culture that has remained largely untouched by the outside world. Whether you seek adventure, spirituality, or serenity, Ladakh is an exceptional destination that offers something for every traveler.",
            destinations_covered: [
                {
                    name: "SHEY PALACE",
                    description:
                        "Perched atop a hill, Shey Palace offers stunning views of the surrounding valleys and mountains. This 17th-century palace, once the summer retreat of Ladakhi kings, features a large statue of Buddha and intricately decorated interiors, showcasing the region’s royal and spiritual heritage.",
                },
                {
                    name: "THIKSEY GOMPA",
                    description:
                        "One of Ladakh’s most iconic monasteries, Thiksey Gompa resembles the Potala Palace of Lhasa. Located on a hilltop, it is home to impressive murals, a 15-meter-high statue of Maitreya Buddha, and offers panoramic views of the Indus Valley, making it a must-visit for culture and photography enthusiasts.",
                },
                {
                    name: "HEMIS GOMPA",
                    description:
                        "Famed for hosting the Hemis Festival, one of the largest and most vibrant religious festivals in Ladakh, Hemis Gompa is a major Buddhist monastery with beautiful wall paintings, ancient relics, and a rich history that draws pilgrims and tourists alike seeking spiritual insight.",
                },
                {
                    name: "DESKIT VILLAGE",
                    description:
                        "Diskit Village is the largest settlement in the Nubra Valley, offering a glimpse into traditional Ladakhi life. Famous for its Diskit Monastery, this charming village is surrounded by breathtaking landscapes, including sand dunes, lush greenery, and towering snow-capped peaks.",
                },
                {
                    name: "PANGONG LAKE",
                    description:
                        "Pangong Lake is a mesmerizing high-altitude lake that stretches across India and China. Known for its stunning blue waters set against a backdrop of barren mountains, it is one of the most scenic spots in Ladakh, attracting visitors for its serenity and surreal beauty.",
                },
                {
                    name: "ALCHI MONASTERY",
                    description:
                        "Alchi Monastery, a UNESCO World Heritage Site, is renowned for its ancient Buddhist murals, statues, and intricate wood carvings. Situated along the banks of the Indus River, this 11th-century monastery stands as a testament to Ladakh’s cultural and religious history.",
                },
                {
                    name: "LAMAYURU MONASTERY",
                    description:
                        'Often called the "Moonland" due to the unique landscape surrounding it, Lamayuru Monastery is one of the oldest and most revered monasteries in Ladakh. It is known for its stunning architecture, rich collection of sacred texts, and dramatic surroundings, offering a serene and spiritual atmosphere.',
                },
                {
                    name: "LIKIR GOMPA",
                    description:
                        "Situated on a hill, Likir Gompa is known for its majestic 25-foot-tall Buddha statue. Founded in the 11th century, the monastery features beautiful frescoes and offers an insight into Ladakhi Buddhist culture, along with panoramic views of the surrounding mountains and valleys.",
                },
                {
                    name: "NUBRA VALLEY",
                    description:
                        'Nubra Valley, often referred to as the "Valley of Flowers," is a stunning region in Ladakh, known for its unique blend of desert and alpine beauty. The valley is home to lush green fields, charming villages, monasteries, and the famous double-humped Bactrian camels, making it a fascinating destination for nature lovers and adventurers.',
                },
            ],
            itinerary_outline: [
                {
                    title: "ARRIVE LEH KUSHOK BAKULA AIRPORT",
                    description:
                        "Arrival at Leh Kushok Bakula airport our representative will meet & Greet you and transfer to the Hotel. This flight is one of the most sensational flights in the world. On a clear day from one side of the aircraft can be seen in the distance the peaks of K2, Nanga Parbat, Gasherbrum and on the other side of the aircraft, so close that you feel you could reach out and touch it, is the Nun Kun massif. You would take a little time to settle in and acclimatize since you have gone from a relatively low 15.",
                },
                {
                    title: "SHEY-THIKSAY-HEMIS -5/6 HRS",
                    description:
                        "Morning after breakfast, drive to Indus valley to visit SHEY PALACE AND GOMPA: Situated on a hillock 15 Kms upstream from Leh, it was once the residence of the royal family. According to tradition, it was the seat of power of the pre-Tibetan kinds. A 7.5 mts high copper statue of Buddha, plated with gold and the largest of its kind, is installed here.\n\nTHIKSEY GOMPA: 19 Kms from Leh, spectacularly sited, Thiksey is one of the largest and architecturally most impressive Gompas. There are several temples in this Gompas, containing images, stupas and wall paintings of Buddha, which are exquisite also called mini potala palace.\n\nHEMIS GOMPA: 40 Kms from Leh, it is the wealthiest, best known and biggest Gompa of Ladakh. Its popularity stems from the major annual festival held here in summer. The festival is in honor of Guru Padma Sambhava’s birth anniversary. It also has the largest Thanka in Ladakh which is unfurled once in 12 years Hemis was built in 1630 during the reign of Singge Namgyal, an illustrious ruler of Ladakh. It flourished under the Namgyal Dynasty for the royalty favored the Drugpa sect, which is managed the monastery. It is divided into two, the assembly hall on the right and the main temple on the left. The hall (Dukhang) is also used as “green room” by the dancers during the festival. The temple is known as Tshogkhang. The verandahs have a surfeit of frescoes, among them the Buddhist “.Overnight in hotel.",
                },
                {
                    title: "LEH - OVER KHARDUNG LA (5602 M) - NUBRA VALLEY – BY SURFACE / 126 KMS 5 HRS",
                    description:
                        "The road journey from Leh to Nubra Valley passes over Khardung La (the highest motorable road in the world) at 5602 M, around 39 km from Leh. From the pass, one can see all the way south over the Indus valley to seemingly endless peaks and ridges of the Zanskar range, and north to the giants of the Saser massif. It is situated in the north of Ladakh between the Karakoram and Ladakh ranges of the Himalayas. The road after crosses Khalsar Bridge at Shyok River & enters Nubra.\nSAMSTANLING GOMPA: Samstanling Monastery was founded by Lama Tsultrim Nima and Monastic community was introduced as Rezong Gompa. About 50-60 monks are residing at this 132 years old monastery. The Gompa has some strict rules and regulations.",
                },
                {
                    title: "VISIT DISKIT-HUNDER 3-4 HRS",
                    description:
                        "Morning after breakfast proceed for a visit to DESKIT VILLAGE: Deskit is the main village of headquarter of Nubra valley, which has a small market consisting of a row of shops and about 500 years old Gompa on the hilltop. Spectacular view of the valley can be seen form the monastery.\nDESKIT GOMPA: Deskit Gompa was founded by Lama Sherab Zangpo of Stod in about 1420 AD during the reign of King Dragspa. About 100 monks are residing in the Gompa, which is a branch of Thikse Monastery. The monastic festival called Gustor takes place on 20th and 21st days of the 12th month of Tibetan calendar.\nHUNDAR VILLAGE: Hundar is a beautiful village to stay with lot of trees and you will really enjoy your stay at Hundar. It has a small monastery and ruined fort above the village. The walk or Camel Safari (Double Hump Bactrian camels) from Hundar to Deskit, through sand dunes for two hours is wonderful overnight in nubra.",
                },
                {
                    title: "NUBRA –PANGONG LAKE – VIA SHYOK RIVER (Altitude 4300 Mtrs. 105, 4-5 HRS)",
                    description:
                        "In the morning visit Panamik,this is famous for Hot Springs then dirve to Pangong Lake which is the largest brackish lake in Asia, with a larger part of it extending into Tibet. The lake is 130 km long and 5 km at its widest point with half of it running to the other side of the Indo-China border. Despite of being a salt-water lake, it freezes completely during winter. There is no marine life here, save for a few migrating birds now and then like gulls and brahminy ducks.\nBeing at the border, the furthest point one is allowed to go to, is Spangmik, about 7 km along its western bank, but it is enough to take back the most beautiful memories of Ladakh. The very barren-ness and vastness of the area contributes to its striking beauty. Spangmik offers spectacular views of the mountains of the Changchenmo range to the north, and their reflections in the ever-changing blues and greens of the lake’s brackish waters. Above Spangmik, one can see the glaciers and snowcapped peaks of the Pangong range. \nOvernight in camp.",
                },
                {
                    title: "PANGONG-ALCHI-ULE (195KM / 7-8 hrs drive)",
                    description:
                        "Morning after the breakfast at the camp drive to ule via Chang la pass 5300 mt and Alchi, on the way photo stop at Zanskar and Indus river confluence side and Standing on the banks of river Indus, the monastery, Alchi Monastery, is also known by the name of Alchi Choskhor. Though traditionally, the credit for the construction of the monastery goes to the great translator Rinchen Zangpo (958-1055), the oldest monuments preserved here date back to the middle of the 12th century. The significance of the monastery also lies in the fact that it is the only one that has been built on a flat ground.\nThe monastery complex houses two main temples – Alchi Du-khang and the Sum-tsek. Apart from these, other smaller structures of the monastery complex include The Temple of Manjushri, Lotsawa Lha-khang, Lha-khang Soma and 3 Ka-ka-ni (entrance) chortens. Today, the monastery is managed by monks of Likir Monastery.\nOvernight in Ule.",
                },
                {
                    title: "ULE- LAMAYURU-LEH-VIA LIKIR (160 km 5-6 hrs drive)",
                    description:
                        "We drive to Lamayuru monastery which is the oldest monastery in Ladakh and famous for its landscape, more than 1000 years back the great Tibetan master Naropa had visited this place and meditate at this place and you can visit the cave also then drive to Ule via RIDZONG GOMPA: Rizong is the most isolated monastery of all the monastery of Ladakh. There is no entry fee in this monastery, Lamas used to meditate for years cutting themselves from the rest of the world except for an one feet square outlet window from where they accept the one time meal of the day the monastery was built by Tsultim Nima.",
                },
                {
                    title: "ULE-LIKIR-LEH (3-4 hrs drive)",
                    description:
                        "Likir monastery LIKIR GOMPA: Founded in the 11th century and rededicated to a different monastic order in the 15th century, its earlier Gompa was destroyed in a fire. The present Gompa dated back to the 18th century. Skilled craftsmen producing excellent Thankas, earthen pots and carved wooden folding stools, live here in the village. Majestically situated, Likir commands a spectacular view. The monastery belong to the Yellow sect and the head Lama is the younger brother of Dalia Lama, Overnight hotel.",
                },
                {
                    title: "FLY BACK HOME",
                    description:
                        "Fly back home after a memorable trip.\nEnd of our services.",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
            ],
        },
    },
    {
        img_url:
            "https://www.peakadventuretour.com/assets/imgs/kerala-tourism-04.webp",
        name: "Kerala – God’s own Country",
        duration: "7 Nights • 8 Days",
        slug: "kerala-god-s-own-country",
        tour: {
            location: "Kerela",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                'Nestled on the southwestern coast of India, Kerala is a land of breathtaking landscapes, vibrant culture, and rich heritage. Known as "God’s Own Country," this idyllic state offers a perfect blend of serene backwaters, lush green hill stations, golden beaches, and diverse wildlife. From the tranquil backwaters of Alleppey and Kumarakom to the scenic hill stations of Munnar and Wayanad, Kerala’s natural beauty is truly unmatched. The state is also renowned for its rich cultural heritage, with colorful festivals, traditional dance forms like Kathakali and Mohiniyattam, and exquisite cuisine, including the world-famous Kerala Sadya.\n\nThe backwaters, a network of interconnected rivers, lakes, and canals, are one of Kerala’s most distinctive features, providing a peaceful and unique way to explore rural life and enjoy the state’s natural beauty. The state’s pristine beaches, such as Varkala, Kovalam, and Cherai, offer the perfect setting for relaxation, water sports, and enjoying stunning sunsets.\n\nKerala is also home to a diverse range of wildlife, with several national parks and sanctuaries, including Periyar and Silent Valley, where you can spot exotic animals, including elephants, tigers, and a wide variety of birds. Ayurvedic treatments and wellness retreats are an integral part of Kerala\'s culture, making it a sought-after destination for rejuvenation and healing.\n\nWhether you are looking for adventure, relaxation, or cultural immersion, Noble Travels Kerala promises an enriching and unforgettable experience in Kerala.',
            destinations_covered: [
                {
                    name: "KOCHI",
                    description:
                        "Kochi, a vibrant city that seamlessly blends history, culture, and modernity. Explore the quaint streets of Fort Kochi, where colonial architecture meets local traditions, and visit iconic landmarks such as the Chinese fishing nets, St. Francis Church, and the Mattancherry Palace. Kochi is also home to a thriving arts scene, so don't miss the opportunity to witness a Kathakali dance performance or visit the famous Kerala Folklore Museum.",
                },
                {
                    name: "ALLEPPEY",
                    description:
                        'Alleppey, often referred to as the "Venice of the East," is a picturesque town in Kerala known for its serene backwaters, lush landscapes, and tranquil houseboat cruises. This charming destination offers a unique opportunity to explore the network of canals, lagoons, and paddy fields that define Kerala’s rural beauty. Visitors can enjoy leisurely boat rides, experience local village life, and relax amidst the scenic surroundings. Alleppey is also famous for its annual Vallam Kali (boat race) and vibrant coir industry.',
                },
                {
                    name: "KUMARAKOM",
                    description:
                        "Kumarakom, a serene village on the banks of the scenic Vembanad Lake. Known for its tranquil backwaters and lush greenery, Kumarakom is the perfect escape for nature lovers. Cruise through the meandering backwaters on a traditional houseboat, where you can witness the beauty of Kerala's rural life, surrounded by swaying palms, paddy fields, and birdlife. The Kumarakom Bird Sanctuary is another highlight, offering a peaceful retreat for birdwatchers and nature enthusiasts.",
                },
                {
                    name: "KOVALAM",
                    description:
                        "Kovalam, one of India's most famous beach destinations. With its golden sands, clear waters, and stunning sunsets, Kovalam is ideal for relaxation and rejuvenation. Whether you enjoy sunbathing, swimming, or indulging in Ayurvedic treatments, Kovalam offers the perfect coastal getaway. The lighthouse beach, with its panoramic views, is a must-visit spot.  This Kerala tour combines cultural exploration, natural beauty, and beachside relaxation, offering an unforgettable experience of the state’s enchanting landscapes and rich heritage.",
                },
            ],
            itinerary_outline: [
                {
                    title: "ARRIVE IN KOCHI",
                    description:
                        "Arrive into Kochi’s International airport.\n\nUpon arrival, once you step off the aircraft door, you are on aerobridge, as you walk down the aerobridge and step into the airport terminal, you will find our representative holding placard with your name on it. He/ She will then escort you through the immigration & help you with baggage at the baggage belt. Once you walk out of the customs door into meet & greet hall, our concierge or airport representative will escort you to your hotel. Upon arrival at the hotel, he will also assist you with, the Hotels’ check in formalities.\n\nRoom reserved from 1400 hours of this day.\n\nKochi is a vibrant city situated on the south-west coast of the Indian peninsula in the breathtakingly scenic and prosperous state of Kerala, hailed as ‘God’s Own Country’. The fairytale milieu suits Kochi impeccably since it is one of the most laid-back of Kerala cities. A city that despite being the commercial hub, is a self-assured juxtaposition of both the past and the present. Experience this city with its modern new town at Ernakalum contrasting with the sleepy old town with its melting pot of history including, Dutch, Portuguese, Chinese and Jewish influences.\n\nSpend two nights in Kochi.",
                },
                {
                    title: "KOCHI",
                    description:
                        "After breakfast proceed for a tour of Kochi.\n\nVisit the Chinese fishing nets of Fort Kochi and witness an unusual form of fishing — shore operated lift nets; if you are lucky then you can see the big catch of the day, & bargain with fisherman for freshly caught fishes; St. Francis Church- the oldesturopean church in India that has great historical significance as a mute witness to the European colonial struggle in the subcontinent; The Mattancherry Palace, also known as Dutch Palace (Closed on Fridays); and the Jew town including the Jewish Synagogue (Closed on Fridays and Saturdays) – the oldest synagogue in the commonwealth nations .\n\nLater visit the spice markets and shop for souvenirs from the antique bazaars of the heritage Jew town. In the evening, enjoy a performance of the highly ritualized “Kathakali” dance which tells stories from the ancient Hindu epics – Ramayana and Mahabharata.\n\nDAVID HALL, ART GALLERY – David Hall, reminiscent of the Dutch glory of yesteryears, is situated on one side of the Parade Ground in Fort Kochi. The history and architectural grandeur of the halls woos many visitors. It also houses an art gallery and acts as a cultural center to support young exponents of visual and performing art forms. David Hall was built around 1695 by the Dutch East India Company.\n\nMASTER THE ART OF COOKING INDIAN CURRIES WITH NIMMY & PAUL\nPut on your apron and turn into a chef for a special culinary session. Learn the secrets of herbs and spices used in Indian cuisine & try your hand at authentic recipes. Take home the recipes of the dishes and a personalize apron. Nimmy and Paul have been involved in ‘At Home’ hospitality for more than twelve years. Traditional Kerala Dresses for guests can also be arranged (at an additional). Kerala cook book shall be presented to each guest after the dinner, signed by Nimmy & Paul.\n\nNimmy, a professional cookery instructor for more than twenty years, and her stockbroker husband Paul, are passionate about their cuisine and offer culinary cooking & interactive sessions to guests visiting Kochi.\n\nBoth of them belong to traditional Syrian Christian community in Kerala. In keeping with the tradition of their families they enjoy having guests and serving good food.\n\nOvernight in Kochi.",
                },
                {
                    title: "KOCHI – ALLEPPEY – KUMARAKOM",
                    description:
                        "Arise early this morning, as we are taking a drive outside the city to meet and mingle with the elephants at Abhayaranyam (Monday closed). The Elephant Training Camp is located at a beautiful and scenic spot on bank of River Periyar, and is the only elephant center in Kerala specializing in rescuing and training stranded adult and baby elephants from the Kerala forest regions. Four to six baby elephants are brought in and trained every year, watching them from infancy through various stages of their growth. Training plays an important role for elephants while their brains develop and they learn vital survival and knowledge.\n\nWe spend the morning with the orphaned Asian elephants at this fascinating training camp. The elephants are relaxed and enjoy the attention and pampering from their trainers.\n\nReturn to Kochi hotel for breakfast.\n\nLater transfer by road to Alleppey (approximately 01 hours and 30 minutes drive) to board private Kettuvallam (traditional thatch-roofed houseboat) with traditional Lunch onboard.\n\nEmbark on a day cruise through the most scenic of Kerala’s backwaters. A complex network of lagoons, rivers, and canals fringing the coast of Kerala, it forms the basis of a distinct regional lifestyle. These celebrated backwaters of Kerala comprise one of South India’s most picturesque rural areas. We share the backwaters with Kettavalum boats painted with evil-eye repellent, hand-poled dugout punts, and traditional boats with huge sails and prows carved into the shape of dragons. Our boat crosses shallow, palm-fringed lakes studded with Chinese fishing nets, and along narrow, shady canals where coir (coconut fiber), copra, and cashews are loaded onto boats. Enjoy the serenity and natural beauty of the surroundings as we cruise past villages and witness a way of life that has changed little through the centuries. A favorite spot for birdlife, keep an eye out for cuckoos, owls, egrets, herons, cormorants, moorhen, and the Brahminy kite as well as the migratory Siberian crane, parrot, teal and lark.\n\nEarly afternoon disembark Houseboat at the hotel’s jetty.\n\nSpend two nights in Kumarakom.\n\nOvernight at hotel.",
                },
                {
                    title: "IN KUMARAKOM – HOUSEBOAT – KUMARAKOM",
                    description:
                        "Day ay leisure to enjoy the Ayurveda at the hotel (on direct payment)\n\nKumarakom is an emerald peninsula of paddy fields, meandering lagoons and backwaters that juts out into Lake Vembanad. Perhaps more famously knows as the Backwaters this area is unique being made up of labyrinth of canals and lakes that stretch between the capital Kochi and Quilon in the south. From the vastness of Lake Vembanad to the quiet streams just large enough for a canoe, the Backwaters form the arteries through which rural daily life calmly flows – children splashing in the water, women washing clothes at the water’s edge, fishermen up to their necks in water digging out fish with their feet, rice barges transporting coconuts and rice (the staples of the Keralan diet) and, above all, an overriding sense of peace and tranquility that permeates every aspect of this stunning region.\n\nEnjoy Traditional Ayurvedic massage at the hotel (Duration: 01 Hour)\n\nOvernight in Kumarakom.",
                },
                {
                    title: "KUMARAKOM – KOVALAM",
                    description:
                        "After breakfast at hotel, transfer by road to Kovalam (approximately 05 hours drive).\n\nKovalam is a small coastal town in the southern Indian state of Kerala, south of Thiruvananthapuram. At the southern end of Lighthouse Beach is a striped lighthouse with a viewing platform. Palm-backed beaches also include Hawa Beach and Samudra Beach. Heading south, Vizhinjam Juma Masjid mosque overlooks the busy fishing harbor. Inland, Sagarika Marine Research Aquarium displays technology used in pearl production.\n\nOn arrival, assistance at the hotel for check-in.\n\nRest of the day at leisure.\n\nSpend three nights in Kovalam.",
                },
                {
                    title: "KOVALAM",
                    description:
                        "Breakfast at the hotel.\n\nDay at leisure for independent activities (on direct payment).\n\nVisit to the Hostel for Tribal Girls in Trivandrum (approximately 45 minutes drive each way)\n\nAn Ashram built in the memory of Late Vinoba Bhave, is where you will visit this hostel for tribal girls. The institution also runs an international school along Hindu scriptures at this venue. This Ashram runs a hostel for tribal girls to provide them education and social exposure, which has over 150 inmates studying in various classes from 1st to 10th standard. There are innumerable other activities including khadi gram, cultivation of medicinal plants, model agriculture and dairy farm, environmental programme, self-employment programme, etc. Visiting hours: Between 1400 hrs to 1700hrs.\n\nOvernight in Kovalam.",
                },
                {
                    title: "KOVALAM",
                    description:
                        "Breakfast at the hotel.\n\nDay at leisure for independent activities (on direct payment).\n\nOvernight in Kovalam.",
                },
                {
                    title: "KOVALAM – TRIVANDRUM / DEPART TRIVANDRUM",
                    description:
                        "Breakfast at the hotel.\n\nNote: Hotel check out is at 1200 hours\n\nLater in time transfer to Trivandrum airport (approximately 45 minutes drive) to board the onward flight.\nEnd of our Services.",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Abhayaranyam elephant training camp is closed on monday.",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
            ],
        },
    },
    {
        img_url:
            "https://i.ytimg.com/vi/JiWKqUw945Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDJw-K8zG4J541E9AyAlR1TOIK4Dw",
        name: "Kaziranga, Elephant and Rhino tour",
        duration: "5 Nights • 6 Days",
        slug: "kaziranga-elephant-and-rhino-tour",
        tour: {
            location: "Kaziranga ",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Get close to the wildlife in their natural habitat, while enjoying a jungle safari. The 6 days and 5 nights Kaziranga wildlife tour package offer you a wonderful opportunity to explore the beautiful Kaziranga national park, which is a UNESCO World Heritage Site. Kaziranga is famed to host the largest population of the endangered one-horned rhinoceroses worldwide. For the protection of more than 491 avifaunal species, Birdlife International has designated Kaziranga as an Important Bird Area. It is also home to diverse species of mammals, including elephants. The dense vegetation combined with species diversity makes Kaziranga a must-visit park for wildlife and nature lovers. It is certainly going to be a ‘never-before kind of an experience not to be missed. Whether you want a jungle jeep safari or stay in excellent accommodation, we are here to make your holidays enjoyable and unforgettable.\n\nIf you are looking for a memorable Kaziranga trip, Noble Travels is the right choice for you. We provide the widest range of customized tours to suit every kind of traveler’s need. Contact us for unbeatable deals and discounts. Explore the main Kaziranga sightseeing points with the variety of experiential tours and activities.",
            destinations_covered: [
                {
                    name: "GUWAHATI",
                    description:
                        "Guwahati, the gateway to Northeast India, is a vibrant city nestled on the banks of the Brahmaputra River. Known for its rich cultural heritage, lush landscapes, and spiritual significance, it offers a perfect blend of modernity and tradition, making it an ideal destination for every traveler.",
                },
                {
                    name: "KAZIRANGA NATIONAL PARK",
                    description:
                        "Kaziranga National Park, a UNESCO World Heritage Site, is a wildlife haven located in the heart of Assam. Famous for its population of the one-horned rhinoceros, the park is home to diverse wildlife, including tigers, elephants, and wild buffaloes. With its sprawling grasslands, wetlands, and dense forests, Kaziranga offers a thrilling safari experience and a chance to immerse in the beauty of nature.",
                },
            ],
            itinerary_outline: [
                {
                    title: "Arrive New Delhi (by flight)",
                    description:
                        "After breakfast transfer to the airport to board a flight at 0525 hrs. Met at the airport on arrival at the Guwahati airport at 0750 hrs. proceed to Kaziranga National Park 250 KMS / 5hrs drive.\n\nOn arrival check into the lodge. After lunch depart for an afternoon jeep safari to the national park.\nKaziranga National Park lies partly in Golaghat District and partly in Nagaon District of Assam. It is the oldest park in Assam and covers an area of 430 sq km along the river Brahmaputra in the North and the Karbi Ang long hills in the South. The National Highway 37 passes through the parking area and tea estates, hemmed by table-top tea bushes. The Park is a world heritage site and was declared a National Park in 1974. The landscape is of sheer forest, tall elephant grass, rugged reeds, marshes, and shallow pools.\n\nKaziranga National Park a world heritage site is famous for the Great Indian one-horned rhinoceros, the landscape of Kaziranga is of sheer forest, tall elephant grass, rugged reeds, marshes & shallow pools. It has been declared a National Park in 1974. Dinner and overnight at lodge.",
                },
                {
                    title: "New Delhi – Guwahati – Kaziranga (by flight + 250 kms - 5 hrs. drive)",
                    description:
                        "After breakfast transfer to the airport to board a flight at 0525 hrs. Met at the airport on arrival at the Guwahati airport at 0750 hrs. proceed to Kaziranga National Park 250 KMS / 5hrs drive.\n\nOn arrival check into the lodge. After lunch depart for an afternoon jeep safari to the national park.\nKaziranga National Park lies partly in Golaghat District and partly in Nagaon District of Assam. It is the oldest park in Assam and covers an area of 430 sq km along the river Brahmaputra in the North and the Karbi Ang long hills in the South. The National Highway 37 passes through the parking area and tea estates, hemmed by table-top tea bushes. The Park is a world heritage site and was declared a National Park in 1974. The landscape is of sheer forest, tall elephant grass, rugged reeds, marshes, and shallow pools.\n\nKaziranga National Park a world heritage site is famous for the Great Indian one-horned rhinoceros, the landscape of Kaziranga is of sheer forest, tall elephant grass, rugged reeds, marshes & shallow pools. It has been declared a National Park in 1974. Dinner and overnight at lodge.",
                },
                {
                    title: "In Kaziranga",
                    description:
                        "Morning and afternoon jeep safaris to the national park. All meals and an overnight stay at the lodge.\nKaziranga National Park is one of the last areas in eastern India undisturbed by a human presence. It is inhabited by the world’s largest population of one-horned rhinoceroses, as well as many mammals, including tiger, elephant, water buffalo, gaur, leopard cat, otter, and monitor lizard. Some of the birds that can be commonly sighted are the flamingo, crane, grey-headed fishing eagle, whistling teal, crested serpent eagle, open-billed stork, swamp partridge, osprey, cormorant, heron, and marsh harrier. Dinner and overnight stay at the resort.\n",
                },
                {
                    title: "In Kaziranga",
                    description:
                        "After a peaceful breakfast, embark on an early morning jeep safari to explore the pristine wilderness of Kaziranga National Park. Traverse through its vast grasslands and wetlands, where you’ll have the opportunity to spot a variety of wildlife in their natural habitat. Later, enjoy a relaxing afternoon boat ride along the Brahmaputra River, offering a unique perspective of the park’s landscape. In the evening, unwind at the resort with a cultural performance or traditional Assamese dinner, reflecting on a day full of nature’s wonders.",
                },
                {
                    title: "Kaziranga – Guwahati – New Delhi (250 kms - 5 hrs drive+ flight)",
                    description:
                        "After morning jeep safari breakfast drive to Guwahati 250kms to board a flight at 1720 hrs. to arrive New Delhi at 2015 hrs. Meeting and assistance on arrival at New Delhi airport and transfer to hotel. Overnight stay at the hotel.",
                },
                {
                    title: "New Delhi - Fly back home",
                    description:
                        "Morning free for leisure, transfer to the International Airport to fly back home.\nEnd of our Services",
                },
            ],
            important_information: [
                "In case the hotel envisaged or normal category of rooms are waitlisted/sold out, alternate hotels/categories will be provided & we will keep you informed on the supplement/reduction involved.",
                "Safari zone is subject to forest department permissions.",
                "Please note hotel check-in and check-out time is 1200 hrs.",
            ],
        },
    },
    {
        img_url:
            "https://www.wildernesstravel.com/wp-content/uploads/2023/06/10-KANHA-national-park-india-bengal-tiger-safari.jpg",
        name: "Kanha, Bandhavgarh and Golden Triangle",
        duration: "12 Nights • 13 Days",
        slug: "kanha-bandhavgarh-and-golden-triangle",
        tour: {
            location: "Madhya Pradesh",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Wander through the rolling meadows of one of the best national parks for Tigers Safaris in India, Bandhavgarh and Kanha National Park along with the exploration of cultures of Golden Triangle. Having an essence of wildlife at each corner, the forests of Kanha and Bandhavgarh are a true delight for any wildlife enthusiast.\nWhile on one hand, Kanha National Park stands famous for its rich flora and a galore of wildlife such as Wild Dogs, Tigers, and Sloth Bears along with other reptiles, on the other hand, Bandhavgarh National Park stands famous for high density of the big cat population – Tigers. Lose yourself in the beauty of the golden triangle which includes the bazaars of the pink city of Jaipur, the grandeur of the Taj Mahal in Agra, and finally bustling streets of Old Delhi with its historical monuments with a blend of tiger safari making it a complete package for cultural and wilderness experience.",
            destinations_covered: [
                {
                    name: "KANHA NATIONAL PARK",
                    description:
                        "Spread across an area of 2000 sq. km and covered with the thickets of Sal Forest, Kanha National Park is located at the heart of Madhya Pradesh, India. Inspiration for the Jungle Book, this national park is a home for the biggest Tigers in India, making it one of the best national parks to head for a safari. The meandering streams, rolling grasslands, and the wildlife of this national park help to paint a perfect picture of how humans and wildlife can co-exist in a harmony. Regarded as one of the best managed national parks for wildlife tourism, Noble travels will help you to arrange an experience of a lifetime.                                                                  Popular Fauna at Kanha National Park: Tiger, Panther, Chital, Sambar, Barasingha, Blackbuck, Barking deer, Chousingha, Gaur, Langur, Wild pig, Jackal, Sloth bear, Wild dog. Reptiles: Python, Indian Cobra, Russell’s Viper, Indian Krait, Common Rat Snake, Common Skink, Indian Monitor, Fan Throated Lizard, and Indian Garden Lizard.",
                },
                {
                    name: "BANDHAVGARH NATIONAL PARK",
                    description:
                        "Popularly addressed as the land of tigers, Bandhavgarh National Park is a perfect destination to travel especially for wildlife photographers. While this national park is known as one of the best national parks across the globe to spot tigers, it also provides a wide range of other tourist attractions such as Bandhavgarh Fort, Bandhavgarh Hill, Baghel Museum, Ancient Caves, etc. Head out for a full day, or half-day jeep safaris at Bandhavgarh National Park for an enchanting experience.  Popular Fauna at Bandhavgarh National Park: Bengal Tigers, Leopards, Sambar, Barking Deer, Nilgai, Wild Boar, Gaur, the Asiatic jackal, Bengal fox, sloth bear, ratel, grey mongoose, striped hyena, jungle cat, etc. Mammals like dhole, the small Indian civet, palm squirrel, and lesser bandicoot rat and little grebe, egret, lesser adjutant, sarus crane, black kite, crested serpent eagle, black vulture, Egyptian vulture, common peafowl, red jungle fowl, dove, parakeet, Indian roller can also be found in abundance. Reptilian fauna includes cobra, krait, viper, rat snake, python, turtle, and several lizard varieties, including Varanus, etc.",
                },
                {
                    name: "JAIPUR",
                    description:
                        "The capital and the largest city of the Indian state of Rajasthan, Jaipur is famously addressed as the Pink city, due to the dominant color scheme of its buildings. It is a popular tourist destination in India and forms a part of the west Golden Triangle tourist circuit along with Delhi and Agra. Visitor attractions include the Birla Auditorium, Albert Hall Museum, Hawa Mahal, Jal Mahal, City Palace, Amer Fort, Jantar Mantar, Nahargarh Fort, Jaigarh Fort, Birla Mandir, Galtaji, Govind Dev Ji Temple, Garh Ganesh Temple, Moti Dungri Ganesh Temple, Sanghiji Jain temple and the Jaipur Zoo.",
                },
                {
                    name: "AGRA",
                    description:
                        "Located on the banks of the Yamuna river in the Indian state of Uttar Pradesh, Agra happens to be a major tourist spot for its most prized monument, the Taj Mahal, built by Shah Jahan as a mausoleum for his favorite empress. With being a booming tourism industry, Agra is also famous for footwear, leather, and other manufacturing.",
                },
                {
                    name: "NEW DELHI ",
                    description:
                        "The capital of India, New Delhi is the largest commercial city in northern India. Home to several historic sites and museums, New Delhi serves as a major tourist attraction for witnessing the bustling streets of Old Delhi and signature monuments such as the Humayun’s Tomb and Qutub Minar, India Gate, etc. with a cultural twist to our tiger safari tours.",
                },
            ],
            itinerary_outline: [
                {
                    title: "Arrive in New Delhi (by flight)",
                    description:
                        "Arrive at New Delhi international airport where a Noble Travels representative will be present to greet and assist you on your blissful journey and help you transfer to the hotel. All the relevant details specific to the tour will be explained by our representative. handover all the travel-related documents and get assisted for your check-in at the hotel. Overnight stay at the hotel in New Delhi.",
                },
                {
                    title: "New Delhi – Raipur - Kanha (flight + 200 kms/4-hour drive)",
                    description:
                        "After an early breakfast, head towards the airport for boarding a morning flight to Raipur. Meet our representative at the airport and drive towards your first destination, Kanha National Park which is 220 km away and will be a 4-hour drive.\n\nCheck-in at the lodge and head towards an afternoon jeep safari at Kanha National Park after having lunch. The dinner and overnight stay will be at the lodge.",
                },
                {
                    title: "In Kanha National park",
                    description:
                        "Wake up early at 0500hrs and after a high tea session, proceed towards the morning jeep safari to the Kanha Tiger Reserve.\n\nLose yourself in the thickets of sal and bamboo forests that are spread over an area of 940 Km2\n\nThe park is the only habitat of the rare hardground Barasingha (Cervus Duvaceli Branderi). This Tiger Reserve became a major inspiration for Rudyard Kipling to write the “Jungle Book”. A great host for flora and fauna, this national park in India is the first tiger reserve in India to officially introduce a mascot, Bhoorsingh the Barasingha.\n\nYour packed breakfast that comes from the lodge is served at a designated spot and spread on the bonnet of the Safari vehicle. Enjoy your meal in the wilderness of Kanha and continue to stick your eyes for the elusive Tiger in the energizing and fresh environment of the Kanha National Park.\n\nMark your return from the breathtaking safari at around 1130hrs and freshen up for a delicious lunch.\n\nDepart for an afternoon jeep safari at Kanha National Park. Return at 6 pm from safari. Dinner and overnight stay at the lodge.",
                },
                {
                    title: "In Kanha National park",
                    description:
                        "A new day for the adventure and exploration of wildlife at Kanha National Park. Head out for a morning jeep safari through the forests of the Banjar valley and Halon valley. The park harbors around 38 species of mammals with some famous inhabitants such as gaur (world’s largest cattle), Sambar (the largest Indian deer), Chausingha (world’s only four-horned antelope), sloth bear, Indian wild dog (also addressed as Dhole), an occasional Leopard, etc.\n\nThe park is not only a breeding place for mammals but as many as 300 species of birds inhabit the park including the storks, egrets, black ibis, raptors, owls, and the Red-wattled lapwings.\n\nDepart for the afternoon jeep safari at the Kanha tiger reserve and return at 6 pm. Dinner and overnight stay are at the lodge.",
                },
                {
                    title: "Kanha – Bandhavgarh (by surface 280 kms/5-6 hrs drive)",
                    description:
                        "After a Morning jeep safari to the Kanha national park, an early lunch is arranged post which you are departed for Bandhavgarh National Park, your next destination on this awe-inspiring journey. With a distance of 280kms, after a drive of 5-6-hours, you will reach your destination and on arrival, check into the Lodge. Dinner and overnight at the Lodge.",
                },
                {
                    title: "In Bandhavgarh National park",
                    description:
                        "All-day meals – Breakfast, Lunch, and Dinner are served at the lodge with morning and afternoon jeep safaris to the Bandhavgarh national park.\n\nBandhavgarh happens to be the discovery palace for the famous White Tigers of Rewa and is well known for its high tiger density. Apart from the national animal of India, you will get a chance to witness other wild attractions – Leopards, Blue Bulls, Indian Gaur (Bison) Chausingha (Four Horned Antelopes), Spotted Deers, Sambar Deer, Wild Boar, Sloth Bears Fox, Jackals, Wild Dogs, etc.\n\nWith at least 22 mammal species and a vast set of about 250 bird species that are found in the park, Bandhavgarh is a great destination to spot other animals like, are Ratel, Porcupine, Small Indian Civet, Palm Squirrel, Lesser Bandicoot rat, the Jungle Cat, and the shy Hyenas. The reptile population in the park includes Cobras, Kraits, Vipers, Ratsnakes, Pythons, Monitor Lizards, and turtles. The two-primate species – the rhesus macaque and the Hanuman langur – inhabit Bandhavgarh.\n\nThe dinner and overnight stay are at the Lodge.",
                },
                {
                    title: "In Bandhavgarh National park",
                    description:
                        "All-day meals: Breakfast, Lunch, and Dinner are arranged at the lodge. Head out for morning and afternoon jeep safaris to the national park.\n\nBandhavgarh: A historical place that has been popular amongst the people for over 2000 years, Bandhavgarh has its mentions in the ancient books – the Narad-Panch Ratra and the Shiva Purana. With a long-ruling history of various dynasties who are said to have ruled the fort, became more and more deserted until forest overran the area band it became the royal hunting reserve. This helped to preserve the forest and its wildlife, although the Maharajas made full use of their rights. At independence, Bandhavgarh remained the private property of the Maharaja until he gave it to the state for the formation of the National Park in 1968.\n\nYour overnight stay is arranged at the lodge.",
                },
                {
                    title: "Bandhavgarh – Jabalpur – New Delhi (Flight + 220 km/ 4 hrs. drive)",
                    description:
                        "After a morning jeep safari in the Bandhavgarh National Park, you are transferred to Jabalpur airport post having lunch. Board a flight at 1630 hrs and arrive in New Delhi at 1840 hrs. On arrival, transfer to the hotel for an overnight stay.",
                },
                {
                    title: "New Delhi – Agra (by surface – 220 Kms, 4 hours drive)",
                    description:
                        "After an eased breakfast, drive towards Agra which is located 220kms away and is a 4-hour drive. Check in to a hotel and your visit to Mehtab Bagh to see the Taj Mahal is scheduled at sunset.\n\nMehtab Bagh, popularly addressed as the Moonlight Garden is a charbagh complex in Agra, North India. It lies north of the Taj Mahal complex and the Agra Fort on the opposite side of the Yamuna River, in the flood plains. The garden complex, square in shape, measures about 300 by 300 meters (980 ft × 980 ft) and is perfectly aligned with the Taj Mahal on the opposite bank. During the rainy season, the ground becomes partially flooded.\n\nAn overnight stay at the hotel in Agra.",
                },
                {
                    title: "Agra – Jaipur (by road, 235kms, 5-hours drive)",
                    description:
                        "At sunrise, proceed to visit the famous white marble mausoleum, The Taj Mahal, built in the middle of the 17th century by the Moghul emperor Shah Jehan for his wife Mumtaz Mahal.\nCompleted in 1652, skilled craftsmen from Persia, Turkey, France, and Italy and some 20,000 laborers worked for 17 years to build this masterpiece.\n\nAfter relaxed breakfast, proceed to visit the red sandstone Agra Fort that stands like a crescent on the banks of Yamuna River enclosed by forbidding 20-meter high walls, with a 12- meter moat between them. Three successive Mughal emperors – Akbar, Jehangir, and Shah Jehan – helped create this massive structure which contains Hindu and Muslim architecture.\nCheck out from the hotel.\nLater, drive to Jaipur – 235 kms/5-hours and on arrival, check into the hotel. Overnight stay at the hotel.",
                },
                {
                    title: "Jaipur",
                    description:
                        "This morning you will drive 11 km to the outskirts of the city stop at Jal Mahal to visit Amber Fort, the ancient capital of the State until 1728. Visit the Temple of Kali, the Hall of Victory, or Jai Mahal.\n\nLater visit the Observatory, the Palace of Winds, and the City Palace and Museum. The museum has been an interesting textile section, which contains dresses and costumes of the former Maharajas and Maharanis of Jaipur. Jaipur is well known for its beautiful carpets, enameled ornaments, precious and semi-precious stones, brass ornaments, and many other arts and crafts. Spend time in crowded lanes & by lanes of the pink city, haggling, and souvenir-hunting in the evening.\n\nReturn to the hotel for an overnight stay in Jaipur.",
                },
                {
                    title: "Jaipur - New Delhi ( by road 260 km 5 hrs drive)",
                    description:
                        "After a relaxed breakfast, drive back to New Delhi covering a distance of 260 km, approximately 5 hrs. drive. Transfer to your hotel near to the airport.",
                },
                {
                    title: "Fly back home",
                    description:
                        "After breakfast, transfer to the International airport to board a flight back home. This marks your end towards Kanha, Bandhavgarh, and Golden Triangle Tour unless you opt for an extended customized journey.\nEnd of our services",
                },
            ],
            important_information: [
                "The driving hours given above from one city to another are based on the normal conditions of the roads and may vary. Any break for Food / Tea / Toilets / Sightseeing on the way will take extra time than the above given hours. Bandhavgarh has National parks that are closed every Wednesday for afternoon jeep safari.",
                "The Taj Mahal is closed on Friday.",
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
            ],
        },
    },
    {
        img_url:
            "https://d1bv4heaa2n05k.cloudfront.net/user-images/1552055711059/shutterstock-651507499_main_1552055805971.jpeg",
        name: "Tiger Photographic Safari",
        duration: "15 Nights • 16 Days",
        slug: "tiger-photographic-safari",
        tour: {
            location: "Madhya Pradesh",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Our Tiger Photographic Safari offers an exceptional opportunity for wildlife photography enthusiasts to capture the majestic Bengal tiger in its natural habitat, alongside other incredible wildlife in some of India’s most renowned national parks. The adventure begins at Corbett National Park, India’s oldest wildlife sanctuary, where you’ll embark on thrilling safaris through the lush landscapes and rugged terrain in search of tigers, leopards, and diverse bird species. From there, head to New Delhi, where you can explore the vibrant capital’s historical landmarks like the Red Fort and India Gate, giving you a brief cultural respite before you immerse yourself in more wildlife encounters.\n\nNext, journey to Jabalpur, the gateway to Bandhavgarh and Kanha National Parks, two of India’s premier wildlife reserves. Bandhavgarh, known for its high density of tigers, offers outstanding photographic opportunities as you capture these majestic predators in their natural environment. Then, visit Kanha National Park, renowned for its rich biodiversity and scenic landscapes, perfect for wildlife photography. The safari continues to Raipur, which serves as a convenient entry point for exploring nearby wildlife reserves. With expert guidance from local naturalists and photographers, this tour ensures that you’ll return home with stunning wildlife photos and memories of an unforgettable safari adventure.",
            destinations_covered: [
                {
                    name: "CORBETT",
                    description:
                        "Corbett National Park, India's first and one of the most famous wildlife sanctuaries, is a must-visit for nature enthusiasts and wildlife photographers. Known for its diverse ecosystem, it offers a unique chance to spot the majestic Bengal tiger in its natural habitat, along with other wildlife like elephants and various bird species.",
                },
                {
                    name: "NEW DELHI",
                    description:
                        "The capital city of India, New Delhi, acts as a gateway to the country’s rich cultural heritage and modern amenities. Its blend of historical monuments, like the Red Fort and Qutub Minar, alongside modern infrastructure, makes it a perfect introduction to India’s diversity and vibrant urban life.",
                },
                {
                    name: "JABALPUR",
                    description:
                        "Jabalpur is an important cultural and natural hub in Madhya Pradesh, known for its stunning geological formations, such as the famous Marble Rocks at Bhedaghat. It also serves as a convenient access point to nearby national parks like Kanha and Bandhavgarh, making it an essential stop for nature lovers.",
                },
                {
                    name: "RAIPUR",
                    description:
                        "Raipur, the capital of Chhattisgarh, is an important commercial and cultural center of central India. It is well-connected and serves as a gateway to explore the tribal culture and natural beauty of the surrounding regions, including the picturesque forests and waterfalls of Chhattisgarh, making it a perfect end to a wildlife and cultural exploration tour.",
                },
                {
                    name: "BANDHAVGARH",
                    description:
                        "Bandhavgarh National Park is renowned for its high tiger population and is considered one of the best places in India to spot the elusive Bengal tiger. The park's dense forests and diverse wildlife, combined with its historical significance with the Bandhavgarh Fort, make it a prime destination for both history buffs and wildlife enthusiasts.",
                },
                {
                    name: "KANHA",
                    description:
                        "Kanha National Park is one of India’s largest and most well-preserved wildlife sanctuaries. Known for its rich biodiversity, including the rare barasingha (swamp deer), and its lush landscapes, it offers some of the best opportunities to observe tigers, leopards, and a variety of bird species in their natural environment.",
                },
            ],
            itinerary_outline: [
                {
                    title: "Arrive New Delhi",
                    description:
                        "On arrival at the New Delhi airport at you will be met by our representative who will take you to your hotel in New Delhi.",
                },
                {
                    title: "New Delhi – Corbett (by surface 275 kms. - 5 to 6 hrs. drive)",
                    description:
                        "After breakfast transfer to Corbett National Park 275 km takes around 5-6 hours. Check in to the lodge and after lunch depart for the afternoon jeep safari. Dinner, overnight stay at the lodge.\n\nSituated at the southern edge of the Corbett Reserve Park, the Jhirna tourism zone offers some exclusive tiger and sloth bear sightings along with the spectacular view of the landscape which is pretty rich in wildlife. The topography of the Jhirna zone primarily is a dry deciduous type and consists of a large Grassland (Chaur) known as the Laldhang Chaur. This big Chaur is the favorite place for the herbivores of the zone like deer, chitals, nilgai, and elephants. Numerous water streams in this zone nourish the wildlife of this zone and adding the natural ambiance of the zone. Also, the zone is considered an excellent spot for bird watching.\n\nDhela is a new eco-tourism zone in Corbett National Park included in the tiger reserve zone in November 2014.",
                },
                {
                    title: "In Corbett National Park",
                    description:
                        "Morning jeep safari to the national park. After early lunch Drive to Dhangadi gate change into the safari vehicle with your baggage and drive through the forest. Take out your Cameras and Binocular as there is a high chance of viewing Wildlife. You can say your safari will start from the time you enter Dhangadi gate. Check into the forest Rest House.\n\nThese Forest Rest Houses are unique to Corbett National Park. It is only in Corbett that you get an opportunity to stay inside the national park. The complex is located on the banks of the Ramganga river and overlooks the foothills of the Himalayas. Post lunch proceeds for an afternoon safari in the most scenic national park of India. Only vegetarian food is served here. Alcohol is not permitted here.\n\nReturn from the afternoon jeep safari. Dinner and overnight at Forest Rest House.",
                },
                {
                    title: "In Corbett National Park",
                    description:
                        "Morning and afternoon jeep safaris, meals, and overnight at Forest Rest House inside the national park.\n\nBegin your morning safari at sunrise. Corbett has aptly been described as the land of the Roar, Trumpet, and Song. It represents a scene of remarkable beauty. Corbett had the proud distinction of being the chosen venue for the inauguration of Project Tiger in India. The rich biodiversity of the Reserve is partly attributed to the variety of habitats found here. Due to the location of the Reserve in the foothills of the central Himalayas, both Himalayan and peninsular flora and fauna are found in the Reserve. Dinner and overnight at the Rest House.",
                },
                {
                    title: "In Corbett National Park",
                    description:
                        "Morning and afternoon jeep safaris, meals, and overnight at Forest Rest House inside the national park.",
                },
                {
                    title: "Corbett – New Delhi (by surface 275 kms. - 5 to 6 hrs. drive)",
                    description:
                        "Go for the morning Jeep safari and after breakfast checkout from the Forest Rest House and drive toward the exit gate of Corbett. Do not pack your camera equipment, as the animals do come on this road to say goodbye to you. three nights’ stay seems very less in this paradise. Then drive to New Delhi, 275kms, 5-6 hours drive. On the arrival check in to the hotel or flight to onward destination.",
                },
                {
                    title: "New Delhi – Jabalpur – Bandhavgarh (flight + 200 kms. - 4 hrs. drive)",
                    description:
                        "Early breakfast, and transfer to the airport in the morning to board a flight at 0555 hrs to arrive at Jabalpur at 0755 hrs. Met at the airport and drive to Bandhavgarh National Park 200kms / 4-hour drive. On arrival check into the Lodge. As per the latest rules laid by the forest department, the afternoon safari to the core zones of the national park is closed but safari in buffer zones is permitted on Wednesday. Afternoon jeep safari to the national park.\n\nBandhavgarh: The national park is mainly known for the density of its tiger population. This is the place where the famous White Tigers of Rewa were discovered. The other wild attractions in the park include Leopards, Blue Bulls, Indian Gaur (Bison) Chausingha (Four Horned Antelopes), Spotted Deers, Sambar Deer, Wild Boar, Sloth Bears Fox, Jackals, Wild Dogs, etc. There are at least 22 mammal species and about 250 bird species in the Park. The other animals found in Bandhavgarh are Ratel, Porcupine, Small Indian Civet, Palm Squirrel, Lesser Bandicoot rat, the Jungle Cat, and the shy Hyenas. The reptile population in the park includes Cobras, Kraits, Vipers, Ratsnakes, Pythons, Monitor Lizards, and turtles. The two-primate species – the rhesus macaque and the Hanuman langur – inhabit Bandhavgarh.\nDinner and overnight stay at the lodge.",
                },
                {
                    title: "In Bandhavgarh",
                    description:
                        "Breakfast, Lunch, and Dinner at the Lodge. Morning jeep and afternoon safari to the national park.\n\nAt independence, Bandhavgarh remained the private property of the Maharaja until he gave it to the state for the formation of the National Park in 1968. After the park was created poaching and hunting were brought under control and the number of animals rose dramatically. The Tigers in particular prospered and the 1986 extension provided much-needed forest to accommodate them. Overnight at the lodge.",
                },
                {
                    title: "In Bandhavgarh",
                    description:
                        "Breakfast, Lunch, and Dinner at the Lodge. Morning and afternoon jeep safari to the national park.\n\nBandhavgarh has been a center of human activity and settlement for over 2000 years, and there are references to it in the ancient books, the Narad-Panch Ratra and the Shiva Purana. The oldest sign of habitation in the park are caves dug into the sandstone to the north of the fort. Several contain Brahmi inscriptions dating from the 1st century B.C. Various dynasties have ruled the fort, for example, the Magha’s from the 1st century A.D., the Vakatakas from the 3rd century A.D., From that time onwards Bandhavgarh was ruled by a succession of dynasties including the Chandela Kings Bandhavgarh became more and more deserted until forest overran the area band it became the royal hunting reserve. This helped to preserve the forest and its wildlife, although the Maharajas made full use of their rights,",
                },
                {
                    title: "In Bandhavgarh",
                    description:
                        "Breakfast, Lunch, and Dinner at the Lodge. Morning and afternoon jeep safari to the national park.",
                },
                {
                    title: "Bandhavgarh – Kanha (by surface 280 kms. - 6 hrs. drive)",
                    description:
                        "Morning jeep safari inside the park. After lunch check out from the lodge and get transfer to Kanha National Park. On the arrival check in to lodge dinner and overnight stay at the lodge.",
                },
                {
                    title: "In Kanha",
                    description:
                        "Wake up at 0500hrs, have tea coffee with biscuits, and proceed for the morning jeep safari to the National park. Kanha’s sal and bamboo forests, rolling grasslands, and meandering streams stretch over 940 sq km in dramatic natural splendor which forms the core of the Kanha Tiger Reserve created in 1974 under Project Tiger. The park is the only habitat of the rare hardground Barasingha (Cervus Duvaceli Branderi).\n\nThis is the original Kipling country of which he wrote so vividly in his Jungle Book. Packed breakfast which comes from the Lodge is served at a designated spot and spread on the bonnet of the Safari vehicle. Enjoy your breakfast in the wilderness of Kanha.\n\nContinue your search for the elusive Tiger if you have not yet seen the same, and soak in the fresh, and energizing environment. Return from Safari around 1130hrs. Freshen up, and lunch is served. Depart for afternoon jeep safari Kanha National Park. Return at 6 pm from safari. Dinner and overnight at the Lodge.",
                },
                {
                    title: "In Kanha",
                    description:
                        "Wake up, and get ready for another day of adventure in the National park. The forests of the Banjar valley and Halon valley, respectively forming Kanha’s western and eastern halves. By a special statute in 1955, Kanha National Park came into being. Since then, a string of stringent conservation programs has been launched, for the overall protection of the park’s fauna and flora. Kanha boasts about 38 species of mammals. Some of the inhabitants of this park are the gaur, the largest of the world’s cattle; the sambar, the largest Indian deer; and the Chausingha, the only four-horned antelope in the world.\n\nOther frequent visitors include the Nilgai antelope, the sloth bear, the dhole, or Indian wild dog, and an occasional Leopard. Some 300 species of birds inhabit the park, that includes the storks, egrets, black ibis, raptors, owls, and the Red-wattled lapwings. Depart for an afternoon jeep safari inside Kanha National Park. Dinner and overnight at the Lodge.",
                },
                {
                    title: "In Kanha",
                    description:
                        "\nBreakfast, Lunch, and Dinner at the Lodge. Morning jeep safari to the national park. As per the latest rules laid by the forest department, the afternoon safari to the core zones of the national park is closed but safari in buffer zones is permitted on Wednesday. Afternoon safari in buffer zones like Khapa.",
                },
                {
                    title: "Kanha – Raipur – New Delhi (flight +220 kms. - 5 to 6 hrs. drive)",
                    description:
                        "Morning jeep safari in the park. After lunch drive to Raipur airport 220kms /5-6 hrs. drive to board a flight to New Delhi at 1915 hrs. On arrival transfer to the hotel in New Delhi. Overnight stay at the hotel in New Delhi.",
                },
                {
                    title: "Fly back home",
                    description:
                        "After breakfast transfer to the International airport to board a flight back home.\nEnd of our Services.",
                },
            ],
            important_information: [
                "Safari zone is subject to forest permissions.",
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Kanha and Bandhavgarh national parks are closed for afternoon jeep safari every Wednesday.",
                "In case the hotel envisaged or normal category of rooms are waitlisted/sold out, alternate hotels / categories will be provided & we will keep you informed on the supplement/reduction involved.",
            ],
        },
    },
    {
        img_url: "https://i.ytimg.com/vi/B3VH-vDrMwo/maxresdefault.jpg",
        name: "The Best of Indian Wildlife with Golden Triangle",
        duration: "21 Nights • 22 Days",
        slug: "the-best-of-indian-wildlife-with-golden-triangle",
        tour: {
            location: "Rajasthan",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "The Best of Indian Wildlife with Golden Triangle is an extraordinary journey that combines India’s iconic cultural landmarks with the thrill of wildlife exploration. Your adventure begins in New Delhi, India’s bustling capital, where you’ll visit awe-inspiring sites like the Red Fort, Qutub Minar, and the serene Lotus Temple. From Delhi, head to Agra, home to the world-famous Taj Mahal, a symbol of eternal love, and the historical Agra Fort. Continue your journey to Ranthambore National Park, one of India’s premier wildlife sanctuaries, where exciting safaris offer the chance to spot the elusive Bengal tiger. The vibrant city of Jaipur, with its magnificent Amber Fort, Hawa Mahal, and grand City Palace, adds royal charm to this cultural and wildlife odyssey.\n\nThe second leg of your journey takes you deep into India’s wildlife heartland. Start with the Jim Corbett National Park, India’s first national park, renowned for its tiger sightings and rich biodiversity. From there, head to Nagpur as a gateway to Pench National Park, famous for its rich flora and fauna and the inspiration behind The Jungle Book. Continue your wildlife adventure at Kanha and Bandhavgarh National Parks, where thrilling safaris offer incredible wildlife experiences, including sightings of tigers, leopards, and wild elephants. Concluding in Jabalpur, where you can explore the pristine beauty of Kanha and Bandhavgarh, this tour offers a perfect blend of natural wonders and cultural splendor. Whether it’s the thrill of tiger sightings or the grandeur of India’s historic monuments, this trip promises a lifetime of unforgettable memories, making it an ideal choice for wildlife lovers and history enthusiasts alike.",
            destinations_covered: [
                {
                    name: "NEW DELHI",
                    description:
                        "New Delhi, the vibrant capital of India, is a captivating mix of ancient history and modernity. Visit iconic landmarks like the Red Fort, India Gate, and the Qutub Minar, which showcase the city’s rich Mughal and colonial past. The city also offers a blend of spiritual sites such as the Lotus Temple and Akshardham, along with bustling markets and gardens, creating an unforgettable urban experience.",
                },
                {
                    name: "CORBETT",
                    description:
                        "Corbett National Park, India’s first and one of the most renowned wildlife reserves, is a haven for nature lovers and wildlife enthusiasts. Nestled in the foothills of the Himalayas, the park is famous for its Bengal tigers and diverse flora and fauna. Enjoy thrilling safaris and explore the picturesque Jim Corbett Museum, as you immerse yourself in the park's natural beauty and wildlife-rich landscapes.",
                },
                {
                    name: "AGRA",
                    description:
                        "Agra Agra is home to the world’s most iconic monument, the Taj Mahal, one of the Seven Wonders of the World and a symbol of eternal love. Besides the Taj, explore the grandeur of Agra Fort, a UNESCO World Heritage site, and the ancient city of Fatehpur Sikri, which offers a glimpse into India’s Mughal heritage. Agra’s rich history and stunning architecture make it a must-visit destination for culture and history lovers.",
                },
                {
                    name: "RANTHAMBORE",
                    description:
                        "Ranthambore National Park, one of the largest and most famous wildlife sanctuaries in India, is renowned for its tiger sightings. The park, located in Rajasthan, offers thrilling safaris through its lush forests and dry scrublands, where you can spot tigers, leopards, and other wildlife. The historic Ranthambore Fort adds a unique cultural touch to your wildlife experience, making it a perfect blend of nature and history.",
                },
                {
                    name: "JAIPUR",
                    description:
                        "Jaipur, the \"Pink City\" of India, is a dazzling blend of royal heritage, stunning architecture, and vibrant culture. Explore the majestic Amber Fort, the intricate Hawa Mahal, and the grand City Palace, each offering a glimpse into Rajasthan's royal past. Jaipur's bustling bazaars, filled with traditional handicrafts, textiles, and jewelry, add to the charm of this cultural gem.",
                },
                {
                    name: "NAGPUR",
                    description:
                        "Nagpur, located in the heart of India, is known as the gateway to some of India’s best wildlife sanctuaries. As a major city in Maharashtra, Nagpur is a cultural hub and a gateway to nearby parks like Pench National Park, which is just a short drive away. The city is also famous for its delicious oranges and vibrant markets, making it a charming stop on your wildlife journey.",
                },
                {
                    name: "PENCH",
                    description:
                        "Pench National Park, named after the Pench River, is a renowned wildlife sanctuary known for its rich biodiversity and inspiring the story of The Jungle Book. Located on the border of Maharashtra and Madhya Pradesh, the park offers thrilling jeep safaris, where you can spot tigers, leopards, and other wildlife amid lush forests. Its dense woods and peaceful ambiance make it an ideal destination for nature lovers.",
                },
                {
                    name: "KANHA",
                    description:
                        "Kanha National Park, one of the largest and most famous national parks in India, is a tiger conservation success story. The park's lush forests, grassy meadows, and picturesque landscapes are home to a wide array of wildlife, including tigers, leopards, and the Barasingha deer. With its rich biodiversity and stunning natural beauty, Kanha offers a thrilling and immersive wildlife experience.",
                },
                {
                    name: "BANDHAVGARH",
                    description:
                        "Bandhavgarh National Park, located in Madhya Pradesh, is famous for having one of the highest densities of tigers in India. With its picturesque landscapes, ancient ruins, and vibrant wildlife, Bandhavgarh is a premier destination for tiger safaris. The historic Bandhavgarh Fort, situated within the park, adds a fascinating cultural element to the thrilling wildlife encounters.",
                },
                {
                    name: "JABALPUR",
                    description:
                        "Jabalpur, located in Madhya Pradesh, is an important city known for its proximity to Kanha and Bandhavgarh National Parks. The city is also home to the stunning Bhedaghat Waterfalls and the Marble Rocks on the Narmada River. Jabalpur serves as a convenient gateway for exploring the wildlife sanctuaries and offers a blend of nature, history, and culture.",
                },
            ],
            itinerary_outline: [
                {
                    title: "Arrive New Delhi (by flight)",
                    description:
                        "On arrival at the New Delhi airport, you will be met by our representative who will transfer you to your hotel and assist you in check-in at the hotel. He will also hand over and explain all travel-related documents. Overnight stay is at the hotel.",
                },
                {
                    title: "New Delhi – Corbett (by surface 275 - 5 hrs. drive)",
                    description:
                        "Early breakfast and then drive to Corbett National Park 275kms/ 5 hrs. drive. At the park gate change into the safari vehicle with your baggage. Take out your camera equipment as the next 32kms, 1.5-hour drive is through the forest, and you can encounter any wildlife here including Tigers, leopards, and Elephants. Check into the Forest Rest House.\n\nThese Forest Lodges are unique to Corbett National Park. It is only in Corbett that you get an opportunity to stay inside the national park. The complex is located on the banks of the Ramganga river and overlooks the foothills of the Himalayas. Post lunch proceeds for an afternoon safari in the most scenic national park of India. Only vegetarian food is served here. Alcohol and smokes are not permitted here. Return from the afternoon jeep safari at sunset. Dinner and overnight at Forest Rest House.",
                },
                {
                    title: "Corbett",
                    description:
                        "Morning and afternoon jeep safaris, meals, and overnight at Forest Rest House inside the national park.\n\nBegin your morning safari at sunrise. Corbett has aptly been described as the land of the Roar, Trumpet, and Song. It represents a scene of remarkable beauty. Corbett had the proud distinction of being the chosen venue for the inauguration of Project Tiger in India. The rich biodiversity of the Reserve is partly attributed to the variety of habitats found here. Due to the location of the Reserve in the foothills of the central Himalayas, both Himalayan and peninsular flora and fauna are found in the Reserve.",
                },
                {
                    title: "Corbett",
                    description:
                        "Morning and afternoon jeep safaris, meals, and overnight at Forest Lodge inside the national park. India’s first and finest park spread over 520 sq. KMS. Established initially as Hailey National Park on August 8, 1936, in honor of Sir Malcolm Hailey, then governor of the United Provinces, the name was changed to Ramganga National Park in 1952. In 1957, it was finally named Corbett National Park in honor and memory of the late Jim Corbett, the legendary hunter, naturalist-turned-author, and photographer who had helped in setting up the park and demarcating its boundaries.",
                },
                {
                    title: "Corbett – Agra (by surface – 320 Kms - 6 to 7 hrs. drive)",
                    description:
                        "Morning Jeep safari inside the national park and after breakfast check out from the lodge and drive toward the exit gate of Corbett. Do not pack your camera equipment, as the animals do come on this road to say goodbye to you. A 3 nights stay seems very less in this paradise. Once out of the park, drive to Agra, about 6-7 hours drive, 320kms. On arrival check into the hotel. Overnight stay at the hotel in Agra.",
                },
                {
                    title: "Agra – Ranthambore (by surface 260 Kms - 5 to 6 hrs. drive)",
                    description:
                        "Sunrise proceed to visit the famous white marble mausoleum, The Taj Mahal, which was built in the middle of the 17th century by the Moghul emperor Shah Jehan for his wife Mumtaz Mahal.\nCompleted in 1652, skilled craftsmen from Persia, Turkey, France, and Italy and some 20,000 laborers worked for 17 years to build this edifice.\nLater transfer to Ranthambore National Park 260kms, 5-6-hour drive. On arrival check into lodge, proceed for afternoon jeep safari. Dinner and overnight stay at the lodge.",
                },
                {
                    title: "Ranthambore",
                    description:
                        "Morning & evening jeep safaris in the park. Meals at the resort. Overnight at the hotel in Ranthambore.\n\nRanthambore with an area of 400 sq. km encompassing rocky hill crests which descend to open valleys between the Aravalli and Vindhya ranges, dotted with water pools and fruit trees, this park gets its name from the thousand-year-old fortress, which looms above the forest. Well known for the diurnal activity of tigers, Ranthambore is a very special and unusual area where a natural present meets a historical past. Sambar, Cheetal, chinkara, nilgai, and languor. The elusive leopard and tigers are found in this reserve with tourists standing a very good chance of seeing tigers during the safaris. Dotted across the landscape are the crumbling ruins of its past glory, be it Chatris or cupolas, like palaces or old guard posts, all of which reinforce the magical and ethereal quality of this great wilderness.",
                },
                {
                    title: "Ranthambore",
                    description:
                        "Morning & evening jeep safaris in the park. Meals at the resort. Overnight at the hotel in Ranthambore.\nRanthambore is also rich in birdlife with around 300 species of birds. In fact for a keen bird watcher, Ranthambore and the surrounding area is a paradise. Some interesting resident species of birds are large Cormorant, Painted Spurfowl, Sarus Crane, Bronzed winged Jacana, Sandpiper, Kingfisher, Nightjar, Painted Sandgrouse, Great horned owl and many more regular winter migrants which come from their nesting ground north of Himalayas to Ranthambore and surrounding areas.",
                },
                {
                    title: "Ranthambore – Jaipur (180 kms. - 3 hrs. drive)",
                    description:
                        "Check-out after an early breakfast. Drive towards Jaipur 180 km takes around 3 hrs. Arrive at your hotel before lunch.\n\nAfter lunch, visit the highlights of the Pink City, including the Jantar Mantar observatory, the Hawa Mahal (Palace of the Winds) the City Palace and Museum, and the bustling bazaars in the historic part of town. Jaipur is known for its shopping from precious stones to handicrafts. Return to your hotel and evening at your leisure. Overnight at your hotel in Jaipur.",
                },
                {
                    title: "Jaipur – New Delhi (260 kms - 5 hrs. drive)",
                    description:
                        "This morning you will drive 11 km in the outskirts of the city stop at Jal Mahal to visit Amber Fort, the ancient capital of the State until 1728. Visit the Temple of Kali, the Hall of Victory, or Jai Mahal\n\nLater visit the Observatory, the Palace of Winds, and the City Palace and Museum. The museum has an interesting textile section, which contains dresses and costumes of the former Maharajas and Maharanis of Jaipur. Later drive back to New Delhi 260kms, 5 hrs drive. On arrival check in to the hotel Overnight stay at the hotel in New Delhi.",
                },
                {
                    title: "New Delhi - Nagpur - Pench (100 kms. - 2 hrs drive + flight)",
                    description:
                        "Early breakfast, and transfer to the airport in the morning to board a flight at 1020 hours to arrive Nagpur at 1200 hrs. Met at the airport and drive to Pench National Park 100kms / 2-hour drive. On arrival check into the Resort. After lunch goes for an afternoon jeep safari to the national park. Dinner and overnight stay at the resort.\n\nA total of 758 Sq.kms of this Southern Indian tropical moist deciduous forest has its extent mingling with the tropical dry deciduous teak. The area is crisscrossed by a number of streams and ‘Nallahs’ most of which are seasonal. Though the Pench River dries up in April end, a number of water pools locally known as ‘dohs’ are found which serve as water holes for the wild animals. The Pench Reservoir at the center of the park is the only major water source during the pinch period.\n\nAs a prey concentration is high along the Pench River, the tiger usually inhabits and frequents this belt. Leopards though generally operate in the peripheral areas but are occasionally seen in the deep forest also. Jungle cats are commonly seen. Leopard cats, small Indian civets, and palm civets are seen rarely.",
                },
                {
                    title: "Pench",
                    description:
                        "Morning and afternoon Jeep safaris to the National park. Meals and overnight at the resort.\nIn Pench, Cheetal, Sambar, are commonly seen grazing on the open sites on roadsides and banks of river & reservoir. Jackals can be seen in search of food anywhere in the Park. Packs of up to 15 or more wild dogs can be seen near Chhedia, Jamtara, Bodanala, and Pyorthadi areas of the Reserve. Herds of gaur can be spotted near streams and bamboo patches commonly in the summer months. Sloth beer occupies the rocky areas and favors Mahul bel infested forest. Chinkara is present in very small numbers and is found in open areas around Turia, Telia, and Dudhgaon villages.",
                },
                {
                    title: "Pench",
                    description:
                        "Morning and afternoon Jeep safaris to the National park. Meals and overnight at the resort.\nPench named after the Pench River, is a renowned wildlife sanctuary known for its rich biodiversity and inspiring the story of The Jungle Book. Located on the border, the park offers thrilling jeep safaris, you can spot tigers, leopards, and other wildlife amid lush forests.",
                },
                {
                    title: "Pench – Kanha (210 kms. - 4 to 5 hrs drive)",
                    description:
                        "Morning jeep safari to the national park and after lunch drive to Kanha national park 210kms/ 5-hour drive. On arrival check into the Resort. Dinner and overnight at the resort in Kanha.",
                },
                {
                    title: "Kanha",
                    description:
                        "Wake up at 0500hrs, have tea coffee with biscuits, and proceed for the morning safari to the National park.\n\nKanha’s sal and bamboo forests, rolling grasslands, and meandering streams stretch over 940 sq km in dramatic natural splendor which forms the core of the Kanha Tiger Reserve created in 1974 under Project Tiger. The park is the only habitat of the rare hardground Barasingha (Cervus Duvaceli Branderi).\n\nThis is the original Kipling country of which he wrote so vividly in his Jungle Book. Packed breakfast which comes from the Lodge is served at a designated spot and spread on the bonnet of the Safari vehicle. Enjoy your breakfast in the wilderness of Kanha.\n\nContinue your search for the elusive Tiger if you have not yet seen the same, and soak in the fresh, and energizing environment. Return from Safari around 1130hrs. Freshen up, and Lunch is served.\nDepart for afternoon jeep safari Kanha National Park. Return at 6 pm from safari. Dinner and overnight at the Lodge.",
                },
                {
                    title: "Kanha",
                    description:
                        "Wake up, and get ready for another day of adventure in the National park. The forests of the Banjar valley and Halon valley, respectively forming Kanha’s western and eastern halves. By a special statute in 1955, Kanha National Park came into being. Since then, a string of stringent conservation programs has been launched, for the overall protection of the park’s fauna and flora. Kanha boasts about 38 species of mammals. Some of the inhabitants of this park are the gaur, the largest of the world’s cattle; the sambar, the largest Indian deer; and the Chausingha, the only four-horned antelope in the world. Other frequent visitors include the Nilgai antelope, the sloth bear, the dhole, or Indian wild dog, and an occasional Leopard. Some 300 species of birds inhabit the park, that includes the storks, egrets, black ibis, raptors, owls, and the Red-wattled lapwings.\n\nDepart for afternoon jeep safari Kanha National Park. Return at 6 pm from safari. Dinner and overnight at the Lodge.",
                },
                {
                    title: "Kanha – Bandhavgarh (by surface 275kms. - 6 hrs. drive)",
                    description:
                        "Morning jeep safari to the national park and after early lunch depart for Bandhavgarh, 275kms, 6-hour drive. On arrival check into the Lodge. Dinner and overnight at the Lodge.",
                },
                {
                    title: "Bandhavgarh",
                    description:
                        "Breakfast, lunch, and dinner at the Resort. Morning and afternoon Jeep safari to the national park\n\nBandhavgarh: The national park is mainly known for the density of its tiger population. This is the place where the famous White Tigers of Rewa were discovered. The other wild attractions in the park include Leopards, Blue Bulls, Indian Gaur (Bison) Chausingha (Four Horned Antelopes), Spotted Deers, Sambar Deer, Wild Boar, Sloth Bears Fox, Jackals, Wild Dogs, etc. There are at least 22 mammal species and about 250 bird species in the Park. The other animals found in Bandhavgarh are Ratel, Porcupine, Small Indian Civet, Palm Squirrel, Lesser Bandicoot rat, the Jungle Cat, and the shy Hyenas. The reptile population in the park includes Cobras, Kraits, Vipers, Ratsnakes, Pythons, Monitor Lizards, and turtles. The two-primate species – the rhesus macaque and the Hanuman langur – inhabit Bandhavgarh.\n\nOvernight at the lodge.",
                },
                {
                    title: "Bandhavgarh",
                    description:
                        "Breakfast, Lunch, and Dinner at the Resort. Morning and afternoon jeep safari to the national park\nBandhavgarh has been a center of human activity and settlement for over 2000 years, and there are references to it in the ancient books, the Narad-Panch Ratra and the Shiva Purana.\n\nThe oldest sign of habitation in the park are caves dug into the sandstone to the north of the fort. Several contain Brahmi inscriptions dating from the 1st century B.C. Various dynasties have ruled the fort, for example, the Magha’s from the 1st century A.D., the Vakatakas from the 3rd century A.D. From that time onwards Bandhavgarh was ruled by a succession of dynasties including the Chandela Kings Bandhavgarh became more and more deserted until the forest overran the area band became the royal hunting reserve.\n\nThis helped to preserve the forest and its wildlife, although the Maharajas made full use of their rights. At independence, Bandhavgarh remained the private property of the Maharaja until he gave it to the state for the formation of the National Park in 1968. After the park was created poaching and hunting were brought under control and the number of animals rose dramatically. The Tigers in particular prospered and the 1986 extension provided much-needed forest to accommodate them. Overnight at the resort.",
                },
                {
                    title: "Bandhavgarh",
                    description:
                        "Breakfast, Lunch, and Dinner at the Resort. Morning and afternoon jeep safari to the national park.\nPark is famous for having one of the highest densities of tigers in India. With its picturesque landscapes, ancient ruins, and vibrant wildlife, Bandhavgarh is a premier destination for tiger safaris. ",
                },
                {
                    title: "Bandhavgarh – Jabalpur – New Delhi (Flight + 180 kms. - 4 hrs. drive)",
                    description:
                        "Morning jeep safari to the national park. After lunch transfer to Jabalpur airport to board a flight at 1630 hrs. to arrive in New Delhi at 1840 hrs. On arrival transfer to hotel for overnight stay.",
                },
                {
                    title: "Fly back home",
                    description:
                        "After breakfast transfer to the International airport to board a flight back home.\nEnd of our Services.",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "The driving hours given above from one city to another are based on the normal conditions of the roads and may vary. Any break for Food / Tea / Toilets / Sightseeing on the way will take extra time than the above given hours. Bandhavgarh has National parks that are closed every Wednesday for afternoon jeep safari.",
            ],
        },
    },
    {
        img_url: "https://volzero.com/img/news/87915_banner.jpg",
        name: " Taj Temple and Tiger Tours",
        duration: "18 Nights • 19 Days",
        slug: "taj-temple-and-tiger-tours",
        tour: {
            location: "U.P., Rajasthan",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                'Our Taj Temple and Tiger Tours offer an unforgettable journey through India’s cultural and natural wonders, combining iconic landmarks, spiritual temples, and thrilling wildlife experiences. The tour begins in Delhi, India’s vibrant capital, where you’ll explore historical landmarks like India Gate, Qutub Minar, and the majestic Red Fort. From Delhi, we head to Agra, home of the world-renowned Taj Mahal—a symbol of eternal love and a masterpiece of Mughal architecture. After soaking in the beauty of the Taj, we travel to Jaipur, the "Pink City," known for its royal palaces like the Amber Fort, the elegant Hawa Mahal, and the regal City Palace, offering a glimpse into Rajasthan’s royal history and grandeur.\n\nThe adventure continues into the heart of India’s wildlife, beginning with Ranthambore National Park, where you’ll embark on thrilling safaris in search of the majestic Bengal tiger. From Ranthambore, journey to the Kanha and Bandhavgarh National Parks, two of India’s premier wildlife destinations, known for their abundant flora and fauna, including tigers, leopards, and wild elephants. The tour then takes you to Khajuraho, famous for its stunning temples adorned with intricate erotic carvings and rich cultural history. Finally, the spiritual city of Varanasi, located on the banks of the sacred Ganges River, offers a deeply immersive experience with its ghats, temples, and the ancient ritual of the Ganga Aarti. This tour beautifully combines India’s cultural, spiritual, and natural treasures, ensuring an enriching experience of the country’s diverse heritage.',
            destinations_covered: [
                {
                    name: "DELHI",
                    description:
                        "Delhi, India’s bustling capital, is a city of contrasts, where the past and present coexist harmoniously. Explore iconic landmarks like the Red Fort, Qutub Minar, and the Lotus Temple, each reflecting the country’s rich history and diverse culture. The vibrant markets of Chandni Chowk and the tranquil gardens of Lodi Gardens add to the city's charm, making Delhi an exciting and dynamic start to your journey.",
                },
                {
                    name: "AGRA",
                    description:
                        "Agra is home to the timeless beauty of the Taj Mahal, one of the Seven Wonders of the World, symbolizing eternal love. Besides the Taj, the city boasts other architectural marvels like the Agra Fort, a UNESCO World Heritage site, and the beautiful Fatehpur Sikri. Agra’s blend of Mughal grandeur and historical significance makes it a must-visit destination for culture and history enthusiasts.",
                },
                {
                    name: "JAIPUR",
                    description:
                        'Known as the "Pink City," Jaipur is a royal blend of history, culture, and architecture. Visit the magnificent Amber Fort, Hawa Mahal, and City Palace, which showcase the grandeur of Rajasthan’s royal past. The bustling bazaars and vibrant markets add a lively touch, offering an authentic taste of Rajasthan\'s heritage and charm.',
                },
                {
                    name: "RANTHAMBHORE",
                    description:
                        "Ranthambore National Park, one of India’s premier wildlife sanctuaries, is renowned for its stunning landscapes and tiger sightings. Embark on thrilling safaris through the park’s rugged terrain, where you might spot the elusive Bengal tiger, along with leopards, crocodiles, and a variety of bird species. The Ranthambore Fort, located within the park, adds a historical element to the wildlife experience, making it a unique blend of nature and history.",
                },
                {
                    name: "RAIPUR",
                    description:
                        "Located in the heart of Chhattisgarh, Raipur serves as a gateway to India’s rich tribal culture and natural beauty. Visit Mahant Ghasidas Memorial Museum for a glimpse into the region’s cultural history and explore nearby attractions like Barnawapara Wildlife Sanctuary for a dose of nature. Raipur also offers a perfect blend of modern amenities and traditional heritage, making it a charming stop on your journey.",
                },
                {
                    name: "KANHA",
                    description:
                        "Kanha National Park, one of India’s most renowned wildlife reserves, offers lush green landscapes and a chance to spot the majestic Royal Bengal Tiger. The park is home to a rich diversity of flora and fauna, including leopards, wild dogs, and numerous species of birds. Kanha’s picturesque beauty, dense forests, and tranquil atmosphere make it an ideal destination for wildlife enthusiasts and nature lovers alike.",
                },
                {
                    name: "BANDHAVGARH",
                    description:
                        "Bandhavgarh National Park is famous for its high density of tigers and its rich biodiversity. The park, nestled in the Vindhya Hills, offers the perfect habitat for these majestic predators, as well as leopards, sloth bears, and a variety of birds. The ancient Bandhavgarh Fort inside the park adds a historical dimension to the thrilling safaris and wildlife encounters, making it one of the most sought-after destinations for wildlife enthusiasts.",
                },
                {
                    name: "KHAJURAHO",
                    description:
                        "Khajuraho, a UNESCO World Heritage site, is renowned for its stunning temples adorned with intricate carvings depicting various aspects of life, love, and spirituality. The Khajuraho Group of Monuments reflects the grandeur of ancient Indian architecture and is considered one of the most beautiful and well-preserved collections of temple art in the world. The town’s tranquil atmosphere and historical significance make it a fascinating cultural destination.",
                },
                {
                    name: "VARANASI",
                    description:
                        "Varanasi, one of the oldest living cities in the world, is a spiritual hub for Hindus. Situated on the banks of the sacred Ganges River, the city is famous for its ghats, where daily rituals like the mesmerizing Ganga Aarti are performed. Varanasi’s narrow alleys, ancient temples, and vibrant spiritual atmosphere offer a deeply immersive experience, making it a place of both reflection and reverence for visitors from around the globe.",
                },
            ],
            itinerary_outline: [
                {
                    title: "Arrive New Delhi (by flight)",
                    description:
                        "Meet and greet on arrival at New Delhi airport by our representative who will transfer you to the hotel, assist you in check-in at the hotel, hand over and explain all travel-related documents. Overnight stay at the Hotel.",
                },
                {
                    title: "New Delhi - Jaipur (by surface, 275kms. - 5 hours drive)",
                    description:
                        "After breakfast proceeds for the half day city tour of Old Delhi. In the old city visit Red Fort built by Emperor Shah Jahan; Jama Masjid, one of the largest mosques in India; Raj Ghat- the memorial of Mahatma Gandhi and enjoy a walking tour in Chandni Chowk- the silver street of Delhi bustling with activity.\nPost Lunch drive to Jaipur 275kms / 5hrs drive. Check in at the hotel. Overnight stay at the hotel.",
                },
                {
                    title: "Jaipur",
                    description:
                        "This morning you will drive 11 km to the outskirts of the city to visit Amber Fort, the ancient capital of the State until 1728. Visit the Temple of Kali, the Hall of Victory, or Jai Mahal and Jagmandir.\n\nIn the afternoon visit the Observatory, the Palace of Winds, and the City Palace and Museum. The museum has an interesting textile section, which contains dresses and costumes of the former Maharajas and Maharanis of Jaipur. Jaipur is well known for its beautiful carpets, enameled ornaments, precious and semi-precious stones, brass ornaments, and many other arts and crafts. Spend time in crowded lanes & by lanes of the pink city, haggling, and souvenir-hunting in the evening.\nReturn to the hotel for an overnight stay.",
                },
                {
                    title: "Jaipur - Ranthambhore (by road, 180kms - 3 hour drive)",
                    description:
                        "After breakfast drive to Ranthambhore. On arrival check-in at the Hotel. Lunch at the lodge. Afternoon exclusive jeep safari to the National Park in an open vehicle. Dinner and overnight at the Lodge.\n\nRanthambhore Tiger Reserve in the Indian state of Rajasthan comprises distinct areas with varied conservation history and virtually separated geographically, with mere narrow corridors linking them to the core, Ranthambhore National Park. These are mainly, the Ranthambhore [Tiger, Ranthambhore National Park] National Park, Keladevi Sanctuary, and Sawai Mansingh Sanctuary.\nDinner and overnight at the Lodge.",
                },
                {
                    title: "Ranthambhore",
                    description:
                        "Morning & evening exclusive jeep safari in the park. Meals at the lodge. Overnight at the lodge in Ranthambhore.\n\nRanthambhore is also rich in birdlife with around 300 species of birds. In fact, for a keen bird watcher, Ranthambhore and the surrounding area is a paradise. Some interesting resident species of birds are large Cormorant, Painted Spurfowl, Sarus Crane, Bronzed winged Jacana, Sandpiper, Kingfisher, Nightjar, Painted Sandgrouse, Great horned owl and many more regular winter migrants which come from their nesting ground north of Himalayas to Ranthambhore and surrounding areas.\n\nRanthambhore with an area of 400 sq. km encompassing rocky hill crests which descend to open valleys between the Aravalli and Vindhya ranges, dotted with water pools and fruit trees, this park gets its name from the thousand-year-old fortress, which looms above the forest. Well known for the diurnal activity of tigers, Ranthambhore is a very special and unusual area where a natural present meets a historical past. Sambar, Cheetal, chinkara, nilgai, and languor. The elusive leopard and tigers are found in this reserve with tourists standing a very good chance of seeing tigers during the safaris. Dotted across the landscape are the crumbling ruins of its past glory, be it Chatris or cupolas, like palaces or old guard posts, all of which reinforce the magical and ethereal quality of this great wilderness.",
                },
                {
                    title: "Ranthambhore - Agra (by road, 265kms - 5 hour drive)",
                    description:
                        "Morning exclusive jeep safari to the national park and after breakfast drive to Agra 265kms / 5-hour drive. En route stop at Fatehpur Sikri, the ancient abandoned Moghul capital. This 16th century capital of Moghul emperor Akbar is a complex of forts, palaces, and mosques built in sandstone. The city had to be deserted because of a lack of water. The white marble Tomb of Sheikh Salim Chisti, Akbar’s spiritual adviser, is now observed as a Muslim pilgrimage spot here.\nOvernight at the hotel in Agra",
                },
                {
                    title: "Agra – New Delhi (by road, 220kms - 4 hours drive)",
                    description:
                        "After breakfast, proceed to visit the famous white marble mausoleum, The Taj Mahal, which was built in the middle of the 17th century by the Moghul emperor Shah Jehan for his wife Mumtaz Mahal.\n\nCompleted in 1652, skilled craftsmen from Persia, Turkey, France, and Italy and some 20,000 laborers worked for 17 years to build this edifice. Later proceed to visit the red sandstone AGRA FORT which stands like a crescent on the banks of Yamuna River enclosed by forbidding 20-meter high walls, with a 12- meter moat between them. Three successive Mughal emperors – Akbar, Jehangir, and Shah Jehan – helped create this massive structure which contains Hindu and Muslim architecture. [The Taj is closed on Friday]. Check out from the hotel.\nLater drive to New Delhi 220kms/4 hours drive. Overnight stay at the hotel in New Delhi",
                },
                {
                    title: "New Delhi – Raipur – Kanha (215 kms - 5 hrs. drive)",
                    description:
                        "Packed breakfast would be arranged at 0400 hrs. transfer to the domestic terminal to board the flight to Raipur at 0645 hrs. On arrival 0835 hrs. you will be met at the Raipur airport by our representative and drive to Kanha National Park 215kms / 5-hour drive. On arrival check into the Lodge. After lunch goes for an afternoon jeep safari to the national park. Dinner and overnight at the Lodge.",
                },
                {
                    title: "Kanha",
                    description:
                        "Wake up at 0500hrs, have tea coffee with biscuits, and proceed for the morning safari to the National park.\n\nKanha’s sal and bamboo forests, rolling grasslands, and meandering streams stretch over 940 sq km in dramatic natural splendor which forms the core of the Kanha Tiger Reserve created in 1974 under Project Tiger. The park is the only habitat of the rare hardground Barasingha (Cervus Duvaceli Branderi).\n\nThis is the original Kipling country of which he wrote so vividly in his Jungle Book. Packed breakfast which comes from the Lodge is served at a designated spot and spread on the bonnet of the Safari vehicle. Enjoy your breakfast in the wilderness of Kanha. The sheer beauty of this park along with the rich bio-diversity make this a must-visit in your India program.\n\nContinue your search for the elusive Tiger if you have not yet seen the same, and soak in the fresh, and energizing environment. Return from Safari around 1130hrs. Freshen up, and Lunch is served.\n\nDepart for evening jeep safari Kanha National Park. Return at 6 pm from safari. Dinner and overnight at the Lodge. Dinner and overnight at the Lodge.",
                },
                {
                    title: "Kanha",
                    description:
                        "Wake up, and get ready for another day of adventure in the National park. The forests of the Banjar valley and Halon valley, respectively forming Kanha’s western and eastern halves. By a special statute in 1955, Kanha National Park came into being. Since then, a string of stringent conservation programs has been launched, for the overall protection of the park’s fauna and flora. Kanha boasts about 38 species of mammals.\n\nSome of the inhabitants of this park are the gaur, the largest of the world’s cattle; the sambar, the largest Indian deer; and the Chausingha, the only four-horned antelope in the world. Other frequent visitors include the Nilgai antelope, the sloth bear, the dhole, or Indian wild dog, and an occasional Leopard. Some 300 species of birds inhabit the park, that includes the storks, egrets, black ibis, raptors, owls, and the Red-wattled lapwings.\n\nDepart for evening jeep safari Kanha National Park. Return at 6 pm from safari. Dinner and overnight at the Lodge.",
                },
                {
                    title: "Kanha – Bandhavgarh (by surface 280 kms - 6 hrs drive )",
                    description:
                        "Morning breakfast and depart for Bandhavgarh, 280kms, 6 hours drive. On arrival check into the Lodge. Lunch, afternoon safari. Dinner and overnight at the lodge.",
                },
                {
                    title: "Bandhavgarh",
                    description:
                        "Breakfast, Lunch, and Dinner at the Lodge. Morning and afternoon jeep drives in the park. Overnight at the lodge.\n\nBandhavgarh: The national park is mainly known for the density of its tiger population. The other wild attractions in the park include Leopards, Blue Bulls, Indian Gaur (Bison) Chausingha (Four Horned Antelopes), Spotted Deers, Sambar Deer, Wild Boar, Sloth Bears Fox, Jackals, Wild Dogs, etc. There are at least 22 mammal species and about 250 bird species in the Park. The other animals found in Bandhavgarh are Ratel, Porcupine, Small Indian Civet, Palm Squirrel, Lesser Bandicoot rat, the Jungle Cat, and the shy Hyenas. The reptile population in the park includes Cobras, Kraits, Vipers, Ratsnakes, Pythons, Monitor Lizards, and turtles. The two primate species – the rhesus macaque and the Hanuman langur – inhabit Bandhavgarh.",
                },
                {
                    title: "Bandhavgarh",
                    description:
                        "Breakfast, Lunch, and Dinner at the Lodge. Morning & afternoon Jeep drives in the park.\n\nBandhavgarh has been a center of human activity and settlement for over 2000 years, and there are references to it in the ancient books, the Narad-Panch Ratra and the Shiva Purana. The oldest sign of habitation in the park are caves dug into the sandstone to the north of the fort. Several contain Brahmi inscriptions dating from the 1st century B.C. Various dynasties have ruled the fort, for example, the Magha’s from the 1st century A.D., the Vakatakas from the 3rd century A.D. From that time onwards Bandhavgarh was ruled by a succession of dynasties including the Chandela Kings.\nOvernight at the lodge.",
                },
                {
                    title: "Bandhavgarh",
                    description:
                        "Breakfast, Lunch, and Dinner at the Lodge. Morning & afternoon Jeep drives in the park.\nBandhavgarh became more and more deserted until forest overran the area band it became the royal hunting reserve. At independence, Bandhavgarh remained the private property of the Maharaja until he gave it to the state for the formation of the National Park in 1968. After the park was created poaching and hunting were brought under control and the number of animals rose dramatically. The Tigers in particular prospered and the 1986 extension provided much-needed forest to accommodate them.\n\nOvernight at the lodge.",
                },
                {
                    title: "Bandhavgarh- Khajuraho (by road 280 kms - 6 hrs drive)",
                    description:
                        "After breakfast drive to Khajuraho 280 kms/6 hrs drive. On arrival check into the hotel. Later city tour of Khajuraho.\n\nKhajuraho, discovered by chance, is India’s second-biggest single tourist attraction. Khajuraho has the largest group of medieval temples that are adorned with numerous sculptures of extraordinary grace and delicacy celebrating the stylized and refined courtly accomplishments of beauty, love, and creative arts. Once the religious capital of the Chandela Rajputs, the temples of the city date from 950-1050 AD. A wall with eight gates encloses the entire area and two golden palm trees flank each of them. Originally, there were over 80 temples, of which only 22 are now remarkably preserved.\nThe set of temples at Khajuraho celebrating Hindu religious thought in its mystifying variety of scope and inclusion stands distinguished from the rest of the Hindu temples. The temples highlight the existential ethos in religion that venerates ‘Yoga’ and ‘Bhoga’. ‘Yoga’ is the union of the self with the Almighty, while ‘Bhoga’ is the path to God through physical pleasure. The temples at Khajuraho, dedicated to physical love and pleasure are a testimony to this philosophy. Declared a World Heritage Site in 1986, Khajuraho is a prominent, must-see destination and its temples are India’s unique gift to the world as they capture life in every form and mood in stone. Evening Sound and Light show at Khajuraho. Overnight at the hotel in Khajuraho.",
                },
                {
                    title: "Khajuraho – Varanasi (by flight)",
                    description:
                        "The morning after breakfast visit the Eastern and Southern group of temples. The Parasvanath temple of the Eastern group is the group’s largest Jain temple. The themes depict, in charming detail, everyday activity. Also, visit the Kandariya Mahadev temple dedicated to Shiva and the Chaturbhuj temple of the Southern group.\n\nAfternoon transfer to the airport to board the flight for Varanasi. Leave Khajuraho for Varanasi by AI 405 (1405 / 1505 hrs.) Meeting and assistance on arrival at Varanasi airport and transfer to the hotel.\nVaranasi is one of India’s most important pilgrimage sites and the holiest of holy cities for Hindus. Known also as Kashi and Benaras, Varanasi is one of the world’s oldest living cities and has been a center of learning and culture for well over 2000 years.\n\nEvening: Visit the “Ghats” or bank of the Ganga River. This is a fascinating walk as you can experience the cultural ethos that guides the life of the pious. See the rituals that take place to the setting sun and the ablutions that are performed in the river. As boats float down-stream, some carrying goods, fruits, and vegetables, you will see others carrying the pious who perform\nceremonies along the river.\n\nOn the banks or “ghats”, you can see some absorbed in prayer and the chanting of hymns, and others engaged in commerce and yet others performing functions like hair-cutting, massaging, and even cleaning ears! Walk across to the Manikarnika Ghat, where you can see cremation, performed with intense ritual – the process of sending the departed soul to the heavens. Hindus believe that the gateway to the Heavens and for the Re-incarnation of the Soul `in a better state’, is possible when life’s last journey is from Varanasi. Overnight in Varanasi.",
                },
                {
                    title: "Varanasi",
                    description:
                        "Early morning: Take a boat ride at dawn down India’s most sacred river, The Ganges. Sunrise at the holy river is a truly tranquil and breathtaking sight with pilgrims standing waist-deep in water, praying to the rising Sun. See the famous Vishwanath temple with its spires covered with gold, dedicated to Shiva, the presiding deity of the city. Return to the hotel for Breakfast\n\nAlso visit Sarnath a city located 13 kilometers northeast of Varanasi near the confluence of the Ganges and the Gomati rivers in Uttar Pradesh, India. The deer park in Sarnath is where Gautama Buddha first taught the Dharma, and where the Buddhist Sangha came into existence through the enlightenment of Kondanna. Singhpur, a village approximately one km away from the site, was the birthplace of Shreyansanath, the eleventh Tirthankara of Jainism, and a temple dedicated to him. Overnight in Varanasi.",
                },
                {
                    title: "Varanasi – New Delhi (By flight)",
                    description:
                        "Morning at your leisure to unwind and pack. Later transfer to airport at 0800 hrs. to board a flight to New Delhi at 1050 hrs. Arrive in New Delhi at 1150 hrs. Met at the airport and transfer to hotel. Overnight stay at the hotel in New Delhi.",
                },
                {
                    title: "New Delhi Fly back home",
                    description:
                        "Morning free for leisure activities and later transfer to International airport to board a flight back home or onward destination.\nEnd of our services.",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "The driving hours given above from one city to another are based on the normal conditions of the roads and may vary. Any break for Food / Tea / Toilets / Sightseeing on the way will take extra time than the above given hours. Bandhavgarh has National parks that are closed every Wednesday for afternoon jeep safari.",
            ],
        },
    },
    {
        img_url:
            "https://www.greavesindia.com/wp-content/uploads/2017/12/Spiritual-India_Golden-Temple_credit-JagjitSiStock-httpswww.istockphoto.comgbphotoblue-hour-harmandir-sahib-gm603910462-103703823.jpg",
        name: "Spiritual Journey of India",
        duration: "6 Nights • 7 Days",
        slug: "spiritual-journey-of-india",
        tour: {
            location: "Amritsar, Haridwar",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                'Our Spiritual Journey of India takes you through some of the most revered and spiritually enriching destinations in the country, beginning with Amritsar in Punjab. Known for the sacred Golden Temple, Amritsar is a center of devotion, peace, and serenity. The spiritual experience at the Golden Temple, with its holy Amrit Sarovar (pool of nectar) and the soothing sounds of Gurbani, is an unforgettable highlight of this journey. The city is also home to other important sites like the Jallianwala Bagh, a reminder of India\'s struggle for independence, and the Durgiana Temple, a temple dedicated to Goddess Durga. Amritsar’s unique blend of spiritual history and hospitality offers a deep connection to the Sikh faith and the rich cultural heritage of Punjab.\n\nThe journey continues to Haridwar and Rishikesh, two of the holiest cities situated on the banks of the Ganges River. In Haridwar, witness the mesmerizing Ganga Aarti at Har Ki Pauri, where devotees gather in devotion as the river comes alive with sacred chants and floating lamps. In Rishikesh, known as the "Yoga Capital of the World," immerse yourself in spiritual practices like yoga, meditation, and the teachings of ancient scriptures. Here, the tranquil environment and picturesque landscapes offer the perfect setting for introspection and inner peace. Finally, the tour concludes in Delhi, where history, spirituality, and modernity converge. Visit the serene Lotus Temple (Bahá’í House of Worship) and the peaceful Humayun’s Tomb, while exploring the vibrant spiritual tapestry that Delhi offers. This spiritual journey provides an opportunity for travelers to experience India’s deep-rooted religious and cultural heritage while embarking on a path of inner transformation.',
            destinations_covered: [
                {
                    name: "DELHI",
                    description:
                        "Delhi, India’s capital, is a fascinating blend of history, culture, and spirituality. The city is home to some of India’s most iconic religious landmarks, including the serene Lotus Temple, a symbol of peace and unity for all faiths, and Humayun’s Tomb, which showcases Mughal architecture. Akshardham Temple, with its intricate carvings and exhibits, offers a spiritual and cultural experience. Delhi is a city where old-world spirituality seamlessly coexists with modernity, making it an essential part of a spiritual journey through India.",
                },
                {
                    name: "AMRITSAR",
                    description:
                        "Amritsar, the spiritual heart of Punjab, is home to the revered Golden Temple, one of the holiest shrines in Sikhism. The temple’s serene Amrit Sarovar (holy pool) and the constant prayers reverberating throughout the complex create an atmosphere of peace and devotion. Amritsar is also rich in historical significance, with sites like Jallianwala Bagh reminding visitors of India’s struggle for freedom. A visit to Amritsar offers not only spiritual solace but also a deep connection to the Sikh way of life and its values of equality, service, and community.",
                },
                {
                    name: "HARIDWAR",
                    description:
                        "Haridwar, one of India’s seven holiest cities, holds deep spiritual significance, especially for Hindus. Situated on the banks of the sacred Ganges River, Haridwar is famous for its evening Ganga Aarti at Har Ki Pauri, where thousands gather to witness the river come alive with chants, floating lamps, and incense. The city is dotted with ancient temples, ghats, and ashrams, making it an ideal destination for spiritual seekers and devotees looking to connect with the divine energy of the Ganges.",
                },
                {
                    name: "RISHIKESH",
                    description:
                        'Known as the "Yoga Capital of the World," Rishikesh is a tranquil town on the banks of the Ganges River, offering an oasis for spiritual seekers. Whether it’s yoga, meditation, or exploring ancient temples, Rishikesh is an ideal place for introspection and spiritual growth. The majestic Lakshman Jhula and Ram Jhula bridges offer stunning views of the river and the surrounding hills, while the peaceful atmosphere of the town is perfect for rejuvenation of the mind, body, and soul. Rishikesh is a gateway to exploring India\'s spiritual traditions in a serene and natural setting.',
                },
            ],
            itinerary_outline: [
                {
                    title: "Arrive Delhi",
                    description:
                        "You land at New Delhi’s international airport and after clearing Immigrations and Customs are met in the Arrival Hall by our colleague carrying the paging board with your names on it.\n\nTransfer to your hotel and check-in.\n\nNew Delhi is the capital of India and a microcosm of the country. It is a modern metropolis which still preserves its traditional values and manages its multiple personalities effortlessly, making it a perfect gateway city to any North India journey.\n\nHistorians believe that through Delhi’s 1000 year old history, the city has been destroyed and rebuilt eight times, each time built by a new dynasty/ruler. As a result Delhi grew and evolved, absorbing different religions, diverse cultures, both foreign and indigenous, and yet functioning as one organic entity and becoming the culturally secular city you see today.\n\nThe remainder of the day is at leisure for your own activities.\n\nOvernight at hotel\n\nAccommodation: Le Meridien Delhi OR similar\nMeals: None\nTransfer: Airport to Le Meridien Delhi.",
                },
                {
                    title: "Delhi - Amritsar by train (or by flight)",
                    description:
                        "Breakfast at hotel.\n\nOn time pick up from hotel and transfer to railway station to board train for Amritsar. Meeting and assistance on arrival and transfer to hotel in Amritsar.\n\nAmritsar literally meaning “Pool of Nectar” and was founded in 1579 by Guru Ram Das, the fourth Guru of the Sikh religion. He settled down next to a pool said to have with miraculous healing powers. His son, Guru Arjun Dev, built the temple within the pool, and later Maharaja Ranjit Singh covered it with pure gold leaf.\nEvening proceed to attend Palki sahib ceremony (night ceremony) at Golden Temple.\n\nOvernight at hotel.\n\nAccommodation: Taj Swarna OR similar\nMeals: Breakfast\nTransfer: 6 hrs train travel from Delhi to Amritsar / 1 hr flight (Optional)\nActivity: 1 hr night ceremony at Golden temple",
                },
                {
                    title: "Amritsar",
                    description:
                        "Breakfast at Hotel.\n\nAfter breakfast, proceed to visit the Golden Temple – the sacred Sikh sanctuary spread out in a vast complex around a huge water tank, in the midst of which stands the marble sanctum where the holy book of the Sikhs, the Guru Granth, is reverently placed. The roof of the sanctum is gold-leafed. The community kitchen provides free meals to up to 10,000 pilgrims and visitors in a day. We walk by the busy bazaars of the city and explore the local market.\n\nLater visit Durgiana temple dedicated to Goddess Durga. This is a Hindu Temple which has similar architecture as that of the Golden Temple. Also visit Gurudwara Baba Deep Singh Ji Shaheed.\n\nLate afternoon visit the border town of Wagah to see the change of guard ceremony. It is a spectacle comparable to ‘Change of Guards’ in London. The pomp and pageantry of the Beating Retreat and the Change of Guard within handshaking distance of the Indian and Pakistani forces makes for a most charming spectacle.\n\nOvernight at hotel.\n\nAccommodation: Taj Swarna OR similar\nMeals: Breakfast\nTransfer: 1 hr one way to Wagah Border\nActivity: 3 hrs city tour, 3 hrs Wagah excursion",
                },
                {
                    title: "Amritsar – Haridwar by Train/Surface",
                    description:
                        "Early morning transfer to railway station to board your train for Haridwar.\n\nTrain – ASR HW JNSHTBDI Departure 0650hrs / Arrival 1410hrs\n\nUpon arrival in Haridwar railway Station, you will be met by our representative and transferred to your hotel in Haridwar.\n\nLate afternoon a short visit to Shanti Kunj & Pawan dham followed by Ganga Arti at Har Ki Pauri. Aarti means prayer. It is the prayer for Holy River Ganga (Ganges). These Prayers are perform every evening at Har Ki Pauri every evening to show our gratitude to nature and god. It is believe & faith Ganga water also removes sins when you take a dip in its holy water. Priest at the ghat has large fire bowls in their hands, bells of temples rings & priest starts chanting of Mantras. We can say words cannot describe the beauty of Aarti. A one can only learn about Aarti after experience it.\n\nOvernight stay is at hotel in Haridwar.\n\nAccommodation: Haveli Hari Ganga OR similar\nMeals: Breakfast\nTransfer: 7 hrs train travel\nActivity: 2 hrs temple visit and arti ceremony",
                },
                {
                    title: "Haridwar - Rishikesh",
                    description:
                        "After breakfast drive 20kms to reach Rishikesh. Rishikesh is a city in India’s northern state of Uttarakhand, in the Himalayan foothills beside the Ganges River. The river is considered holy, and the city is renowned as a center for studying yoga and meditation. Temples and ashrams (centers for spiritual studies) line the eastern bank around Swarg Ashram, a traffic-free, alcohol-free and vegetarian enclave upstream from Rishikesh town. Rishikesh, sometimes nicknamed “Yoga Capital of the World”, has numerous yoga centres that attract tourists. It is believed that meditation in Rishikesh brings one closer to attainment of moksha, as does a dip in the holy river that flows through it.\nUpon arrival check in at hotel and start the temple and ashram tour of Rishikesh. Visit the Beatles Ashram.\n\nThe Beatles Ashram – Maharishi Mahesh Yogi Ashram is now also known as The Beatles Ashram. The Beatles were one of the most popular music bands in 1960’s throughout the world. Beatles visited Rishikesh in 1968 for meditation. After this visit Rishikesh suddenly came in limelight throughout the world. Beatles came here to learn transcendental meditation at Maharishi Mahesh Yogi’s Ashram. Sessions were conducted by Maharishi Mahesh Yogi himself at his ashram.\n\nIn the late afternoon local sightseeing including Laxman jhula, Ram jhula, Parmarth Niketan ashram, Geeta Bhawan. Later in the evening witness Ganges Aarti at Parmarth Niketan Ashram. This ashram is open for the stay of only those pilgrims who are here to devote themselves to sadhana, meditation, seva and satsang.\n\nOvernight stay is at hotel in Rishikesh.\n\nAccommodation: Ganga Kinare OR similar\nMeals: Breakfast\nTransfer: 25 kms / 1 hrs\nActivity: Visit to Beatles ashram and Arti ceremony",
                },
                {
                    title: "Rishikesh",
                    description:
                        "Early morning transfer to Kunjapuri if you wish to witness the sunrise. Almost a 1.5 hrs drive to the top. Climb 300 temple stairs to reach the main temple at the top of the hill or your vehicle will take you up to the hill. Once you are there, enjoy the spectacular 360 degree view of mountain peaks. Kunjapuri Devi Temple is sacred temple of immense importance in Hindu religion. Located at the height of 1676 meters, Kunjapuri is one of the Shaktipeeth in Uttarakhand. Packed breakfast will be provided.\nHike down through the villages and farms and a bit of Jungle to reach down the road where your vehicle will be waiting for you. Transfer to hotel.\n\nDay at free at leisure or explore the place by own.\n\nOptional: You may join for Rafting – Rishikesh is popular all over the country and the turbulent waves of river Ganges make it adventures or you can opt for Bungee Jumping (Optionals).\n\nAccommodation: Ganga Kinare\nMeals: Breakfast\nTransfer: 40 kms / 1.5 hrs\nActivity: 1 hr at temple, 1.5 hrs hike down to the town",
                },
                {
                    title: "Rishikesh – Delhi",
                    description:
                        "Morning participate in the 1 hr Yoga session provided by the hotel (subject to hotel policies)\nOn time pick up from hotel to Dehradun airport to board flight for Delhi. From Delhi airport board on your onward flight.\n\nMeals: Breakfast\nTransfer: 25 kms / 40 mins from hotel to Airport\nActivity: 1 hr Yoga session.\nEnd of our services.",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "Please note that flight and train timings are subject to change, and we recommend checking for any updates closer to your departure date to ensure a smooth travel experience.",
            ],
        },
    },
    {
        img_url:
            "https://www.sahyogmantratours.com/images/blogs/meenakshi-temple-20231009101928-1_crop.jpg",
        name: "Southern India with Madurai",
        duration: "12 Nights • 13 Days",
        slug: "southern-india-with-madurai",
        tour: {
            location: "Madurai",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Southern India with Madurai is a captivating journey through the rich cultural, natural, and historical treasures of India’s southern landscapes. Starting in Kochi, this vibrant port city in Kerala is a beautiful blend of colonial history and modern charm. Explore the historic Fort Kochi, the stunning Chinese Fishing Nets, and the iconic St. Francis Church. From Kochi, travel to Kumarakom, nestled along the tranquil Vembanad Lake, known for its picturesque backwaters, houseboats, and bird sanctuary. The serene beauty of Periyar, home to the famous Periyar Wildlife Sanctuary, offers a chance to spot wildlife like elephants and tigers while cruising on the calm waters of the Periyar Lake. Continue to Madurai, one of the oldest cities in India, where the magnificent Meenakshi Amman Temple stands as a testament to ancient Dravidian architecture and spiritual devotion.\n\nThe journey then takes you to the cool, lush hill station of Ooty, set amidst the Nilgiri Hills. Known as the “Queen of Hill Stations,” Ooty is perfect for scenic views, charming botanical gardens, and relaxing boat rides on Ooty Lake. From Ooty, head to Kabini, an idyllic wildlife destination offering safaris in the Kabini Wildlife Sanctuary, home to a diverse range of wildlife, including tigers, elephants, and leopards. In Mysore, the grandeur of the Mysore Palace and the tranquil Chamundi Hill are must-visit attractions. The tour concludes in Bengaluru, the dynamic tech hub of India, where you can explore its lush gardens, lively markets, and modern amenities while reflecting on the cultural richness and natural beauty of your journey through Southern India.",
            destinations_covered: [
                {
                    name: "KOCHI",
                    description:
                        "Kochi, a vibrant port city in Kerala, offers a unique blend of colonial charm and modern allure. Explore its historic Fort Kochi area, famous for the Chinese Fishing Nets and the colonial-era Dutch Palace. The city is also home to the stunning St. Francis Church and the cultural hub of Kathakali dance performances. With its blend of history, culture, and scenic waterfront, Kochi is a fascinating gateway to the backwaters of Kerala.",
                },
                {
                    name: "KUMARAKOM",
                    description:
                        "Kumarakom, nestled on the serene Vembanad Lake in Kerala, is famous for its tranquil backwaters, lush landscapes, and vibrant birdlife. Enjoy a peaceful houseboat cruise through its waterways, surrounded by lush greenery and picturesque villages. The Kumarakom Bird Sanctuary, home to various migratory species, offers birdwatching opportunities for nature lovers. This idyllic town provides a perfect escape into nature’s calm embrace.",
                },
                {
                    name: "PERIYAR",
                    description:
                        "Periyar, located in the Western Ghats of Kerala, is home to the famous Periyar Wildlife Sanctuary. Known for its stunning landscapes, the sanctuary offers an opportunity to spot diverse wildlife, including elephants, tigers, and numerous bird species. Enjoy a boat cruise on the tranquil Periyar Lake and explore the surrounding spice plantations. With its blend of nature and wildlife, Periyar offers an immersive experience in the heart of Kerala’s wilderness.",
                },
                {
                    name: "MADURAI",
                    description:
                        "Madurai, one of the oldest cities in India, is a historical and cultural gem in Tamil Nadu. The grand Meenakshi Amman Temple, with its towering gopurams and intricate sculptures, stands as a symbol of Dravidian architecture. Madurai is also known for its bustling markets, vibrant festivals, and rich cultural heritage. A visit to this ancient city is a deep dive into the spiritual and historical essence of South India.",
                },
                {
                    name: "OOTY",
                    description:
                        'Ooty, also known as the "Queen of Hill Stations," is nestled in the Nilgiri Hills of Tamil Nadu. Famous for its scenic landscapes, Ooty Lake, and Botanical Gardens, the town offers a refreshing escape with its cool climate and lush greenery. A ride on the historic Nilgiri Mountain Railway is a must-do to take in the breathtaking views of the surrounding hills and valleys. Ooty’s charming colonial architecture and beautiful vistas make it a perfect getaway.',
                },
                {
                    name: "KABINI",
                    description:
                        "Kabini, located in Karnataka, is a serene wildlife destination known for its Kabini Wildlife Sanctuary. The sanctuary offers thrilling safaris where you can spot elephants, tigers, leopards, and various bird species in their natural habitat. The calm waters of the Kabini River enhance the beauty of the surroundings, providing a peaceful atmosphere for nature lovers. Kabini is an ideal spot for both wildlife enthusiasts and those seeking a peaceful retreat amidst nature.",
                },
                {
                    name: "MYSORE",
                    description:
                        "Mysore, known as the cultural capital of Karnataka, is famous for its royal heritage and historical landmarks. The majestic Mysore Palace is a must-visit, showcasing grand architecture and royal opulence. Chamundi Hill, with the Chamundeshwari Temple, offers panoramic views of the city. Mysore is also known for its bustling markets, where you can shop for authentic sandalwood products and Mysore silk.",
                },
                {
                    name: "BENGALURU",
                    description:
                        "Bengaluru, the capital city of Karnataka, is a dynamic hub of technology, culture, and green spaces. Known for its modern skyline and booming tech industry, Bengaluru is also home to beautiful gardens such as Cubbon Park and the historic Lalbagh Botanical Garden. The city’s lively markets, vibrant nightlife, and blend of modern and traditional culture make it a fascinating destination for travelers. With its cosmopolitan charm, Bengaluru offers a perfect mix of innovation and tradition.",
                },
            ],
            itinerary_outline: [
                {
                    title: "Arrive Kochi",
                    description:
                        "Upon arrival in Koch Airport, our representative will meet and greet you and you will be transferred to you hotel for overnight stay.\n\nBelieved to be the finest natural harbour in the world, Kochi deserves its description as the Queen of the Arabian Sea. You can cruise around man-made islands, with lawns sloping down to the water’s edge, enjoying the oldest European settlement in India. Generations of visitors came, saw and stayed for hundreds of years – Chinese, Arab, Jewish, British, French, Portuguese – all adding to the charm of this city Kochi’s history is a bright tapestry – many coloured threads woven through centuries together present the fabric of the present. Its involvement with the Portuguese, the Dutch and the British are evident in the architecture of city buildings, the old durbar hall is the spice in the dish! Modern day Kochi may be a busy port and shipping centre but it has many attractions for ordinary tourists.\nAccommodation: The Taj Malabar Tower wing\nMeals: None\nTransfer: 1.5 hrs from Airport to hotel.",
                },
                {
                    title: "Kochi – Kumarakom (65 kms / 2 hrs. drive)",
                    description:
                        "After breakfast sightseeing tour of Kochi. Visit the local market. While driving along the coastline, at the Harbour’s mouth, one can also view the unique and still-in-use “Chinese Fishing Nets” which were introduced by the Chinese traders in the 14th Century. The tour ends in the Fort Kochi area where you can walk through the historical Dutch and Portuguese buildings. Some parts of this nearly 500-year-old Fort are still amazingly well preserved. Later tranfer to Kumarakom.\n\nKumarakom is set in the backdrop of Vembanadu Lake, the largest freshwater lake in Kerala. The place is popular for backwaters tourism.\n\nOvernight at hotel.\n\nAccommodation: Coconut Lagoon\nMeals: Breakfast, Dinner\nActivity: 2 hrs city tour of Kochi",
                },
                {
                    title: "Kumarakom",
                    description:
                        "Morning at leisure.\n\nLater embark the houseboat for day cruise across the backwaters with lunch. The houseboat cruise takes you through the intricate maze of backwaters, mesmerizing and surprising you at every turn with its serene beauty & simple charm. Enjoy the countryside of Kerala at its best. Soak your eyes & soul with array of coconut trees & endless paddy fields. You will also get chance to take a small stroll through the villages & interact with the locals. Lunch overboard.\n\nReturn to your resort after the cruise.\n\nOvernight stay at hotel\n\nAccommodation: Coconut Lagoon\nMeals: Breakfast, lunch\nActivity: 3 hrs day cruise with lunch onboard.",
                },
                {
                    title: "Kumarakom – Periyar (130 kms / 3 hrs. drive)",
                    description:
                        "After breakfast transfer to Periyar.\n\nAfternoon proceed for spice plantation tour. Learn about various spices of this state – the pepper, the clove and many more. In the evening you will have a cooking demonstration by hotel at fixed time. Dinner and overnight at hotel.\n\nAccommodation: Spice Village\nMeals: Breakfast, dinner\nActivity: 1 hr spice plantation tour, cooking demo with in house chef.",
                },
                {
                    title: "Periyar – Madurai (140 kms/ 4 hrs. drive)",
                    description:
                        "Morning proceed for a nature walk accompanied by a naturalist. Different nature trails traversing diverse habitats form the trekking routes, generally 4 to 5 km in length. This is an interpretive programme offering excellent opportunity to watch birds, butterflies and other wildlife. The trails often pass through evergreen and moist deciduous forests interspersed with marshy grasslands\n\nAfter the visit transfer to Madurai. One of the oldest cities in South India, Madurai has been the centre of learning and pilgrimage for centuries. Spread along the rocky banks of the river Vaigai in the state of Tamil Nadu, this modern industrial city is today. Known as the Temple City, Madurai was the capital of the ancient Pandya kingdom. It was during the long reign of the Nayaks (10th-18th centuries) that the magnificent Meenakshi Temple was constructed\n\nLate evening proceed to witness evening ceremony at Meenakshi temple.\n\nAccommodation: Courtyard by Marriot\nMeals: Breakfast, dinner\nActivity: 1 hr nature walk, 1 hr evening ceremony at Meenakshi Temple.",
                },
                {
                    title: "Madurai",
                    description:
                        "Early morning proceed to the flower market walk. Return to hotel for breakfast. Later proceed for a sightseeing tour of Madurai City and Meenakshi Temple – The temple town is unique in that all its temples are living temples and it remains a major religious centre attracting pilgrims the year round. Madurai’s main attraction is the famous Meenakshi temples in the heart of the old town, a riotously baroque example of Dravidian architecture with gopurams (towers) covered from top to bottom with a breathless profusion of multi-colored images of gods, goddesses, animals and mythical figures. The temple complex is a city within a city and one can spend days exploring its labyrinthine corridors and halls. Another attraction is the Tirumalai Nayak Palace (1636) restored by Lord Napier, dance drama concerts are performed daily.\n\nEvening proceed for a food walk near to Meenakshi Temple. This will be a street food walk and you hear some stories as you savour the food. How did the Muslims indulge their fancy for iced drinks in hot, sultry Madurai? Why should you eat Indian food with your fingers? What are poppy seeds doing in a popular South Indian sweet?\n\nOvernight at the hotel.\n\nAccommodation: Courtyard by Marriot\nMeals: Breakfast, dinner\nActivity: 1 hr flower market visit, 3 hrs city tour, 3 hr food walk.",
                },
                {
                    title: "Madurai – Ooty (305 kms / 7 hrs. drive)",
                    description:
                        "After breakfast at hotel, transfer by surface to Ooty. Ooty being one of the most popular hill stations in India and a scenic one.\n\nRest of the day to relax at hotel.\n\nOvernight at hotel.\n\nAccommodation: Taj Savoy\nMeals: Breakfast, dinner\nTransfer: 305 kms / 7 hrs",
                },
                {
                    title: "Ooty",
                    description:
                        "Morning board Toy train from Ooty to Coonoor\n\nOoty / Coonoor 56139 -- 0915 / 1015 Hrs\n\nThe journey is quite scenic as you enjoy the beauty of Nilgiri Mountains and tea plantations. It was in 1854, that the first plans were made to build a mountain Railway from Mettupalaiyam to the Nilgiri Hills. The line was completed and opened for traffic in June 1899. The line was extended to Ootacamund from Coonoor sometime in 1908 on the same gauge over a distance of 11 and ¾ miles at a cost of Rs. 24,40,000. The Railway line from Mettupalaiyam to Ooty is 45.88 kms long. The train earlier used to run on steam engine, but owing to environmental concerns it is now operated on bio-diesel.\n\nFrom Coonoor drive back to Ooty.\n\nAfternoon visit botanical gardens, Stephens church, government museum, Ooty lake\nDinner and overnight at hotel\n\nAccommodation: Taj Savoy\nMeals: Breakfast, dinner\nTransfer: 20kms/12mi – 30 mins\nActivity: 1 hr toy train ride, 2 hrs sightseeing.",
                },
                {
                    title: "Ooty - Kabini",
                    description:
                        "After breakfast, drive to Kabini. The Kabini River borders both the Bandipur and Nagerhole National Parks where there is an abundance of wildlife, reputed to have the highest density of wildlife in South India. To be seen from plenty of elephants to the elusive tiger and leopard. Due to the waterside location, this is also a bird-spotters paradise – there are over 250 different species, migratory and months.\n\nCheck into the picturesque The Serai resort.\nPost lunch boat safari (subject to water level) on the Kabini River. On the banks of the river one can witness the largest congregation of Asiatic elephants, peacefully feeding and bathing in the river. In addition to diverse wildlife sighted on the extensive river banks, the boat safari offers you an opportunity to observe the Marsh Crocodile, the Smooth-coated Otter and a myriad of water birds.\nPost dinner at the lodge proceed for a night trail to explore nocturnal life along the Kabini waterline. Armed with a flashlight and a spirit of adventure , accompany a skillful naturalist to encounter the fascinating world of beetles, spiders, owls, moths ,lizards and even plants as you go about this unusual night expedition.\n\nDinner and overnight at the resort.\n\nAccommodation: The Serai\nMeals: Breakfast, lunch, dinner\nTransfer: 125kms/77mi – 4 hrs\nActivity: 1 hr boat safari, 1 hr night trail.",
                },
                {
                    title: "Kabini",
                    description:
                        "This morning proceed for a guided Nature Walk along the banks of the river Kabini and then through the scrub and along the village roads to explore and unravel the beauty of birds, insects, trees and wild flowers. Return to lodge for breakfast.\n\nOptional: Coracle ride / Kayanking on River Cauvery. Coracles are local fishing crafts that are circular and ideal for navigating these waters. This journey gives you a fish eye view of the surrounding forests and habitation and allows you to be a part of the ebb and flow of the riverine life.\n\nPost lunch game drive in search of bison, elephant, tiger, spotted deer, wild boar, mongoose, jungle fowl and countless other species of birds and animals.\n\nDinner and overnight at the resort.\n\nAccommodation: The Serai\nMeals: Breakfast, lunch, dinner\nActivity: 1 hr nature walk, 3 hrs game drive.",
                },
                {
                    title: "Kabini – Mysore",
                    description:
                        "After breakfast a 2 hour drive takes you to Mysore, the former capital of the Wodeyar dynasty, Mysore has been home to one of the longest established empires in Indian history and the current Maharaja of Mysore still resides in the opulently-decorated city palace. Rebuilt in 1897 after a fire, it is an imposing centerpiece at the heart of the city, especially on Sundays and public holidays when it is lit by nearly 100,000 light bulbs.\n\nAfternoon drive to the top of Chamundi Hill to visit the hilltop Sri Chamundeswari Temple and the huge monolith Nandi Bull.\n\nEvening visit Devraja Market. A walk through the colorful streets of this 100 year old market is a great local experience for a traveler. Flowers, spices, fruits, vegetables – you can see numerous hawkers selling these stuffs. Get lost in the chaos of a busy Indian market, try to taste street food or tea/coffee to add to your adventure. Overnight at hotel.\n\nAccommodation: Grand Mercure\nMeals: Breakfast, dinner\nTransfer: 106 kms/ 65mi – 2 hrs\nActivity: 1 hr Devaraja market walk, 1 hr visit to Chamundi hills and Nandi Temple.",
                },
                {
                    title: "Mysore - Bengaluru",
                    description:
                        "After breakfast proceed for sightseeing tour visiting the Amber Vilas, or city palace, it has stained glass with peacocks and flowers, avenues of carved pillars and huge inlaid doors.\nLater drive to Bangalore via Srirangapatnam the scene of political change in the Sultanate of Mysore and is synonymous with Tipu SultanThis island fortress was the summer capital of Haider Ali and Tipu Sultan. It is picturesquely located in River Cauvery. Here you can see Tipu’s summer palace, his mausoleum and Sri Ranganathaswamy temple.\n\nDrive onto Bangalore (3 hours) on arrival check into the Taj West End. Originally a British-run guest-house, opened in 1887, the Taj West End is situated in a lush, 20-acre garden in the middle of Bangalore, and the property boasts of Art Deco features and is the proud home to many of the city’s heritage trees, including a beautiful 125-year old Banyan Tree.\n\nDinner and overnight at hotel.\n\nAccommodation: Taj West End\nMeals: Breakfast, dinner\nTransfer: 145 kms / 3 hrs\nActivity: 1 hr city palace visit, 2 hrs Srirangapatnam visit.",
                },
                {
                    title: "Depart Bengaluru",
                    description:
                        "Breakfast at hotel.\n\nOn time pick up from hotel and transfer to Airport to board international flight for onward journey.\n\nMeals: Breakfast\nTransfer: 35 kms / 1.5 hrs drive from hotel to airport.\nEnd of our services.",
                },
            ],
            important_information: [
                "All train timings and road transportations are subject to the availability/ road operations.",
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better)",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
            ],
        },
    },
    {
        img_url:
            "https://fanzoj.com/wp-content/uploads/2024/02/snow-leopard-post-04.jpg",
        name: "Snow leopard group itinerary",
        duration: "11 Nights • 12 Days",
        slug: "snow-leopard-group-itinerary",
        tour: {
            location: "Chandigarh,Rampur",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "Our Snow Leopard Itinerary takes you on an extraordinary journey through the rugged terrains and pristine landscapes of the Indian Himalayas, offering a rare opportunity to spot the elusive snow leopard in its natural habitat. The journey begins in Rampur, a small town located at the foothills of the Himalayas, which serves as the perfect starting point for your adventure into the wild. From Rampur, we travel to Tabo, home to one of the oldest Buddhist monasteries in the region. The monastery, along with the surrounding landscapes, offers a unique blend of spiritual serenity and breathtaking scenery. As we continue to Kibber, located in the Spiti Valley, you’ll be in one of the highest villages in the world, surrounded by snow-capped peaks, rugged mountains, and pristine wilderness—an ideal setting for wildlife sightings, especially the rare snow leopard. Here, with the guidance of experienced naturalists, we embark on exciting wildlife treks and jeep safaris, keeping our eyes peeled for sightings of this magnificent predator.\n\nAfter exploring the high-altitude villages of the Spiti Valley, the tour culminates in Chandigarh, the modern city that provides a perfect contrast to the remote wilderness of the Himalayas. Known for its clean roads, green spaces, and well-planned architecture, Chandigarh offers a chance to relax and unwind after the thrilling wildlife encounters. Along the way, you will also have opportunities to learn about the region’s rich biodiversity, culture, and history. The Snow Leopard Itinerary promises an unforgettable adventure through the heart of the Himalayas, offering rare wildlife encounters, picturesque landscapes, and a deep connection to nature.",
            destinations_covered: [
                {
                    name: "CHANDIGARH",
                    description:
                        "Chandigarh, the capital of both Punjab and Haryana, is a modern city known for its well-planned architecture, lush gardens, and tranquil lakes. Designed by the famous architect Le Corbusier, the city blends contemporary living with green spaces, offering a refreshing contrast to the rugged landscapes of the Himalayas. It’s the perfect place to unwind after a wildlife adventure.",
                },
                {
                    name: "RAMPUR",
                    description:
                        "Rampur, a quaint town nestled at the base of the Himalayas, serves as the gateway to the majestic Spiti Valley. Surrounded by lush forests and rugged terrain, it offers a peaceful escape amidst nature. From here, the journey into the wild and remote landscapes of Himachal Pradesh begins, setting the stage for wildlife exploration and adventure.",
                },
                {
                    name: "TABO",
                    description:
                        "Tabo, known for its ancient Tabo Monastery, is a cultural and spiritual hub in the Spiti Valley. The monastery, over a thousand years old, is renowned for its beautiful murals and rich Buddhist heritage. Surrounded by barren mountains and picturesque valleys, Tabo offers a peaceful atmosphere and a glimpse into the region's deep spiritual history.",
                },
                {
                    name: "KIBBER",
                    description:
                        "Kibber, one of the highest villages in the world, is located in the Spiti Valley and offers breathtaking views of snow-capped peaks and vast landscapes. It is renowned for its remote beauty and as a hotspot for snow leopard sightings. The village’s traditional architecture, along with its proximity to wildlife-rich areas, makes it an ideal base for adventure seekers and wildlife enthusiasts.",
                },
            ],
            itinerary_outline: [
                {
                    title: "Arrive New Delhi",
                    description:
                        "On arrival at the New Delhi airport, you will be welcomed by our representative who will transfer you to your hotel and assist you in check-in at the hotel. He will also handover and explain all the travel related documents. Overnight stay is at the hotel.\n",
                },
                {
                    title: "New Delhi – Chandigarh – Rampur (Flight + 8 hrs drive)",
                    description:
                        "Reach Chandigarh before 12 PM. Meet at the common point either at the airport or the train station. Leave for Rampur. Lunch at Parwanoo Timber Trail hotel. Stay at Nau Nabh Heritage hotel in Rampur. The drive from Chandigarh with a lunch and tea break is 8 hours. Rampur’s height is 4000 feet. Guests stay on double occupancy.",
                },
                {
                    title: "Rampur – Tabo ( by road 10-12 hrs drive)",
                    description:
                        "We leave Rampur at 7 AM with a packed breakfast and drive to Tabo which is at 10,500 feet. This stop is to acclimatize the guests. We will halt midway for lunch. The stay will be in a clean and functional homestay. Guests stay on double occupancy. It is a 10 to 12-hour drive depending on the weather and road conditions.",
                },
                {
                    title: "Tabo - Kibber",
                    description:
                        "Early next morning, we will visit the Tabo monastery before moving to Kibber. Kibber is at 14,500 feet. On the way to Kibber which is a 2-hour drive, if there is any snow leopard sighting, we will drop you off and get you ready for photography. The porter and guide will come and help you but it is better to go up, settle in and come back once acclimatized as any exertion can lead one to mountain sickness. So depending on how difficult the sighting site is to reach, we will decide. Once settled in your rooms at the home stay in Kibber, you can go for a short walk around the village to familiarise yourself. In the afternoon, if there is any sighting, we will take you to the site. Mostly, we use Maruti Suzuki Gypsy so that it is convenient for the guests instead of hiking. There will be some points like 100- 400 yards one may have to walk while reaching the snow leopard site. There is also Yak available in case one is comfortable to ride one. Generally, the daily routine is as follows. Morning tea/coffee around 6:30 AM and one has to be ready by 7:15 AM for breakfast. The spotters come for a meeting by 7:15 AM and set out for the snow leopard sighting sites. Once the breakfast is done, the guest can step out to see Blue Sheep, Red Fox, and Ibex. Generally, we encourage everyone to stay close to the homestay till they have one good sighting of snow leopard and then pursue other wildlife. Lunch is generally served at the snow leopard sighting site. If there are no sightings, on some days, we will stay back at the home stay and have lunch there. Dinner is always at the home stay. In between the meals tea/coffee/snacks are served at the site and in the home stay. Minera water is provided free of charge throughout the trip. Each room has a wood fired hot stove and electric heater for heating. Each bed has an electric blanket. Heavy quilts are provided. Bath towels are also provided. There is generator set if the electricity goes out.\n\nThere is no running water in winters. Hot water will be provided for freshening up every day. For use of a toilet, it is a dry toilet. Wet wipes and toilet paper are provided. The bathroom is separate and hot water will be provided in case someone wants to take a bath. A porter is provided for each guest. You don’t have to lift anything. Your camera is carried by the porter and he will also carry your daytime camera bag/backpack. Extra scanner guides for maximum chances of a quick and confirmed sighting.\nYou will be provided with a walking pole and a chair/stool while sitting down for photography. A tent is also pitched in case one has to lie down. Insulated mats are kept inside the tent. An oxygen tank is also carried along with the group while going to the sighting site. Oxygen saturation measurement device for any symptoms of shortness of breath. The escort will you and be available for any issues. There is an arrangement of dropping the guest to a lower altitude if suffering from mountain sickness or shortness of breath. Any detour up to 30 kilometers for new or different sites for Snow Leopard sighting. Any extra help needed or extra trips by the helpers to get the equipment or other essential items from the homestay to the sighting site.\nThis is the routine for 6 days.",
                },
                {
                    title: "Tabo - Kibber",
                    description:
                        "Early next morning, we will visit the Tabo monastery before moving to Kibber. Kibber is at 14,500 feet. On the way to Kibber which is a 2-hour drive, if there is any snow leopard sighting, we will drop you off and get you ready for photography. The porter and guide will come and help you but it is better to go up, settle in and come back once acclimatized as any exertion can lead one to mountain sickness. So depending on how difficult the sighting site is to reach, we will decide. Once settled in your rooms at the home stay in Kibber, you can go for a short walk around the village to familiarise yourself. In the afternoon, if there is any sighting, we will take you to the site. Mostly, we use Maruti Suzuki Gypsy so that it is convenient for the guests instead of hiking. There will be some points like 100- 400 yards one may have to walk while reaching the snow leopard site. There is also Yak available in case one is comfortable to ride one. Generally, the daily routine is as follows. Morning tea/coffee around 6:30 AM and one has to be ready by 7:15 AM for breakfast. The spotters come for a meeting by 7:15 AM and set out for the snow leopard sighting sites. Once the breakfast is done, the guest can step out to see Blue Sheep, Red Fox, and Ibex. Generally, we encourage everyone to stay close to the homestay till they have one good sighting of snow leopard and then pursue other wildlife. Lunch is generally served at the snow leopard sighting site. If there are no sightings, on some days, we will stay back at the home stay and have lunch there. Dinner is always at the home stay. In between the meals tea/coffee/snacks are served at the site and in the home stay. Minera water is provided free of charge throughout the trip. Each room has a wood fired hot stove and electric heater for heating. Each bed has an electric blanket. Heavy quilts are provided. Bath towels are also provided. There is generator set if the electricity goes out.\n\nThere is no running water in winters. Hot water will be provided for freshening up every day. For use of a toilet, it is a dry toilet. Wet wipes and toilet paper are provided. The bathroom is separate and hot water will be provided in case someone wants to take a bath. A porter is provided for each guest. You don’t have to lift anything. Your camera is carried by the porter and he will also carry your daytime camera bag/backpack. Extra scanner guides for maximum chances of a quick and confirmed sighting.\nYou will be provided with a walking pole and a chair/stool while sitting down for photography. A tent is also pitched in case one has to lie down. Insulated mats are kept inside the tent. An oxygen tank is also carried along with the group while going to the sighting site. Oxygen saturation measurement device for any symptoms of shortness of breath. The escort will you and be available for any issues. There is an arrangement of dropping the guest to a lower altitude if suffering from mountain sickness or shortness of breath. Any detour up to 30 kilometers for new or different sites for Snow Leopard sighting. Any extra help needed or extra trips by the helpers to get the equipment or other essential items from the homestay to the sighting site.\nThis is the routine for 6 days.",
                },
                {
                    title: "Tabo - Kibber",
                    description:
                        "Early next morning, we will visit the Tabo monastery before moving to Kibber. Kibber is at 14,500 feet. On the way to Kibber which is a 2-hour drive, if there is any snow leopard sighting, we will drop you off and get you ready for photography. The porter and guide will come and help you but it is better to go up, settle in and come back once acclimatized as any exertion can lead one to mountain sickness. So depending on how difficult the sighting site is to reach, we will decide. Once settled in your rooms at the home stay in Kibber, you can go for a short walk around the village to familiarise yourself. In the afternoon, if there is any sighting, we will take you to the site. Mostly, we use Maruti Suzuki Gypsy so that it is convenient for the guests instead of hiking. There will be some points like 100- 400 yards one may have to walk while reaching the snow leopard site. There is also Yak available in case one is comfortable to ride one. Generally, the daily routine is as follows. Morning tea/coffee around 6:30 AM and one has to be ready by 7:15 AM for breakfast. The spotters come for a meeting by 7:15 AM and set out for the snow leopard sighting sites. Once the breakfast is done, the guest can step out to see Blue Sheep, Red Fox, and Ibex. Generally, we encourage everyone to stay close to the homestay till they have one good sighting of snow leopard and then pursue other wildlife. Lunch is generally served at the snow leopard sighting site. If there are no sightings, on some days, we will stay back at the home stay and have lunch there. Dinner is always at the home stay. In between the meals tea/coffee/snacks are served at the site and in the home stay. Minera water is provided free of charge throughout the trip. Each room has a wood fired hot stove and electric heater for heating. Each bed has an electric blanket. Heavy quilts are provided. Bath towels are also provided. There is generator set if the electricity goes out.\n\nThere is no running water in winters. Hot water will be provided for freshening up every day. For use of a toilet, it is a dry toilet. Wet wipes and toilet paper are provided. The bathroom is separate and hot water will be provided in case someone wants to take a bath. A porter is provided for each guest. You don’t have to lift anything. Your camera is carried by the porter and he will also carry your daytime camera bag/backpack. Extra scanner guides for maximum chances of a quick and confirmed sighting.\nYou will be provided with a walking pole and a chair/stool while sitting down for photography. A tent is also pitched in case one has to lie down. Insulated mats are kept inside the tent. An oxygen tank is also carried along with the group while going to the sighting site. Oxygen saturation measurement device for any symptoms of shortness of breath. The escort will you and be available for any issues. There is an arrangement of dropping the guest to a lower altitude if suffering from mountain sickness or shortness of breath. Any detour up to 30 kilometers for new or different sites for Snow Leopard sighting. Any extra help needed or extra trips by the helpers to get the equipment or other essential items from the homestay to the sighting site.\nThis is the routine for 6 days.",
                },
                {
                    title: "Tabo - Kibber",
                    description:
                        "Early next morning, we will visit the Tabo monastery before moving to Kibber. Kibber is at 14,500 feet. On the way to Kibber which is a 2-hour drive, if there is any snow leopard sighting, we will drop you off and get you ready for photography. The porter and guide will come and help you but it is better to go up, settle in and come back once acclimatized as any exertion can lead one to mountain sickness. So depending on how difficult the sighting site is to reach, we will decide. Once settled in your rooms at the home stay in Kibber, you can go for a short walk around the village to familiarise yourself. In the afternoon, if there is any sighting, we will take you to the site. Mostly, we use Maruti Suzuki Gypsy so that it is convenient for the guests instead of hiking. There will be some points like 100- 400 yards one may have to walk while reaching the snow leopard site. There is also Yak available in case one is comfortable to ride one. Generally, the daily routine is as follows. Morning tea/coffee around 6:30 AM and one has to be ready by 7:15 AM for breakfast. The spotters come for a meeting by 7:15 AM and set out for the snow leopard sighting sites. Once the breakfast is done, the guest can step out to see Blue Sheep, Red Fox, and Ibex. Generally, we encourage everyone to stay close to the homestay till they have one good sighting of snow leopard and then pursue other wildlife. Lunch is generally served at the snow leopard sighting site. If there are no sightings, on some days, we will stay back at the home stay and have lunch there. Dinner is always at the home stay. In between the meals tea/coffee/snacks are served at the site and in the home stay. Minera water is provided free of charge throughout the trip. Each room has a wood fired hot stove and electric heater for heating. Each bed has an electric blanket. Heavy quilts are provided. Bath towels are also provided. There is generator set if the electricity goes out.\n\nThere is no running water in winters. Hot water will be provided for freshening up every day. For use of a toilet, it is a dry toilet. Wet wipes and toilet paper are provided. The bathroom is separate and hot water will be provided in case someone wants to take a bath. A porter is provided for each guest. You don’t have to lift anything. Your camera is carried by the porter and he will also carry your daytime camera bag/backpack. Extra scanner guides for maximum chances of a quick and confirmed sighting.\nYou will be provided with a walking pole and a chair/stool while sitting down for photography. A tent is also pitched in case one has to lie down. Insulated mats are kept inside the tent. An oxygen tank is also carried along with the group while going to the sighting site. Oxygen saturation measurement device for any symptoms of shortness of breath. The escort will you and be available for any issues. There is an arrangement of dropping the guest to a lower altitude if suffering from mountain sickness or shortness of breath. Any detour up to 30 kilometers for new or different sites for Snow Leopard sighting. Any extra help needed or extra trips by the helpers to get the equipment or other essential items from the homestay to the sighting site.\nThis is the routine for 6 days.",
                },
                {
                    title: "Tabo - Kibber",
                    description:
                        "Early next morning, we will visit the Tabo monastery before moving to Kibber. Kibber is at 14,500 feet. On the way to Kibber which is a 2-hour drive, if there is any snow leopard sighting, we will drop you off and get you ready for photography. The porter and guide will come and help you but it is better to go up, settle in and come back once acclimatized as any exertion can lead one to mountain sickness. So depending on how difficult the sighting site is to reach, we will decide. Once settled in your rooms at the home stay in Kibber, you can go for a short walk around the village to familiarise yourself. In the afternoon, if there is any sighting, we will take you to the site. Mostly, we use Maruti Suzuki Gypsy so that it is convenient for the guests instead of hiking. There will be some points like 100- 400 yards one may have to walk while reaching the snow leopard site. There is also Yak available in case one is comfortable to ride one. Generally, the daily routine is as follows. Morning tea/coffee around 6:30 AM and one has to be ready by 7:15 AM for breakfast. The spotters come for a meeting by 7:15 AM and set out for the snow leopard sighting sites. Once the breakfast is done, the guest can step out to see Blue Sheep, Red Fox, and Ibex. Generally, we encourage everyone to stay close to the homestay till they have one good sighting of snow leopard and then pursue other wildlife. Lunch is generally served at the snow leopard sighting site. If there are no sightings, on some days, we will stay back at the home stay and have lunch there. Dinner is always at the home stay. In between the meals tea/coffee/snacks are served at the site and in the home stay. Minera water is provided free of charge throughout the trip. Each room has a wood fired hot stove and electric heater for heating. Each bed has an electric blanket. Heavy quilts are provided. Bath towels are also provided. There is generator set if the electricity goes out.\n\nThere is no running water in winters. Hot water will be provided for freshening up every day. For use of a toilet, it is a dry toilet. Wet wipes and toilet paper are provided. The bathroom is separate and hot water will be provided in case someone wants to take a bath. A porter is provided for each guest. You don’t have to lift anything. Your camera is carried by the porter and he will also carry your daytime camera bag/backpack. Extra scanner guides for maximum chances of a quick and confirmed sighting.\nYou will be provided with a walking pole and a chair/stool while sitting down for photography. A tent is also pitched in case one has to lie down. Insulated mats are kept inside the tent. An oxygen tank is also carried along with the group while going to the sighting site. Oxygen saturation measurement device for any symptoms of shortness of breath. The escort will you and be available for any issues. There is an arrangement of dropping the guest to a lower altitude if suffering from mountain sickness or shortness of breath. Any detour up to 30 kilometers for new or different sites for Snow Leopard sighting. Any extra help needed or extra trips by the helpers to get the equipment or other essential items from the homestay to the sighting site.\nThis is the routine for 6 days.",
                },
                {
                    title: "Tabo - Kibber",
                    description:
                        "Early next morning, we will visit the Tabo monastery before moving to Kibber. Kibber is at 14,500 feet. On the way to Kibber which is a 2-hour drive, if there is any snow leopard sighting, we will drop you off and get you ready for photography. The porter and guide will come and help you but it is better to go up, settle in and come back once acclimatized as any exertion can lead one to mountain sickness. So depending on how difficult the sighting site is to reach, we will decide. Once settled in your rooms at the home stay in Kibber, you can go for a short walk around the village to familiarise yourself. In the afternoon, if there is any sighting, we will take you to the site. Mostly, we use Maruti Suzuki Gypsy so that it is convenient for the guests instead of hiking. There will be some points like 100- 400 yards one may have to walk while reaching the snow leopard site. There is also Yak available in case one is comfortable to ride one. Generally, the daily routine is as follows. Morning tea/coffee around 6:30 AM and one has to be ready by 7:15 AM for breakfast. The spotters come for a meeting by 7:15 AM and set out for the snow leopard sighting sites. Once the breakfast is done, the guest can step out to see Blue Sheep, Red Fox, and Ibex. Generally, we encourage everyone to stay close to the homestay till they have one good sighting of snow leopard and then pursue other wildlife. Lunch is generally served at the snow leopard sighting site. If there are no sightings, on some days, we will stay back at the home stay and have lunch there. Dinner is always at the home stay. In between the meals tea/coffee/snacks are served at the site and in the home stay. Minera water is provided free of charge throughout the trip. Each room has a wood fired hot stove and electric heater for heating. Each bed has an electric blanket. Heavy quilts are provided. Bath towels are also provided. There is generator set if the electricity goes out.\n\nThere is no running water in winters. Hot water will be provided for freshening up every day. For use of a toilet, it is a dry toilet. Wet wipes and toilet paper are provided. The bathroom is separate and hot water will be provided in case someone wants to take a bath. A porter is provided for each guest. You don’t have to lift anything. Your camera is carried by the porter and he will also carry your daytime camera bag/backpack. Extra scanner guides for maximum chances of a quick and confirmed sighting.\nYou will be provided with a walking pole and a chair/stool while sitting down for photography. A tent is also pitched in case one has to lie down. Insulated mats are kept inside the tent. An oxygen tank is also carried along with the group while going to the sighting site. Oxygen saturation measurement device for any symptoms of shortness of breath. The escort will you and be available for any issues. There is an arrangement of dropping the guest to a lower altitude if suffering from mountain sickness or shortness of breath. Any detour up to 30 kilometers for new or different sites for Snow Leopard sighting. Any extra help needed or extra trips by the helpers to get the equipment or other essential items from the homestay to the sighting site.\nThis is the routine for 6 days.",
                },
                {
                    title: "Kibber – Rampur",
                    description:
                        "Early morning departure from Kibber to Rampur. Stay at Nau Nabh Heritage hotel.",
                },
                {
                    title: "Rampur - Chandigarh ( by road 425 kms, 8 hrs drive)",
                    description:
                        "Early morning departure from Rampur to Chandigarh. Overnight stay at the hotel in Chandigarh.",
                },
                {
                    title: "Chandigarh – New Delhi Fly back home (Flight)",
                    description:
                        "After relaxed breakfast transfer to Chandigarh airport to board a flight to New Delhi at 1525 hrs to arrive New Delhi at 1630 hrs to connect a flight back home\nEnd of our Services.\n",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better).",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "An oxygen tank is also carried along with the group while going to the sighting site. Oxygen saturation measurement device for any symptoms of shortness of breath. The escort will you and be available for any issues. There is an arrangement of dropping the guest to a lower altitude if suffering from mountain sickness or shortness of breath.",
            ],
        },
    },
    {
        img_url:
            "https://live.staticflickr.com/5099/5521239826_13bc4878ca_z.jpg",
        name: "Amritsar, Srinagar and Ladakh Tour",
        duration: "12 Nights • 13 Days",
        slug: "amritsar-srinagar-and-ladakh-tour",
        tour: {
            location: "Amritsar, Srinagar and Ladakh ",
            country: "INDIA",
            min_age: "10+",
            tour_details:
                "On this unforgettable journey through northern India, you'll begin by visiting the Golden Temple in Amritsar, the holiest site in Sikhism. Admire its stunning golden architecture, soak in the peaceful atmosphere of the Gurudwara, and experience the spirit of community in the Langar. Next, you'll travel to Srinagar, the picturesque gem of Kashmir, where you can cruise on the serene Dal Lake in a traditional houseboat, explore the beautiful Mughal Gardens, and visit the ancient Shankaracharya Temple, all set against the backdrop of the majestic Himalayas.\nContinuing your adventure, you'll head to Ladakh, a land of mesmerizing landscapes and ancient monasteries. Known for its rugged beauty, Ladakh offers a chance to explore iconic monasteries like Hemis and Thiksey, venture through the stunning high-altitude roads, and witness the region’s unique Buddhist culture. Whether you're seeking spiritual solace, cultural experiences, or thrilling outdoor activities, this trip promises a blend of history, tranquility, and adventure.",
            destinations_covered: [
                {
                    name: "Amritsar",
                    description:
                        "The Golden Temple, or Harmandir Sahib, is a spiritual and architectural marvel located in Amritsar, Punjab. Visitors can experience the tranquility of the Gurudwara, participate in the community kitchen (Langar), and admire the exquisite blend of Mughal and Sikh architecture. ",
                },
                {
                    name: "Wagah Border ",
                    description:
                        "The Wagah Border, located between India and Pakistan near Amritsar, is famous for its daily Beating Retreat Ceremony, where soldiers from both nations perform a synchronized and energetic display of patriotism.",
                },
                {
                    name: "Jallianwala Bagh ",
                    description:
                        "Jallianwala Bagh in Amritsar is a historic site of profound significance, where over 1,000 unarmed Indian civilians were massacred by British forces in 1919. Today, it stands as a memorial to the martyrs, with a garden, a well-preserved Martyrs' Pavilion, and a museum honoring the struggle for India’s independence.",
                },
                {
                    name: "Srinagar",
                    description:
                        "Srinagar, is renowned for its breathtaking landscapes, serene Dal Lake, and lush Mughal Gardens. Visitors can enjoy a peaceful shikara ride on the lake, explore the vibrant floating markets, and immerse themselves in the region's rich cultural heritage and natural beauty.",
                },
                {
                    name: "Kargil",
                    description:
                        "Kargil, a town in Ladakh, is historically significant for its role in the 1999 India-Pakistan conflict. Nestled between the rugged mountains, it offers stunning views of the surrounding landscapes, with its beautiful monasteries, ancient forts, and the Kargil War Memorial honoring the soldiers who fought in the region. ",
                },
                {
                    name: "Lamayuru ",
                    description:
                        "Lamayuru, one of the oldest and most picturesque monasteries in Ladakh, is known for its dramatic setting amidst a moonscape-like landscape. Perched on a hill, it offers stunning views of the surrounding valleys and snow-capped peaks.",
                },
                {
                    name: "Leh",
                    description:
                        "Leh, the capital of Ladakh, is a captivating blend of natural beauty and rich cultural heritage. Surrounded by towering Himalayan peaks, it offers visitors a chance to explore ancient Buddhist monasteries like Hemis and Thiksey, and experience the region's unique lifestyle and traditions.",
                },
                {
                    name: "Khardungla pass ",
                    description:
                        "Khardung La Pass, one of the highest motorable roads in the world, stands at an altitude of 5,359 meters (17,582 feet) and offers breathtaking panoramic views of the surrounding mountains and valleys. ",
                },
                {
                    name: "Sumur ",
                    description:
                        "Sumur, a serene village in the Nubra Valley of Ladakh, is known for its peaceful landscapes, traditional culture, and the ancient Samstanling Monastery. Surrounded by lush fields, towering mountains, and vast sand dunes.",
                },
                {
                    name: "Panamik ",
                    description:
                        "Panamik, a picturesque village in the Nubra Valley of Ladakh, is famous for its natural hot springs and stunning landscapes. Situated near the border with Pakistan, it offers a unique blend of natural beauty and cultural heritage.",
                },
                {
                    name: "Diskit ",
                    description:
                        "Diskit, the largest town in Nubra Valley, Ladakh, is renowned for its stunning Diskit Monastery and the giant statue of Maitreya Buddha that overlooks the valley. The monastery, dating back to the 14th century, offers a glimpse into Ladakh’s Buddhist culture and provides breathtaking views of the surrounding landscapes, including the sand dunes and the Shyok River, making it a must-visit destination for both spiritual seekers and nature lovers.",
                },
                {
                    name: "Nubra",
                    description:
                        'Nubra Valley, often referred to as the "Valley of Flowers," is a breathtaking region in Ladakh, known for its stunning landscapes of sand dunes, lush greenery, and towering snow-capped mountains.',
                },
            ],
            itinerary_outline: [
                {
                    title: "ARRIVE IN AMRITSAR",
                    description:
                        "Arrive Amritsar airport / railway station. You will be received by our representative. Check in the hotel.\nLater Visit Golden Temple the holiest shrines for the Sikhs. The architecture of Golden Temple is a blend of Hindu and Muslims architecture.\nGolden Temple: A pilgrimage to the Golden Temple is a must for any Sikh or a believer of humanity & God. This is the most sacred shrine of the Sikhs and is in the town of Amritsar founded by Guru Ram Das, the fourth Sikh Guru. The temple was built by Guru Arjun Dev and the great Sikh ruler Ranjit Singh embellished the shrine and covered the domes with gold. The temple is in the middle of the holy tank called the Pool of Immortality dug up by Guru Ram Das. The temple is a pleasing square building in marble with inlaid walls and a domed roof. The holy book of the Sikhs the Guru Granth Sahib is kept under a Sikh canopy and pilgrims file past it. A few yards away from the temple is the Akal Takht (The Immortal Throne) from where the Gurus held court. This is a building of immense historical significance for Sikhs and is the place where decisions concerning the religious and social life of the community are taken. At any given day, the Golden Temple is full of devotees yet there is a great air of tranquility and peacefulness.\nOvernight in Hotel",
                },
                {
                    title: "WAGAH BORDER-JALLIANWALA BAGH",
                    description:
                        "Visit Jallianwala Bagh: Jallianwala has a special importance attached to it with respect to India’s freedom struggle On April 13, 1919, on the auspicious day of Baisakhi hundreds of men, women and children sacrificed their lives in front of ruthless firing of the British forces.\nThen visit Wagah Border which is famous for its ‘Retreat’ ceremony at the time of sunset. During evening armed soldiers, both Indian as well as Pakistani, fully decked in their uniform enacts a particularly hostile parade marked by lowering of their respective flags and closing the border gates. The changing of the guards and the ceremonial lowering of the flags is carried out with great pomp and fervor.\nOvernight in hotel",
                },
                {
                    title: "AMRITSAR – SRINAGAR FLIGHT",
                    description:
                        "Morning transfer to the airport to take the flight to Srinagar. Arrives in Srinagar and upon arrival, transfer to the House Boat.\nThe State known in India as Jammu & Kashmir (J&K) incorporates the region of Ladakh and Zanskar, Srinagar is the J&K’s summer capital and Jammu is the winter capital. Kashmir is one of the most beautiful regions of India. The Mughal rulers of India were always happy to retreat from the heat of the plains to the cool green heights of Kashmir. The 4th Mughal ruler Jehangir’s last words, when he died in 1627 en route to the “happy valley”, were a simple request for “only Kashmir”. It is here that the Mughals developed their art of formal gardens to its great heights.\nLater a boat ride in Dal Lake.\nDinner and overnight in Houseboat.\n",
                },
                {
                    title: "IN SRINAGAR - SIGHTSEEING- MUGHAL GARDENS & SHANKARACHARYA TEMPLE",
                    description:
                        "Morning start the city tour, visiting Mughal gardens, With terraced lawns, cascading fountains, paint-box-bright flowerbeds with the panorama of the Dal in front of them – the three Mughal Gardens of Chesmashahi, Nishat and Shalimar are the Mughal Emperors’ concept of paradise and are today very popular places for picnics and excursions. Shalimar Garde, Built by Emperor Jehangir for his wife Nur Jehan, Shalimar, is a beautiful garden with sweeping vistas over gardens and lakes, and shallow terraces. Nishat garden, Situated on the banks of the Dal Lake, with the Zabarwan Mountains as its backdrop, this ‘garden of bliss’ commands a magnificent view of the lake and the snowcapped Pir Panjal mountain range which stands far away to the west of the valley. Nishat was designed in 1633 AD by Asaf Khan, brother of Nur Jahan.\nShankaracharya temple: is housed in the Srinagar district on the hill known as Takht-e-Suleiman. It is at a height of 1100 ft. above surface level of the main city on the peak of the hill. The Shankaracharya Mandir in Kashmir is dedicated to Lord Shiva and is thought to be the oldest shrine for worship in the Kashmir valley. The temple as it is today has undergone many repairs throughout its life. Ever since under the rule of Lalit Aditya and then repairs. The main building of Shankaracharya temple is about 30 feet high. The interior part of the temple houses the sacred Lingam of Lord Shiva. In the year 1961 April 20th, near the temple, the white marble bust of Adi Shankaracharya was installed by the J & K Dhar Marth Trust. The holy Shankaracharya temple is well maintained and kept under the supervision of the President of the Trust Mr. Divakar Singh.\nOvernight in house boat\n",
                },
                {
                    title: "SRINAGAR-KARGIL (APPROX 210 KM - DRIVE 6-7 HRS)",
                    description:
                        "Today after breakfast drive to Kargil via Sona Marg (2740mt) is the last major town before Ladakh, Sonamarg is an excellent base for trekking. Its names “Meadows of Gold”. We drive over Zoji La Pass (3529 mt). Zoji La pass is the watershed between Kashmir and Ladakh- on one side you have the green, lush scenery of Kashmir while on the other side everything is barren and dry. Drass is the first main village after the pass, from here another 56 km to Kargil.\nOvernight in hotel.\n",
                },
                {
                    title: "KARGIL-LAMAYURU (APPROX 140 KM - DRIVE 4-5 HRS)",
                    description:
                        "Post breakfast we drive to Lamayuru enroute visiting Mulbek rock cut statue of Maitreya Buddha then we till drive via Namika La and Fotu La then visit LAMAYURU, Belongs to Dripung Kagyu (Red Hat) Lamayuru is the oldest monastery in Ladakh.\nOvernight in Hotel.\n",
                },
                {
                    title: "LAMAYURU-ALCHI-LIKIR –LEH (APPROX 125 KM - DRIVE- 6-7 HRS)",
                    description:
                        "ALCHI GOMPA: Alchi Gompa dating a thousand years back. One of its walls features thousands of miniature sized pictures of the Buddha. Three large sized images made of clay and painted brightly are its focal attractions. No longer an active religious center, it is looked after by monks from the Liker monastery. This is the only monastery amongst 34 monasteries, which is not located on a hilltop was built by Rinchan Zangpo.\nLIKIR GOMPA: Founded in the 11th century and rededicated to a different monastic order in the 15th century, its earlier Gompa was destroyed in a fire. The present Gompa dated back to the 18th century. Skilled craftsmen producing excellent Thankas, earthen pots and carved wooden folding stools, live here in the village. Majestically situated, Likir commands a spectacular view. A magnificent giant Jupiter tree, one of the few survivors of its species, stands in the courtyard.\nOvernight in Hotel.\n",
                },
                {
                    title: "VISIT MONASTERIES SHEY ,THIKSEY AND HEMIS- LEH (5-6 HRS)",
                    description:
                        "After breakfast, drive to visit the monasteries of Shey, Thiksey, and Hemis.\nShey was the ancient capital of Ladakh and even after Singge Namgyal built the more imposing palace at Leh, the kings continued to regard Shey, as their real home. The importance which was attached to Shey ‐ the seat of Ladakhʹs heartland ‐ is attested by the enormous number of Chorten about the village, particularly around the palace complex and barren plain to the north of the road.\nThiksey is one of the largest and most impressive Gompas. There are several temples in this Gompa containing images, stupas and exquisite wall paintings. It also houses a two ‐ storied statue of Buddha which has the main prayer hall around its shoulder.\nHemis is dedicated to Padmasambhava, what a visitor can observes a series of scenes in which the lamas, robed in gowns of rich, brightly colored brocade and sporting masks sometimes bizarrely hideous, parade in solemn dance and mime around the huge flag pole in the center of the courtyard to the plaintive melody of the Shawn.\nDrive back to Leh.\nOvernight in Hotel\n",
                },
                {
                    title: "LEH – (NUBRA) VIA KHARDUNGLA PASS (APPROX 125KM - DRIVE 5-6 HRS)",
                    description:
                        "Early morning proceed to Nubra Valley via the World Highest Motorable road (5602 meters) – Khardung La pass. \nAfter crossing the pass, we reach Nubra Valley. It is about 150 km north of Leh, where the Shyok River meets the Siachen River to form a large valley separating the Ladakh and Karakoram Ranges. Siachen Glacier lies to the north of the valley. The Sasser Pass and the famous Karakoram Pass of the silk route fame lies to the northwest of the valley and connect Nubra with Xinjiang. Panamik in Nubra valley is the last village up north this side that is open to tourists.\nIn the evening go for a small walk and explore the village.\nOvernight in Camp\n",
                },
                {
                    title: "TIRITH -SUMUR - PANAMIK –DISKIT",
                    description:
                        "After breakfast, drive to Village Sumur Visit the Samtanling monastery to witness the prayer to witness the prayers. Later drive to Panamik – famous for hot Sulphur Springs. You may take a bath at the springs, which is said to be very good for the skin lunch at the camp. Post lunch visit Diskit monastery and the village.\nOvernight stay in camp\n",
                },
                {
                    title: "NUBRA-LEH",
                    description:
                        "After Breakfast at the camp, drive back to Leh via Khardungla pass.\nUpon arrival in Leh, check-in at your hotel.\nEvening explore Leh bazaar for souvenir,\nOvernight in Hotel\n",
                },
                {
                    title: "STAKNA-MATHO-STOK PALACE",
                    description:
                        "Today you will so the sightseeing of Matho Gompa, around 26km. south east of Leh is the only Gompa, which belongs to the Saskya order and Lama Tungpa Dorjay founded it in the 16th century and the Gompa was named Thupstan-Sharling Choskor. In order to introduce the Monastic community, the king offered religious estate in neighboring villages and the Nag-Rang festival was started, which is held on 14th and 15th day of the Tibetan calendar.\nStakna Monastery  Stakna (Tiger’s nose); 25km. south of Leh, is a small monastery comprising of few Dukhangs, which was founded during the reign of king Jamyang Namgyal, in 1580, by saint Chosje Jamyang Palkhar. The most important statue in the monastery is said to be of Arya Avaloketesvara. The monasteries like the one in Sani, Bardan and Stakrimo, in Zangskar are branches of this monastery.\nSTOK PALACE & MUSEUM: The palace of the banished royal family, Stok has a museum which displays fabulous period costumes and jewelry of the royalty along with exquisite Thankas representing the life style of Shakya Muni. Interesting historical objects like coins, armor, weapons, precious jades and porcelain too can be seen here.\nDrive back to Leh and rest in your hotel.\nOvernight in Hotel\n",
                },
                {
                    title: "TRANSFER TO THE AIRPORT-END OF THE TOUR",
                    description:
                        "After early / packed breakfast, we transfer you to Leh airport to board your flight back to Delhi.\nEnd of our services",
                },
            ],
            important_information: [
                "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better)",
                "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                "Remaining validity in passport after the tour must be min 6 month excluding travelling month",
                "Valid Indian visa is mandatory and multiple entry visa for India if you entering Bhutan from India and reinterring to India after Bhutan tour",
                "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
            ],
        },
    },
];
