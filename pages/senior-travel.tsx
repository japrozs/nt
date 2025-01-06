import { Footer } from "@/components/custom/footer";
import { Navbar } from "@/components/custom/navbar";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { LuTarget } from "react-icons/lu";
import { MdLock } from "react-icons/md";
import { PiScissorsBold } from "react-icons/pi";

interface SeniorTravelProps {}

const SeniorTravel: React.FC<SeniorTravelProps> = ({}) => {
    return (
        <div>
            <Navbar />
            <div
                className="relative w-full"
                style={{
                    height: "30vh",
                    backgroundImage: `url("/img/sanjeev-bhambri.jpg")`,
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
                        SENIOR FRIENDLY TOURS
                    </h1>
                </div>
            </div>
            <div className="mx-auto max-w-3xl my-10 px-7 md:px-10">
                <p className="text-3xl font-bold mb-4">Travel with us</p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    At Noble Travels, we believe that accessible tourism is not
                    just a necessity, but a fundamental right that should be
                    woven into the fabric of sustainable travel. By aligning our
                    initiatives with global Sustainable Development Goals
                    (SDGs), we aim to create a world where travel experiences
                    are open to all, regardless of ability. Our approach moves
                    beyond the traditional, siloed view of accessibility,
                    turning it into a shared aspiration that fosters inclusivity
                    and equity.
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    We strive to ensure that every destination, service, and
                    activity is designed to be welcoming for everyone,
                    empowering individuals with diverse needs to explore the
                    world with confidence and ease. Through innovation,
                    collaboration, and a commitment to continuous improvement,
                    we are building a more inclusive future for tourism.
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
            <div className="border-b border-gray-200 border-dashed text-center pt-10 pb-16">
                <p className="text-5xl modesto text-navy mb-10">
                    WHY TRAVEL WITH US?
                </p>
                <div className="flex flex-wrap items-start justify-center space-y-16 md:space-y-0 md:space-x-16">
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <PiScissorsBold className="text-7xl text-blue-500" />
                        <p className="text-2xl font-bold mb-3">
                            100% Tailor made
                        </p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            Your trip is tailored to your needs, with custom
                            accommodations and expert planning for a memorable
                            experience.
                        </p>
                    </div>
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <LuTarget className="text-6xl mb-2 text-blue-500" />
                        <p className="text-2xl font-bold mb-3">
                            Expert knowledge
                        </p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            We have local offices and specialists based in these
                            regions, ensuring the same expert handles your trip
                            from start to finish.
                        </p>
                    </div>
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <MdLock className="text-6xl mb-2 text-blue-500" />
                        <p className="text-2xl font-bold mb-3">
                            Fully protected
                        </p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            24/7 emergency support while abroad, with all
                            drivers, guides, and staff fully verified for your
                            safety and peace of mind.
                        </p>
                    </div>
                </div>
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

export default SeniorTravel;