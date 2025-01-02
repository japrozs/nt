import { Footer } from "@/components/custom/footer";
import { Navbar } from "@/components/custom/navbar";
import React from "react";

interface TourDetailsProps {}

const TourDetails: React.FC<TourDetailsProps> = ({}) => {
    return (
        <div>
            <Navbar />
            {/* TODO: insert it here */}
            <div className="mt-20" />
            <Footer />
        </div>
    );
};

export default TourDetails;
