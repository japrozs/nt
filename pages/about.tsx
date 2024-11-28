import { Footer } from "@/components/custom/footer";
import { Navbar } from "@/components/custom/navbar";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

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
                    Travel is about participating in life enriching experiences
                    and returning home transformed. It is much more than having
                    another stamp in your passport, or visiting the regular
                    monuments or a few quick snapshots. We have come to
                    understand all of these from our past experiences, of course
                    feedback of our customers. Consequently, Namaah travel came
                    into the picture to enrich your travel experience.
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Namaah Travel, a young company to change the travel
                    industry’s working style. We are a proud Indian company, and
                    our young professionals who are having more than 70 years of
                    cumulative experience of travel industry who work diligently
                    to create unique propositions and maintain our service
                    standards. Namaah Travel has an elaborated overseas network
                    of strategic alliances for overseas representation in Asia,
                    Europe, North America, South America, Africa, Oceania.
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    “NAMAAH” our logo speaks everything about our work ethics.
                    Namaah is a Sanskrit word, often used within mantras as a
                    humble salutation and word is derived from the Sanskrit
                    negation ‘na’, paired with ‘maah’.“Namaah” is used as a
                    greeting in India. “Elephant” is a symbol for power,
                    dignity, intelligence and peace. It is considered the
                    representation or the living incarnation of Lord Ganesha.
                    “Lotus” introduces the National Identity Elements of India
                    and intrinsic to the Indian identity and heritage. Indians
                    of all demographics backgrounds across the world are proud
                    of these National Symbols as they infuse a sense of pride
                    and patriotism in everyone’s heart.
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    We truly believe that your quintessential tour experience
                    can be made possible with the knowledge of our experienced
                    and passionate travel advisors who can personalize your
                    travel experience based on the information provided by you
                    and keeping your travel requirements in mind. We would
                    ensure that all your travel needs are met with the
                    perfection. Therefore, we work around the clock out to
                    create special travel experience for you.
                </p>
            </div>
            <div className="bg-gray-50 flex items-stretch">
                <div className="flex flex-col justify-center w-full md:w-1/2 p-7 md:p-10 border-y border-gray-200 border-dashed">
                    {/* <p className="text-2xl font-bold mb-3 flex items-center">
                        Our values
                    </p> */}
                    <p className="text-5xl modesto text-black mb-5">
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
                    <p className="text-5xl modesto text-black mb-5">
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
            <div className="mx-auto max-w-3xl my-10 px-7 md:px-10">
                {/* <p className="text-2xl font-bold mb-3 flex items-center">
				Things that make us unique
                </p> */}
                <p className="text-5xl uppercase modesto text-black mb-5">
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
