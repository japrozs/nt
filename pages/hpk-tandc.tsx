import { Footer } from "@/components/custom/footer";
import { Meta } from "@/components/custom/meta";
import { Navbar } from "@/components/custom/navbar";
import React from "react";

interface TermsAndConditionsProps {}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({}) => {
    return (
        <div>
            <Navbar />
            <Meta title="Hotel Price Killer Terms & Conditions – Noble Travels" />
            <div
                className="relative w-full"
                style={{
                    height: "40vh",
                    minHeight: "250px",
                    backgroundImage: `url("/img/nikiemmert.jpg")`,
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
                        HOTEL PRICE KILLER TERMS & CONDITIONS
                    </h1>
                </div>
            </div>
            <div className="mx-auto max-w-3xl my-10 px-5 md:px-10">
                <p className="text-2xl font-bold mb-2.5">Acceptance of Terms</p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    By using this website, you acknowledge that you have{" "}
                    <b>read, understood, and agreed</b> to all the Terms and
                    Conditions outlined herein. If you do not agree with any
                    part of these Terms and Conditions, you are advised to{" "}
                    <b>discontinue use and leave the website immediately</b>.
                </p>
                <p className="text-2xl font-bold mt-10 mb-2.5">Eligibility</p>
                <ul className="list-disc space-y-2">
                    <li className="text-smol text-gray-800 font-medium">
                        The rate you submit must be publicly available online at
                        the time of submission.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        The rate must be for the{" "}
                        <b>
                            same hotel, room type, dates, number of guests, and
                            cancellation policy
                        </b>
                        .
                    </li>
                </ul>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Rate Verification
                </p>
                <ul className="list-disc space-y-2">
                    <li className="text-smol text-gray-800 font-medium">
                        Our team will verify the rate you provided within 1–2
                        hours. We will make every effort to respond promptly,
                        but we cannot guarantee a reply within this timeframe.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        If you are unable to wait for our response, we recommend
                        booking directly with the online platform of your
                        choice.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        If the rate is not available or has changed, we may not
                        be able to beat it.
                    </li>
                </ul>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Best Price Guarantee
                </p>
                <ul className="list-disc space-y-2">
                    <li className="text-smol text-gray-800 font-medium">
                        If we cannot beat the price, we will inform you
                        promptly.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        If we do beat the price, you will receive an email with
                        the booking details and payment link.
                    </li>
                </ul>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Booking Process
                </p>
                <ul className="list-disc space-y-2">
                    <li className="text-smol text-gray-800 font-medium">
                        All bookings are subject to <b>availability</b> and the
                        terms of the hotel.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Prices are only valid at the time of confirmation and
                        may vary if not booked promptly.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Even after offering the rates, all these rates are
                        subject to <b>availability</b> after receiving payment
                        from you and receiving{" "}
                        <b>the final confirmation from the hotel</b>.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Final confirmation is subject to the hotel's own booking
                        policies and availability. Noble Travels is not
                        responsible if the hotel withdraws the rate after we
                        have provided a quote.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        We do not guarantee{" "}
                        <b>
                            early check-in, late check-out, or any additional
                            services
                        </b>{" "}
                        not mentioned explicitly in the booking inclusions.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Once you receive a rate confirmation from Noble Travels,
                        you must complete the booking within{" "}
                        <b>two (2) hours</b>. Rates are subject to change if
                        booking is not completed within this timeframe.
                    </li>
                </ul>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Payment and Confirmation
                </p>
                <ul className="list-disc space-y-2">
                    <li className="text-smol text-gray-800 font-medium">
                        Payment is required to secure the booking.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Once payment is made, a confirmation email will be sent
                        with booking details.
                    </li>
                </ul>

                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Cancellations and Modifications
                </p>
                <ul className="list-disc space-y-2">
                    <li className="text-smol text-gray-800 font-medium">
                        Cancellations and changes are subject to the hotel’s
                        policy.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Noble Travels is not responsible for rate changes after
                        booking is confirmed.
                    </li>
                </ul>

                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Privacy and Data Security
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    All personal information submitted is securely handled and
                    will not be shared with third parties, except for processing
                    your booking.
                </p>

                <p className="text-2xl font-bold mt-10 mb-2.5">Limitations</p>
                <ul className="list-disc space-y-2">
                    <li className="text-smol text-gray-800 font-medium">
                        Hotel Price Killer is only applicable for hotel
                        bookings.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Flights, vacation packages, and other travel services
                        are not included.
                    </li>
                </ul>

                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Disclaimers and Limitations of Liability
                </p>
                <ul className="list-disc space-y-2">
                    <li className="text-smol text-gray-800 font-medium">
                        Noble Travels is not liable for any errors in hotel
                        information, rate changes, or availability issues beyond
                        our control.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        We are not responsible for technical issues, website
                        downtime, or communication failures during the rate
                        verification process.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        If the rate you submit is available online at the time
                        of submission but becomes sold out or increases in price
                        before we can confirm, Noble Travels is not liable for
                        any difference in rates or unavailability.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Noble Travels is not liable for discrepancies arising
                        from incorrect information provided by the customer,
                        including but not limited to hotel names, dates, room
                        types, and number of guests.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Noble Travels shall not be held liable for any direct,
                        indirect, incidental, or consequential damages arising
                        from the use of this service.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Noble Travels is not responsible for service
                        interruptions, system failures, or technology-related
                        issues that may prevent access to Hotel Price Killer.
                    </li>
                </ul>

                <p className="text-2xl font-bold mt-10 mb-2.5">Refund Policy</p>
                <ul className="list-disc space-y-2">
                    <li className="text-smol text-gray-800 font-medium">
                        Refunds are governed by the individual hotel’s
                        cancellation policies.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        If Noble Travels is unable to secure the booking after
                        payment, a full refund will be issued within 10 business
                        days using the original method of payment.
                    </li>
                </ul>

                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Force Majeure Clause
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Noble Travels is not responsible for delays or cancellations
                    due to events outside of our control, including but not
                    limited to natural disasters, government actions, pandemics,
                    or travel restrictions.
                </p>

                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Non-Endorsement Clause
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Noble Travels is an independent travel agency and is not
                    endorsed by or affiliated with any third-party booking
                    platforms. Any references are purely for rate comparison
                    purposes.
                </p>

                <p className="text-2xl font-bold mt-10 mb-2.5">
                    No Guarantee of Availability
                </p>
                <ul className="list-disc space-y-2">
                    <li className="text-smol text-gray-800 font-medium">
                        Hotel Price Killer operates on a first-come,
                        first-served basis. Submission of a hotel rate does not
                        guarantee availability.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Prices may fluctuate during the time of communication
                        and are only secured upon full payment and confirmation.
                    </li>
                </ul>

                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Exchange Rate and Fee Clause
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Rates quoted are based on the current exchange rates at the
                    time of verification. Noble Travels is not responsible for
                    any currency fluctuations or international transaction fees
                    imposed by your credit card issuer.
                </p>

                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Modification of Terms Clause
                </p>
                <ul className="list-disc space-y-2">
                    <li className="text-smol text-gray-800 font-medium">
                        Noble Travels reserves the right to modify these Terms
                        and Conditions at any time without prior notice. It is
                        the user’s responsibility to review these terms
                        regularly.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Continued use of the Hotel Price Killer service after
                        modifications are posted constitutes acceptance of the
                        revised Terms and Conditions.
                    </li>
                </ul>

                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Compliance with Local Laws
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Customers are responsible for ensuring that their travel
                    plans comply with local laws and regulations. Noble Travels
                    is not liable for any issues arising from violations of
                    local travel policies.
                </p>

                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Governing Law and Jurisdiction
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    All terms and disputes are governed by the laws of India,
                    with New Delhi as the exclusive jurisdiction for any legal
                    matters.
                </p>

                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Mandatory Arbitration and Class Action Waiver
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Any disputes shall be resolved through binding arbitration
                    in New Delhi, India. Users waive their right to participate
                    in class action lawsuits or representative actions.
                </p>

                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Severability Clause
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    If any part of these Terms and Conditions is found to be
                    unenforceable, the remaining sections shall remain in full
                    effect.
                </p>

                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Limitation on Claim Period
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Claims must be filed within seven (7) days from the date of
                    the event causing the claim, or they will be considered null
                    and void.
                </p>

                <p className="text-2xl font-bold mt-10 mb-2.5">Grievances</p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    In the event of any grievances regarding our services you
                    may write to us at{" "}
                    <a
                        href="mailto:info@nobletravels.com"
                        className="text-blue-500 hover:underline"
                    >
                        info@nobletravels.com
                    </a>
                    . You can also contact us via WhatsApp at{" "}
                    <a
                        href="tel:+16782759457"
                        className="text-blue-500 hover:underline"
                    >
                        +1 678 275 9457
                    </a>
                    for quick support.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
