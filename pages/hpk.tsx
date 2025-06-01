import { Button } from "@/components/custom/button";
import { Footer } from "@/components/custom/footer";
import { InputField } from "@/components/custom/input-field";
import { Meta } from "@/components/custom/meta";
import { Navbar } from "@/components/custom/navbar";
import { TextField } from "@/components/custom/text-field";
import { EMAIL_REGEXP } from "@/lib/utils";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { TbWorldSearch } from "react-icons/tb";
import { HiCursorClick } from "react-icons/hi";
import { BiSolidOffer } from "react-icons/bi";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@headlessui/react";
import { MdCheck } from "react-icons/md";
import TestimonialSlider from "@/components/custom/testimonial-slider";

interface HotelPriceKillerProps {}

const steps = [
    {
        icon: <TbWorldSearch className="size-10 text-blue-500" />,
        title: "Search Online",
        description:
            "Search for your hotel on any travel website (e.g., Booking.com, Expedia, Agoda, or any other site globally).",
        img: "/img/step-1.png",
    },
    {
        icon: <HiCursorClick className="size-10 text-violet-500" />,
        title: "Submit the Rate",
        description:
            "Submit the hotel name, location, travel dates, and the price you found using our form.",
        img: "/img/step-2.png",
    },
    {
        icon: <BiSolidOffer className="size-10 text-green-500" />,
        title: "Get a Better Offer",
        description:
            "Our team checks our special rates and replies within 1–2 hours with a better price. The price you want us to beat must be currently available and visible online.",
        img: "https://miro.medium.com/v2/resize:fit:1400/1*-PzQVfFwXq8Gvb94oWtGkg.png",
    },
];

const testimonials = [
    {
        quote: "This service made booking our trip incredibly simple and stress-free.",
        name: "Rose Roberson",
        role: "CEO at Company",
        imgSrc: "/img/step-2.png",
    },
    {
        quote: "Everything was seamless from start to finish. Highly recommended!",
        name: "Chace Rodgers",
        role: "CEO at Company",
        imgSrc: "/img/step-2.png",
    },
    {
        quote: "Quick, easy, and exactly what I needed for my vacation planning.",
        name: "Cornelius Sheppard",
        role: "CEO at Company",
        imgSrc: "/img/step-2.png",
    },
    {
        quote: "User-friendly platform that saved me both time and money.",
        name: "Chace Rodgers",
        role: "CEO at Company",
        imgSrc: "/img/step-2.png",
    },
    {
        quote: "A trustworthy solution that made planning our trip a breeze.",
        name: "Cornelius Sheppard",
        role: "CEO at Company",
        imgSrc: "/img/step-2.png",
    },
    {
        quote: "Reliable, fast, and exactly what we needed. Great experience!",
        name: "Chace Rodgers",
        role: "CEO at Company",
        imgSrc: "/img/step-2.png",
    },
    {
        quote: "Booking our dream vacation has never been easier or smoother.",
        name: "Cornelius Sheppard",
        role: "CEO at Company",
        imgSrc: "/img/step-2.png",
    },
];

const HotelPriceKiller: React.FC<HotelPriceKillerProps> = ({}) => {
    const [agreed, setAgreed] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % steps.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <Navbar />
            <Meta title="Hotel Price Killer – Noble Travels" />
            <div
                className="relative w-full"
                style={{
                    height: "40vh",
                    minHeight: "250px",
                    backgroundImage: `url("/img/nc-farm-bureau-mark.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-60"
                    style={{ zIndex: 1 }}
                />
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-1 w-full md:px-4"
                    style={{ zIndex: 2 }}
                >
                    <h1 className="text-5xl md:text-7xl mb-4 mx-auto modesto w-full md:max-w-7xl">
                        HOTEL PRICE KILLER – BEAT YOUR BEST PRICE!
                    </h1>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-10 max-w-6xl mx-auto py-10 px-4">
                {/* Left - Steps */}
                <div className="md:w-6/12">
                    <p className="text-2xl font-bold mb-2">How it works?</p>
                    <hr className="mt-3 mb-2 " />
                    <div className="mb-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`px-2 py-3.5 rounded-md flex items-start mb-2 transition-all duration-300 ${
                                    activeIndex === index
                                        ? "bg-gray-50 opacity-100"
                                        : "opacity-90"
                                }`}
                            >
                                <div className="mr-5 shrink-0">{step.icon}</div>
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        {step.title}
                                    </p>
                                    <p className="font-medium text-sm text-gray-700">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right - Image */}
                <div className="md:w-6/12 w-full transition-all ease-in-out flex items-center justify-center overflow-hidden max-h-[400px]">
                    <img
                        src={steps[activeIndex].img}
                        alt={steps[activeIndex].title}
                        className="border border-gray-200 rounded-lg w-full max-h-[300px] object-contain transition-all duration-500"
                    />
                </div>
            </div>
            {/* <div className="w-full md:max-w-6xl mx-auto p-4 md:p-10">
                <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-10">
                    <div className="md:w-7/12">
                        <p className="text-2xl font-bold mb-2">
                            How it works{"?"}
                        </p>
                        <hr className="my-3" />
                        <div className="my-6">
                            <div className="flex items-center mb-5">
                                <TbWorldSearch className="size-10 shrink-0 text-blue-500 mr-5" />
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        Search Online
                                    </p>
                                    <p className="font-medium text-sm text-gray-700">
                                        Search for your hotel on any travel
                                        website (e.g., Booking.com, Expedia,
                                        Agoda, or any other site globally).
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mb-5">
                                <HiCursorClick className="size-10 shrink-0 text-violet-500 mr-5" />
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        Submit the Rate
                                    </p>
                                    <p className="font-medium text-sm text-gray-700">
                                        Submit the hotel name, location, travel
                                        dates, and the price you found using our
                                        form.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mb-5">
                                <BiSolidOffer className="size-10 shrink-0 text-green-500 mr-5" />
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        Get a better offer
                                    </p>
                                    <p className="font-medium text-sm text-gray-700">
                                        Our team checks our special rates and
                                        replies within <b>1–2 hours</b> with a
                                        better price. The price you want us to
                                        beat{" "}
                                        <b>
                                            must be currently available and
                                            visible online
                                        </b>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>hi there</p>
                    </div>
                </div>
            </div> */}
            <div className="border-y border-gray-200 border-dashed">
                <div className="w-full md:max-w-6xl mx-auto p-4 md:p-10">
                    <p className="text-2xl font-bold mb-1">
                        Submit your rate now
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                        If you can find it online, we can beat it — guaranteed!
                    </p>
                    <Formik
                        initialValues={{
                            name: "",
                            hotelName: "",
                            contact: "",
                            cityAndCountry: "",
                            numGuests: "",
                            numRooms: "",
                            email: "",
                            message: "",
                        }}
                        onSubmit={async (values) => {
                            // onSubmit={async (values, { setErrors }) => {
                            console.log("values :: ", values);
                            const data = await axios.get(
                                "https://api.ipdata.co?api-key=46e261b086e97ba2279dddae922392ee28434240c7632389f2926203"
                            );

                            const res = await axios.post(
                                `${window.location.origin}/api/hpk`,
                                {
                                    name: values.name,
                                    email: values.email || "<NO EMAIL ENTERED>",
                                    message: values.message,
                                    ipAddress: data.data,
                                }
                            );

                            console.log("res.data :: ", res.data);
                            if (res.data.status == "OK") {
                                toast.success(
                                    "Thank you! Our team will get back to you within 1-2 hours"
                                );
                            } else {
                                toast.error("Could not submit form");
                            }
                        }}
                    >
                        {({ values, isSubmitting }) => (
                            <Form className="w-full">
                                <div className="flex flex-col md:flex-row items-center md:space-x-10">
                                    <div className="w-full">
                                        <InputField
                                            name="name"
                                            placeholder="Dwight Schrute"
                                            label="Name"
                                            fullWidth
                                            shadow
                                        />
                                        <div className="flex items-center space-x-3">
                                            <div className="w-full">
                                                <InputField
                                                    type="email"
                                                    name="email"
                                                    placeholder="jim@dundermifflin.com"
                                                    fullWidth
                                                    label="Email"
                                                    shadow
                                                />
                                            </div>
                                            <div className="w-full">
                                                <InputField
                                                    type="contact"
                                                    name="contact"
                                                    placeholder="Contact"
                                                    fullWidth
                                                    label="Contact"
                                                    shadow
                                                />
                                            </div>
                                        </div>
                                        <InputField
                                            name="hotelName"
                                            placeholder="The Candler Hotel"
                                            label="Hotel Name"
                                            fullWidth
                                            shadow
                                        />
                                        <InputField
                                            name="cityAndCountry"
                                            placeholder="Atlanta, United States"
                                            label="City and Country"
                                            fullWidth
                                            shadow
                                        />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-end space-x-3">
                                            <div className="w-3/12">
                                                <InputField
                                                    name="numGuests"
                                                    placeholder="2"
                                                    label="No. of guests"
                                                    fullWidth
                                                    shadow
                                                />
                                            </div>
                                            <div className="w-3/12">
                                                <InputField
                                                    name="numRooms"
                                                    placeholder="2"
                                                    label="No. of rooms"
                                                    fullWidth
                                                    shadow
                                                />
                                            </div>
                                            <div className="w-6/12">
                                                <InputField
                                                    name="site"
                                                    placeholder="www.booking.com"
                                                    label="Booking site"
                                                    fullWidth
                                                    shadow
                                                />
                                            </div>
                                        </div>
                                        <TextField
                                            name="message"
                                            fullWidth
                                            placeholder="Your message"
                                            label="Message"
                                            shadow
                                        />
                                        <div className="my-2.5 flex items-center">
                                            <Checkbox
                                                checked={agreed}
                                                onChange={() =>
                                                    setAgreed(!agreed)
                                                }
                                                className="min-w-4 mr-3 group size-[1rem] flex items-center justify-center rounded-md bg-white border border-gray-300 data-[checked]:border-blue-500 data-[checked]:bg-blue-500"
                                            >
                                                <MdCheck className="hidden text-white text-xs self-center group-data-[checked]:block" />
                                            </Checkbox>
                                            <p className="text-sm font-medium text-gray-700 break-normal">
                                                By checking this box, I state
                                                that I have read, understood,
                                                and accepted the{" "}
                                                <a
                                                    href="/hpk-tandc"
                                                    className="text-blue-500 hover:underline"
                                                >
                                                    Terms and Conditions
                                                </a>
                                            </p>
                                        </div>
                                        <Button
                                            colored
                                            loading={isSubmitting}
                                            disabled={
                                                values.name.trim().length ===
                                                    0 ||
                                                !values.email.match(
                                                    EMAIL_REGEXP
                                                ) ||
                                                values.message.trim().length ===
                                                    0 ||
                                                values.hotelName.trim()
                                                    .length === 0 ||
                                                values.cityAndCountry.trim()
                                                    .length === 0 ||
                                                !agreed
                                            }
                                            type="submit"
                                            label="Get my price killed!"
                                            className="mt-3"
                                        />
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className="bg-blue-50/30 relative border-b border-gray-200 border-dashed text-center py-10 mb-5">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <p className="text-5xl modesto mb-3">WHAT OUR CLIENTS SAY</p>
                <p className="px-5 md:px-0 text-sm md:text-smol mb-5 max-w-xl mx-auto text-gray-800 font-medium text-center">
                    Discover why travelers trust our solutions to plan their
                    journeys and finally take that dream vacation.
                </p>
                <TestimonialSlider testimonials={testimonials} />
            </div>
            <div className="max-w-3xl mx-auto mt-5 mb-16 px-3 md:px-0">
                <p className="text-2xl font-bold pl-2 mb-4">
                    Frequently asked questions
                </p>

                {/* <p className="text-smol mb-6 text-black font-medium">
                        These kind of tours include itineraries for Senior
                        Citizens, Retirees, Handicapped Travelers, University
                        Tours, MICE Groups
                    </p> */}
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`item-1`} className="border-none">
                        <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                            <span className="text-sm text-black pr-2">
                                What is Hotel Price Killer?
                            </span>
                            <div className="ml-auto mr-0"></div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                Hotel Price Killer is a unique service by Noble
                                Travels that guarantees to beat the hotel rates
                                you find online. Simply submit the price you
                                found on popular booking sites like Booking.com,
                                Expedia, or Agoda, and we’ll work to get you an
                                even better deal using our exclusive travel
                                industry rates.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value={`item-2`} className="border-none">
                        <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                            <span className="text-sm text-black pr-2">
                                How does it work?
                            </span>
                            <div className="ml-auto mr-0"></div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="px-6 py-3 list-disc space-y-1.5">
                                <li className="text-gray-800 text-smol font-medium">
                                    Search for your hotel on your favorite
                                    travel site (e.g., Booking.com, Expedia).
                                </li>
                                <li className="text-gray-800 text-smol font-medium">
                                    Submit the hotel name, location, travel
                                    dates, and the price you found using our
                                    form.
                                </li>
                                <li className="text-gray-800 text-smol font-medium">
                                    Our team checks our special rates and
                                    replies within 1–2 hours with a better
                                    price.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value={`item-3`} className="border-none">
                        <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                            <span className="text-sm text-black pr-2">
                                Is there any cost to use this service?
                            </span>
                            <div className="ml-auto mr-0"></div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                No, the Hotel Price Killer service is completely
                                free of charge. You only pay for the hotel
                                booking if you decide to accept our offer.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value={`item-4`} className="border-none">
                        <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                            <span className="text-sm text-black pr-2">
                                How are you able to offer cheaper rates?
                            </span>
                            <div className="ml-auto mr-0"></div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                We have <b>exclusive partnerships</b> with
                                hotels worldwide and access to
                                <b>wholesale rates</b> that are not available to
                                the general public. This allows us to pass on
                                these savings to you.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value={`item-5`} className="border-none">
                        <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                            <span className="text-sm text-black pr-2">
                                What booking sites do you compare against?
                            </span>
                            <div className="ml-auto mr-0"></div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                We can beat rates from all major booking
                                platforms, including Booking.com, Expedia,
                                Agoda, Hotels.com, Trivago, and many more...
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="mt-5">
                    <a
                        href="/faq"
                        className="text-base font-semibold text-blue-500 pl-2 hover:underline cursor-pointer"
                    >
                        Read all FAQs
                    </a>
                </div>
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default HotelPriceKiller;
