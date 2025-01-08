import { EMAIL_REGEXP } from "@/lib/utils";
import { POPULAR_PACKAGES } from "@/utils/data";
import { normalCapitalize } from "@/utils/utils";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import { CgDetailsMore } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoFootsteps } from "react-icons/io5";
import { LuCalendarRange, LuTicket } from "react-icons/lu";
import { RiQuestionLine, RiShare2Line } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { toast, Toaster } from "sonner";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import { Button } from "./button";
import { InputField } from "./input-field";
import { TextField } from "./text-field";

interface TourInfoProps {
    pkg: (typeof POPULAR_PACKAGES)[0];
}

export const TourInfo: React.FC<TourInfoProps> = ({ pkg }) => {
    return (
        <>
            <div
                className="relative w-full"
                style={{
                    height: "40vh",
                    minHeight: "250px",
                    backgroundImage: `url("${pkg.img_url}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Share Itinerary Button */}
                <div
                    className="absolute top-4 bg-blue-600 py-1 px-2 rounded-sm right-4 min-w-max flex items-center group cursor-pointer"
                    style={{ zIndex: 3 }}
                >
                    <RiShare2Line className="text-gray-300 text-lg mr-1.5" />
                    <p
                        onClick={async () => {
                            if (navigator.share) {
                                try {
                                    await navigator.share({
                                        text: `${normalCapitalize(
                                            pkg.name
                                        )} – Noble Travels`,
                                        url: window.location.href,
                                    });
                                } catch (err) {
                                    console.log(
                                        "navigator.share error :: ",
                                        err
                                    );
                                }
                            } else {
                                toast.error(
                                    "Sharing is not supported in your browser."
                                );
                            }
                        }}
                        className="font-semibold text-gray-200 hover:text-white text-sm group-hover:underline"
                    >
                        Share
                    </p>
                </div>
                {/* Black Overlay */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-20"
                    style={{ zIndex: 1 }}
                />

                {/* Center Content */}
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-1 w-full md:px-4"
                    style={{ zIndex: 2 }}
                >
                    <h1 className="drop-shadow-2xl text-5xl md:text-7xl mb-4 mx-auto modesto w-full md:max-w-lg">
                        {pkg.name.toUpperCase()}
                    </h1>
                </div>
            </div>

            <div className="w-full md:max-w-[76rem] mx-auto p-4 md:p-10 flex flex-col md:flex-row items-start md:space-x-10">
                <div className="w-full md:w-4/6">
                    <div className="flex flex-wrap items-center gap-y-1.5 md:gap-y-0 gap-x-3">
                        <div className="min-w-max flex items-center bg-blue-50 border border-blue-600 rounded-full py-0.5 px-2 text-sm text-blue-600">
                            <LuCalendarRange className="text-blue-500 text-lg mr-2.5" />
                            <p className="font-semibold">{pkg.duration}</p>
                        </div>
                        <div className="min-w-max flex items-center bg-blue-50 border border-blue-600 rounded-full py-0.5 px-2 text-sm text-blue-600">
                            <GrLocation className="text-blue-500 text-lg mr-2.5" />
                            <p className="font-semibold">
                                {normalCapitalize(pkg.tour.location)}
                            </p>
                        </div>
                        <div className="min-w-max flex items-center bg-blue-50 border border-blue-600 rounded-full py-0.5 px-2 text-sm text-blue-600">
                            <LuTicket className="text-blue-500 text-lg mr-2.5" />
                            <p className="font-semibold">
                                Min age – {pkg.tour.min_age}
                            </p>
                        </div>
                        <div className="min-w-max flex items-center bg-blue-50 border border-blue-600 rounded-full py-0.5 px-2 text-sm text-blue-600">
                            <GrLocation className="text-blue-500 text-lg mr-2.5" />
                            <p className="font-semibold">
                                {normalCapitalize(pkg.tour.country)}
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <TabGroup>
                            <TabList className="mt-6 flex gap-4 border-b border-gray-200 overflow-x-scroll">
                                <Tab className="min-w-max py-1.5 px-2 md:px-6 flex items-center text-sm/6 border-b-[1.5px] border-black border-opacity-0 font-semibold text-gray-600 data-[selected]:text-black focus:outline-none data-[selected]:border-opacity-100">
                                    <CgDetailsMore className="mr-2.5 text-lg" />
                                    Details
                                </Tab>
                                <Tab className="min-w-max py-1.5 px-6 flex items-center text-sm/6 border-b-[1.5px] border-black border-opacity-0 font-semibold text-gray-600 data-[selected]:text-black focus:outline-none data-[selected]:border-opacity-100">
                                    <IoFootsteps className="mr-2.5" />
                                    Itinerary
                                </Tab>
                                {/* <Tab className="py-1.5 px-6 flex items-center text-sm/6 border-b-[1.5px] border-black border-opacity-0 font-semibold text-gray-600 data-[selected]:text-black focus:outline-none data-[selected]:border-opacity-100">
                                                <TbBrandGooglePhotos className="mr-2.5 text-lg" />
                                                Photos
                                            </Tab> */}
                                <Tab className="min-w-max py-1.5 px-6 flex items-center text-sm/6 border-b-[1.5px] border-black border-opacity-0 font-semibold text-gray-600 data-[selected]:text-black focus:outline-none data-[selected]:border-opacity-100">
                                    <IoMdInformationCircleOutline className="mr-2.5 text-lg" />
                                    Important Information
                                </Tab>
                            </TabList>
                            <TabPanels className="">
                                <TabPanel>
                                    <div className="py-4">
                                        <p className="text-2xl font-bold mb-3 flex items-center">
                                            <TbListDetails className="mr-3 text-gray-400" />
                                            Tour details
                                        </p>
                                        <p
                                            className="text-gray-700 font-medium text-smol"
                                            dangerouslySetInnerHTML={{
                                                __html: pkg.tour.tour_details.replace(
                                                    /\n/g,
                                                    "<br />"
                                                ),
                                            }}
                                        />
                                        <hr className="mt-5 mb-4" />
                                        <p className="text-2xl font-bold mb-3 flex items-center">
                                            <GrLocation className="mr-3 text-gray-400" />
                                            Destinations covered
                                        </p>
                                        <ul className="px-5 md:pl-0 list-disc space-y-3">
                                            {pkg.tour.destinations_covered.map(
                                                (d: any, idx: number) => (
                                                    <li
                                                        className="text-smol font-medium text-gray-700"
                                                        key={idx}
                                                    >
                                                        <span className="text-blue-500 font-bold uppercase menlo">
                                                            {d.name}
                                                        </span>{" "}
                                                        – 
                                                        {d.description}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="py-4">
                                        <p className="text-2xl font-bold mb-3 flex items-center">
                                            <GrLocation className="mr-3 text-gray-400" />
                                            Itinerary outline
                                        </p>
                                        <ul className="px-5 md:pl-0 mt-1 list-disc space-y-3">
                                            {pkg.tour.itinerary_outline.map(
                                                (i: any, idx: number) => (
                                                    <li
                                                        className="font-medium items-center text-smol text-gray-700"
                                                        key={idx}
                                                    >
                                                        <span className=" text-blue-500 font-bold uppercase menlo">
                                                            DAY {idx + 1}
                                                        </span>{" "}
                                                        – 
                                                        {normalCapitalize(
                                                            i.title
                                                        )}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <p className="mt-8 text-2xl font-bold mb-3 flex items-center">
                                            <CgDetailsMore className="mr-3 text-gray-400" />
                                            Detailed Itinerary
                                        </p>
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="w-full"
                                        >
                                            {pkg.tour.itinerary_outline.map(
                                                (i: any, idx: number) => (
                                                    <AccordionItem
                                                        value={`item ${idx}`}
                                                        className="border-none"
                                                        key={idx}
                                                    >
                                                        <AccordionTrigger className="group flex items-center w-full text-left px-3 py-2.5 border-b border-dashed border-gray-300 rounded-lg font-semibold hover:no-underline">
                                                            <span className="min-w-max text-gray-700 text-sm font-medium menlo">
                                                                {/* <span className="bg-gray-50 rounded-lg py-0.5 px-1 mr-2 text-gray-600 text-xs"> */}
                                                                Day {idx + 1}
                                                            </span>
                                                            <span className="text-gray-400 font-normal menlo mx-3">
                                                                ––
                                                            </span>
                                                            <span className="text-sm text-black">
                                                                {normalCapitalize(
                                                                    i.title.toUpperCase()
                                                                )}
                                                            </span>
                                                            <div className="ml-auto mr-0"></div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <p
                                                                className="text-gray-800 text-smol font-medium p-5"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: i.description.replace(
                                                                        /\n/g,
                                                                        "<br />"
                                                                    ),
                                                                }}
                                                            />
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                )
                                            )}
                                        </Accordion>
                                    </div>
                                </TabPanel>
                                {/* <TabPanel>
                                                <div className="flex items-stretch space-x-5">
                                                    photos
                                                </div>
                                            </TabPanel> */}
                                <TabPanel>
                                    <div className="pt-4">
                                        <p className="text-2xl font-bold mb-3 flex items-center">
                                            Important Information
                                        </p>
                                        <ul className="px-5 md:pl-0 list-disc space-y-1.5">
                                            {pkg.tour.important_information.map(
                                                (i: any, idx: number) => (
                                                    <li
                                                        key={idx}
                                                        className="text-smol font-medium text-gray-700"
                                                    >
                                                        {i}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </div>
                </div>
                <div className="w-full md:w-2/6">
                    <div className="flex items-start">
                        <RiQuestionLine className="hidden md:block text-gray-400 text-2xl min-w-7 mt-1 mr-2.5" />
                        <div className="border-t border-gray-200 border-dashed md:border-none mt-5 pt-5 md:pt-0 md:mt-0 flex flex-col items-center md:items-baseline">
                            <p className="flex items-center text-2xl font-bold mb-0">
                                <RiQuestionLine className="block md:hidden text-gray-400 text-2xl mr-2.5" />
                                Enquire about the tour
                            </p>
                            <Formik
                                initialValues={{
                                    name: "",
                                    email: "",
                                    contact: "",
                                    subject: "",
                                    message: "",
                                }}
                                onSubmit={async (values) => {
                                    // onSubmit={async (values, { setErrors }) => {
                                    console.log("values :: ", values);
                                    const data = await axios.get(
                                        "https://api.ipdata.co?api-key=46e261b086e97ba2279dddae922392ee28434240c7632389f2926203"
                                    );

                                    const res = await axios.post(
                                        `${window.location.origin}/api/inquiry`,
                                        {
                                            name: values.name,
                                            email: values.email,
                                            contact: values.contact,
                                            subject: values.subject,
                                            message: values.message,
                                            ipAddress: data.data,
                                        }
                                    );
                                    console.log(
                                        "res.data.status :: ",
                                        res.data.status,
                                        res.data.status === "OK"
                                    );
                                    if (res.data.status == "OK") {
                                        toast.success(
                                            "Inquiry form sent successfully"
                                        );
                                    } else {
                                        toast.error("Could not send form");
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
                                            label="Email"
                                            fullWidth
                                            shadow
                                        />
                                        <InputField
                                            type="number"
                                            name="contact"
                                            placeholder="Contact with country code"
                                            label="Contact"
                                            fullWidth
                                            shadow
                                        />
                                        <InputField
                                            name="subject"
                                            placeholder="Subject"
                                            label="Subject"
                                            fullWidth
                                            shadow
                                        />
                                        <TextField
                                            name="message"
                                            placeholder="Your message"
                                            label="Message"
                                            fullWidth
                                            shadow
                                        />
                                        <Button
                                            loading={isSubmitting}
                                            disabled={
                                                values.name.trim().length ===
                                                    0 ||
                                                !values.email.match(
                                                    EMAIL_REGEXP
                                                ) ||
                                                values.subject.trim().length ===
                                                    0 ||
                                                values.message.trim().length ===
                                                    0
                                            }
                                            type="submit"
                                            label="Submit"
                                            className="mt-3"
                                        />
                                    </Form>
                                )}
                            </Formik>
                            {/* <hr className="border-gray-200 my-5 border-dashed" /> */}
                            <div className="mt-10 border border-dashed border-gray-200 bg-gray-50 text-black rounded-md shadow-sm py-4 px-4">
                                <div className="flex items-start">
                                    <RiQuestionLine className="text-gray-500 min-w-5 text-2xl mt-0.5 mr-2.5" />
                                    <div>
                                        <p className="text-lg font-semibold mb-0">
                                            Have a question?
                                        </p>
                                        <p className="text-sm text-gray-600 font-medium mb-3">
                                            Do not hesitate to send us an email.
                                            Our team of experts will be more
                                            than happy to help you.
                                        </p>
                                        <a
                                            href="mailto:info@nobletravels.com"
                                            className="text-smol font-medium text-blue-500 hover:underline transition"
                                        >
                                            info@nobletravels.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    );
};
