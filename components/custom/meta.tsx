import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface MetaProps {
    title: string;
    image?: string;
}

export const Meta: React.FC<MetaProps> = ({
    title,
    image = `${process.env.NEXT_PUBLIC_WEB_URL}/og-bg.png`,
}) => {
    const router = useRouter();
    const baseUrl =
        process.env.NEXT_PUBLIC_WEB_URL || "https://nobletravels.com";
    const fullUrl = `${baseUrl}${router.asPath}`;
    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={title} />
            <meta property="og:image:alt" content={title} />

            {/* Twitter */}
            <meta name="twitter:title" content={title} />

            <meta property="og:url" content={fullUrl} />
            <link rel="canonical" href={fullUrl} />

            <meta property="og:image" content={image} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
};
