import { Head, Html, Main, NextScript } from "next/document";
import { Toaster } from "sonner";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.cdnfonts.com/css/noe-display"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.cdnfonts.com/css/menlo"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://rsms.me/inter/inter.css"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.cdnfonts.com/css/graphik"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-96x96.png"
                    sizes="96x96"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <meta
                    name="apple-mobile-web-app-title"
                    content="NobleTravels"
                />
                <meta charSet="utf-8" />
                <meta
                    name="keywords"
                    content={["hotels", "bookings", "agents"].join(", ")}
                />
                <meta
                    name="description"
                    content={
                        "Explore curated tours and personalized itineraries for your next adventure with our expert travel guides and planning resources."
                    }
                />
                <meta name="author" content={"Noble Travels"} />
                <meta
                    name="viewport"
                    content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
                />
                <meta name="mobile-web-app-capable" content="yes" />
                {/* {appId && (
                <meta property="apple-itunes-app" content={`app-id=${appId}`} />
            )} */}

                <meta name="format-detection" content="telephone=no" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta
                    property="og:description"
                    content={
                        "Explore curated tours and personalized itineraries for your next adventure with our expert travel guides and planning resources."
                    }
                />

                <meta property="og:locale" content={"en_GB"} />
                <meta property="og:site_name" content={"Noble Travels"} />

                <meta property="og:type" content={"website"} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:description"
                    content={
                        "Explore curated tours and personalized itineraries for your next adventure with our expert travel guides and planning resources."
                    }
                />

                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="bingbot" content="index, follow" />
                {/* TODO: get a twitter username first
            <meta name="twitter:site" content={`@nobletravels}`} /> 
            <meta
                name="twitter:creator"
                content={`@${owner || "dino_notes"}`}
            />*/}
                <meta name="theme-color" content="#000" />
                <meta name="application-name" content={"Noble Travels"} />
                <meta
                    name="apple-mobile-web-app-title"
                    content={"Noble Travels"}
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
                <meta name="msapplication-TileColor" content="#000" />
                <meta
                    name="msapplication-config"
                    content="/browserconfig.xml"
                />
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
            <body className="antialiased">
                <Main />
                <Toaster />
                <NextScript />
            </body>
        </Html>
    );
}
