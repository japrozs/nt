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
import { GiStairsGoal } from "react-icons/gi";
import { HiArrowRight, HiOutlineEye } from "react-icons/hi";
import { LuTarget } from "react-icons/lu";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
    return (
        <div>
            <Navbar />
            <Meta title="About Us – Noble Travels" />
            <div
                className="relative w-full"
                style={{
                    height: "40vh",
                    minHeight: "250px",
                    backgroundImage: `url("/img/suketdedhia.jpg")`,
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
                    <h1 className="text-5xl md:text-7xl mb-4 mx-auto modesto w-full md:max-w-sm">
                        ABOUT US
                    </h1>
                </div>
            </div>
            <div className="mx-auto max-w-3xl my-10 px-7 md:px-10">
                {/* <p className="text-2xl font-bold mb-3 flex items-center">
                    About us
                </p> */}
                <p className="text-gray-800 font-medium text-smol mb-3">
                    We are pleased to introduce Noble Travels LLC, a leading
                    travel company based in Atlanta,USA, specialising in
                    crafting exceptional and authentic travel experiences across
                    the diverse landscapes of India, middle east and Africa.
                    With a deep understanding of our rich culture, heritage, and
                    local nuances, we are dedicated to providing international
                    travelers with unforgettable journeys throughout the
                    country.
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Noble Travels was established in 1996 in India, and we have
                    been building our reputation for excellence ever since –
                    winning trust and recognition of our thousands of
                    international and Indian clients with our outstanding
                    service.We are a company with a India-wide network and
                    dedicated teams that specialise in every aspect of travel.
                    Our company have our own service offices in USA , India,
                    UAE, Egypt, Saudi Arabia and strategic associate alliances
                    in Nepal, Bhutan, Sri Lanka. At Noble Travels, we make
                    customer service and traveler satisfaction priority. We are
                    dedicated to ensuring that every step of the journey, down
                    to the last detail, is taken care of – with in-depth product
                    knowledge and range of services offered, highly trained and
                    motivated teams, an exclusive panel of knowledgeable guides,
                    and a Wi-Fi-equipped modern transport fleet. Our consistent
                    performance is made possible by our constant efforts to
                    enhance and elevate our service standards.
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Our client list includes higher dignitaries like President,
                    Vice President, Foreign Ministers, Ambassadors, diplomats of
                    many European nations. In our corporate client bouquet we
                    have the CEOs, Managing Directors, Directors & staff members
                    of many national and international companies including few
                    of from the USA. We feel proud to mention here that Noble
                    Travels is the preferred travel partner of Indian Olympic
                    Association, Indian national cricket team members and
                    blessed to handle the travel of many world renowned
                    Spiritual Gurus & masters in USA & India.
                </p>
                {/* <p className="text-gray-800 font-medium text-smol mb-3">
                    We currently have over 250 travel associates & suppliers
                    operating worldwide; supported by our experienced and
                    professional staff at our company’s head office and branch
                    office locations. Our customers consistently rate us as one
                    of the trusted & reliable travel supplier when it comes to
                    customer service.
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    We offer the best travel services in the industry – it's
                    simply a fact. No other travel company safeguards your money
                    the way we do. Whether you’re booking a hotel, transfer,
                    airport parking, or even a budget airline, every dollar you
                    spend with us is fully protected. We believe your time
                    should be spent looking forward to your business trip or
                    vacation, not stressing about the security of your money.
                </p> */}
            </div>
            <div className="bg-gray-50 flex items-stretch">
                <div className="flex flex-col justify-center w-full md:w-1/2 p-7 md:p-10 border-y border-gray-200 border-dashed">
                    {/* <p className="text-2xl font-bold mb-3 flex items-center">
                        Our values
                    </p> */}
                    <p className="text-5xl modesto text-navy mb-5">
                        HOW WE WORK
                    </p>
                    <p className="text-gray-800 font-medium text-smol mb-3">
                        We don’t just plan trips, we create journeys. Here’s how
                        we do it:
                    </p>
                    <p className="text-gray-800 font-medium text-smol mb-3">
                        <b>We listen first</b>: Our specialists take the time to
                        understand you and what inspires your adventure,
                        ensuring it’s all about your unique vision.
                    </p>
                    <p className="text-gray-800 font-medium text-smol mb-3">
                        <b>Tailored Just for You</b>: Every detail of your trip
                        is designed specifically around your desires, from the
                        purpose of your journey to the perfect itinerary.
                    </p>
                    <p className="text-gray-800 font-medium text-smol mb-3">
                        <b>Meticulous Attention to Detail</b>: We handpick
                        guides who share your passions and recommend hidden
                        gems, like boutique hotels, to elevate your experience.
                    </p>
                    <p className="text-gray-800 font-medium text-smol mb-3">
                        <b>Support Every Step of the Way</b>: Whether day or
                        night, you’ll have access to our dedicated team and
                        local partners for assistance from the moment you land
                        until you return home.
                    </p>
                </div>

                <img
                    src={"/img/ammy-singh.jpg"}
                    className="hidden md:block w-1/2 max-h-[30rem] object-cover justify-center self-center"
                />
            </div>
            <div className="bg-gray-50 flex items-stretch">
                <img
                    src={"/img/axp-photography.jpg"}
                    className="hidden md:block w-1/2 max-h-[30rem] object-cover justify-center self-center"
                />
                <div className="flex flex-col justify-center w-full md:w-1/2 p-7 md:p-10 border-b border-gray-200 border-dashed">
                    {/* <p className="text-2xl font-bold mb-3 flex items-center">
                        Our services
                    </p> */}
                    <p className="text-5xl modesto text-navy mb-5">
                        OUR SERVICES
                    </p>
                    <p className="text-gray-800 font-medium text-smol mb-3">
                        Noble Travels is specialized in travel experiences, and
                        prides itself on renowned customer service, product
                        quality, and highly customizable tour planning. With a
                        varied collection of tried & tested privately guided
                        tour programs to escorted group tours, hotel booking,
                        flight tickets, Hotel booking, event organization,
                        business trips, Honeymoon packages, beach stay, Wildlife
                        tours, Adventure tours, Historical / cultural tours and
                        bespoke tour designing. Our tours have been carefully
                        designed to ensure that every step of it, stimulates
                        your mind, enriches your experience. We understand that
                        every traveller is different and there is therefore no
                        ‘one-tour-fits-all’ formula. We take pride in
                        transforming each itinerary into unique experience to
                        remember and cherish your memories. In short, Noble
                        Travels is your one-stop solution for all your
                        travel-related needs.
                    </p>
                    <a href="/contact">
                        <button className="ml-auto mr-0 bg-black/90 hover:bg-black transition mt-2 flex items-center mx-auto text-white rounded-full py-2 px-6 font-medium">
                            Get a quote
                            <HiArrowRight className="ml-2.5 text-sm" />
                        </button>
                    </a>
                </div>
            </div>
            <div className="border-b border-gray-200 border-dashed text-center py-16">
                <div className="flex flex-wrap items-start justify-center space-y-16 md:space-y-0 md:space-x-16">
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <HiOutlineEye className="text-7xl text-blue-500" />
                        <p className="text-2xl font-bold mb-3">Vision</p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            We create the journey of a lifetime, every single
                            time.
                        </p>
                    </div>
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <LuTarget className="text-6xl mb-2 text-blue-500" />
                        <p className="text-2xl font-bold mb-3">Mission</p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            To create unforgettable, personalized travel
                            experiences
                        </p>
                    </div>
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <GiStairsGoal className="text-6xl mb-2 text-blue-500" />
                        <p className="text-2xl font-bold mb-3">Goals</p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            Offer journeys that go beyond expectations,
                            fostering lasting memories
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-3xl mt-10 mb-10 md:mb-20 px-7 md:px-0">
                {/* <p className="text-2xl font-bold mb-3 flex items-center">
				Things that make us unique
                </p> */}
                <p className="text-5xl uppercase modesto text-navy mb-5">
                    Things that make us unique
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Our History – For over 25 years, we’ve been crafting
                    journeys that allow you to see the world in the most
                    meaningful way—your way. We believe the best trips are those
                    as unique as you, designed to create a lifetime of
                    unforgettable memories.
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    <b>Local, true experts</b>: Our passion for travel goes
                    beyond just visiting destinations—it’s about living and
                    experiencing them through the eyes of those who call them
                    home. With a team of local experts, we bring you authentic
                    experiences and insider knowledge to craft a journey that
                    reflects your unique vision. Every detail is thoughtfully
                    designed to ensure your adventure is as rich and
                    unforgettable as the destinations themselves.
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    <b>Responsible Travel </b>: Your journey, your
                    choices—crafted with sustainability in mind. Whether it’s
                    staying at eco-conscious lodges, opting for a scenic train
                    ride, or supporting local communities, we ensure every
                    decision aligns with your values.
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    <b>Meaningful Experiences </b>: You’ll experience
                    destinations through the eyes of passionate local guides,
                    offering deep insights into their communities. We handpick
                    accommodations that are not just places to stay, but
                    experiences in themselves.
                </p>
            </div>
            <div className="max-w-3xl mx-auto my-16 px-3 md:px-0">
                <p className="text-3xl font-bold pl-2 mb-4">
                    Frequently asked questions
                </p>
                {/* <p className="text-smol mb-6 text-black font-medium">
                        These kind of tours include itineraries for Senior
                        Citizens, Retirees, Handicapped Travelers, University
                        Tours, MICE Groups
                    </p> */}
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`item-1`} className="border-none">
                        <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                            <span className="text-sm text-black pr-2">
                                Do you offer customized itineraries for senior
                                citizens or retirees looking for a more relaxed
                                pace?
                            </span>
                            <div className="ml-auto mr-0"></div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                Yes, we understand that senior citizens and
                                retirees often prefer a slower pace with less
                                physically demanding activities. Our specially
                                designed itineraries for this demographic focus
                                on comfort, scenic beauty, cultural exploration,
                                and relaxation. We ensure that transportation,
                                accommodations, and excursions are tailored to
                                their needs for an enjoyable and stress-free
                                experience.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value={`item-2`} className="border-none">
                        <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                            <span className="text-sm text-black pr-2">
                                How do you accommodate travelers with physical
                                disabilities or mobility challenges?
                            </span>
                            <div className="ml-auto mr-0"></div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                We are fully equipped to cater to travelers with
                                disabilities. Our tours are designed to include
                                accessible accommodations, transportation with
                                wheelchair-friendly vehicles, and guides who are
                                trained to assist individuals with special
                                mobility needs. We work with local partners to
                                ensure that key attractions and sites are
                                accessible, providing an inclusive travel
                                experience for all.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value={`item-3`} className="border-none">
                        <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                            <span className="text-sm text-black pr-2">
                                Do you have packages specifically for university
                                or student groups?
                            </span>
                            <div className="ml-auto mr-0"></div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                Yes, we offer educational tours that are perfect
                                for universities, schools, and student groups.
                                These itineraries blend cultural learning,
                                history, and adventure with a focus on safe and
                                budget-friendly accommodations. We also provide
                                specialized educational programs and tours in
                                historical sites, national parks, and cultural
                                institutions, designed to enrich the students'
                                learning experience.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value={`item-4`} className="border-none">
                        <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                            <span className="text-sm text-black pr-2">
                                What type of services do you provide for MICE
                                (Meetings, Incentives, Conferences, and Events)
                                groups?
                            </span>
                            <div className="ml-auto mr-0"></div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                Our MICE services are tailored to the specific
                                needs of corporate groups. We assist with
                                everything from venue selection and event
                                coordination to transportation, team-building
                                activities, and post-event leisure tours.
                                Whether it's a large conference, an incentive
                                trip, or a corporate retreat, we manage all
                                logistical details to ensure a smooth and
                                successful experience for both organizers and
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
                                Absolutely! We specialize in creating exclusive
                                incentive tours that offer memorable
                                experiences, from luxury stays at five-star
                                resorts to private cultural tours and
                                adventurous activities. We work closely with
                                corporate clients to design itineraries that
                                motivate, inspire, and reward their teams or
                                clients in unique, personalized ways.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="mt-5">
                    <a
                        href="/faq"
                        className="text-base font-semibold text-blue-500 pl-2 hover:underline cursor-pointer"
                    >
                        Read all FAQs
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
