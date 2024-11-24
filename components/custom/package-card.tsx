import { POPULAR_PACKAGES } from "@/pages/utils/data";
import React from "react";
import { GrNavigate } from "react-icons/gr";
import { HiArrowRight } from "react-icons/hi";
import { LuBuilding, LuCar, LuTicket } from "react-icons/lu";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { TbFlower } from "react-icons/tb";

interface PackageCardProps {
    p: (typeof POPULAR_PACKAGES)[0];
}

export const PackageCard: React.FC<PackageCardProps> = ({ p }) => {
    return (
        <div className="flex shadow-md items-stretch bg-white rounded-2xl border border-gray-200">
            <img
                src={p.img_url}
                className="w-64 h-60 object-cover rounded-l-2xl"
            />
            <div className="w-3/4 p-5 pr-0 flex items-start">
                <TbFlower className="text-emerald-600 mr-3.5 text-2xl mt-1" />
                <div className="text-black text-left w-full flex flex-col h-full">
                    <div className="flex items-center">
                        <p className="text-2xl font-bold">{p.name}</p>
                        <p className="ml-auto mr-5 text-xs text-emerald-600 font-bold bg-emerald-100 border border-green-600 rounded-lg py-0.5 px-2">
                            {p.duration}
                        </p>
                    </div>
                    <p className="my-2.5 max-w-xl text-gray-600 font-medium text-[0.9rem]">
                        {p.description}
                    </p>
                    <div className="flex items-center mt-auto mb-0">
                        <div className="flex items-center space-x-5">
                            <div className="text-center">
                                <LuBuilding className="text-emerald-600 self-center mx-auto" />
                                <p className="mt-1 text-gray-800 text-sm font-medium">
                                    Lodging
                                </p>
                            </div>
                            <div className="text-center">
                                <LuCar className="text-emerald-600 self-center mx-auto" />
                                <p className="mt-1 text-gray-800 text-sm font-medium">
                                    Transport
                                </p>
                            </div>
                            <div className="text-center">
                                <GrNavigate className="text-emerald-600 self-center mx-auto" />
                                <p className="mt-1 text-gray-800 text-sm font-medium">
                                    Guide
                                </p>
                            </div>
                            <div className="text-center">
                                <LuTicket className="text-emerald-600 self-center mx-auto" />
                                <p className="mt-1 text-gray-800 text-sm font-medium">
                                    Entrance
                                </p>
                            </div>
                        </div>
                        <button className="ml-auto mr-5 bg-emerald-600/90 hover:bg-emerald-600 transition flex items-center text-sm mx-auto text-white rounded-md py-2 px-6 font-medium">
                            Learn more
                            <HiArrowRight className="ml-2.5 text-sm" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
