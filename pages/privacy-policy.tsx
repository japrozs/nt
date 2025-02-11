import { Footer } from "@/components/custom/footer";
import { Meta } from "@/components/custom/meta";
import { Navbar } from "@/components/custom/navbar";
import React from "react";

interface PrivacyPolicyProps {}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({}) => {
    return (
        <div>
            <Navbar />
            <Meta title="Terms & Conditions – Noble Travels" />
            <div
                className="relative w-full"
                style={{
                    height: "40vh",
                    minHeight: "250px",
                    backgroundImage: `url("/img/andybkly.jpg")`,
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
                    <h1 className="text-5xl md:text-7xl mb-4 mx-auto modesto w-full md:max-w-lg">
                        PRIVACY POLICY
                    </h1>
                </div>
            </div>
            <div className="mx-auto max-w-3xl my-10 px-5 md:px-10">
                <p className="text-2xl font-bold mb-2.5">
                    Our commitment to privacy
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Your privacy is important to us. To better protect your
                    privacy we provide this notice explaining our online
                    information practices and the choices you can make about the
                    way your information is collected and used. To make this
                    notice easy to find, we make it available on our homepage
                    and at every point where personally identifiable information
                    may be requested.
                </p>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    The information we collect
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    This notice applies to all information collected or
                    submitted on{" "}
                    <a href="/" className="text-blue-500 hover:underline">
                        www.nobletravels.com
                    </a>
                    . The website offers travel related services such as air
                    tickets, hotels rooms, packages, travel insurances etc. We
                    collect the following personal information to provide the
                    services mentioned above.
                </p>
                <ul className="list-disc space-y-2">
                    <li className="text-smol text-gray-800 font-medium">
                        Name detail
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Address
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Date of Birth
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Passport number
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Email address
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Contact details
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Phone number
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        IP Address
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Frequent Flyer Numbers
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Geographical Location
                    </li>
                </ul>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    The way we use information
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    We use the information you provide about yourself when
                    placing an order only to complete that order. We do not
                    share this information with outside parties except to the
                    extent necessary to complete that order. We will use this
                    information to occasionally inform you of promotions being
                    run on the website. Within each email, you will be provided
                    with an option to opt out from receiving such emails in the
                    future. We use return email addresses to answer the email we
                    receive. Such addresses are not used for any other purpose
                    and are not shared with outside parties. <br />
                    <br />
                    We use non-identifying and aggregate information to better
                    design our website and to share with advertisers. For
                    example, we may tell an advertiser that X number of
                    individuals visited a certain area on our website from a
                    particular geographical area/location/state/country etc, but
                    we would not disclose anything that could be used to
                    identify those individuals. Finally, we never use or share
                    the personally identifiable information provided to us
                    online in ways unrelated to the ones described above without
                    also providing you with an opportunity to opt-out or
                    otherwise prohibit such unrelated uses.
                </p>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Our commitment to data security
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    To prevent unauthorized access, maintain data accuracy, and
                    ensure the correct use of information, we have put in place
                    appropriate physical, electronic, and managerial procedures
                    to safeguard and secure the information we collect online.
                </p>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    How you can access or correct your information
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    You can access all your personally identifiable information
                    that we collect online and maintain by contacting our
                    customer service department. We use this procedure to better
                    safeguard your information. You can correct factual errors
                    in your personally identifiable information by sending us a
                    request that credibly shows error. To protect your privacy
                    and security, we will also take reasonable steps to verify
                    your identity before granting access or making corrections.
                </p>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    How to contact us
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Should you have other questions or concerns about these
                    privacy policies, please email at{" "}
                    <a
                        href="mailto:info@nobletravels.com"
                        className="text-blue-500 hover:underline"
                    >
                        info@nobletravels.com
                    </a>
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
