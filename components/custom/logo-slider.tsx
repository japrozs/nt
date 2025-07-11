import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

interface LogoSliderProps {}

export default function LogoSlider({}: LogoSliderProps) {
    const urls = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/500px-Booking.com_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Expedia_Logo_2023.svg/500px-Expedia_Logo_2023.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Hotels.com_Logo_2025.svg/500px-Hotels.com_Logo_2025.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/archive/e/e1/20180821070808%21Priceline.com_logo.svg/120px-Priceline.com_logo.svg.png",
        // "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Makemytrip_logo.svg/500px-Makemytrip_logo.svg.png",
        // "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Agoda_logo_2019.svg/500px-Agoda_logo_2019.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Kayak_Logo.svg/1294px-Kayak_Logo.svg.png?20190328163458",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg/720px-Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg.png?20200223151859",
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Orbitz_logo.svg/1444px-Orbitz_logo.svg.png?20210518001103",
    ];
    return (
        <>
            <section className="w-full py-4 px-5 lg:px-0 ">
                <div className="mx-auto lg:max-w-6xl px-3">
                    <Carousel
                        opts={{
                            loop: true,
                            align: "start",
                            watchDrag: false,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 1000,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {urls.map((url, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-1/3 md:basis-1/4 lg:basis-1/6"
                                >
                                    <img
                                        className="h-[1.2rem] w-auto select-none"
                                        src={url}
                                    />
                                </CarouselItem>
                            ))}
                            <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/6">
                                <img
                                    className="h-[1.6rem] w-auto select-none"
                                    src={
                                        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Makemytrip_logo.svg/2560px-Makemytrip_logo.svg.png"
                                    }
                                />
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/6">
                                <img
                                    className="h-[1.75rem] w-auto select-none"
                                    src={
                                        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Agoda_logo_2019.svg/500px-Agoda_logo_2019.svg.png"
                                    }
                                />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </section>
        </>
    );
}
