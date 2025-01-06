import React from "react";
import Head from "next/head";

interface MetaProps {
    title: string;
    owner?: string;
    keywords?: string[];
    url?: string;
    image?: string;
    locale?: string;
    siteName?: string;
    appId?: string;
}

export const Meta: React.FC<MetaProps> = ({
    title,
    owner,
    keywords = ["hotels", "bookings", "agents"],
    url = "https://nobletravels.com",
    image = `${process.env.NEXT_PUBLIC_WEB_URL}/og-bg.png`,
    locale = "en_GB",
    siteName = "Noble Travels",
    appId,
}) => {
    return (
        <Head>
            {/* Character Encoding */}
            <meta charSet="utf-8" />

            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta
                name="description"
                content={
                    "Explore curated tours and personalized itineraries for your next adventure with our expert travel guides and planning resources."
                }
            />
            <meta name="keywords" content={keywords.join(", ")} />
            {owner && <meta name="author" content={owner} />}

            {/* Viewport Settings */}
            <meta
                name="viewport"
                content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
            />

            {/* Mobile App Settings */}
            <meta name="mobile-web-app-capable" content="yes" />
            {appId && (
                <meta property="apple-itunes-app" content={`app-id=${appId}`} />
            )}
            <meta name="format-detection" content="telephone=no" />
            <meta name="msapplication-tap-highlight" content="no" />

            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content={
                    "Explore curated tours and personalized itineraries for your next adventure with our expert travel guides and planning resources."
                }
            />
            <meta property="og:type" content={"website"} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:image:alt" content={title} />
            <meta property="og:locale" content={locale} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta
                name="twitter:description"
                content={
                    "Explore curated tours and personalized itineraries for your next adventure with our expert travel guides and planning resources."
                }
            />
            <meta name="twitter:image" content={image} />
            {/* TODO: get a twitter username first
            <meta name="twitter:site" content={`@nobletravels}`} /> 
            <meta
                name="twitter:creator"
                content={`@${owner || "dino_notes"}`}
            />*/}

            {/* Robots */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />

            {/* Other meta tags */}
            <meta name="theme-color" content="#000" />
            <meta name="application-name" content={siteName} />
            <meta name="apple-mobile-web-app-title" content={siteName} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="default"
            />
            <meta name="msapplication-TileColor" content="#000" />
            <meta name="msapplication-config" content="/browserconfig.xml" />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
                type="text/plain"
                rel="author"
                href="http://domain/humans.txt"
            />
        </Head>
    );
};
