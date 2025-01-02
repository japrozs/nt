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
            location: "Amritsar, Punjab",
            country: "India",
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
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "10",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "11",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "12",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "13",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "14",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
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
        img_url: "/img/madurai.jpg",
        name: "South India with Madurai",
        duration: "12 Nights • 13 Days",
        slug: "south-india-with-madurai",
        tour: {
            location: "Amritsar, Punjab",
            country: "India",
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
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "10",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "11",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "12",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "13",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "14",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
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
        img_url: "/img/tkirkgoz.jpg",
        name: "Ladakh Hemis festival tour",
        duration: "6 Nights • 8 Days",
        slug: "ladakh-hemis-festival-tour",
        tour: {
            location: "Amritsar, Punjab",
            country: "India",
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
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "10",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "11",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "12",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "13",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "14",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
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
        img_url: "/img/tkirkgoz.jpg",
        name: "Ladakh Bike Tour",
        duration: "8 nights • 9 days",
        slug: "ladakh-bike-tour",
        tour: {
            location: "Amritsar, Punjab",
            country: "India",
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
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "10",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "11",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "12",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "13",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
                },
                {
                    day_number: "14",
                    title: "Arrive Paro & transfer to Thimpu",
                    description: `The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom. Bhutan’s first gift to you as you disembark from the aircraft will be cool, clean fresh mountain air. After immigration formalities and baggage collection, you will be met by our representative, and afterwards drive to Thimphu, the capital town of Bhutan.
    
    On arrival, in Thimphu check-into the hotel.
    
    The capital town of Bhutan and the centre of government, religion and commerce, Thimphu is a unique city with unusual mixture of modern development alongside ancient traditions. With the population of about 90,000 it is perhaps still the world’s only capital city without a traffic light.
    
    Evening an exploratory walk around Thimphu Main Street and market area.
    
    Overnight at the hotel in Thimphu.`,
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
];
