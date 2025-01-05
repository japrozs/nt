import { Footer } from "@/components/custom/footer";
import { Navbar } from "@/components/custom/navbar";
import { TourInfo } from "@/components/custom/tour-info";
import { POPULAR_PACKAGES } from "@/utils/data";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface TourPageProps {}

const TourPage: React.FC<TourPageProps> = ({}) => {
    const router = useRouter();
    const { slug } = router.query;

    const [packageData, setPackageData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;
        setLoading(true);
        setError(null);

        const foundPackage = POPULAR_PACKAGES.find((pkg) => pkg.slug === slug);
        if (foundPackage) {
            setPackageData(foundPackage);
        } else {
            setError("Package not found");
            router.push("/tours");
        }
        setLoading(false);
    }, [slug, router]);

    return (
        <div>
            <Navbar />
            {!error && loading ? (
                <div>
                    <p>loading....</p>
                </div>
            ) : (
                <>
                    <TourInfo pkg={packageData} />
                    <div className="mt-20" />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default TourPage;
