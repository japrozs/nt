import { Footer } from "@/components/custom/footer";
import { Meta } from "@/components/custom/meta";
import { Navbar } from "@/components/custom/navbar";
import React from "react";

interface TermsAndConditionsProps {}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({}) => {
    return (
        <div>
            <Navbar />
            <Meta title="Terms & Conditions – Noble Travels" />
            <div
                className="relative w-full"
                style={{
                    height: "40vh",
                    minHeight: "250px",
                    backgroundImage: `url("/img/iriser.jpg")`,
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
                        TERMS & CONDITIONS
                    </h1>
                </div>
            </div>
            <div className="mx-auto max-w-3xl my-10 px-5 md:px-10">
                <p className="text-2xl font-bold mb-2.5">Terms & Conditions</p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    This web site (the "Site") is published and maintained by
                    Noble Travels , a company incorporated and existing in
                    accordance with the laws of the Republic of India. When you
                    access, browse or use this Site you accept, without
                    limitation or qualification, the terms and conditions set
                    forth below. When you access any subsite (whether belonging
                    to an 'associate' of noble travels or otherwise) through
                    this site, then such subsite may have its own terms and
                    conditions of use which is specific to such subsite.
                    Subsites may contain such additional terms and conditions of
                    use as may be set out in such subsite.
                </p>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Site and Its Contents
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    This Site is only for your personal use. You shall not
                    distribute, exchange, modify, sell or transmit anything you
                    copy from this Site, including but not limited to any text,
                    images, audio and video, for any business, commercial or
                    public purpose.
                    <br />
                    <br />
                    As long as you comply with the terms of these Terms and
                    Conditions of Use, noble travels grants you a non-exclusive,
                    non-transferable, limited right to enter, view and use this
                    Site. You agree not to interrupt or attempt to interrupt the
                    operation of this Site in any way.
                    <br />
                    <br />
                    Access to certain areas of the Site may only be available to
                    registered members. To become a registered member, you may
                    be required to answer certain questions. Answers to such
                    questions may be mandatory and/or optional. You represent
                    and warrant that all information you supply to us, about
                    yourself, and others, is true and accurate.
                </p>
                <p className="text-2xl font-bold mt-10 mb-2.5">Visa</p>
                <ul className="list-disc space-y-2">
                    <li className="text-smol text-gray-800 font-medium">
                        Visa Approval is strictly subject to immigration solely.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        If hotel, flight, package and/or any other travel
                        services is booked already and visa approval is delayed
                        by immigration then we will not be liable for the
                        cancellation.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Visa cannot be clear once it rejected by Immigration and
                        amount is non-refundable.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        In case of Overstay on visa, penalty of Official actual
                        fee + additional charges of USD 1500 will be imposed and
                        must be payable by Customer/Agent
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        In case passenger involved in any illegal activity, all
                        the actual official fines & additional charges penalties
                        must be payable by Customer/Agent
                    </li>
                </ul>
                <p className="text-2xl font-bold mt-10 mb-2.5">Ownership</p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    All materials on this Site, including but not limited to
                    audio, images, software, text, icons and such like (the
                    "Content"), are protected by copyright under international
                    conventions and copyright laws. You cannot use the Content,
                    except as specified herein. You agree to follow all
                    instructions on this Site limiting the way you may use the
                    Content.
                    <br />
                    <br />
                    There are a number of proprietary logos, service marks and
                    trademarks found on this Site whether owned/used by noble
                    travels or otherwise. By displaying them on this Site, noble
                    travels is not granting you any license to utilize those
                    proprietary logos, service marks, or trademarks. Any
                    unauthorized use of the Content may violate copyright laws,
                    trademark laws, the laws of privacy and publicity, and civil
                    and criminal statutes.
                    <br />
                    <br />
                    You may download such copy/copies of the Content to be used
                    only by you for your personal use at home unless the subsite
                    you are accessing states that you may not. If you download
                    any Content from this Site, you shall not remove any
                    copyright or trademark notices or other notices that go with
                    it.
                </p>
                <p className="text-2xl font-bold mt-10 mb-2.5">Others rights</p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    If this Site contains bulletin boards, chat rooms, access to
                    mailing lists or other message or communication facilities,
                    you agree to use the same only to send and receive messages
                    and materials that are proper and related thereto. By way of
                    example and not as a limitation, you agree that when using
                    the Site or any facility available herefrom, you shall not
                    do any of the following:
                </p>
                <ul className="list-disc space-y-2">
                    <li className="text-smol text-gray-800 font-medium">
                        Defame, abuse, harass, stalk, threaten or otherwise
                        violate the legal rights (such as rights of privacy and
                        publicity) of others
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Publish, post, distribute or disseminate any defamatory,
                        infringing, obscene, indecent or unlawful material or
                        information
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Upload or attach files that contain software or other
                        material protected by intellectual property laws (or by
                        rights of privacy and publicity) unless the User owns or
                        controls the rights thereto or has received all consents
                        therefor as may be required by law
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Upload or attach files that contain viruses, corrupted
                        files or any other similar software or programs that may
                        damage the operation of another's computer
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Delete any author attributions, legal notices or
                        proprietary designations or labels in any file that is
                        uploaded
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Falsify the origin or source of software or other
                        material contained in a file that is uploaded
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Advertise or offer to sell any goods or services, or
                        conduct or forward surveys, contests or chain letters,
                        or download any file posted by another user of a Forum
                        that the User knows, or reasonably should know, cannot
                        be legally distributed in such manner.
                    </li>
                </ul>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    User's Material
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    You are prohibited from posting or transmitting any
                    defamatory, libellous, obscene, pornographic, profane,
                    threatening or unlawful material or any material that could
                    constitute or encourage conduct that would be considered a
                    criminal offense or give rise to civil liability, or
                    otherwise violate any law.
                    <br />
                    <br />
                    Noble Travels assumes no liability or responsibility arising
                    from the contents of any communications containing any
                    defamatory, erroneous, inaccurate, libellous, obscene or
                    profane material. Noble Travels may change, edit, or remove
                    any user material or conversations that are illegal,
                    indecent, obscene or offensive, or that violates noble
                    travels' policies in any way.
                    <br />
                    <br />
                    Noble Travels will fully cooperate with any law enforcement
                    authorities or court order requesting or directing Noble
                    Travels to disclose the identity of anyone posting such
                    materials.
                </p>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Noble Travels Rights
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    If you send any communications or materials to the Site by
                    electronic mail or otherwise, including any comments, data,
                    questions, suggestions or the like, all such communications
                    are, and will be treated by noble travels, as
                    non-confidential.
                    <br />
                    <br />
                    You hereby give up any and all claim that any use of such
                    material violates any of your rights including moral rights,
                    privacy rights, proprietary or other property rights,
                    publicity rights, rights to credit for material or ideas, or
                    any other right, including the right to approve the way
                    noble travels uses such material.
                    <br />
                    <br />
                    Any material submitted to this Site may be adapted,
                    broadcast, changed, copied, disclosed, licensed, performed,
                    posted, published, sold, transmitted or used by noble
                    travels anywhere in the world, in any medium, forever.
                </p>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Transmitted Material
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Internet transmissions are never completely private or
                    secure. You understand that any message or information you
                    send to this Site may be read or intercepted by others
                    unless there is a special notice that a particular message
                    (for example, credit card information) is encrypted (send in
                    code). Sending a message to noble travels does not cause
                    noble travels to have any special responsibility to you.
                    <br />
                    <br />
                    The copyright in the contents of this website belongs to
                    noble travels. Accordingly, noble travels reserves all
                    rights. Copying of part or all the contents of this website
                    without permission of noble travels is prohibited except to
                    the extent that such copying/printing is necessary for the
                    purposes of availing of the paid services provided.
                </p>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Agency Terms and Conditions
                </p>
                <ul className="list-disc space-y-2">
                    <li className="text-smol text-gray-800 font-medium">
                        Payment due to Domestic/International Tickets for the
                        weekly credit to be made within 5 days of the closing of
                        the week (starting from 1st to 7th of the month) or as
                        per the Collection period notified by noble travels from
                        time to time.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        (a) Voiding would be as per the airline norms plus
                        Rs.100/ - per ticket as a noble travels' RAF Charges.
                        (b) Refund charges would be as per the airline norms
                        plus Rs.200/ - per ticket as a noble travels' RAF
                        Charges.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Service charges levied are to be collected from the
                        customers on our behalf.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        (a) Any voidation/cancellation of the ticket will be
                        entertained only till 1800 Hrs. (b) If the payment is
                        not made on time noble travels can anytime cancel all
                        the PNR’s/Tickets/Hotel booking without any prior
                        notice.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Any kind of Misuse of Airline/GDS PNR will solely be the
                        responsibility of the agent and the amount will be
                        recovered from the agent as an when received the debit
                        note or cancelation note by the Airline/Hotel or by the
                        GDS.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        There will no adjusting of the refund in the payment
                        schedule. The refund will be given back to the agent
                        whenever we have received it from the airline or hotel.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        TDS and all other taxes will be deducted as per the law.
                        TDS will be deducted on all
                        commissions/incentives/bonus. The TDS certificate will
                        be issued in the next Financial Year.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        <b>Responsibility for Taxes</b>. Travel Agent or
                        customer acknowledges that, regardless of any action
                        taken by noble travels, the ultimate responsibility for
                        Tax Collected at Source (‘TCS’) under section 206C(1G)
                        or any other country /county taxes as may be legally
                        applicable and filing requirements in connection with
                        the same thereof (hereinafter collectively referred to
                        as ‘Tax Obligations’), is and shall remain his (or her)
                        responsibility.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        The credit limit if any will be on a weekly basis
                        depending upon the certain guarantees.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Any advance amount paid by the agent/customer will be
                        non-interest bearing and should be utilized within 360
                        days from the date of payment. If such advance is not
                        utilized within this period of 360 days, the unutilized
                        portion shall be held in trust, for the benefit of the
                        agent, by Noble Travels for a period of 2 years from the
                        date of payment of such advance after which the same
                        shall be deemed as forfeited.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        The User shall request noble travels for any refunds
                        against the unutilized or 'no show' air or hotel booking
                        for any reasons within 30 days from the date of
                        departure for the air ticket and/or the date of check-in
                        for the hotel booking. Any applicable refunds would
                        accordingly be processed as per the defined policies of
                        Airlines, hotels and noble travels as the case may be.
                        No refund would be payable for any requests made after
                        the expiry of 30 days as above and all unclaimed amounts
                        for such unutilized or no show air or hotel booking
                        shall be deemed to have been forfeited.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Any other refunds or unadjusted credits received from
                        suppliers (including hotels, airlines etc.) and not
                        claimed or pursued by customer and/or travel agents or
                        suppliers within one (01) years of receipt of such
                        amounts by Company, shall be deemed to have been
                        forfeited.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Agents will be responsible for maintaining all related
                        documents including confirmation from the travellers
                        that the amount paid by them for travel outside of India
                        is in within the annual limits for resident individuals
                        as prescribed by the Reserve Bank of India and/or any
                        other bank/agency approved/appointed by the government
                        from time to time.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        That our Client shall grant a limited and
                        non-transferable right to you, the Noticees, to use the
                        website of our Client -{" "}
                        <a href="/">www.nobletravels.com</a> for conducting
                        online booking of the various travel services as made
                        available by our Client to you.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        That you, the Noticees, shall make payment for the
                        services availed by cash/cheque/demand draft/credit
                        card, and in case of non-payment within 3 days of the
                        due date you, the Notices, shall be liable to pay
                        interest at the rate of 0.1% per day till the date of
                        payment of the full amount.
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        That you agree to indemnify us from and against any and
                        all losses, liabilities, claims, damages, costs and
                        expenses asserted against or incurred by us that arise
                        out of any breach or non-performance of any covenant or
                        agreement made or obligations to be performed by you
                    </li>
                    <li className="text-smol text-gray-800 font-medium">
                        Obvious errors and mistakes (including misprints,
                        typographical errors and errors in calculating currency
                        conversion, errors in pricing in general, etc.) are not
                        binding. In the event of a tariff error affecting the
                        price of a confirmed Booking, noble travels is expressly
                        entitled to modify the affected Booking to reflect the
                        correct tariff giving notice to the Client. If noble
                        travels offers the Client the option to cancel the
                        Booking and Client does not cancel the same within the
                        given time, it shall implicate the acceptance of the
                        corrected rate and any accepted discount that at its
                        sole discretion and as a mere gesture of goodwill, noble
                        travels may have decided to apply (if any).
                        Notwithstanding the above, Noble Travels or the Supplier
                        reserve the right to cancel the Booking and in the event
                        of such cancellation, without incurring any liability to
                        the Client, noble travels will refund monies paid by the
                        Client in relation to such Booking(s) (if applicable).
                    </li>
                </ul>
                <p className="text-2xl font-bold mt-10 mb-2.5">Disclaimer</p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    The material in this Site could include technical
                    inaccuracies or typographical errors. noble travels may make
                    changes or improvements at any time.
                    <br />
                    <br />
                    The materials on this site are provided on an "As Is" basis,
                    without warranties of any kind either expressed or implied.
                    Tot the fullest extent permissible pursuant to applicable
                    law, noble travels disclaims all warranties of
                    merchantability and fitness for a particular purpose.
                    <br />
                    <br />
                    It is the responsibility of the hotel chain and/or the
                    individual property to ensure the accuracy of the photos
                    displayed. Noble travels is not responsible for any
                    inaccuracies in the photos or any information provided on
                    site.
                    <br />
                    <br />
                    Noble Travels does not warrant that the functions contained
                    in this site will be uninterrupted or error-free, that
                    defects will be corrected, or that this site or the servers
                    that make it available are free of viruses or other harmful
                    components, but shall endeavour to ensure your fullest
                    satisfaction.
                    <br />
                    <br />
                    Noble Travels does not warrant or make any representations
                    regarding the use of or the result of the use of the
                    material on the site in terms of their correctness,
                    accuracy, reliability, or otherwise, insofar as such
                    material is derived from other service providers such as
                    airlines, hotel owners and tour operators.
                    <br />
                    <br />
                    You acknowledge that this Website is provided only on the
                    basis set out in these terms and conditions. Your
                    uninterrupted access or use of this Website on this basis
                    may be prevented by certain factors outside our reasonable
                    control including, without limitation, the unavailability,
                    inoperability or interruption of the Internet or other
                    telecommunications services or as a result of any
                    maintenance or other service work carried out on this
                    Website. Noble travels does not accept any responsibility
                    and will not be liable for any loss or damage whatsoever
                    arising out of or in connection with any ability/inability
                    to access or to use the Site.
                    <br />
                    <br />
                    You also acknowledge that through this Site, noble travels
                    merely provides intermediary services in order to facilitate
                    the highest quality services to you. Noble Travels is not
                    the last-mile service provider to you and therefore, noble
                    travels shall not be or deemed to be responsible for any
                    lack or deficiency of services provided by any person
                    (airline, travel/tour operator, hotel, facility or similar
                    agency) you shall engage or hire or appoint pursuant to or
                    resulting from, the material available in this Site.
                    <br />
                    <br />
                    Noble Travels will not be liable to you or to any other
                    person for any direct, indirect, incidental, punitive or
                    consequential loss, damage, cost or expense of any kind
                    whatsoever and howsoever caused from out of your usage of
                    this Site.
                    <br />
                    <br />
                    Notwithstanding anything else to the contrary contained
                    elsewhere herein or otherwise at law, noble travels'
                    liability (whether by way of indemnification to you or
                    otherwise) shall be restricted to a maximum of INR 1000
                    (Indian Rupees One Thousand only).
                </p>
                <p className="text-2xl font-bold mt-10 mb-2.5">Availability</p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    The products and services displayed on the Site may not be
                    available for purchase in your particular country or
                    locality. The reference to such products and services on the
                    Site does not imply or warrant that these products or
                    services will be available at any time in your particular
                    geographical location. You should check with your local
                    Noble Travels authorized representative for the availability
                    of specific products and services in your area.
                </p>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    Terms and Conditions of Use
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    Noble travels may add to, change or remove any part of these
                    Terms and Conditions of Use at any time, without notice. Any
                    changes to these Terms and Conditions of Use or any terms
                    posted on this Site apply as soon as they are posted. By
                    continuing to use this Site after any changes are posted,
                    you are indicating your acceptance of those changes.
                    <br />
                    <br />
                    Noble travels may add, change, discontinue, remove or
                    suspend any other Content posted on this Site, including
                    features and specifications of products described or
                    depicted on the Site, temporarily or permanently, at any
                    time, without notice and without liability.
                    <br />
                    <br />
                    Noble Travels reserves the right to undertake all necessary
                    steps to ensure that the security, safety and integrity of
                    Noble Travels' systems, as well as its clients' interests
                    are and remain, well-protected. Towards this end, Noble
                    Travels may take various steps to verify and confirm the
                    authenticity, enforceability and validity of orders placed
                    by you.
                    <br />
                    <br />
                    If Noble travels, in its sole and exclusive discretion,
                    concludes that the said orders are not or do not reasonably
                    appear to be, authentic, enforceable or valid, then noble
                    travels may cancel the said orders at any time up to 4 hours
                    before the scheduled time of departure of the relevant
                    flight or 4 hours before the expected date of visit to any
                    property booked through Noble Travels.
                </p>
                <p className="text-2xl font-bold mt-10 mb-2.5">
                    General Provisions
                </p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    You may travel to certain destinations which involve greater
                    risks than others, entirely at your risk as to cost and
                    consequences.
                    <br />
                    <br />
                    Noble travels requests you to consult your local authorities
                    and evaluate travel prohibitions, warning, announcements,
                    and advisories issued by them before booking travel to
                    certain international destinations.
                    <br />
                    <br />
                    By offering for sale travel to particular international
                    destinations, noble travels does not represent or warrant
                    that travel to such point is advisable or without risk.
                    Noble Travels does not accept liability for damages, losses,
                    or delays that may result from improper documents for entry,
                    exit, length of stay, or from travel to such destinations.
                    <br />
                    <br />
                    Noble travels reserves its exclusive right in its sole
                    discretion to alter, limit or discontinue the Site or any
                    material posted herein, in any respect. Noble travels shall
                    have no obligation to take the needs of any User into
                    consideration in connection therewith.
                    <br />
                    <br />
                    Noble Travels reserves its right to deny in its sole
                    discretion any user access to this Site or any portion
                    thereof without notice.
                    <br />
                    <br />
                    No waiver by Noble Travels of any provision of these Terms
                    and Conditions shall be binding except as set forth in
                    writing and signed by its duly authorized representative.
                    <br />
                    <br />
                    Any and all disputes arising in connection with the Service
                    Agreement shall be settled in the first instance by good
                    faith negotiations, and if the dispute cannot be settled
                    within 7 days by mutual discussions, the same shall be
                    settled by arbitration under the Arbitration and
                    Conciliation Act, 1996 by a sole arbitrator to be appointed
                    by noble travels, whereby the venue of the arbitration shall
                    be New Delhi and the arbitration proceedings to be conducted
                    in English ; Each party shall bear its own costs (including
                    legal costs) for participating in the arbitration
                    proceedings, and the arbitrator’s fees and expenses and
                    other incidental expenses shall be paid by the parties as
                    determined by the arbitrator.
                    <br />
                    <br />
                    Noble Travels provides B2A wholesale rates which must be
                    sold as part of the package and must not be standalone.
                    <br />
                    <br />
                    These terms and conditions are governed by and shall be
                    construed in accordance with the laws of the Republic of
                    India and any dispute shall exclusively be subject to the
                    jurisdiction of the appropriate Courts situated at New
                    Delhi, India.
                </p>
                <p className="text-2xl font-bold mt-10 mb-2.5">Declaration</p>
                <p className="text-gray-800 font-medium text-smol mb-3">
                    You hereby warrant, undertake and declare that neither You
                    nor your stakeholders or directors, or Ultimate Beneficial
                    Owners are on the Office of Foreign Assets Control (OFAC),
                    Specially Designated Nationals (SDN), Office of Financial
                    Sanctions Implementation (OFSI) European Union (EU) United
                    Nations (UN) or Blocked Persons list. You undertake to
                    immediately inform Noble Travels through written
                    communication in the event You or any of your shareholders,
                    directors, affiliates are placed on any of the above lists.
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
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
