import { Button } from "@/components/custom/button";
import { InputField } from "@/components/custom/input-field";
import { TextField } from "@/components/custom/text-field";
import { TourInfo } from "@/components/custom/tour-info";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { toast } from "sonner";

interface CreateItineraryProps {}

const CreateItinerary: React.FC<CreateItineraryProps> = ({}) => {
    const [formState, setFormState] = useState({
        name: "",
        bgImageUrl: "",
        numDays: "",
        country: "",
        numNights: "",
        location: "",
        minAge: "",
        tourDetails: "",
        numDestinations: "",
        importantInfoItems: "",
    });
    const [itinerary, setItinerary] = useState({
        img_url: "",
        name: "",
        duration: "",
        slug: "",
        tour: {
            location: "",
            min_age: "",
            tour_details: "",
            destinations_covered: [],
            itinerary_outline: [],
            important_information: [],
        },
    });
    const [previewMode, setPreviewMode] = useState(false);

    const exportItinerary = () => {
        const filename = "itinerary";
        const json = JSON.stringify(itinerary, null, 4);
        const blob = new Blob([json], { type: "application/json" });
        const href = URL.createObjectURL(blob);

        // create anchor tag with link to download the file
        const link = document.createElement("a");
        link.href = href;
        link.download = `${filename}.json`;
        document.body.appendChild(link);
        link.click();

        // clean up & remove anchor tag
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
        toast.success("Itinerary exported successfully");
    };

    return (
        <>
            {previewMode ? (
                <div className="p-4">
                    <div className="flex items-center mb-10">
                        <p className="flex items-center text-2xl font-bold mb-0">
                            Tour page preview
                        </p>

                        <div className="ml-auto w-32">
                            <Button
                                label="Exit Preview"
                                onClick={() => setPreviewMode(false)}
                            />
                        </div>
                    </div>
                    <div className="border border-gray-200 rounded-md">
                        <TourInfo pkg={itinerary} />
                    </div>
                </div>
            ) : (
                <div className="p-4">
                    <Formik
                        initialValues={formState}
                        onSubmit={async (values) => {
                            // onSubmit={async (values, { setErrors }) => {
                            // Parse destinations
                            const destinationsCovered = [];
                            for (
                                let i = 1;
                                i <= (parseInt(values.numDestinations) || 0);
                                i++
                            ) {
                                destinationsCovered.push({
                                    name:
                                        values[
                                            `destination-${i}-name` as keyof typeof values
                                        ] || "",
                                    description:
                                        values[
                                            `destination-${i}-desc` as keyof typeof values
                                        ] || "",
                                });
                            }

                            // Parse itinerary outline
                            const itineraryOutline = [];
                            for (
                                let i = 1;
                                i <= (parseInt(values.numDays) || 0);
                                i++
                            ) {
                                itineraryOutline.push({
                                    title:
                                        values[
                                            `itinerary-${i}-short-desc` as keyof typeof values
                                        ] || "",
                                    description:
                                        values[
                                            `itinerary-${i}-long-desc` as keyof typeof values
                                        ] || "",
                                });
                            }

                            // Parse important information
                            const importantInformation = [];
                            for (
                                let i = 1;
                                i <= (parseInt(values.importantInfoItems) || 0);
                                i++
                            ) {
                                importantInformation.push(
                                    values[
                                        `info-item-${i}` as keyof typeof values
                                    ] || ""
                                );
                            }

                            // Construct the final object
                            const cpy = {
                                img_url: values.bgImageUrl,
                                name: values.name,
                                duration: `${values.numNights} Nights • ${values.numDays} Days`,
                                slug: values.name
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, "-")
                                    .replace(/^-+|-+$/g, ""),
                                tour: {
                                    location: values.location,
                                    country: values.country,
                                    min_age: values.minAge,
                                    tour_details: values.tourDetails,
                                    destinations_covered: destinationsCovered,
                                    itinerary_outline: itineraryOutline,
                                    important_information: importantInformation,
                                },
                            };

                            setItinerary(cpy as any);
                            setFormState(values);
                            console.log("itinerary :: ", cpy);
                            console.log("value     :: ", values);
                            setPreviewMode(true);
                            console.log("previewMode :: ", previewMode);
                        }}
                    >
                        {({ values, isSubmitting }) => (
                            <>
                                <Form className="max-w-2xl">
                                    <div className="flex items-center">
                                        <p className="flex items-center text-2xl font-bold mb-0">
                                            Create new itinerary
                                        </p>
                                    </div>
                                    <InputField
                                        name="name"
                                        placeholder="Itinerary name"
                                        label="Name"
                                        fullWidth
                                        disableSubmitOnEnter
                                        shadow
                                    />
                                    <InputField
                                        name="bgImageUrl"
                                        placeholder="background image url"
                                        label="Background Image URL"
                                        fullWidth
                                        disableSubmitOnEnter
                                        shadow
                                    />
                                    <InputField
                                        name="numDays"
                                        placeholder="7"
                                        min="1"
                                        type="number"
                                        label="Number of days "
                                        disableSubmitOnEnter
                                        fullWidth
                                        shadow
                                    />
                                    <InputField
                                        name="numNights"
                                        placeholder="6"
                                        min="1"
                                        type="number"
                                        label="Number of nights"
                                        disableSubmitOnEnter
                                        fullWidth
                                        shadow
                                    />
                                    <InputField
                                        name="location"
                                        placeholder="Amritsar, Punjab"
                                        label="Location"
                                        disableSubmitOnEnter
                                        fullWidth
                                        shadow
                                    />
                                    <InputField
                                        name="country"
                                        placeholder="India"
                                        label="Country"
                                        disableSubmitOnEnter
                                        fullWidth
                                        shadow
                                    />
                                    <InputField
                                        name="minAge"
                                        placeholder="10+"
                                        label="Minimum age for travelers"
                                        fullWidth
                                        defaultValue={"10+"}
                                        disableSubmitOnEnter
                                        shadow
                                    />
                                    <TextField
                                        name="tourDetails"
                                        placeholder="Once upon a time..."
                                        label="Tour details"
                                        fullWidth
                                        shadow
                                    />
                                    <InputField
                                        name="numDestinations"
                                        placeholder="0"
                                        min="1"
                                        type="number"
                                        disableSubmitOnEnter
                                        label="Destinations covered"
                                        fullWidth
                                        shadow
                                    />
                                    <InputField
                                        name="importantInfoItems"
                                        placeholder="0"
                                        min="1"
                                        disableSubmitOnEnter
                                        type="number"
                                        label="Important information items"
                                        fullWidth
                                        shadow
                                    />
                                    {(parseInt(values.numDestinations) || 0) >
                                        0 && (
                                        <div className=" my-7">
                                            <p className="flex items-center text-xl font-bold mb-3">
                                                Destination details
                                            </p>
                                            <div className="bg-gray-50/50 p-3 rounded-lg border border-gray-300">
                                                {Array(
                                                    parseInt(
                                                        values.numDestinations
                                                    ) || 0
                                                )
                                                    .fill(0)
                                                    .map((_, idx: number) => (
                                                        <div
                                                            key={idx}
                                                            className="mb-4"
                                                        >
                                                            <p className="flex items-center text-lg font-bold">
                                                                Destination #
                                                                {idx + 1} detail
                                                            </p>
                                                            <InputField
                                                                name={`destination-${
                                                                    idx + 1
                                                                }-name`}
                                                                disableSubmitOnEnter
                                                                placeholder="thimphu"
                                                                label="destination name"
                                                                fullWidth
                                                                shadow
                                                            />
                                                            <InputField
                                                                name={`destination-${
                                                                    idx + 1
                                                                }-desc`}
                                                                disableSubmitOnEnter
                                                                placeholder="Unique city with unusual mixture of modern development alongside ancient traditions. The Kingdom’s capital city is the main center of commerce, religion and government in the country."
                                                                label="smol destination description"
                                                                fullWidth
                                                                shadow
                                                            />
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    )}
                                    {(parseInt(values.numDays) || 0) > 0 && (
                                        <div className="my-7">
                                            <p className="flex items-center text-xl font-bold mb-3">
                                                Itinerary – Detailed Itinerary
                                            </p>
                                            <div className="bg-gray-50/50 p-3 rounded-lg border border-gray-300">
                                                {Array(
                                                    parseInt(values.numDays) ||
                                                        0
                                                )
                                                    .fill(0)
                                                    .map((_, idx: number) => (
                                                        <div
                                                            key={idx}
                                                            className=""
                                                        >
                                                            <p className="flex items-center text-lg font-bold">
                                                                Day {idx + 1}{" "}
                                                                Itinerary
                                                                details
                                                            </p>
                                                            <InputField
                                                                name={`itinerary-${
                                                                    idx + 1
                                                                }-short-desc`}
                                                                disableSubmitOnEnter
                                                                placeholder="Depart Paro"
                                                                label={`Day ${
                                                                    idx + 1
                                                                } short description`}
                                                                fullWidth
                                                                shadow
                                                            />
                                                            <TextField
                                                                name={`itinerary-${
                                                                    idx + 1
                                                                }-long-desc`}
                                                                placeholder="Once upon a time..."
                                                                label={`Day ${
                                                                    idx + 1
                                                                } long description`}
                                                                fullWidth
                                                                shadow
                                                            />
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    )}
                                    {(parseInt(values.importantInfoItems) ||
                                        0) > 0 && (
                                        <div className="my-7">
                                            <p className="flex items-center text-xl font-bold mb-3">
                                                Important Information Items
                                            </p>
                                            <div className="bg-gray-50/50 p-3 rounded-lg border border-gray-300">
                                                {Array(
                                                    parseInt(
                                                        values.importantInfoItems
                                                    ) || 0
                                                )
                                                    .fill(0)
                                                    .map((_, idx: number) => (
                                                        <div
                                                            key={idx}
                                                            className=""
                                                        >
                                                            <InputField
                                                                name={`info-item-${
                                                                    idx + 1
                                                                }`}
                                                                disableSubmitOnEnter
                                                                placeholder="Depart Paro"
                                                                label={`Information item ${
                                                                    idx + 1
                                                                }`}
                                                                fullWidth
                                                                shadow
                                                            />
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    )}
                                    <div className="mt-5 flex items-center">
                                        <div className="ml-auto w-32">
                                            <Button
                                                label="Download file"
                                                onClick={exportItinerary}
                                            />
                                        </div>
                                        <div className="ml-5 w-32">
                                            <Button
                                                label="Preview"
                                                loading={isSubmitting}
                                                disabled={Object.values(
                                                    values
                                                ).some((value) => value === "")}
                                            />
                                        </div>
                                    </div>
                                    {/* <Button
                                        loading={isSubmitting}
                                        disabled={Object.values(values).some(
                                            (value) => {
                                                value === "";
                                            }
                                        )}
                                        type="submit"
                                        label="Submit"
                                        className="mt-3"
                                    /> */}
                                </Form>
                            </>
                        )}
                    </Formik>
                </div>
            )}
        </>
    );
};

export default CreateItinerary;
