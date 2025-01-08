import { Meta } from "@/components/custom/meta";
import { Logo } from "@/components/ui/logo";
import React from "react";

interface FourOhFour {}

const FourOhFour: React.FC<FourOhFour> = ({}) => {
    return (
        <div className="h-screen">
            <Meta title="Page not found – Noble Travels" />
            <div className="h-screen">
                <div className="px-6 py-5 z-10">
                    <a href="/">
                        <Logo className={`h-9 w-auto text-black`} />
                    </a>
                </div>
                <div
                    style={{
                        marginTop: "13.8vh",
                    }}
                    className="p-6"
                >
                    <p className="text-2xl text-gray-500 font-medium menlo mb-5">
                        404 Error
                    </p>
                    <p className="text-4xl  font-semibold">Page not found</p>
                    <p className="mt-2 text-md font-medium text-gray-600">
                        The page you are looking for doesn't exist. Or does it?{" "}
                        <span className="font-semibold">It doesn't.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FourOhFour;
