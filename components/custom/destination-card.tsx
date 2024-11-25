import { POPULAR_DESTINATIONS } from "@/pages/utils/data";
import React from "react";

interface DestinationCardProps {
    destination: (typeof POPULAR_DESTINATIONS)[0];
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
    destination,
}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-[20rem] border border-gray-200">
            <figure className="relative w-full h-64">
                <img
                    src={destination.img_url}
                    alt={destination.city}
                    className={`w-full h-full object-cover ${
                        destination.classname || ""
                    }`}
                    loading="lazy"
                />
            </figure>

            <div className="p-3 px-5 pb-8">
                <p className="text-xs font-bold uppercase text-blue-500">
                    {destination.city.toUpperCase()}
                </p>

                <p className="text-3xl text-gray-900 mt-0.5 font-bold">
                    {destination.name}
                </p>

                <p className="text-gray-700 text-sm font-medium mt-2">
                    {destination.description}
                </p>
            </div>
        </div>
    );
};
