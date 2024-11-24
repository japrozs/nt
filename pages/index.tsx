import { DestinationCard } from "@/components/custom/destination-card";
import { Navbar } from "@/components/custom/navbar";
import React from "react";
import { IoArrowDown } from "react-icons/io5";
import { POPULAR_DESTINATIONS, POPULAR_PACKAGES } from "./utils/data";
import { HiArrowRight } from "react-icons/hi";
import { PackageCard } from "@/components/custom/package-card";
import { Footer } from "@/components/custom/footer";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div
                className="relative w-full"
                style={{
                    height: "80vh", // Ensures the height doesn't exceed 100vh
                    backgroundImage: 'url("/img/prasant-kr-dutta.jpg")', // Replace with your image path
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-60" // Darken the image
                    style={{ zIndex: 1 }}
                />
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4"
                    style={{ zIndex: 2 }}
                >
                    <h1 className="text-4xl md:text-8xl mb-4 modesto">
                        WE DELIVER
                        <br />
                        YOUR DREAMS.
                    </h1>
                    <p className="max-w-[35rem] font-medium text-gray-200 mt-3.5">
                        With offices in India, USA, UAE, Saudi Arabia, and
                        Egypt, our team is here to provide you with expert
                        travel solutions and personalized service, wherever you
                        are.
                    </p>
                    <button className="mt-12 rounded-full bg-white/80 hover:bg-white transition text-black p-1">
                        <IoArrowDown className="text-xl" />
                    </button>
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
            <div className="text-center my-10">
                <p className="text-6xl modesto text-navy">
                    POPULAR DESTINATIONS
                </p>
                <p className="mt-3 max-w-xl mx-auto text-gray-800 font-medium text-center">
                    Fusce hic augue velit wisi quibusdam pariatur, iusto primis,
                    nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare
                    mollitia tenetur, aptent.
                </p>
                <div className="mt-9 flex items-stretch justify-center space-x-8">
                    {POPULAR_DESTINATIONS.map((d, idx: number) => (
                        <DestinationCard destination={d} key={idx} />
                    ))}
                </div>
                <button className="bg-blue-700/90 hover:bg-blue-700 transition mt-7 flex items-center mx-auto text-white rounded-full py-2 px-4 font-medium">
                    More destinations
                    <HiArrowRight className="ml-2.5 text-sm" />
                </button>
            </div>
            <hr className="broder-gray-600 border-dashed" />
            <div className="text-center my-10">
                <p className="text-6xl modesto text-navy">
                    CHECKOUT
                    <br />
                    OUR PACKAGES
                </p>
                <p className="mt-3 max-w-xl mx-auto text-gray-800 font-medium text-center">
                    Fusce hic augue velit wisi quibusdam pariatur, iusto primis,
                    nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare
                    mollitia tenetur, aptent.
                </p>
                <div className="mt-10 max-w-4xl mx-auto flex flex-col space-y-8">
                    {POPULAR_PACKAGES.map((p) => (
                        <PackageCard p={p} />
                    ))}
                </div>
                <button className="bg-black/90 hover:bg-black transition mt-7 flex items-center mx-auto text-white rounded-full py-2 px-6 font-medium">
                    All packages
                    <HiArrowRight className="ml-2.5 text-sm" />
                </button>
            </div>
            <div className="bg-navy p-16 flex items-center">
                <div className="w-full">
                    <p className="text-5xl modesto text-white">
                        GET READY FOR AN
                        <br />
                        UNFORGETTABLE TRIP.
                    </p>
                    <p className="mt-7 text-gray-300 font-medium mr-20">
                        Fusce hic augue velit wisi quibusdam pariatur, iusto
                        primis, nec nemo, rutrum. Vestibulum cumque laudantium.
                        Sit ornare mollitia tenetur, aptent.
                    </p>
                    <button className="bg-blue-700/90 hover:bg-blue-700 transition mt-7 flex items-center text-white rounded-full py-2 px-4 font-medium">
                        Contact us
                        <HiArrowRight className="ml-2.5 text-sm" />
                    </button>
                </div>
                <div className="ml-10 w-full">
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
