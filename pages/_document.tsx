import { Html, Head, Main, NextScript } from "next/document";
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
                <meta
                    name="apple-mobile-web-app-title"
                    content="NobleTravels"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <body className="antialiased">
                <Main />
                <Toaster />
                <NextScript />
            </body>
        </Html>
    );
}
