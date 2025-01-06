import { Footer } from "@/components/custom/footer";
import { Meta } from "@/components/custom/meta";
import { Navbar } from "@/components/custom/navbar";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface FAQProps {}

const FAQ: React.FC<FAQProps> = ({}) => {
    return (
        <div>
            <Navbar />
            <Meta title="Frequently Asked Questions – Noble Travels" />
            <div
                className="relative w-full"
                style={{
                    height: "30vh",
                    backgroundImage: `url("/img/aryalprakash.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-60"
                    style={{ zIndex: 1 }}
                />
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-1 w-full md:px-4"
                    style={{ zIndex: 2 }}
                >
                    <h1 className="text-5xl md:text-7xl mb-4 mx-auto modesto w-full md:max-w-lg">
                        FREQUENTLY ASKED QUESTIONS
                    </h1>
                </div>
            </div>
            <div className="mx-auto max-w-[76rem] gap-x-10 my-10 px-7 md:px-10 flex flex-col md:flex-row md:items-start">
                <div className="w-full">
                    <h1 className="text-5xl md:text-4xl mb-4 mx-auto text-navy modesto w-full md:max-w-3xl">
                        FOR INDIAN DESTINATIONS
                    </h1>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={`item-1`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    What makes your itineraries unique compared
                                    to other travel companies offering tours to
                                    India?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    We specialize in curated,
                                    off-the-beaten-path itineraries that
                                    showcase the rich cultural, natural, and
                                    historical diversity of India. Our trips are
                                    carefully designed to cater to different
                                    types of travelers, from adventure
                                    enthusiasts to those looking for luxury
                                    experiences. Plus, we provide local insight
                                    and authentic experiences that go beyond
                                    typical tourist spots.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={`item-2`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    How can American travel agents book trips
                                    for their clients in India through your
                                    company?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Since we have an office based in the USA,
                                    American travel agents can easily book
                                    directly through our local team, providing
                                    you with seamless service, timely
                                    communication, and competitive rates. Our
                                    local office ensures that agents can
                                    coordinate bookings and handle inquiries
                                    without the need for international calls or
                                    delays.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={`item-3`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    What types of itineraries do you offer for
                                    Indian destinations?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    We offer a wide range of itineraries,
                                    including wildlife safaris, cultural tours,
                                    heritage trails, luxury experiences,
                                    spiritual journeys, and adventure
                                    expeditions. Our 28 featured itineraries
                                    span across iconic destinations like Delhi,
                                    Jaipur, Agra, Kerala, Rajasthan, and remote,
                                    offbeat locations such as Spiti Valley,
                                    Ladakh, and the North-East.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={`item-4`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    Are your tours customizable for clients with
                                    specific interests or needs?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Yes, absolutely! Our itineraries can be
                                    fully customized to suit the specific
                                    interests and preferences of your clients.
                                    Whether they are looking for family-friendly
                                    tours, honeymoon packages, wellness
                                    retreats, or luxury stays, we can tailor the
                                    experience to match their needs.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={`item-5`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    What kind of support can American travel
                                    agents expect from your team?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    We provide end-to-end support, including
                                    detailed itinerary planning, personalized
                                    consultations, and on-the-ground assistance
                                    throughout the tour. Our team in the USA is
                                    available for immediate assistance, and our
                                    team in India ensures that everything runs
                                    smoothly during the tour, from
                                    transportation to accommodations and
                                    excursions.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={`item-6`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    What is the typical group size for your
                                    tours?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    We offer both private and small group tours.
                                    Group tours typically range from 6 to 12
                                    people, ensuring an intimate and
                                    personalized experience, while private tours
                                    can be arranged for families, friends, or
                                    corporate groups. We believe in offering a
                                    more tailored, comfortable travel experience
                                    rather than overcrowded buses.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-7`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    How do you ensure the safety and comfort of
                                    travelers in India?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Traveler safety is our top priority. We only
                                    work with trusted, certified drivers and
                                    guides who are experienced in handling
                                    international tourists. We ensure that
                                    accommodations meet international standards,
                                    and we take care of every detail—from
                                    airport transfers to emergency contacts—so
                                    your clients feel comfortable throughout
                                    their journey.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-8`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    What is the process for American agents to
                                    receive commissions or discounts for
                                    bookings?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    We offer competitive commissions for every
                                    booking made through your agency. Our
                                    commissions are structured to reward both
                                    agents and their clients, with special
                                    offers available for group bookings. You’ll
                                    receive clear details on commission rates
                                    and payout processes upon partnership
                                    initiation.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-9`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    Do you offer any special promotions or
                                    discounts for American clients?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Yes! We offer seasonal promotions,
                                    early-bird discounts, and special offers for
                                    group bookings. We also provide customized
                                    packages for specific events such as
                                    festivals, weddings, and corporate retreats
                                    in India. These can be shared with your
                                    clients to enhance the appeal of our tours.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value={`item-10`}
                            className="border-none"
                        >
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    Can American travel agents visit India to
                                    inspect the tours themselves?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    We welcome American agents to visit India
                                    for familiarization trips (FAM trips). These
                                    trips allow you to experience our
                                    itineraries firsthand and provide a better
                                    understanding of the destinations and
                                    services we offer. Contact our office to
                                    learn more about our FAM trip opportunities.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value={`item-11`}
                            className="border-none"
                        >
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    How do you handle customer service while
                                    travelers are in India?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Our team in India is available 24/7 for
                                    on-ground support. We provide your clients
                                    with local assistance in case of any
                                    emergencies, travel changes, or adjustments.
                                    Our dedicated customer service ensures that
                                    any issues are resolved quickly, making
                                    their trip as smooth as possible.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value={`item-12`}
                            className="border-none"
                        >
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    Are there any special visa or entry
                                    requirements for U.S. citizens traveling to
                                    India?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    U.S. citizens need a valid visa to enter
                                    India. We provide detailed information and
                                    assistance on visa application processes. We
                                    also offer recommendations for obtaining an
                                    e-Visa, which simplifies the process for
                                    most travelers.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value={`item-13`}
                            className="border-none"
                        >
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    How do you handle group tours, especially
                                    for corporate clients or large families?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    We specialize in organizing group tours,
                                    whether for corporate retreats, family
                                    vacations, or large educational groups. From
                                    custom itineraries to group-friendly
                                    accommodations and transportation, we ensure
                                    that every aspect of the trip is organized,
                                    making it hassle-free for the American
                                    agent.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value={`item-14`}
                            className="border-none"
                        >
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    Can you cater to clients interested in
                                    luxury and high-end travel experiences in
                                    India?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Yes, we offer premium travel experiences
                                    that include luxury accommodations, private
                                    guides, gourmet dining, and exclusive
                                    activities. We collaborate with five-star
                                    hotels, boutique properties, and luxury
                                    resorts to ensure an unforgettable high-end
                                    experience for your clients.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value={`item-15`}
                            className="border-none"
                        >
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    How do you ensure responsible and
                                    sustainable tourism practices in India?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    We are committed to responsible tourism,
                                    working with eco-friendly accommodations and
                                    supporting conservation efforts in national
                                    parks and wildlife sanctuaries. We encourage
                                    our travelers to respect local cultures,
                                    minimize their environmental footprint, and
                                    contribute to local communities through
                                    sustainable practices.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="w-full mt-14 md:mt-0">
                    <h1 className="text-5xl md:text-4xl mb-2.5 mx-auto text-navy modesto w-full md:max-w-3xl">
                        FOR SPECIAL TOURS
                    </h1>
                    {/* <p className="text-smol mb-6 text-black font-medium">
                        These kind of tours include itineraries for Senior
                        Citizens, Retirees, Handicapped Travelers, University
                        Tours, MICE Groups
                    </p> */}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={`item-1`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    Do you offer customized itineraries for
                                    senior citizens or retirees looking for a
                                    more relaxed pace?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Yes, we understand that senior citizens and
                                    retirees often prefer a slower pace with
                                    less physically demanding activities. Our
                                    specially designed itineraries for this
                                    demographic focus on comfort, scenic beauty,
                                    cultural exploration, and relaxation. We
                                    ensure that transportation, accommodations,
                                    and excursions are tailored to their needs
                                    for an enjoyable and stress-free experience.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-2`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    How do you accommodate travelers with
                                    physical disabilities or mobility
                                    challenges?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    We are fully equipped to cater to travelers
                                    with disabilities. Our tours are designed to
                                    include accessible accommodations,
                                    transportation with wheelchair-friendly
                                    vehicles, and guides who are trained to
                                    assist individuals with special mobility
                                    needs. We work with local partners to ensure
                                    that key attractions and sites are
                                    accessible, providing an inclusive travel
                                    experience for all.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-3`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    Do you have packages specifically for
                                    university or student groups?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Yes, we offer educational tours that are
                                    perfect for universities, schools, and
                                    student groups. These itineraries blend
                                    cultural learning, history, and adventure
                                    with a focus on safe and budget-friendly
                                    accommodations. We also provide specialized
                                    educational programs and tours in historical
                                    sites, national parks, and cultural
                                    institutions, designed to enrich the
                                    students' learning experience.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-4`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    What type of services do you provide for
                                    MICE (Meetings, Incentives, Conferences, and
                                    Events) groups?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Our MICE services are tailored to the
                                    specific needs of corporate groups. We
                                    assist with everything from venue selection
                                    and event coordination to transportation,
                                    team-building activities, and post-event
                                    leisure tours. Whether it's a large
                                    conference, an incentive trip, or a
                                    corporate retreat, we manage all logistical
                                    details to ensure a smooth and successful
                                    experience for both organizers and
                                    attendees.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-5`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    Can you help organize incentive tours for
                                    corporate groups looking to reward their
                                    employees or clients?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Absolutely! We specialize in creating
                                    exclusive incentive tours that offer
                                    memorable experiences, from luxury stays at
                                    five-star resorts to private cultural tours
                                    and adventurous activities. We work closely
                                    with corporate clients to design itineraries
                                    that motivate, inspire, and reward their
                                    teams or clients in unique, personalized
                                    ways.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-6`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    Do you offer wellness tours for seniors or
                                    retirees looking for relaxation and
                                    rejuvenation?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Yes, we offer wellness retreats specifically
                                    tailored for seniors and retirees. These
                                    tours focus on health, relaxation, and
                                    well-being, with options for yoga,
                                    meditation, Ayurvedic treatments, and spa
                                    therapies. We ensure that all wellness
                                    destinations are chosen for their
                                    tranquility, comfort, and accessibility,
                                    providing a rejuvenating experience for all
                                    participants.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-7`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    How do you ensure the safety of senior
                                    travelers during group tours or solo trips?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    The safety and well-being of our senior
                                    travelers are a top priority. We ensure that
                                    every aspect of the trip—from accommodation
                                    to transportation and activities—is
                                    comfortable and safe. Our expert guides are
                                    trained to cater to the needs of senior
                                    citizens, and we provide 24/7 emergency
                                    support and on-the-ground assistance,
                                    including medical facilities and specialized
                                    transport if needed.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-8`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    Can your company cater to dietary
                                    restrictions or preferences for special
                                    groups, such as senior citizens or
                                    individuals with medical conditions?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Yes, we can cater to a wide variety of
                                    dietary needs, including low-sodium,
                                    diabetic-friendly, vegetarian, vegan,
                                    gluten-free, and allergy-sensitive meals. We
                                    work closely with hotels, restaurants, and
                                    local food providers to ensure that all
                                    dietary preferences and restrictions are
                                    met, ensuring a safe and enjoyable dining
                                    experience for all travelers.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-9`} className="border-none">
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    What type of special activities or
                                    experiences do you offer for senior
                                    citizens?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Our senior-friendly tours include scenic
                                    drives, cultural performances, boat rides,
                                    heritage walks, and visits to historical
                                    monuments that do not require strenuous
                                    physical exertion. Additionally, we arrange
                                    interactive workshops such as pottery
                                    making, cooking classes, or visits to local
                                    artisans, which provide an enriching
                                    experience without the need for strenuous
                                    activity.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value={`item-10`}
                            className="border-none"
                        >
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    Are your MICE tours customizable based on
                                    the size and type of the group?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Yes, we offer fully customizable MICE
                                    packages tailored to the size and objectives
                                    of your corporate group. Whether it’s a
                                    small executive meeting or a large-scale
                                    conference, we can organize everything from
                                    meeting rooms, audio-visual equipment, and
                                    catering services to team-building
                                    activities and local sightseeing. Our focus
                                    is on providing a seamless and professional
                                    experience for corporate groups.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value={`item-11`}
                            className="border-none"
                        >
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    How do you ensure accessibility for
                                    handicapped travelers during sightseeing and
                                    activities in India?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    We take special care to select attractions,
                                    hotels, and transport options that are
                                    wheelchair-accessible. Our itineraries are
                                    designed to avoid any activities that may
                                    pose physical challenges, and we ensure that
                                    every location visited has the necessary
                                    facilities for handicapped travelers. Our
                                    local team is well-trained to assist with
                                    any mobility needs, ensuring a smooth and
                                    enjoyable trip.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value={`item-12`}
                            className="border-none"
                        >
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    What is the best way for universities to
                                    organize educational or cultural tours with
                                    your company?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    We offer tailored educational tours that
                                    meet the learning objectives of university
                                    programs. From visits to UNESCO World
                                    Heritage sites and historical landmarks to
                                    engaging in community-based programs, we
                                    provide specialized itineraries that focus
                                    on cultural immersion, historical education,
                                    and environmental sustainability. Our team
                                    works closely with university coordinators
                                    to align the tour with the academic
                                    curriculum and specific student needs.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value={`item-13`}
                            className="border-none"
                        >
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    Can you handle both small and large group
                                    tours for seniors or MICE groups?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Yes, we handle both small and large groups,
                                    providing personalized service regardless of
                                    the size of the party. For senior groups, we
                                    ensure that the pace and logistics are
                                    manageable, while for MICE groups, we offer
                                    tailored services such as customized
                                    conference setups, gala dinners, and
                                    team-building activities. Our flexibility
                                    ensures that each group’s specific
                                    requirements are met.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value={`item-14`}
                            className="border-none"
                        >
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    What kind of accommodations do you offer for
                                    senior citizens or handicapped travelers?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    We carefully select accommodations that are
                                    both senior- and handicap-friendly, ensuring
                                    that the hotels and resorts offer amenities
                                    such as elevators, ramps, grab bars in
                                    bathrooms, and easy access to dining areas.
                                    For senior travelers, we also prioritize
                                    hotels with tranquil surroundings,
                                    comfortable rooms, and close proximity to
                                    sightseeing locations to reduce travel time
                                    and enhance convenience.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value={`item-15`}
                            className="border-none"
                        >
                            <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                <span className="text-sm text-black pr-2">
                                    Are there special discounts or offers for
                                    senior citizens or student groups?
                                </span>
                                <div className="ml-auto mr-0"></div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                    Yes, we offer discounts for senior citizens,
                                    retirees, and student groups. We understand
                                    the importance of budget-friendly travel
                                    options, so we offer special pricing for
                                    these demographics, making it easier for
                                    your clients to experience India. Contact us
                                    for more information on available discounts
                                    and packages for these groups.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="border-t border-gray-300 pt-3 border-dashed max-w-[76rem] mb-10 px-10 mx-auto">
                <p className="text-xs text-gray-500">
                    Note: This contains only a general description and/or
                    information of services and is not a statement of contract.
                    All services are subject to all written contract, agreements
                    and terms and conditions agreed by the company under the
                    Delhi (India) legal jurisdiction. For further information,
                    contact your local travel agent or nearest Noble Travels
                    office.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default FAQ;
