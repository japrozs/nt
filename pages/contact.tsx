import { Button } from "@/components/custom/button";
import { Footer } from "@/components/custom/footer";
import { InputField } from "@/components/custom/input-field";
import { Meta } from "@/components/custom/meta";
import { Navbar } from "@/components/custom/navbar";
import { TextField } from "@/components/custom/text-field";
import { EMAIL_REGEXP } from "@/lib/utils";
import { Form, Formik } from "formik";
import React from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
    return (
        <div>
            <Navbar />
            <Meta title="Contact Us – Noble Travels" />
            <div
                className="relative w-full"
                style={{
                    height: "40vh",
                    minHeight: "250px",
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
            <div className="w-full md:max-w-6xl mx-auto p-4 md:p-10">
                <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-10">
                    <div className="md:w-7/12">
                        <p className="text-2xl font-bold mb-2">
                            Get in touch with us
                        </p>
                        <p className="text-gray-800 font-medium text-smol mb-3">
                            For over 25 years, we’ve been providing enriching
                            travel experiences for students, including
                            specialized tours for university exchange programs
                            and student groups. Our educational tours offer
                            students an unparalleled opportunity to explore
                            India’s vast history, culture, and environment. From
                            historical explorations in Delhi and Agra to
                            environmental studies in the Himalayas, our programs
                            are designed to blend academic learning with
                            immersive travel experiences.
                        </p>
                        <p className="text-gray-800 font-medium text-smol">
                            While you wait from a response from our side (it's
                            usually pretty quick), please{" "}
                            <a
                                href="/faq"
                                className="text-blue-500 hover:underline font-medium"
                            >
                                read our existing FAQs
                            </a>
                        </p>
                    </div>
                    <div className="w-full mt-5 md:mt-0 md:w-5/12">
                        <Formik
                            initialValues={{
                                name: "",
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
                                    `${window.location.origin}/api/email`,
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
                                        "Contact form sent successfully"
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
                                        fullWidth
                                        label="Email"
                                        shadow
                                    />
                                    <TextField
                                        name="message"
                                        fullWidth
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
                        {/* <div className="border border-dashed border-gray-200 bg-gray-50 text-black rounded-md shadow-sm py-3 px-4">
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
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default Contact;
