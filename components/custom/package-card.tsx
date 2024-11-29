import { POPULAR_PACKAGES } from "@/utils/data";
import React from "react";
import { GrNavigate } from "react-icons/gr";
import { HiArrowRight } from "react-icons/hi";
import { LuBuilding, LuCar, LuTicket } from "react-icons/lu";
import { TbFlower } from "react-icons/tb";

interface PackageCardProps {
    p: (typeof POPULAR_PACKAGES)[0];
}

export const PackageCard: React.FC<PackageCardProps> = ({ p }) => {
    return (
        <div className="flex flex-col md:flex-row shadow-md mx-5 md:mx-0 items-stretch bg-white rounded-2xl border border-gray-200">
            <img
                src={p.img_url}
                className="h-36 rounded-t-2xl md:rounded-tr-none md:min-w-64 md:w-64 md:h-60 object-cover md:rounded-l-2xl"
            />
            <div className="w-full p-5 pr-5 md:pr-0 flex items-start bg-white">
                <TbFlower className="hidden md:block text-emerald-600 mr-3.5 text-2xl mt-1" />
                <div className="text-black text-left w-full flex flex-col h-full ">
                    <div className="flex flex-col md:flex-row md:items-center">
                        <p className="text-2xl font-bold">{p.name}</p>
                        <p className="mt-2 md:mt-0 min-w-max max-w-max md:ml-auto md:mr-5 text-xs text-emerald-600 font-bold bg-emerald-100 border border-green-600 rounded-lg py-0.5 px-2">
                            {p.duration}
                        </p>
                    </div>
                    <p className="my-2.5 max-w-xl text-gray-600 font-medium text-[0.9rem]">
                        {p.tour.tour_details
                            .replace(/[\n\t]/g, "")
                            .trim()
                            .substring(0, 250) + "..."}
                    </p>
                    <div className="flex items-center flex-col md:flex-row mt-auto mb-0">
                        <div className="flex items-center space-x-5">
                            <div className="text-center">
                                <LuBuilding className="text-emerald-600 self-center mx-auto" />
                                <p className="mt-1 text-gray-800 text-sm font-semibold">
                                    Lodging
                                </p>
                            </div>
                            <div className="text-center">
                                <LuCar className="text-emerald-600 self-center mx-auto" />
                                <p className="mt-1 text-gray-800 text-sm font-semibold">
                                    Transport
                                </p>
                            </div>
                            <div className="text-center">
                                <GrNavigate className="text-emerald-600 self-center mx-auto" />
                                <p className="mt-1 text-gray-800 text-sm font-semibold">
                                    Guide
                                </p>
                            </div>
                            <div className="text-center">
                                <LuTicket className="text-emerald-600 self-center mx-auto" />
                                <p className="mt-1 text-gray-800 text-sm font-semibold">
                                    Entrance
                                </p>
                            </div>
                        </div>
                        <button className="ml-auto w-full justify-center md:w-auto mt-5 md:mt-0 md:mr-5 bg-emerald-600/90 hover:bg-emerald-600 transition flex items-center text-sm mx-auto text-white rounded-md font-medium">
                            <a
                                href={`/tours/${p.slug}`}
                                className="flex items-center py-2 px-6 "
                            >
                                Learn more
                                <HiArrowRight className="ml-2.5 text-sm" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
