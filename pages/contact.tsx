import { Button } from "@/components/custom/button";
import { Footer } from "@/components/custom/footer";
import { InputField } from "@/components/custom/input-field";
import { Navbar } from "@/components/custom/navbar";
import { TextField } from "@/components/custom/text-field";
import { EMAIL_REGEXP } from "@/lib/utils";
import { Form, Formik } from "formik";
import React from "react";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { RiQuestionLine } from "react-icons/ri";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
    return (
        <div>
            <Navbar />
            <div
                className="relative w-full"
                style={{
                    height: "30vh",
                    backgroundImage: `url("/img/suketdedhia.jpg")`,
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
                        CONTACT US
                    </h1>
                </div>
            </div>
            <div className="w-full md:max-w-3xl mx-auto p-4 md:p-10 flex flex-col items-center md:flex-row md:items-start md:space-x-10">
                <div className="md:w-3/6">
                    <p className="flex items-center justify-center text-2xl font-bold mb-0">
                        <RiQuestionLine className="text-gray-400 text-2xl mr-2.5" />
                        Ask your questions
                    </p>
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
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
                                    shadow
                                />
                                <InputField
                                    type="email"
                                    name="email"
                                    placeholder="jim@dundermifflin.com"
                                    label="Email"
                                    shadow
                                />
                                <TextField
                                    name="message"
                                    placeholder="Your message"
                                    label="Message"
                                    shadow
                                />
                                <Button
                                    loading={isSubmitting}
                                    disabled={
                                        values.name.trim().length === 0 ||
                                        !values.email.match(EMAIL_REGEXP) ||
                                        values.message.trim().length === 0
                                    }
                                    type="submit"
                                    label="Submit"
                                    className="mt-3"
                                />
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="mt-5 md:mt-0 md:w-3/6">
                    <div className="border border-dashed border-gray-200 bg-gray-50 text-black rounded-md shadow-sm py-3 px-4">
                        <div className="w-full flex flex-col space-y-1.5">
                            <p className="text-gray-600 text-sm font-medium menlo">
                                🇺🇸 +1 (678) 275-9457
                            </p>
                            <p className="text-gray-600 text-sm font-medium menlo">
                                🇮🇳 +91 8800883595
                            </p>
                            <div className="flex items-start">
                                <HiOutlineMail className="text-xl mr-3 text-gray-400" />
                                <a
                                    href="mailto:info@nobletravels.com"
                                    className="text-gray-600 text-sm font-medium hover:text-blue-500"
                                >
                                    info@nobletravels.com
                                </a>
                            </div>
                            <div className="flex items-start">
                                <HiOutlineLocationMarker className="text-xl mr-3 text-gray-400" />
                                <p className="text-gray-600 text-sm font-medium">
                                    9A/1 205 WEA, Karol Bagh, New Delhi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
