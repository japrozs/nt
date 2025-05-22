import { Button } from "@/components/custom/button";
import { Footer } from "@/components/custom/footer";
import { InputField } from "@/components/custom/input-field";
import { Meta } from "@/components/custom/meta";
import { Navbar } from "@/components/custom/navbar";
import { TextField } from "@/components/custom/text-field";
import { EMAIL_REGEXP } from "@/lib/utils";
import { Form, Formik } from "formik";
import React, { useState } from "react";
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

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
    const [agreed, setAgreed] = useState(false);
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
                    <h1 className="text-5xl md:text-7xl mb-4 mx-auto modesto w-full md:max-w-sm">
                        HOTEL PRICE KILLER
                    </h1>
                </div>
            </div>
            <div className="w-full md:max-w-6xl mx-auto p-4 md:p-10">
                <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-10">
                    <div className="md:w-7/12">
                        <p className="text-2xl font-bold mb-2">How it works</p>
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
                                        better price.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr className="my-3" />
                        <div className="max-w-3xl mx-auto mt-5 mb-16 px-3 md:px-0">
                            <p className="text-3xl font-bold pl-2 mb-4">
                                Frequently asked questions
                            </p>
                            {/* <p className="text-smol mb-6 text-black font-medium">
                        These kind of tours include itineraries for Senior
                        Citizens, Retirees, Handicapped Travelers, University
                        Tours, MICE Groups
                    </p> */}
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                <AccordionItem
                                    value={`item-1`}
                                    className="border-none"
                                >
                                    <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                        <span className="text-sm text-black pr-2">
                                            What is Hotel Price Killer?
                                        </span>
                                        <div className="ml-auto mr-0"></div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                            Hotel Price Killer is a unique
                                            service by Noble Travels that
                                            guarantees to beat the hotel rates
                                            you find online. Simply submit the
                                            price you found on popular booking
                                            sites like Booking.com, Expedia, or
                                            Agoda, and we’ll work to get you an
                                            even better deal using our exclusive
                                            travel industry rates.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem
                                    value={`item-2`}
                                    className="border-none"
                                >
                                    <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                        <span className="text-sm text-black pr-2">
                                            How does it work?
                                        </span>
                                        <div className="ml-auto mr-0"></div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="px-6 py-3 list-disc space-y-1.5">
                                            <li className="text-gray-800 text-smol font-medium">
                                                Search for your hotel on your
                                                favorite travel site (e.g.,
                                                Booking.com, Expedia).
                                            </li>
                                            <li className="text-gray-800 text-smol font-medium">
                                                Submit the hotel name, location,
                                                travel dates, and the price you
                                                found using our form.
                                            </li>
                                            <li className="text-gray-800 text-smol font-medium">
                                                Our team checks our special
                                                rates and replies within 1–2
                                                hours with a better price.
                                            </li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem
                                    value={`item-3`}
                                    className="border-none"
                                >
                                    <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                        <span className="text-sm text-black pr-2">
                                            Is there any cost to use this
                                            service?
                                        </span>
                                        <div className="ml-auto mr-0"></div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                            No, the Hotel Price Killer service
                                            is completely free of charge. You
                                            only pay for the hotel booking if
                                            you decide to accept our offer.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem
                                    value={`item-4`}
                                    className="border-none"
                                >
                                    <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                        <span className="text-sm text-black pr-2">
                                            How are you able to offer cheaper
                                            rates?
                                        </span>
                                        <div className="ml-auto mr-0"></div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                            We have{" "}
                                            <b>exclusive partnerships</b> with
                                            hotels worldwide and access to
                                            <b>wholesale rates</b> that are not
                                            available to the general public.
                                            This allows us to pass on these
                                            savings to you.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem
                                    value={`item-5`}
                                    className="border-none"
                                >
                                    <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                        <span className="text-sm text-black pr-2">
                                            What booking sites do you compare
                                            against?
                                        </span>
                                        <div className="ml-auto mr-0"></div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                            We can beat rates from all major
                                            booking platforms, including
                                            Booking.com, Expedia, Agoda,
                                            Hotels.com, Trivago, and many
                                            more...
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem
                                    value={`item-6`}
                                    className="border-none"
                                >
                                    <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                        <span className="text-sm text-black pr-2">
                                            How long does it take to get a
                                            reply?
                                        </span>
                                        <div className="ml-auto mr-0"></div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                            We aim to reply within 1–2 hours
                                            during business hours. If you submit
                                            your request after hours, you’ll
                                            receive a response the next business
                                            day.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem
                                    value={`item-7`}
                                    className="border-none"
                                >
                                    <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                        <span className="text-sm text-black pr-2">
                                            Can I submit multiple hotel prices
                                            at once?
                                        </span>
                                        <div className="ml-auto mr-0"></div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                            Yes, you can submit multiple hotel
                                            prices. Simply fill out the form for
                                            each hotel, and we’ll get back to
                                            you with our best rates.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem
                                    value={`item-8`}
                                    className="border-none"
                                >
                                    <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                        <span className="text-sm text-black pr-2">
                                            What if you can’t beat the price?
                                        </span>
                                        <div className="ml-auto mr-0"></div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                            If we cannot beat the price, we’ll
                                            let you know, and you are free to
                                            book with your original source.
                                            However, we usually find better
                                            deals more than 90% of the time.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem
                                    value={`item-9`}
                                    className="border-none"
                                >
                                    <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                        <span className="text-sm text-black pr-2">
                                            Is my information secure?
                                        </span>
                                        <div className="ml-auto mr-0"></div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                            Absolutely. All your information is
                                            handled securely and is only used
                                            for the purpose of finding you the
                                            best hotel rate. We do not share or
                                            sell your data.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem
                                    value={`item-10`}
                                    className="border-none"
                                >
                                    <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                        <span className="text-sm text-black pr-2">
                                            How do I book the hotel if I like
                                            your price?
                                        </span>
                                        <div className="ml-auto mr-0"></div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                            If you like our rate, we will send
                                            you a booking confirmation link
                                            where you can securely complete your
                                            reservation through Noble Travels.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem
                                    value={`item-11`}
                                    className="border-none"
                                >
                                    <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                        <span className="text-sm text-black pr-2">
                                            Can I use this service for group
                                            bookings?
                                        </span>
                                        <div className="ml-auto mr-0"></div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                            Yes! We also handle group bookings.
                                            Just mention the number of rooms and
                                            guests when you submit the form.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem
                                    value={`item-12`}
                                    className="border-none"
                                >
                                    <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                        <span className="text-sm text-black pr-2">
                                            Does the price I submit have to be
                                            available online?
                                        </span>
                                        <div className="ml-auto mr-0"></div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-800 text-smol font-medium px-2 py-3">
                                            Yes, the price you submit must be
                                            publicly available and visible on
                                            any online travel site at the time
                                            of submission. This helps us
                                            validate the rate and confidently
                                            offer you a better deal.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <div className="flex items-center mt-5">
                                <div>
                                    <a
                                        href="/faq"
                                        className="text-base font-semibold text-blue-500 pl-2 hover:underline cursor-pointer"
                                    >
                                        Read all FAQs
                                    </a>
                                </div>
                                <div className="ml-auto mr-0">
                                    <a
                                        href="/hpk-tandc"
                                        className="text-base font-semibold text-blue-500 pl-2 hover:underline cursor-pointer"
                                    >
                                        Terms & Conditions for HPK
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky top-10 w-full mb-14 mt-5 md:mt-0 md:w-5/12">
                        <Formik
                            initialValues={{
                                name: "",
                                hotelName: "",
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
                                        email:
                                            values.email ||
                                            "<NO EMAIL ENTERED>",
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
                                    <InputField
                                        name="name"
                                        placeholder="Dwight Schrute"
                                        label="Name"
                                        fullWidth
                                        shadow
                                    />
                                    <InputField
                                        type="email"
                                        name="email"
                                        placeholder="jim@dundermifflin.com"
                                        fullWidth
                                        label="Email"
                                        shadow
                                    />
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
                                            onChange={() => setAgreed(!agreed)}
                                            className="min-w-4 mr-3 group size-[1rem] flex items-center justify-center rounded-md bg-white border border-gray-300 data-[checked]:border-blue-500 data-[checked]:bg-blue-500"
                                        >
                                            <MdCheck className="hidden text-white text-xs self-center group-data-[checked]:block" />
                                        </Checkbox>
                                        <p className="text-sm font-medium text-gray-700 break-normal">
                                            By checking this box, I state that I
                                            have read and understood the{" "}
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
                                            values.name.trim().length === 0 ||
                                            !values.email.match(EMAIL_REGEXP) ||
                                            values.message.trim().length ===
                                                0 ||
                                            values.hotelName.trim().length ===
                                                0 ||
                                            values.cityAndCountry.trim()
                                                .length === 0 ||
                                            !agreed
                                        }
                                        type="submit"
                                        label="Get my price killed!"
                                        className="mt-3"
                                    />
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default Contact;
