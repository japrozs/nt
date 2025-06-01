import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { BiSolidQuoteLeft } from "react-icons/bi";

type Testimonial = {
    quote: string;
    name: string;
    role: string;
    imgSrc: string;
};

interface TestimonialSliderProps {
    testimonials: Testimonial[];
}

export default function TestimonialSlider({
    testimonials,
}: TestimonialSliderProps) {
    return (
        <>
            <section className="w-full py-4">
                <div className="mx-auto lg:max-w-6xl px-3">
                    <Carousel
                        opts={{
                            loop: true,
                            align: "start",
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem
                                    key={index}
                                    className="md:basis-1/2 lg:basis-1/3"
                                >
                                    <div
                                        style={{
                                            backgroundImage: `url("https://img.freepik.com/free-vector/multicolor-leaves-pattern-background_1096-502.jpg")`,
                                            backgroundSize: "cover",
                                        }}
                                        className="relative flex flex-col justify-between h-full rounded-lg border border-gray-200 px-3 py-4 overflow-hidden"
                                    >
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-white/95 backdrop-blur-xs z-0" />

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <BiSolidQuoteLeft className="mx-auto text-3xl text-gray-300 mb-2" />
                                            <p className="mb-5 leading-[1.4] text-xl font-bold">
                                                {testimonial.quote}
                                            </p>
                                            <div className="mt-auto">
                                                <p className="text-sm font-semibold text-gray-900">
                                                    {testimonial.name}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-white hidden xl:flex absolute left-[-50px] top-1/2 -translate-y-1/2" />
                        <CarouselNext className="bg-white hidden xl:flex absolute right-[-50px] top-1/2 -translate-y-1/2" />
                    </Carousel>
                </div>
            </section>
        </>
    );
}
