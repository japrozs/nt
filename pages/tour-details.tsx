import { Button } from "@/components/custom/button";
import { Footer } from "@/components/custom/footer";
import { InputField } from "@/components/custom/input-field";
import { Navbar } from "@/components/custom/navbar";
import { TextField } from "@/components/custom/text-field";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { EMAIL_REGEXP } from "@/lib/utils";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Form, Formik } from "formik";
import React from "react";
import { CgDetailsMore } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoFootsteps } from "react-icons/io5";
import { LuCalendarRange, LuTicket } from "react-icons/lu";
import { RiQuestionLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { TOURS } from "../utils/data";

interface TourDetailsProps {}

const TourDetails: React.FC<TourDetailsProps> = ({}) => {
    return (
        <div>
            <Navbar />
            <div
                className="relative w-full"
                style={{
                    height: "30vh",
                    backgroundImage: `url("${TOURS[0].bg_img_url}")`,
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
                        {TOURS[0].tour_name.toUpperCase()}
                    </h1>
                </div>
            </div>
            <div className="w-full md:max-w-[76rem] mx-auto p-4 md:p-10 flex flex-col md:flex-row items-start md:space-x-10">
                <div className="w-full md:w-4/6">
                    <div className="flex flex-wrap items-center space-y-1 md:space-y-0 space-x-3">
                        <div className="min-w-max flex items-center bg-blue-50 border border-blue-600 rounded-full py-0.5 px-2 text-sm text-blue-600">
                            <LuCalendarRange className="text-blue-500 text-lg mr-2.5" />
                            <p className="font-semibold">{TOURS[0].duration}</p>
                        </div>
                        <div className="min-w-max flex items-center bg-blue-50 border border-blue-600 rounded-full py-0.5 px-2 text-sm text-blue-600">
                            <GrLocation className="text-blue-500 text-lg mr-2.5" />
                            <p className="font-semibold">{TOURS[0].location}</p>
                        </div>
                        <div className="min-w-max flex items-center bg-blue-50 border border-blue-600 rounded-full py-0.5 px-2 text-sm text-blue-600">
                            <LuTicket className="text-blue-500 text-lg mr-2.5" />
                            <p className="font-semibold">
                                Min age – {TOURS[0].min_age}
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
                                                __html: TOURS[0].tour_details.replace(
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
                                            {TOURS[0].destinations_covered.map(
                                                (d, idx: number) => (
                                                    <li
                                                        className="text-smolfont-medium text-gray-700"
                                                        key={idx}
                                                    >
                                                        <span className="text-blue-500 font-bold uppercase menlo">
                                                            {d.name}
                                                        </span>{" "}
                                                        – {d.description}
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
                                            {TOURS[0].itinerary_outline.map(
                                                (i, idx: number) => (
                                                    <li
                                                        className="font-medium items-center text-smol text-gray-700"
                                                        key={idx}
                                                    >
                                                        <span className=" text-blue-500 font-bold uppercase menlo">
                                                            DAY {i.day_number}
                                                        </span>{" "}
                                                        – {i.description}
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
                                            {TOURS[0].detailed_itinerary.map(
                                                (i, idx: number) => (
                                                    <AccordionItem
                                                        value={`item ${idx}`}
                                                        className="border-none"
                                                        key={idx}
                                                    >
                                                        <AccordionTrigger className="bg-gray-50 px-3 py-2.5 mb-1 rounded-lg font-semibold hover:no-underline">
                                                            {/* <span className="text-gray-600 text-sm">
                                                                Day{" "}
                                                                {i.day_number}
                                                            </span> */}
                                                            <div className="mr-2 md:mr-0 min-w-max flex items-center bg-blue-50 border border-blue-600 rounded-full py-0.5 px-2 text-xs text-blue-600">
                                                                <p className="font-semibold">
                                                                    Day{" "}
                                                                    {
                                                                        i.day_number
                                                                    }
                                                                </p>
                                                            </div>
                                                            <span className="font-bold text-black">
                                                                {i.title.toUpperCase()}
                                                            </span>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <p
                                                                className="text-gray-600 text-smol font-medium px-2"
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
                                        {TOURS[0].important_information.map(
                                            (i, idx: number) => (
                                                <div key={idx} className="mb-5">
                                                    <p className="text-2xl font-bold mb-3 flex items-center">
                                                        {i.title}
                                                    </p>
                                                    <ul className="px-5 md:pl-0 list-disc space-y-1.5">
                                                        {i.items.map(
                                                            (
                                                                item,
                                                                k: number
                                                            ) => (
                                                                <li
                                                                    className="text-smol font-medium text-gray-700"
                                                                    key={k}
                                                                >
                                                                    {item}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )
                                        )}
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
                                    alert("ok");
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
                                            label="Log in"
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
                                        <p className="text-sm text-gray-500 font-medium mb-3">
                                            Do not hesitage to send us an email.
                                            Our team is made up of experts who
                                            are more than hapy to help you.
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
            <div className="mt-20" />
            <Footer />
        </div>
    );
};

export default TourDetails;
