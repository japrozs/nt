import React from "react";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { Logo } from "../ui/logo";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <div className="bg-black ">
            <div className="py-10 px-8 md:px-16 md:flex items-stretch text-white">
                <div className="w-full mr-10">
                    <Logo className="md:ml-auto h-9 w-auto mb-6" />
                    {/* <p className="mt-4 text-gray-400 font-medium mr-10 text-sm">
                    Urna ratione ante harum provident, eleifend, vulputate
                    molestiae proin fringilla, praesentium magna conubia
                </p> */}
                </div>
                <div className="w-full flex flex-col space-y-1.5">
                    <p className="text-gray-300 font-medium menlo">
                        🇺🇸 +1 (678) 275-9457
                    </p>
                    <p className="text-gray-300 font-medium menlo">
                        🇮🇳 +91 8800883595
                    </p>
                    <div className="flex items-start">
                        <HiOutlineMail className="text-xl mr-3 text-gray-400" />
                        <a
                            href="mailto:info@nobletravels.com"
                            className="text-gray-300 font-medium hover:text-blue-500"
                        >
                            info@nobletravels.com
                        </a>
                    </div>
                    <div className="flex items-start">
                        <HiOutlineLocationMarker className="text-xl mr-3 text-gray-400" />
                        <p className="text-gray-300 font-medium">
                            9A/1 205 WEA, Karol Bagh, New Delhi
                        </p>
                    </div>
                </div>
            </div>
            <hr className="border-gray-800 border-dashed" />
            <div className="flex items-center flex-wrap mx-auto justify-center py-2.5 space-x-3">
                <a
                    href="/corporate-travel"
                    className="text-gray-300 font-medium text-sm hover:text-blue-500"
                >
                    Corporate travel
                </a>
                <span className="text-gray-500">•</span>
                <a
                    href="/accessibility"
                    className="text-gray-300 font-medium text-sm hover:text-blue-500"
                >
                    Accessible tourism
                </a>
                <span className="text-gray-500">•</span>
                <a
                    href="/senior-travel"
                    className="text-gray-300 font-medium text-sm hover:text-blue-500"
                >
                    Senior Travel
                </a>
                <span className="text-gray-500">•</span>
                <a
                    href="/student-travel"
                    className="text-gray-300 font-medium text-sm hover:text-blue-500"
                >
                    Students
                </a>
                <span className="text-gray-500">•</span>
                <a className="text-gray-300 font-medium text-sm hover:text-blue-500">
                    For agents
                </a>
            </div>
        </div>
    );
};
