import { POPULAR_PACKAGES } from "@/utils/data";
import { paginate } from "@/utils/utils";
import React, { useState } from "react";
import { Button } from "./button";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { PackageCard } from "./package-card";

interface PaginatePackagesProps {
    items: typeof POPULAR_PACKAGES;
}

export const PaginatePackages: React.FC<PaginatePackagesProps> = ({
    items,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const PAGE_SIZE = 10;
    const pagesCount = Math.ceil(items.length / PAGE_SIZE);
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    const paginated_data = paginate(items, currentPage, PAGE_SIZE);
    return (
        <div>
            <div className="mt-10 md:max-w-4xl mx-auto flex flex-col space-y-8">
                {paginated_data.map((p, idx: number) => (
                    <PackageCard p={p} key={idx} />
                ))}
            </div>
            <div className="flex items-center mx-auto justify-center mt-10">
                <div className="flex items-center space-x-8">
                    <div className="w-20">
                        <Button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            label="Back"
                            icon={IoChevronBack}
                        />
                    </div>
                    <p className="text-smol font-semibold">
                        Page {currentPage} of {pagesCount}
                    </p>
                    <div className="w-20">
                        <Button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === pages.length}
                            label="Next"
                            iconRight
                            icon={IoChevronForward}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
