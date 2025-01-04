import { Footer } from "@/components/custom/footer";
import { Navbar } from "@/components/custom/navbar";
import React from "react";
import { GiStairsGoal } from "react-icons/gi";
import { HiArrowRight, HiOutlineEye } from "react-icons/hi";
import { LuTarget } from "react-icons/lu";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
    return (
        <div>
            <Navbar />
            <div
                className="relative w-full"
                style={{
                    height: "30vh",
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
                    travellers with unforgettable journeys throughout the
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
                    customer service and traveller satisfaction priority. We are
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
                <p className="text-gray-800 font-medium text-smol mb-3">
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
                </p>
            </div>
            <div className="bg-gray-50 flex items-stretch">
                <div className="flex flex-col justify-center w-full md:w-1/2 p-7 md:p-10 border-y border-gray-200 border-dashed">
                    {/* <p className="text-2xl font-bold mb-3 flex items-center">
                        Our values
                    </p> */}
                    <p className="text-5xl modesto text-navy mb-5">
                        OUR VALUES
                    </p>
                    <p className="text-gray-800 font-medium text-smol mb-3">
                        <b>Happy customers make us happy</b>: Our thoughts and
                        actions will always have the best interests of our
                        customers first to provide a high standard of services
                        suitable for individuals seeking relaxing, comfortable
                        and memorable experience.
                    </p>
                    <p className="text-gray-800 font-medium text-smol mb-3">
                        <b>Curiosity</b>: We will always have an open mind to
                        learn, to experiment and to embrace new innovative ideas
                        to make our customers experience memorable.
                    </p>
                    <p className="text-gray-800 font-medium text-smol mb-3">
                        <b>Give our best shot</b>: We are passionate about
                        travel and we use our resources to the fullest potential
                        to provide our customers a quality experience which is
                        the ultimate goal of our company. Therefore, we strive
                        to create expeditions and unique experiences that would
                        satisfy our customers.
                    </p>
                    <p className="text-gray-800 font-medium text-smol mb-3">
                        <b>Honesty</b>: As a company, the information provided
                        to our customers must be transparent and Veracity. This
                        value makes us stand out from other travel companies and
                        our customers can make their travel decisions based on
                        firm and true facts.
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
                        Namaah Travel is specialized in travel experiences, and
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
                        remember and cherish your memories. In short, Namaah
                        Travel is your one-stop solution for all your
                        travel-related needs.
                    </p>
                    <a href="/contact">
                        <button className="ml-auto mr-0 bg-black/90 hover:bg-black transition mt-2 flex items-center mx-auto text-white rounded-md py-2 px-6 font-medium">
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
                            Our vision is to be known as a company that provides
                            a high-quality service by creating authentic travel
                            experiences in the regions covered by us.
                        </p>
                    </div>
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <LuTarget className="text-6xl mb-2 text-blue-500" />
                        <p className="text-2xl font-bold mb-3">Mission</p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            To rejuvenate the world…To inspire moments of
                            optimism and happiness…To create value and make a
                            difference in the customer travel experience.
                        </p>
                    </div>
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <GiStairsGoal className="text-6xl mb-2 text-blue-500" />
                        <p className="text-2xl font-bold mb-3">Goals</p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            We have support for convenient booking services such
                            as finding ideal locations, saving on bookings, and
                            finding efficient ways to organize your trip.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-3xl my-10 px-7 md:px-10">
                {/* <p className="text-2xl font-bold mb-3 flex items-center">
				Things that make us unique
                </p> */}
                <p className="text-5xl uppercase modesto text-navy mb-5">
                    Things that make us unique
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Our team has first-hand experience of traveling in the
                    regions that we will cover which will keep us ahead of the
                    curve.
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    We have the best interest of rural communities in our mind
                    by creating opportunities that involves them to showcase
                    their skills.
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    From our greater impact model down to the tiniest detail of
                    the activities that takes place in our accommodation every
                    day, each decision that we make revolves around our core
                    ethic of Care of the Land, Wildlife and its People. These
                    values have become an intuitive part of the way that we
                    operate and have shaped our guest perceptions.
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Visits to more than just the normal tourist haunts – we give
                    you an insider’s view of the destination where you’ll
                    explore inner-city markets, meet the locals, and explore
                    behind the veil
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Value for Money ensuring complete satisfaction without
                    compromising on deliverance of commitment under any
                    circumstances.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default About;
