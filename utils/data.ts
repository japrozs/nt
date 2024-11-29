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
        img_url: "/img/artosuraj.jpg",
        name: "Spiritual Journey of India",
        duration: "6 Nights • 7 Days",
        slug: "spiritual-journey-of-india",
        tour: {
            bg_img_url: "/img/artosuraj.jpg",
            location: "Amritsar, Punjab",
            min_age: "10+",
            tour_details: `A trip that gives you an opportunity to explore ancient monasteries and shrines of historical and archaeological interests in the heartland of four major towns of the dragon kingdom, Bhutan.\n\nHigh in the mysterious and majestic eastern Himalayas, nestled between Tibetan autonomous region of china and India, lies the small kingdom of Bhutan, increasingly renowned as one of the earth’s precious unspoiled spots. This magical place speaks Buddhist culture in the daily lives of its people and spectacular mountain scenery provides a backdrop to pristine forests and picturesque valleys. The breath-taking landscape is dotted with fluttering prayer flags, colourful farmhouses amidst terraced fields and impressive monasteries clinging to impossible cliffs. A memorable trip that stays with you for a lifetime.`,
            destinations_covered: [
                {
                    name: "THIMPHU",
                    description: `Unique city with unusual mixture of modern development alongside ancient traditions. The Kingdom’s capital city is the main center of commerce, religion and government in the country.`,
                },
                {
                    name: "PUNAKHA",
                    description: `Blessed with temperate climate Punakha has been inextricably linked with momentous occasions in Bhutanese history. One of the most majestic structures in the country is located here.`,
                },
                {
                    name: "PARO",
                    description: `Wide and verdant Paro valley is one of the most beautiful valleys in Bhutan with many sacred sites and historical buildings scattered through the area.`,
                },
                {
                    name: "GANGTEY",
                    description: `The valley of Gangtey is one of the most beautiful spots in Bhutan.`,
                },
                {
                    name: "TRONGSA",
                    description: `The vanguard of the warriors due to its strategic position in the country.`,
                },
                {
                    name: "BUMTHANG",
                    description: `Bumthang has an individuality that charms its visitors and separates it from other regions.`,
                },
            ],
            itinerary_outline: [
                {
                    day_number: "1",
                    description: "Arrive Paro & transfer to Thimpu",
                },
                {
                    day_number: "2",
                    description: "Thimpu",
                },
                {
                    day_number: "3",
                    description: "Thimpu",
                },
                {
                    day_number: "4",
                    description: "Thimpu, Gangtey",
                },
                {
                    day_number: "5",
                    description: "Gangtey",
                },
                {
                    day_number: "6",
                    description: "Gangtey – Trongsa",
                },
                {
                    day_number: "7",
                    description: "Trongsa – Bumthang (68kms, 2hrs)",
                },
                {
                    day_number: "8",
                    description: "Bumthang",
                },
                {
                    day_number: "9",
                    description:
                        "Bumthang – Day visit to Ura Valley (45 km, 1.5 hrs)",
                },
                {
                    day_number: "10",
                    description: "Bumthang – Punakha (200 km, 7 hrs drive)",
                },
                {
                    day_number: "11",
                    description: "Punakha",
                },
                {
                    day_number: "12",
                    description: "Punakha – Paro (125 km, 4 hrs drive)",
                },
                {
                    day_number: "13",
                    description: "Paro",
                },
                {
                    day_number: "14",
                    description: "Depart Paro",
                },
            ],
            detailed_itinerary: [
                {
                    day_number: "1",
                    title: "ARRIVE PARO BY DRUK AIR & TRANSFER TO THIMPHU",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "2",
                    title: "THIMPHU",
                    description: `After breakfast, sightseeing in Thimphu valley including visit to the following: the National Library, housing an extensive collection of priceless Buddhist manuscripts; the Institute for Zorig Chusum (commonly known as the Painting School) where students undergo a 6-year training course in Bhutan’s 13 traditional arts and crafts. Later visit Textile and Folk Heritage Museum, a fascinating testimony of the Bhutanese material culture and living traditions.
    
    After lunch, visit King’s Memorial Chorten continuously circumambulated by people, murmuring mantras and spinning their prayer wheels. Construction of this landmark was the idea of Bhutan’s third king, His Majesty Jigme Dorji Wangchuk (“the father of modern Bhutan”) who has wished to erect monument to world peace and prosperity. Completed in 1974 after his untimely death, it serves both as a memorial to the Late King and as a monument to peace.
    
    Further drive to visit Trashichhoedzong, “fortress of the glorious religion”. This is the center of government and religion, site of monarch’s throne room and seat of Je Khenpo or Chief Abbot. Built in 1641 by the political and religious unifier of Bhutan, Shabdrung Ngawang Namgyal, it was reconstructed in 1960s in traditional Bhutanese manner, without nails or architectural plans.
    
    Later drive to Buddha Point (Kuensel Phodrang). Located at a short drive from Thimphu city Centre, visitors can get a good overview of the Thimphu valley from the Buddha point (Kuensel Phodrang). You can pay your obeisance and offer prayers to the Buddha, the largest statue in the country and then walk around and take a glimpse of the valley.
    Evening can be spent strolling through the government-run Handicrafts Emporium and local crafts bazaar, to browse through example of Bhutan’s fine traditional arts. Here you can buy hand-woven textiles, thangkha paintings, masks, ceramics, slate and wood carvings, jewelry, interesting items made from local materials.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "3",
                    title: "THIMPHU",
                    description: `After breakfast at hotel, take a scenic walk to Tango monastery: This picturesque three-storey tower monastery was founded in 12th century and reconstructed in the 15th century by the fabled ‘Divine Madman’, an eccentric monk who meditated in a cave near the monastery.
    
    Situated north of Thimphu, one way it takes about 30 minutes’ drive and approx. one hour walk through shaded rhododendron forests to reach the monastery.
    
    Afternoon take a short drive towards northern end of town to visit Changangkha Lhakhang: It is a fortress like temple and monastic school perched on a ridge above Thimphu, south of Motithang. The temple was established in 12th century on a site chosen by Lama Phajo Drugom Shigpo, who came from Tibet. The central statue here is Chenrezig in a manifestation with 11 heads. From temple courtyard, there is fascinating view of Thimphu valley.
    
    On the way back into town visit Takin Preserve – the Takin is the national animal of Bhutan, and looks like a cross between a cow and a goat. Legend has it that the animal was created by the great Buddhist yogi, Drupa Kunley, and it can be found only in Bhutan and nearby areas. Also visit Anim Dratshang (nunnery) at Drubthob Goemba.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "4",
                    title: "THIMPHU – GANGTEY (150KMS, APPROX 5.5 HRS DRIVE)",
                    description: `After breakfast enjoy a dramatic drive over the high mountain pass of Dochu La (3,080m) and on to the Phobjikha Valley passing through dense forests and oak, rhododendron tress. In Bhutan, the passes are marked by a large Bhutanese Chorten and prayer flag. Dochula pass offers the most spectacular view over the high peaks of the eastern Himalayas on a clear day.
    
    After your consultation with the astrologer yesterday, today you will participate in a special prayer flag hoisting ceremony.
    
    Experience a very special joy of hoisting your personal prayer flag among the thousands fluttering in the wind, with the knowledge that your prayers now add to the universal song of silent prayers not just for the present but for years to come. It’s a moment that allows you to touch the timeless.
    
    The journey continues over the 3,050m mountain pass where on a clear day, the towering Himalayan peaks are clearly visible. The highway follows the scenic Dang Chhu before climbing through forests of bamboo and oak.
    
    Afternoon take a walk around Gangtey village and visit Gangtey Gompa, the only Nyingmapa monastery in this region. The village of Phobjikha lies a few km, down from the monastery, on the valley floor. This quiet, remote valley is the winter home of black necked cranes, which migrate from the arid plains of Tibet in the north, to pass the winter months in a milder climate. Explore Gangtey village and Phobjikha valley.
    
    Overnight at the hotel in Gangtey.`,
                },
                {
                    day_number: "5",
                    title: "GANGTEY",
                    description: `The valley of Gangtey is one of the most beautiful spots in Bhutan. The surprise of finding such a wide, flat valley without any trees after the hard climb through dense forests is augmented by an impression of vast space, and extremely rare experience in Bhutan where most of the valleys are tightly enclosed. A few kilometres beyond the Gangtey Monastery, on the valley floor lies the village of Phobjikha. This place is the winter home of black necked cranes that migrate from the arid plains in the north to pass winter in milder and lower climate. Phobjikha, at an altitude of 2900 m, falls under the district of Wangduephodrang and lies on the periphery of the Black Mountain National Park.
    
    Explore Phobjikha valley for Black Necked Cranes. (In winter only, Oct to mid-March)
    
    Later visit Gangtey Gompa. Perched on a small hill that rises from the valley floor, the Gangtey Monastery is the only Nyingmapa monastery on the western side of the Black Mountain’s and also the biggest Nyingmapa monastery in Bhutan. The Monastery is surrounded by a large village inhabited mainly by the families of the 140 Gomchens who take care of the Monastery.
    
    Overnight at the hotel in Gangtey.`,
                },
                {
                    day_number: "6",
                    title: "GANGTEY – TRONGSA",
                    description: `After breakfast drive to Trongsa crossing Pele-la pass (3300m/10830 ft). The Pela La (pass) is marked by a large white chorten prayer flags. There is an abrupt change in vegetation at this point, with mountain forest replaced by high altitude dwarf bamboo.
    
    Stop en route at Chendbji Chorten, patterned on Kathmandu’s Swayambhunath Stupa, with eyes panted at four cardinal points.
    
    Overnight at hotel in Trongsa.
    
    ** Road under construction – drive may take longer depending on working schedule and traffic.`,
                },
                {
                    day_number: "7",
                    title: "Trongsa – Bumthang (68kms, 2hrs)",
                    description: `After breakfast proceed to visit Trongsa Dzong, built in 1648 it was the seat of power over central and eastern Bhutan. Both the first and second Kings of Bhutan ruled the country from this ancient seat.
    
    Also visit Ta Dzong, recently opened fort in Trongsa. The Ta Dzong, a cylindrical stone structure rising five stories, was built in 1652 by Chogyal Minjur Tempa, after more than 350 years, it has been resurrected into a classy museum, that represents a tasteful blend of tradition and modernity.
    
    After sightseeing at Trongsa, continue drive to Bumthang across Yutong-la pass (3,400m/ 11,155 ft). The road winds steeply up to the pass from Trongsa, then runs down through coniferous forest into a wide, open cultivated valley known as the Chumey valley.
    
    En route stop at Chumey, a wide fertile valley where wheat, barley, potatoes and buckwheat are cultivated. Chumey is particularly known for its famous wool weaving called “Bumthang Yathra”.
    
    Overnight at hotel in Bumthang.`,
                },
                {
                    day_number: "8",
                    title: "Bumthang",
                    description: `After breakfast proceed for the tour of Bumthang valley.
    
    Bumthang is the general name given to combination of four valleys – Chumey, Choekhor, Tang and Ura with altitude varying from 2,600m to 4,000m. It is home to many of prominent Buddhist temples and monasteries.
    
    Visit Kurje Lhakhang, where the saint Padmasambhava subdued a local demon and left his body imprint on a rock, the Jambey Lhakhang (7th century temple), Tamshing Lhakhang (housing some of the oldest wall paintings in Bhutan) and Jakar Dzong (administrative center of the region). Stroll in the village, visit the little handicrafts shop at the entrance to the town, and perhaps take refreshments at a local restaurant.
    
    Afternoon take a short hike to Lhodrak Kharchhu Monastery.
    
    Located above the main town, about 3 km from Chamkhar town, the monastery was founded by Namkhai Nyingpo Rinpoche in 1984 who was recognized at a very young age by H.H. the 14th Dalai Lama and H.H. 16th Karmapa as the reincarnation of a Tibetan lama. The monastery has become part of an extensive effort to preserve and revitalize Tibetan culture. The monks’ regular curriculum include reading, memorizing the daily prayers, learning dharma dances, drawing mandalas, learning the melodies of sacred rituals, learning the use of ceremonial instruments and the art of making sacrificial objects, grammar, poetry, karika along with the basics of contemplation and instruction on the different stages of tantra.
    
    Overnight at Hotel in Bumthang.`,
                },
                {
                    day_number: "9",
                    title: "Bumthang – Day Visit Ura Valley (45kms, approx 1.5 hrs)",
                    description: `Bumthang to Ura is 45 km, about one-and-a-half-hour drive.
    
    To reach here, the road climbs to Jakar valley Bhutan amazingly open countryside, only occasionally running into forest. Large sheep pastures line the road up to 20 km behind the southern tip of the Tang valley. The route crosses Ura-la pass (3,600m) with a magnificent view of Mount. Gangkhar Puensum. Villages in Ura have clustered houses, which is quite unusual in Bhutan.
    
    Above Ura village (3,100m) is a new temple dedicated to Guru Rinpoche. Inaugurated in 1986, it contains a huge statue of the master and remarkable paintings of the cycle of his teachings. Since last 25 years Ura has been transformed from a marginal community to prosperous valley.
    
    Later in the day return to Bumthang. Evening at leisure.
    
    Overnight at Hotel in Bumthang.`,
                },
            ],
            important_information: [
                {
                    title: "Closing days of the monuments",
                    items: [
                        "Ta Dzong – Paro (national museum) : closed on Government Holidays",
                        "Tiger’s Nest (Taktsang) Monastery: Closed on Tuesday",
                        "National Library – Thimphu : closed on Sat, Sun & Government Holidays",
                        "Folk Heritage Museum – Thimphu : closed on Government Holidays and on Sat open from 10.30 a.m to 1.00 p.m and on Sun open from 11.30 a.m to 3.00 p.m",
                        "Textile Museum – Thimphu : Closed on Government Holidays and on Sun and on Sat open from 9.00 a.m to 4 p.m",
                        "Institute of Zorig Chusum (Arts & Crafts School) – Thimphu : Closed on Sun & Government Holidays and on Sat open from 10 a.m to 12 o’clock (also closed on winter mid Dec till mid-March & summer early June till end June, exact date of closing is only available a few weeks before the date)",
                    ],
                },
                {
                    title: "Bhutan visa",
                    items: [
                        "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better)",
                        "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                        "Remaining validity in passport after Bhutan tour must be min 6 month excluding travelling month",
                        "Multiple entry visa for Indian if you entering Bhutan from India and reinterring to India after Bhutan tour",
                        "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
                    ],
                },
            ],
        },
    },
    {
        img_url: "/img/madurai.jpg",
        name: "South India with Madurai",
        duration: "12 Nights • 13 Days",
        slug: "south-india-with-madurai",
        tour: {
            bg_img_url: "/img/artosuraj.jpg",
            tour_name: "Spiritual Tour of India",
            duration: "9 days • 8 nights",
            location: "Amritsar, Punjab",
            min_age: "10+",
            tour_details: `A trip that gives you an opportunity to explore ancient monasteries and shrines of historical and archaeological interests in the heartland of four major towns of the dragon kingdom, Bhutan.\n\nHigh in the mysterious and majestic eastern Himalayas, nestled between Tibetan autonomous region of china and India, lies the small kingdom of Bhutan, increasingly renowned as one of the earth’s precious unspoiled spots. This magical place speaks Buddhist culture in the daily lives of its people and spectacular mountain scenery provides a backdrop to pristine forests and picturesque valleys. The breath-taking landscape is dotted with fluttering prayer flags, colourful farmhouses amidst terraced fields and impressive monasteries clinging to impossible cliffs. A memorable trip that stays with you for a lifetime.`,
            destinations_covered: [
                {
                    name: "THIMPHU",
                    description: `Unique city with unusual mixture of modern development alongside ancient traditions. The Kingdom’s capital city is the main center of commerce, religion and government in the country.`,
                },
                {
                    name: "PUNAKHA",
                    description: `Blessed with temperate climate Punakha has been inextricably linked with momentous occasions in Bhutanese history. One of the most majestic structures in the country is located here.`,
                },
                {
                    name: "PARO",
                    description: `Wide and verdant Paro valley is one of the most beautiful valleys in Bhutan with many sacred sites and historical buildings scattered through the area.`,
                },
                {
                    name: "GANGTEY",
                    description: `The valley of Gangtey is one of the most beautiful spots in Bhutan.`,
                },
                {
                    name: "TRONGSA",
                    description: `The vanguard of the warriors due to its strategic position in the country.`,
                },
                {
                    name: "BUMTHANG",
                    description: `Bumthang has an individuality that charms its visitors and separates it from other regions.`,
                },
            ],
            itinerary_outline: [
                {
                    day_number: "1",
                    description: "Arrive Paro & transfer to Thimpu",
                },
                {
                    day_number: "2",
                    description: "Thimpu",
                },
                {
                    day_number: "3",
                    description: "Thimpu",
                },
                {
                    day_number: "4",
                    description: "Thimpu, Gangtey",
                },
                {
                    day_number: "5",
                    description: "Gangtey",
                },
                {
                    day_number: "6",
                    description: "Gangtey – Trongsa",
                },
                {
                    day_number: "7",
                    description: "Trongsa – Bumthang (68kms, 2hrs)",
                },
                {
                    day_number: "8",
                    description: "Bumthang",
                },
                {
                    day_number: "9",
                    description:
                        "Bumthang – Day visit to Ura Valley (45 km, 1.5 hrs)",
                },
                {
                    day_number: "10",
                    description: "Bumthang – Punakha (200 km, 7 hrs drive)",
                },
                {
                    day_number: "11",
                    description: "Punakha",
                },
                {
                    day_number: "12",
                    description: "Punakha – Paro (125 km, 4 hrs drive)",
                },
                {
                    day_number: "13",
                    description: "Paro",
                },
                {
                    day_number: "14",
                    description: "Depart Paro",
                },
            ],
            detailed_itinerary: [
                {
                    day_number: "1",
                    title: "ARRIVE PARO BY DRUK AIR & TRANSFER TO THIMPHU",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "2",
                    title: "THIMPHU",
                    description: `After breakfast, sightseeing in Thimphu valley including visit to the following: the National Library, housing an extensive collection of priceless Buddhist manuscripts; the Institute for Zorig Chusum (commonly known as the Painting School) where students undergo a 6-year training course in Bhutan’s 13 traditional arts and crafts. Later visit Textile and Folk Heritage Museum, a fascinating testimony of the Bhutanese material culture and living traditions.
    
    After lunch, visit King’s Memorial Chorten continuously circumambulated by people, murmuring mantras and spinning their prayer wheels. Construction of this landmark was the idea of Bhutan’s third king, His Majesty Jigme Dorji Wangchuk (“the father of modern Bhutan”) who has wished to erect monument to world peace and prosperity. Completed in 1974 after his untimely death, it serves both as a memorial to the Late King and as a monument to peace.
    
    Further drive to visit Trashichhoedzong, “fortress of the glorious religion”. This is the center of government and religion, site of monarch’s throne room and seat of Je Khenpo or Chief Abbot. Built in 1641 by the political and religious unifier of Bhutan, Shabdrung Ngawang Namgyal, it was reconstructed in 1960s in traditional Bhutanese manner, without nails or architectural plans.
    
    Later drive to Buddha Point (Kuensel Phodrang). Located at a short drive from Thimphu city Centre, visitors can get a good overview of the Thimphu valley from the Buddha point (Kuensel Phodrang). You can pay your obeisance and offer prayers to the Buddha, the largest statue in the country and then walk around and take a glimpse of the valley.
    Evening can be spent strolling through the government-run Handicrafts Emporium and local crafts bazaar, to browse through example of Bhutan’s fine traditional arts. Here you can buy hand-woven textiles, thangkha paintings, masks, ceramics, slate and wood carvings, jewelry, interesting items made from local materials.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "3",
                    title: "THIMPHU",
                    description: `After breakfast at hotel, take a scenic walk to Tango monastery: This picturesque three-storey tower monastery was founded in 12th century and reconstructed in the 15th century by the fabled ‘Divine Madman’, an eccentric monk who meditated in a cave near the monastery.
    
    Situated north of Thimphu, one way it takes about 30 minutes’ drive and approx. one hour walk through shaded rhododendron forests to reach the monastery.
    
    Afternoon take a short drive towards northern end of town to visit Changangkha Lhakhang: It is a fortress like temple and monastic school perched on a ridge above Thimphu, south of Motithang. The temple was established in 12th century on a site chosen by Lama Phajo Drugom Shigpo, who came from Tibet. The central statue here is Chenrezig in a manifestation with 11 heads. From temple courtyard, there is fascinating view of Thimphu valley.
    
    On the way back into town visit Takin Preserve – the Takin is the national animal of Bhutan, and looks like a cross between a cow and a goat. Legend has it that the animal was created by the great Buddhist yogi, Drupa Kunley, and it can be found only in Bhutan and nearby areas. Also visit Anim Dratshang (nunnery) at Drubthob Goemba.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "4",
                    title: "THIMPHU – GANGTEY (150KMS, APPROX 5.5 HRS DRIVE)",
                    description: `After breakfast enjoy a dramatic drive over the high mountain pass of Dochu La (3,080m) and on to the Phobjikha Valley passing through dense forests and oak, rhododendron tress. In Bhutan, the passes are marked by a large Bhutanese Chorten and prayer flag. Dochula pass offers the most spectacular view over the high peaks of the eastern Himalayas on a clear day.
    
    After your consultation with the astrologer yesterday, today you will participate in a special prayer flag hoisting ceremony.
    
    Experience a very special joy of hoisting your personal prayer flag among the thousands fluttering in the wind, with the knowledge that your prayers now add to the universal song of silent prayers not just for the present but for years to come. It’s a moment that allows you to touch the timeless.
    
    The journey continues over the 3,050m mountain pass where on a clear day, the towering Himalayan peaks are clearly visible. The highway follows the scenic Dang Chhu before climbing through forests of bamboo and oak.
    
    Afternoon take a walk around Gangtey village and visit Gangtey Gompa, the only Nyingmapa monastery in this region. The village of Phobjikha lies a few km, down from the monastery, on the valley floor. This quiet, remote valley is the winter home of black necked cranes, which migrate from the arid plains of Tibet in the north, to pass the winter months in a milder climate. Explore Gangtey village and Phobjikha valley.
    
    Overnight at the hotel in Gangtey.`,
                },
                {
                    day_number: "5",
                    title: "GANGTEY",
                    description: `The valley of Gangtey is one of the most beautiful spots in Bhutan. The surprise of finding such a wide, flat valley without any trees after the hard climb through dense forests is augmented by an impression of vast space, and extremely rare experience in Bhutan where most of the valleys are tightly enclosed. A few kilometres beyond the Gangtey Monastery, on the valley floor lies the village of Phobjikha. This place is the winter home of black necked cranes that migrate from the arid plains in the north to pass winter in milder and lower climate. Phobjikha, at an altitude of 2900 m, falls under the district of Wangduephodrang and lies on the periphery of the Black Mountain National Park.
    
    Explore Phobjikha valley for Black Necked Cranes. (In winter only, Oct to mid-March)
    
    Later visit Gangtey Gompa. Perched on a small hill that rises from the valley floor, the Gangtey Monastery is the only Nyingmapa monastery on the western side of the Black Mountain’s and also the biggest Nyingmapa monastery in Bhutan. The Monastery is surrounded by a large village inhabited mainly by the families of the 140 Gomchens who take care of the Monastery.
    
    Overnight at the hotel in Gangtey.`,
                },
                {
                    day_number: "6",
                    title: "GANGTEY – TRONGSA",
                    description: `After breakfast drive to Trongsa crossing Pele-la pass (3300m/10830 ft). The Pela La (pass) is marked by a large white chorten prayer flags. There is an abrupt change in vegetation at this point, with mountain forest replaced by high altitude dwarf bamboo.
    
    Stop en route at Chendbji Chorten, patterned on Kathmandu’s Swayambhunath Stupa, with eyes panted at four cardinal points.
    
    Overnight at hotel in Trongsa.
    
    ** Road under construction – drive may take longer depending on working schedule and traffic.`,
                },
                {
                    day_number: "7",
                    title: "Trongsa – Bumthang (68kms, 2hrs)",
                    description: `After breakfast proceed to visit Trongsa Dzong, built in 1648 it was the seat of power over central and eastern Bhutan. Both the first and second Kings of Bhutan ruled the country from this ancient seat.
    
    Also visit Ta Dzong, recently opened fort in Trongsa. The Ta Dzong, a cylindrical stone structure rising five stories, was built in 1652 by Chogyal Minjur Tempa, after more than 350 years, it has been resurrected into a classy museum, that represents a tasteful blend of tradition and modernity.
    
    After sightseeing at Trongsa, continue drive to Bumthang across Yutong-la pass (3,400m/ 11,155 ft). The road winds steeply up to the pass from Trongsa, then runs down through coniferous forest into a wide, open cultivated valley known as the Chumey valley.
    
    En route stop at Chumey, a wide fertile valley where wheat, barley, potatoes and buckwheat are cultivated. Chumey is particularly known for its famous wool weaving called “Bumthang Yathra”.
    
    Overnight at hotel in Bumthang.`,
                },
                {
                    day_number: "8",
                    title: "Bumthang",
                    description: `After breakfast proceed for the tour of Bumthang valley.
    
    Bumthang is the general name given to combination of four valleys – Chumey, Choekhor, Tang and Ura with altitude varying from 2,600m to 4,000m. It is home to many of prominent Buddhist temples and monasteries.
    
    Visit Kurje Lhakhang, where the saint Padmasambhava subdued a local demon and left his body imprint on a rock, the Jambey Lhakhang (7th century temple), Tamshing Lhakhang (housing some of the oldest wall paintings in Bhutan) and Jakar Dzong (administrative center of the region). Stroll in the village, visit the little handicrafts shop at the entrance to the town, and perhaps take refreshments at a local restaurant.
    
    Afternoon take a short hike to Lhodrak Kharchhu Monastery.
    
    Located above the main town, about 3 km from Chamkhar town, the monastery was founded by Namkhai Nyingpo Rinpoche in 1984 who was recognized at a very young age by H.H. the 14th Dalai Lama and H.H. 16th Karmapa as the reincarnation of a Tibetan lama. The monastery has become part of an extensive effort to preserve and revitalize Tibetan culture. The monks’ regular curriculum include reading, memorizing the daily prayers, learning dharma dances, drawing mandalas, learning the melodies of sacred rituals, learning the use of ceremonial instruments and the art of making sacrificial objects, grammar, poetry, karika along with the basics of contemplation and instruction on the different stages of tantra.
    
    Overnight at Hotel in Bumthang.`,
                },
                {
                    day_number: "9",
                    title: "Bumthang – Day Visit Ura Valley (45kms, approx 1.5 hrs)",
                    description: `Bumthang to Ura is 45 km, about one-and-a-half-hour drive.
    
    To reach here, the road climbs to Jakar valley Bhutan amazingly open countryside, only occasionally running into forest. Large sheep pastures line the road up to 20 km behind the southern tip of the Tang valley. The route crosses Ura-la pass (3,600m) with a magnificent view of Mount. Gangkhar Puensum. Villages in Ura have clustered houses, which is quite unusual in Bhutan.
    
    Above Ura village (3,100m) is a new temple dedicated to Guru Rinpoche. Inaugurated in 1986, it contains a huge statue of the master and remarkable paintings of the cycle of his teachings. Since last 25 years Ura has been transformed from a marginal community to prosperous valley.
    
    Later in the day return to Bumthang. Evening at leisure.
    
    Overnight at Hotel in Bumthang.`,
                },
            ],
            important_information: [
                {
                    title: "Closing days of the monuments",
                    items: [
                        "Ta Dzong – Paro (national museum) : closed on Government Holidays",
                        "Tiger’s Nest (Taktsang) Monastery: Closed on Tuesday",
                        "National Library – Thimphu : closed on Sat, Sun & Government Holidays",
                        "Folk Heritage Museum – Thimphu : closed on Government Holidays and on Sat open from 10.30 a.m to 1.00 p.m and on Sun open from 11.30 a.m to 3.00 p.m",
                        "Textile Museum – Thimphu : Closed on Government Holidays and on Sun and on Sat open from 9.00 a.m to 4 p.m",
                        "Institute of Zorig Chusum (Arts & Crafts School) – Thimphu : Closed on Sun & Government Holidays and on Sat open from 10 a.m to 12 o’clock (also closed on winter mid Dec till mid-March & summer early June till end June, exact date of closing is only available a few weeks before the date)",
                    ],
                },
                {
                    title: "Bhutan visa",
                    items: [
                        "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better)",
                        "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                        "Remaining validity in passport after Bhutan tour must be min 6 month excluding travelling month",
                        "Multiple entry visa for Indian if you entering Bhutan from India and reinterring to India after Bhutan tour",
                        "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
                    ],
                },
            ],
        },
    },
    {
        img_url: "/img/tkirkgoz.jpg",
        name: "Ladakh Hemis festival tour",
        duration: "6 Nights • 8 Days",
        slug: "ladakh-hemis-festival-tour",
        tour: {
            bg_img_url: "/img/artosuraj.jpg",
            tour_name: "Spiritual Tour of India",
            duration: "9 days • 8 nights",
            location: "Amritsar, Punjab",
            min_age: "10+",
            tour_details: `A trip that gives you an opportunity to explore ancient monasteries and shrines of historical and archaeological interests in the heartland of four major towns of the dragon kingdom, Bhutan.\n\nHigh in the mysterious and majestic eastern Himalayas, nestled between Tibetan autonomous region of china and India, lies the small kingdom of Bhutan, increasingly renowned as one of the earth’s precious unspoiled spots. This magical place speaks Buddhist culture in the daily lives of its people and spectacular mountain scenery provides a backdrop to pristine forests and picturesque valleys. The breath-taking landscape is dotted with fluttering prayer flags, colourful farmhouses amidst terraced fields and impressive monasteries clinging to impossible cliffs. A memorable trip that stays with you for a lifetime.`,
            destinations_covered: [
                {
                    name: "THIMPHU",
                    description: `Unique city with unusual mixture of modern development alongside ancient traditions. The Kingdom’s capital city is the main center of commerce, religion and government in the country.`,
                },
                {
                    name: "PUNAKHA",
                    description: `Blessed with temperate climate Punakha has been inextricably linked with momentous occasions in Bhutanese history. One of the most majestic structures in the country is located here.`,
                },
                {
                    name: "PARO",
                    description: `Wide and verdant Paro valley is one of the most beautiful valleys in Bhutan with many sacred sites and historical buildings scattered through the area.`,
                },
                {
                    name: "GANGTEY",
                    description: `The valley of Gangtey is one of the most beautiful spots in Bhutan.`,
                },
                {
                    name: "TRONGSA",
                    description: `The vanguard of the warriors due to its strategic position in the country.`,
                },
                {
                    name: "BUMTHANG",
                    description: `Bumthang has an individuality that charms its visitors and separates it from other regions.`,
                },
            ],
            itinerary_outline: [
                {
                    day_number: "1",
                    description: "Arrive Paro & transfer to Thimpu",
                },
                {
                    day_number: "2",
                    description: "Thimpu",
                },
                {
                    day_number: "3",
                    description: "Thimpu",
                },
                {
                    day_number: "4",
                    description: "Thimpu, Gangtey",
                },
                {
                    day_number: "5",
                    description: "Gangtey",
                },
                {
                    day_number: "6",
                    description: "Gangtey – Trongsa",
                },
                {
                    day_number: "7",
                    description: "Trongsa – Bumthang (68kms, 2hrs)",
                },
                {
                    day_number: "8",
                    description: "Bumthang",
                },
                {
                    day_number: "9",
                    description:
                        "Bumthang – Day visit to Ura Valley (45 km, 1.5 hrs)",
                },
                {
                    day_number: "10",
                    description: "Bumthang – Punakha (200 km, 7 hrs drive)",
                },
                {
                    day_number: "11",
                    description: "Punakha",
                },
                {
                    day_number: "12",
                    description: "Punakha – Paro (125 km, 4 hrs drive)",
                },
                {
                    day_number: "13",
                    description: "Paro",
                },
                {
                    day_number: "14",
                    description: "Depart Paro",
                },
            ],
            detailed_itinerary: [
                {
                    day_number: "1",
                    title: "ARRIVE PARO BY DRUK AIR & TRANSFER TO THIMPHU",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "2",
                    title: "THIMPHU",
                    description: `After breakfast, sightseeing in Thimphu valley including visit to the following: the National Library, housing an extensive collection of priceless Buddhist manuscripts; the Institute for Zorig Chusum (commonly known as the Painting School) where students undergo a 6-year training course in Bhutan’s 13 traditional arts and crafts. Later visit Textile and Folk Heritage Museum, a fascinating testimony of the Bhutanese material culture and living traditions.
    
    After lunch, visit King’s Memorial Chorten continuously circumambulated by people, murmuring mantras and spinning their prayer wheels. Construction of this landmark was the idea of Bhutan’s third king, His Majesty Jigme Dorji Wangchuk (“the father of modern Bhutan”) who has wished to erect monument to world peace and prosperity. Completed in 1974 after his untimely death, it serves both as a memorial to the Late King and as a monument to peace.
    
    Further drive to visit Trashichhoedzong, “fortress of the glorious religion”. This is the center of government and religion, site of monarch’s throne room and seat of Je Khenpo or Chief Abbot. Built in 1641 by the political and religious unifier of Bhutan, Shabdrung Ngawang Namgyal, it was reconstructed in 1960s in traditional Bhutanese manner, without nails or architectural plans.
    
    Later drive to Buddha Point (Kuensel Phodrang). Located at a short drive from Thimphu city Centre, visitors can get a good overview of the Thimphu valley from the Buddha point (Kuensel Phodrang). You can pay your obeisance and offer prayers to the Buddha, the largest statue in the country and then walk around and take a glimpse of the valley.
    Evening can be spent strolling through the government-run Handicrafts Emporium and local crafts bazaar, to browse through example of Bhutan’s fine traditional arts. Here you can buy hand-woven textiles, thangkha paintings, masks, ceramics, slate and wood carvings, jewelry, interesting items made from local materials.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "3",
                    title: "THIMPHU",
                    description: `After breakfast at hotel, take a scenic walk to Tango monastery: This picturesque three-storey tower monastery was founded in 12th century and reconstructed in the 15th century by the fabled ‘Divine Madman’, an eccentric monk who meditated in a cave near the monastery.
    
    Situated north of Thimphu, one way it takes about 30 minutes’ drive and approx. one hour walk through shaded rhododendron forests to reach the monastery.
    
    Afternoon take a short drive towards northern end of town to visit Changangkha Lhakhang: It is a fortress like temple and monastic school perched on a ridge above Thimphu, south of Motithang. The temple was established in 12th century on a site chosen by Lama Phajo Drugom Shigpo, who came from Tibet. The central statue here is Chenrezig in a manifestation with 11 heads. From temple courtyard, there is fascinating view of Thimphu valley.
    
    On the way back into town visit Takin Preserve – the Takin is the national animal of Bhutan, and looks like a cross between a cow and a goat. Legend has it that the animal was created by the great Buddhist yogi, Drupa Kunley, and it can be found only in Bhutan and nearby areas. Also visit Anim Dratshang (nunnery) at Drubthob Goemba.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "4",
                    title: "THIMPHU – GANGTEY (150KMS, APPROX 5.5 HRS DRIVE)",
                    description: `After breakfast enjoy a dramatic drive over the high mountain pass of Dochu La (3,080m) and on to the Phobjikha Valley passing through dense forests and oak, rhododendron tress. In Bhutan, the passes are marked by a large Bhutanese Chorten and prayer flag. Dochula pass offers the most spectacular view over the high peaks of the eastern Himalayas on a clear day.
    
    After your consultation with the astrologer yesterday, today you will participate in a special prayer flag hoisting ceremony.
    
    Experience a very special joy of hoisting your personal prayer flag among the thousands fluttering in the wind, with the knowledge that your prayers now add to the universal song of silent prayers not just for the present but for years to come. It’s a moment that allows you to touch the timeless.
    
    The journey continues over the 3,050m mountain pass where on a clear day, the towering Himalayan peaks are clearly visible. The highway follows the scenic Dang Chhu before climbing through forests of bamboo and oak.
    
    Afternoon take a walk around Gangtey village and visit Gangtey Gompa, the only Nyingmapa monastery in this region. The village of Phobjikha lies a few km, down from the monastery, on the valley floor. This quiet, remote valley is the winter home of black necked cranes, which migrate from the arid plains of Tibet in the north, to pass the winter months in a milder climate. Explore Gangtey village and Phobjikha valley.
    
    Overnight at the hotel in Gangtey.`,
                },
                {
                    day_number: "5",
                    title: "GANGTEY",
                    description: `The valley of Gangtey is one of the most beautiful spots in Bhutan. The surprise of finding such a wide, flat valley without any trees after the hard climb through dense forests is augmented by an impression of vast space, and extremely rare experience in Bhutan where most of the valleys are tightly enclosed. A few kilometres beyond the Gangtey Monastery, on the valley floor lies the village of Phobjikha. This place is the winter home of black necked cranes that migrate from the arid plains in the north to pass winter in milder and lower climate. Phobjikha, at an altitude of 2900 m, falls under the district of Wangduephodrang and lies on the periphery of the Black Mountain National Park.
    
    Explore Phobjikha valley for Black Necked Cranes. (In winter only, Oct to mid-March)
    
    Later visit Gangtey Gompa. Perched on a small hill that rises from the valley floor, the Gangtey Monastery is the only Nyingmapa monastery on the western side of the Black Mountain’s and also the biggest Nyingmapa monastery in Bhutan. The Monastery is surrounded by a large village inhabited mainly by the families of the 140 Gomchens who take care of the Monastery.
    
    Overnight at the hotel in Gangtey.`,
                },
                {
                    day_number: "6",
                    title: "GANGTEY – TRONGSA",
                    description: `After breakfast drive to Trongsa crossing Pele-la pass (3300m/10830 ft). The Pela La (pass) is marked by a large white chorten prayer flags. There is an abrupt change in vegetation at this point, with mountain forest replaced by high altitude dwarf bamboo.
    
    Stop en route at Chendbji Chorten, patterned on Kathmandu’s Swayambhunath Stupa, with eyes panted at four cardinal points.
    
    Overnight at hotel in Trongsa.
    
    ** Road under construction – drive may take longer depending on working schedule and traffic.`,
                },
                {
                    day_number: "7",
                    title: "Trongsa – Bumthang (68kms, 2hrs)",
                    description: `After breakfast proceed to visit Trongsa Dzong, built in 1648 it was the seat of power over central and eastern Bhutan. Both the first and second Kings of Bhutan ruled the country from this ancient seat.
    
    Also visit Ta Dzong, recently opened fort in Trongsa. The Ta Dzong, a cylindrical stone structure rising five stories, was built in 1652 by Chogyal Minjur Tempa, after more than 350 years, it has been resurrected into a classy museum, that represents a tasteful blend of tradition and modernity.
    
    After sightseeing at Trongsa, continue drive to Bumthang across Yutong-la pass (3,400m/ 11,155 ft). The road winds steeply up to the pass from Trongsa, then runs down through coniferous forest into a wide, open cultivated valley known as the Chumey valley.
    
    En route stop at Chumey, a wide fertile valley where wheat, barley, potatoes and buckwheat are cultivated. Chumey is particularly known for its famous wool weaving called “Bumthang Yathra”.
    
    Overnight at hotel in Bumthang.`,
                },
                {
                    day_number: "8",
                    title: "Bumthang",
                    description: `After breakfast proceed for the tour of Bumthang valley.
    
    Bumthang is the general name given to combination of four valleys – Chumey, Choekhor, Tang and Ura with altitude varying from 2,600m to 4,000m. It is home to many of prominent Buddhist temples and monasteries.
    
    Visit Kurje Lhakhang, where the saint Padmasambhava subdued a local demon and left his body imprint on a rock, the Jambey Lhakhang (7th century temple), Tamshing Lhakhang (housing some of the oldest wall paintings in Bhutan) and Jakar Dzong (administrative center of the region). Stroll in the village, visit the little handicrafts shop at the entrance to the town, and perhaps take refreshments at a local restaurant.
    
    Afternoon take a short hike to Lhodrak Kharchhu Monastery.
    
    Located above the main town, about 3 km from Chamkhar town, the monastery was founded by Namkhai Nyingpo Rinpoche in 1984 who was recognized at a very young age by H.H. the 14th Dalai Lama and H.H. 16th Karmapa as the reincarnation of a Tibetan lama. The monastery has become part of an extensive effort to preserve and revitalize Tibetan culture. The monks’ regular curriculum include reading, memorizing the daily prayers, learning dharma dances, drawing mandalas, learning the melodies of sacred rituals, learning the use of ceremonial instruments and the art of making sacrificial objects, grammar, poetry, karika along with the basics of contemplation and instruction on the different stages of tantra.
    
    Overnight at Hotel in Bumthang.`,
                },
                {
                    day_number: "9",
                    title: "Bumthang – Day Visit Ura Valley (45kms, approx 1.5 hrs)",
                    description: `Bumthang to Ura is 45 km, about one-and-a-half-hour drive.
    
    To reach here, the road climbs to Jakar valley Bhutan amazingly open countryside, only occasionally running into forest. Large sheep pastures line the road up to 20 km behind the southern tip of the Tang valley. The route crosses Ura-la pass (3,600m) with a magnificent view of Mount. Gangkhar Puensum. Villages in Ura have clustered houses, which is quite unusual in Bhutan.
    
    Above Ura village (3,100m) is a new temple dedicated to Guru Rinpoche. Inaugurated in 1986, it contains a huge statue of the master and remarkable paintings of the cycle of his teachings. Since last 25 years Ura has been transformed from a marginal community to prosperous valley.
    
    Later in the day return to Bumthang. Evening at leisure.
    
    Overnight at Hotel in Bumthang.`,
                },
            ],
            important_information: [
                {
                    title: "Closing days of the monuments",
                    items: [
                        "Ta Dzong – Paro (national museum) : closed on Government Holidays",
                        "Tiger’s Nest (Taktsang) Monastery: Closed on Tuesday",
                        "National Library – Thimphu : closed on Sat, Sun & Government Holidays",
                        "Folk Heritage Museum – Thimphu : closed on Government Holidays and on Sat open from 10.30 a.m to 1.00 p.m and on Sun open from 11.30 a.m to 3.00 p.m",
                        "Textile Museum – Thimphu : Closed on Government Holidays and on Sun and on Sat open from 9.00 a.m to 4 p.m",
                        "Institute of Zorig Chusum (Arts & Crafts School) – Thimphu : Closed on Sun & Government Holidays and on Sat open from 10 a.m to 12 o’clock (also closed on winter mid Dec till mid-March & summer early June till end June, exact date of closing is only available a few weeks before the date)",
                    ],
                },
                {
                    title: "Bhutan visa",
                    items: [
                        "We require colour scan of passport for visa at least 20 days prior to travel date (sooner the better)",
                        "Colour scan or take picture by your mobile phone of the passport page with face image and passport number & email us in Jpeg/pdf format.",
                        "Remaining validity in passport after Bhutan tour must be min 6 month excluding travelling month",
                        "Multiple entry visa for Indian if you entering Bhutan from India and reinterring to India after Bhutan tour",
                        "No passport size photo/any pictures / any visa form etc. required for visa – just clear/readable copy of passport copy in colour.",
                    ],
                },
            ],
        },
    },
];
