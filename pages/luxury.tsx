import { Footer } from "@/components/custom/footer";
import { Meta } from "@/components/custom/meta";
import { Navbar } from "@/components/custom/navbar";
import { PaginatePackages } from "@/components/custom/paginate";
import { POPULAR_PACKAGES } from "@/utils/data";
import React from "react";

interface LuxuryToursProps {}

const LuxuryTours: React.FC<LuxuryToursProps> = ({}) => {
    return (
        <>
            <Navbar />
            <Meta title="Luxury tours – Noble Travels" />
            <div
                className="relative w-full"
                style={{
                    height: "40vh",
                    minHeight: "250px",
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
                        LUXURY TOURS
                    </h1>
                </div>
            </div>
            <div className="mx-auto max-w-[76rem] my-10 px-3 md:px-10">
                <PaginatePackages
                    items={POPULAR_PACKAGES.filter(
                        (pkg) => pkg.luxury === true
                    )}
                />
            </div>
            <Footer />
        </>
    );
};

export default LuxuryTours;
