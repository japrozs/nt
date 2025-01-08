import { Footer } from "@/components/custom/footer";
import { Meta } from "@/components/custom/meta";
import { Navbar } from "@/components/custom/navbar";
import { Spinner } from "@/components/custom/spinner";
import { TourInfo } from "@/components/custom/tour-info";
import { POPULAR_PACKAGES } from "@/utils/data";
import { normalCapitalize } from "@/utils/utils";
import { useEffect } from "react";

interface TourPageProps {
    packageData: (typeof POPULAR_PACKAGES)[0];
}

export const getServerSideProps = async ({ params }: any) => {
    const { slug } = params;

    const foundPackage = POPULAR_PACKAGES.find((pkg) => pkg.slug === slug);

    if (!foundPackage) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            packageData: foundPackage,
        },
    };
};

const TourPage: React.FC<TourPageProps> = ({ packageData }) => {
    // Use useEffect to dynamically inject meta tags into the DOM after the page loads
    useEffect(() => {
        if (!packageData) return;

        // Inject OG title dynamically
        const ogTitleTag = document.querySelector('meta[property="og:title"]');
        // const ogImageTag = document.querySelector('meta[property="og:image"]');

        // If the OG tags don't exist, create them
        if (!ogTitleTag) {
            const newOgTitle = document.createElement("meta");
            newOgTitle.setAttribute("property", "og:title");
            document.head.appendChild(newOgTitle);
        }

        // if (!ogImageTag) {
        //     const newOgImage = document.createElement("meta");
        //     newOgImage.setAttribute("property", "og:image");
        //     document.head.appendChild(newOgImage);
        // }

        // Set the content of OG tags
        if (ogTitleTag) {
            ogTitleTag.setAttribute(
                "content",
                `${normalCapitalize(packageData.name)} – Noble Travels`
            );
        }
        // if (ogImageTag) {
        //     ogImageTag.setAttribute("content", packageData.img_url);
        // }
    }, [packageData]);

    if (!packageData) {
        return (
            <div className="my-20">
                <Spinner />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            {/* Static meta tags for server-side rendering */}
            <Meta
                title={`${normalCapitalize(packageData.name)} – Noble Travels`}
                // image={packageData.img_url}
            />
            <TourInfo pkg={packageData} />
            <div className="mt-20" />
            <Footer />
        </div>
    );
};

export default TourPage;
