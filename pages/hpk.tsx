import { Button } from "@/components/custom/button";
import { Footer } from "@/components/custom/footer";
import { InputField } from "@/components/custom/input-field";
import { Meta } from "@/components/custom/meta";
import { Navbar } from "@/components/custom/navbar";
import { TextField } from "@/components/custom/text-field";
import { FaUnlock } from "react-icons/fa";
import { EMAIL_REGEXP } from "@/lib/utils";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { TbDisabled, TbWorldSearch } from "react-icons/tb";
import { HiArrowDown, HiArrowRight, HiCursorClick } from "react-icons/hi";
import { BiSolidOffer } from "react-icons/bi";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@headlessui/react";
import {
    MdCheck,
    MdOutlineCorporateFare,
    MdOutlineLooksOne,
} from "react-icons/md";
import TestimonialSlider from "@/components/custom/testimonial-slider";
import LogoSlider from "@/components/custom/logo-slider";
import { Popper } from "@/components/custom/popper";
import { RiQuestionLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { PiStudentBold } from "react-icons/pi";
import { BsEyeglasses } from "react-icons/bs";
import { LuLuggage } from "react-icons/lu";
import { IoLockOpen } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";
import { FileInputField } from "@/components/custom/file-input-field";

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
        quote: "I found a great deal online—but Noble Travels still beat it. Saved $120 on a 5-star hotel in Zurich.",
        name: "SPG",
        role: "New Delhi",
        imgSrc: "/img/step-2.png",
    },
    {
        quote: "I wasn’t sure at first, but after using Hotel Price Killer twice, I won’t book hotels anywhere else.",
        name: "Meera V.",
        role: "Pune",
        imgSrc: "/img/step-2.png",
    },
    {
        quote: "Their response was super quick and personal. It didn’t feel like a travel company — more like a friend helping me book.",
        name: "Julien",
        role: "Amsterdam",
        imgSrc: "/img/step-2.png",
    },
    {
        quote: "I had a rate from Booking.com, but they offered a better deal with free breakfast. That’s real value.",
        name: "J. Bradstock",
        role: "Fremont",
        imgSrc: "/img/step-2.png",
    },
    {
        quote: "I’ve booked with them for years. CEO of our company trust Noble for a reason — they deliver.”",
        name: "Karan S. – Executive Assistant",
        role: "Dubai",
        imgSrc: "/img/step-2.png",
    },
    {
        quote: "As a diplomat, I travel often. Noble Travels has always managed to get me the best rates and professional service.”",
        name: "Anonymous",
        role: "Government Official",
        imgSrc: "/img/step-2.png",
    },
    {
        quote: "Smooth, honest, and fast. I submitted my hotel price, and they sent me a better one before lunch.",
        name: "Jason M.",
        role: "Los Angeles",
        imgSrc: "/img/step-2.png",
    },
    {
        quote: "Even at the last minute, they managed to beat my Agoda rate and confirmed it within an hour.",
        name: "Tanvi P.",
        role: "Bangalore",
        imgSrc: "/img/step-2.png",
    },
];

const HotelPriceKiller: React.FC<HotelPriceKillerProps> = ({}) => {
    const [agreed, setAgreed] = useState(false);
    const [_activeIndex, setActiveIndex] = useState(0);
    const [file, setFile] = useState<File | null>(null);

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
                    backgroundImage: `url("/img/asadphoto-second.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-10"
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
            {/* <p className="text-5xl modesto flex justify-center mt-10 mx-auto">
                HOW IT WORKS?
            </p> */}
            <p className="px-4 md:px-0 text-xl md:text-3xl font-bold mt-10 text-center">
                If you can find it online, we can beat it – Guaranteed!
            </p>
            <div className="flex flex-col md:flex-row md:items-stretch items-center justify-center space-y-8 md:space-y-0 mb-16 md:space-x-8">
                <div className="overflow-hidden max-w-[20rem]">
                    <img
                        className="size-64 mx-auto"
                        src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/SearchDesktop.svg"
                    />
                    <p className="mt-[-30px] text-lg font-bold text-center">
                        Search Online
                    </p>
                    <p className="text-sm text-gray-500 font-medium text-center">
                        Search for your hotel on any travel website (e.g.,
                        Booking.com, Expedia, Agoda, or any other site
                        globally).
                    </p>
                </div>
                <div className="overflow-hidden max-w-[20rem]">
                    <img
                        className="size-64 mx-auto"
                        src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/CompareDesktop.svg"
                    />
                    <div className="mt-[-30px] flex justify-center items-center mx-auto">
                        <p className="text-lg font-bold">Submit a rate</p>
                        <Popper
                            panelShadow
                            button={() => (
                                <RiQuestionLine
                                    className={`transition-all cursor-help ml-2 text-lg text-gray-400 hover:text-blue-600`}
                                />
                            )}
                            panel={() => (
                                <div className="bg-white py-2.5 px-3 w-64">
                                    <p className="text-sm font-medium text-gray-700">
                                        <span className="text-black font-semibold">
                                            Important
                                        </span>{" "}
                                        – The price you want us to beat must be
                                        currently available and visible online
                                        at the time of submission.
                                    </p>
                                </div>
                            )}
                        />
                    </div>
                    <p className="text-sm text-gray-500 font-medium text-center">
                        Submit the hotel name, location, travel dates, and the
                        price you found using our form.
                    </p>
                    <Link
                        to="submit-rate"
                        smooth={true}
                        duration={300}
                        offset={-25}
                    >
                        <button className="mx-auto bg-blue-700/90 hover:bg-blue-700 font-semibold transition mt-7 flex items-center text-white rounded-full py-2 px-4 font-medium">
                            Submit your rate now
                            <HiArrowDown className="ml-2.5 text-sm" />
                        </button>
                    </Link>
                </div>
                <div className="overflow-hidden max-w-[20rem]">
                    <img
                        className="size-64 mx-auto"
                        src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/SaveDesktop.svg"
                    />
                    <p className="mt-[-30px] text-lg font-bold text-center">
                        Get a better offer
                    </p>
                    <p className="text-sm text-gray-500 font-medium text-center">
                        Our team checks our special rates and replies within 1–2
                        hours with a better price. The price you want us to beat
                        must be currently available and visible online.
                    </p>
                </div>
            </div>
            <div className="mb-16">
                {/* <div className="mt-7 mb-[-10px]"> */}
                <LogoSlider />
            </div>
            <div className="relative text-center mb-7">
                {/* <div className="relative border-t border-gray-200 border-dashed text-center py-10"> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto text-center">
                    <div className="bg-white border border-gray-200 rounded-lg py-5 px-6 flex items-center">
                        <div className="p-3.5 border border-blue-500 rounded-full bg-blue-200">
                            <LuLuggage className="text-4xl text-blue-500" />
                        </div>
                        <div className="ml-5 text-left">
                            <p className="text-3xl modesto mb-1">
                                TRUSTED SINCE 1996
                            </p>
                            <p className="text-gray-700 text-sm font-medium">
                                Trusted by CEOs, diplomats, and global
                                travellers — delivering reliable, discreet
                                service for nearly three decades.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg py-5 px-6 flex items-center">
                        <div className="p-3.5 border border-purple-500 rounded-full bg-purple-200">
                            <IoLockOpen className="text-4xl text-purple-500" />
                        </div>
                        <div className="ml-5 text-left">
                            <p className="text-3xl modesto mb-1">
                                GET INSIDER PRICES
                            </p>
                            <p className="text-gray-700 text-sm font-medium">
                                Access VIP, member-only hotel rates and save 10%
                                or more through our direct partnerships with top
                                hotels.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg py-5 px-6 flex items-center">
                        <div className="p-3.5 border border-emerald-500 rounded-full bg-emerald-200">
                            <GrPowerCycle className="text-4xl text-emerald-500" />
                        </div>
                        <div className="ml-5 text-left">
                            <p className="text-3xl modesto mb-1">
                                FAST, PERSONAL SERVICE
                            </p>
                            <p className="text-gray-700 text-sm font-medium">
                                Enjoy dedicated support with 1–2 hour response
                                times — plus our lowest price guarantee on every
                                booking.
                            </p>
                        </div>
                    </div>
                    {/* <div>
                        <h3 className="text-6xl font-extrabold text-blue-500 mb-4">
                            2
                        </h3>
                        <p className="text-black text-base font-medium">
                            Special rates directly from hotel partnerships
                        </p>
                    </div>
                    <div>
                        <h3 className="text-6xl font-extrabold text-blue-500 mb-4">
                            3
                        </h3>
                        <p className="text-black text-base font-medium">
                            Personalized service with quick turnaround
                        </p>
                    </div> */}
                </div>
            </div>

            {/* <div className="relative border-t border-gray-200 border-dashed text-center py-10">
                {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div> */}
            {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
                    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[410px] w-[610px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
                </div> 

                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#dbeafe_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <p className="text-5xl modesto mb-10">WHY CHOOSE US?</p>
                <div className="flex flex-wrap items-start justify-center gap-y-16 md:gap-x-10">
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <TbDisabled className="text-7xl text-blue-500" />
                        <p className="text-2xl font-bold mb-3">
                            Disabled Travel
                        </p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            Serving since 1996 – trusted by CEOs, diplomats,
                            ambassadors and more
                        </p>
                        <a href="/accessibility">
                            <button className="bg-black/90 text-sm hover:bg-black transition mt-3 flex items-center mx-auto text-white rounded-full py-2 px-6 font-medium">
                                Check it out
                            </button>
                        </a>
                    </div>
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <BsEyeglasses className="text-6xl mb-2 text-blue-500" />
                        <p className="text-2xl font-bold mb-3">
                            Senior - Friendly Tours
                        </p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            Special rates directly from hotel partnerships
                        </p>
                        <a href="/senior-travel">
                            <button className="bg-black/90 text-sm hover:bg-black transition mt-3 flex items-center mx-auto text-white rounded-full py-2 px-6 font-medium">
                                Check it out
                            </button>
                        </a>
                    </div>
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <MdOutlineCorporateFare className="text-6xl mb-2 text-blue-500" />
                        <p className="text-2xl font-bold mb-3">
                            Corporate and MICE
                        </p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            Personalized service with quick turnaround
                        </p>
                        <a href="/corporate-travel">
                            <button className="bg-black/90 text-sm hover:bg-black transition mt-3 flex items-center mx-auto text-white rounded-full py-2 px-6 font-medium">
                                Check it out
                            </button>
                        </a>
                    </div>
                    <div className="max-w-[18rem] flex flex-col items-center">
                        <PiStudentBold className="text-6xl mb-2 text-blue-500" />
                        <p className="text-2xl font-bold mb-3">
                            Student Travel Program
                        </p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            Trusted by thousands of travellers
                        </p>
                        <a href="/student-travel">
                            <button className="bg-black/90 text-sm hover:bg-black transition mt-3 flex items-center mx-auto text-white rounded-full py-2 px-6 font-medium">
                                Check it out
                            </button>
                        </a>
                    </div>
                </div>
            </div> */}
            <div
                id="submit-rate"
                className="border-b border-gray-200 border-dashed"
            >
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
                            rateFound: "",
                            checkin: "",
                            checkout: "",
                            site: "",
                            numRooms: "",
                            email: "",
                            message: "",
                        }}
                        onSubmit={async (values, { resetForm }) => {
                            // onSubmit={async (values, { setErrors }) => {
                            console.log("values :: ", values);
                            const data = await axios.get(
                                "https://api.ipdata.co?api-key=46e261b086e97ba2279dddae922392ee28434240c7632389f2926203"
                            );

                            const formData = new FormData();
                            formData.append("name", values.name);
                            formData.append(
                                "email",
                                values.email || "<NO EMAIL ENTERED>"
                            );
                            formData.append("hotelName", values.hotelName);
                            formData.append("contact", values.contact);
                            formData.append("site", values.site);
                            formData.append("checkin", values.checkin);
                            formData.append("checkout", values.checkout);
                            formData.append("rateFound", values.rateFound);
                            formData.append(
                                "cityAndCountry",
                                values.cityAndCountry
                            );
                            formData.append("numGuests", values.numGuests);
                            formData.append("numRooms", values.numRooms);
                            formData.append("message", values.message);
                            formData.append(
                                "ipAddress",
                                JSON.stringify(data.data)
                            );
                            if (file) {
                                formData.append("screenshot", file);
                            }

                            const res = await axios.post(
                                `${window.location.origin}/api/hpk`,
                                formData,
                                {
                                    headers: {
                                        "Content-Type": "multipart/form-data",
                                    },
                                }
                            );

                            console.log("res.data :: ", res.data);
                            if (res.data.status == "OK") {
                                toast.success(
                                    "Thank you! We are working to beat that price. Expect a reply soon."
                                );
                                resetForm();
                            } else {
                                toast.error("Could not submit form");
                            }
                        }}
                    >
                        {({ values, isSubmitting }) => (
                            <Form className="w-full">
                                <div className="flex flex-col md:flex-row items-start md:space-x-10">
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
                                                    type="tel"
                                                    name="contact"
                                                    placeholder="Contact"
                                                    fullWidth
                                                    maxLength={13}
                                                    label="Mobile number"
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
                                        <div className="flex items-end space-x-3">
                                            <div className="w-1/2">
                                                <InputField
                                                    type="date"
                                                    name="checkin"
                                                    placeholder="MM/DD/YYYY"
                                                    label="Check-in date"
                                                    fullWidth
                                                    shadow
                                                />
                                            </div>
                                            <div className="w-1/2">
                                                <InputField
                                                    type="date"
                                                    name="checkout"
                                                    placeholder="MM/DD/YYYY"
                                                    label="Check-in date"
                                                    fullWidth
                                                    shadow
                                                />
                                            </div>
                                        </div>
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
                                        <div className="flex items-end space-x-3">
                                            <div className="w-1/2">
                                                <InputField
                                                    name="rateFound"
                                                    placeholder="245.99"
                                                    label="Rate found (per night)"
                                                    fullWidth
                                                    shadow
                                                />
                                            </div>
                                            <div className="w-1/2">
                                                <FileInputField
                                                    label="Screenshot (optional)"
                                                    name="screenshot"
                                                    fullWidth
                                                    shadow
                                                    setFile={setFile}
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
