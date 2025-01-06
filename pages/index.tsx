import { DestinationCard } from "@/components/custom/destination-card";
import { Footer } from "@/components/custom/footer";
import { Navbar } from "@/components/custom/navbar";
import { PackageCard } from "@/components/custom/package-card";
import { GiStairsGoal } from "react-icons/gi";
import { HiArrowRight, HiOutlineEye } from "react-icons/hi";
import { IoArrowDown } from "react-icons/io5";
import { LuTarget } from "react-icons/lu";
import { Link } from "react-scroll";
import { POPULAR_DESTINATIONS, POPULAR_PACKAGES } from "../utils/data";
import { Meta } from "@/components/custom/meta";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Meta title="Noble Travels" />
            <div
                className="relative w-full"
                style={{
                    height: "80vh",
                    backgroundImage: 'url("/img/prasant-kr-dutta.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-40"
                    style={{ zIndex: 1 }}
                />
                <div
                    className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center md:px-4"
                    style={{ zIndex: 2 }}
                >
                    <h1 className="text-6xl md:text-8xl mb-4 modesto">
                        WE DELIVER
                        <br />
                        YOUR DREAMS.
                    </h1>
                    <p className="px-5 md:px-0 text-sm md:text-base md:max-w-[35rem] mx-auto font-medium text-white md:text-gray-100 mt-3.5">
                        With over 25 years of experience and offices across
                        India, the USA, UAE, Saudi Arabia, and Egypt, we offer
                        expert travel solutions and tailor-made services,
                        wherever you are.
                    </p>

                    <Link
                        to="pop-dest"
                        smooth={true}
                        duration={300}
                        offset={-25}
                    >
                        <button className="mt-12 rounded-full bg-white md:bg-white/80 hover:bg-white transition text-black p-1">
                            <IoArrowDown className="text-xl" />
                        </button>
                    </Link>
                    {/* <div className="mt-1.5 text-gray-300 flex items-center justify-center font-medium space-x-2">
                        <p>India</p>
                        <span className="text-gray-600">•</span>
                        <p>USA</p>
                        <span className="text-gray-600">•</span>
                        <p>UAE</p>
                        <span className="text-gray-600">•</span>
                        <p>Saudi Arabia</p>
                        <span className="text-gray-600">•</span>
                        <p>Egypt</p>
                    </div> */}
                </div>
            </div>
            <div id="pop-dest" className="text-center mt-8 mb-10 md:my-10">
                <p className="px-4 md:px-0 text-5xl md:text-6xl modesto text-navy">
                    POPULAR DESTINATIONS
                </p>
                <p className="px-5 md:px-0 text-sm md:text-base mt-3 max-w-xl mx-auto text-gray-800 font-medium text-center">
                    Explore our packages and plan your next adventure with
                    personalized tours to 100+ destinations across India, UAE,
                    Egypt & Saudi Arabia.
                </p>
                <div className="mt-9 flex flex-col md:flex-row md:items-stretch items-center justify-center space-y-8 md:space-y-0  md:space-x-8">
                    {POPULAR_DESTINATIONS.map((d, idx: number) => (
                        <DestinationCard destination={d} key={idx} />
                    ))}
                </div>
                <a href="/tours">
                    <button className="bg-blue-700/90 hover:bg-blue-700 transition mt-7 flex items-center mx-auto text-white rounded-full py-2 px-4 font-medium">
                        More destinations
                        <HiArrowRight className="ml-2.5 text-sm" />
                    </button>
                </a>
            </div>
            <div className="bg-blue-50/30 relative border-t border-gray-200 border-dashed text-center pt-10 pb-16">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div> */}
                {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
                    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[410px] w-[610px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
                </div> */}
                <p className="text-5xl modesto mb-16">
                    COMPLETE TRAVEL SOLUTIONS
                </p>
                <div className="flex flex-wrap items-start justify-center gap-y-16 md:gap-x-10">
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <HiOutlineEye className="text-7xl text-blue-500" />
                        <p className="text-2xl font-bold mb-3">
                            Disabled Travel
                        </p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            From transportation and accommodation to customized
                            itineraries, we create personalized tours tailored
                            to your unique preferences.
                        </p>
                        <a href="/accessibility">
                            <button className="bg-black/90 text-sm hover:bg-black transition mt-3 flex items-center mx-auto text-white rounded-full py-2 px-6 font-medium">
                                Check it out
                                <HiArrowRight className="ml-2.5 text-sm" />
                            </button>
                        </a>
                    </div>
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <LuTarget className="text-6xl mb-2 text-blue-500" />
                        <p className="text-2xl font-bold mb-3">
                            Senior - Friendly Tours
                        </p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            Thoughtfully crafted holidays for senior citizens
                            and retirees, with relaxed routines, carefully
                            selected meals, and travel schedules designed to
                            suit your pace.
                        </p>
                        <a href="/senior-travel">
                            <button className="bg-black/90 text-sm hover:bg-black transition mt-3 flex items-center mx-auto text-white rounded-full py-2 px-6 font-medium">
                                Check it out
                                <HiArrowRight className="ml-2.5 text-sm" />
                            </button>
                        </a>
                    </div>
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <GiStairsGoal className="text-6xl mb-2 text-blue-500" />
                        <p className="text-2xl font-bold mb-3">
                            Corporate and MICE
                        </p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            We offer luxury accommodations, exclusive conference
                            setups, VIP transport with bulletproof vehicles, and
                            personalized services for top companies and foreign
                            government delegations.
                        </p>
                        <a href="/corporate-travel">
                            <button className="bg-black/90 text-sm hover:bg-black transition mt-3 flex items-center mx-auto text-white rounded-full py-2 px-6 font-medium">
                                Check it out
                                <HiArrowRight className="ml-2.5 text-sm" />
                            </button>
                        </a>
                    </div>
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <GiStairsGoal className="text-6xl mb-2 text-blue-500" />
                        <p className="text-2xl font-bold mb-3">
                            Student Travel Program
                        </p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            Offering affordable, budget-friendly options for
                            school trips, university exchanges, internships,
                            study tours, and semester abroad programs, all
                            tailored to students' needs.
                        </p>
                        <a href="/student-travel">
                            <button className="bg-black/90 text-sm hover:bg-black transition mt-3 flex items-center mx-auto text-white rounded-full py-2 px-6 font-medium">
                                Check it out
                                <HiArrowRight className="ml-2.5 text-sm" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="broder-gray-600 border-dashed" />
            <div className="text-center my-10">
                <p className="text-5xl md:text-6xl modesto text-navy">
                    CHECKOUT
                    <br />
                    OUR PACKAGES
                </p>
                <p className="px-5 md:px-0 text-sm md:text-base mt-3 max-w-xl mx-auto text-gray-800 font-medium text-center">
                    Showcasing what’s possible when you travel with us, your
                    trip will be customized to suit your tastes and budget.
                </p>
                <div className="mt-10 md:max-w-4xl mx-auto flex flex-col space-y-8">
                    {POPULAR_PACKAGES.slice(0, 3).map((p, idx: number) => (
                        <PackageCard p={p} key={idx} />
                    ))}
                </div>
                <a href="/tours">
                    <button className="bg-black/90 hover:bg-black transition mt-7 flex items-center mx-auto text-white rounded-full py-2 px-6 font-medium">
                        All packages
                        <HiArrowRight className="ml-2.5 text-sm" />
                    </button>
                </a>
            </div>
            <div className="bg-navy p-8 md:p-16 flex items-center">
                <div className="w-full">
                    <p className="text-5xl modesto text-white">
                        GET READY FOR AN
                        <br />
                        UNFORGETTABLE TRIP.
                    </p>
                    <p className="mt-7 text-gray-100 font-medium md:mr-20">
                        Prepare for the adventure of a lifetime, where
                        breathtaking sights, authentic experiences, and
                        exceptional service come together to create memories
                        you'll cherish forever
                    </p>
                    <div className="flex items-center gap-x-5 flex-wrap">
                        <a href="/contact">
                            <button className="bg-blue-700/90 hover:bg-blue-700 transition mt-7 flex items-center text-white rounded-full py-2 px-4 font-medium">
                                Contact us
                                <HiArrowRight className="ml-2.5 text-sm" />
                            </button>
                        </a>
                        <a href="/faq">
                            <button className="bg-white hover:bg-white/95 transition mt-7 flex items-center text-blue-500 rounded-full py-2 px-4 font-medium">
                                Checkout FAQs
                                <HiArrowRight className="ml-2.5 text-sm" />
                            </button>
                        </a>
                    </div>
                </div>
                <div className="hidden md:block ml-10 w-full">
                    <img
                        src="/img/udaivilas.webp"
                        className="mx-auto h-72 w-auto rounded-md"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}
