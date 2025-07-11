import { NextApiRequest, NextApiResponse } from "next";
import sg from "@sendgrid/mail";
import formidable from "formidable";
import fs from "fs";
import { redis } from "@/lib/redis";

export const config = {
    api: {
        bodyParser: false,
    },
};

const emailID = await redis.incr("email_counter");

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const form = formidable({ multiples: false });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error("Error parsing form:", err);
            return res.status(500).json({ status: "NOT_OK", error: err });
        }

        const {
            name,
            email,
            hotelName,
            contact,
            cityAndCountry,
            numGuests,
            rateFound,
            numRooms,
            checkin,
            checkout,
            site,
            message,
            ipAddress,
        } = fields;

        sg.setApiKey(process.env.SENDGRID_API_KEY || "");

        try {
            const emailText = `INQUIRY ID – ${emailID}\n\nName – ${name}
Email – ${email}
Hotel Name – ${hotelName}
Contact – ${contact}
City and Country – ${cityAndCountry}
Number of guests – ${numGuests}
Website – ${site}
Rate Found (per night) – ${rateFound}
Check-in and Check-out dates – ${checkin} – ${checkout} (MM/DD/YYYY)
Number of rooms – ${numRooms}
Screenshot – ${files.screenshot ? "Attached" : "Not attached"}
Message – ${message}

–––––––––––––––––––––––––––––––
IP DATA – ${ipAddress}`;

            const attachments = [];

            if (files.screenshot) {
                const file = files.screenshot[0] as formidable.File;
                const fileContent = fs.readFileSync(file.filepath);

                attachments.push({
                    content: fileContent.toString("base64"),
                    filename: file.originalFilename || "screenshot.png",
                    type: file.mimetype || "image/png",
                    disposition: "attachment",
                });
            }

            await sg.send({
                to: "info@nobletravels.com",
                from: "noreply@nobletravels.com",
                subject: `New price request received – ID ${emailID}`,
                text: emailText,
                attachments,
            });

            console.log("Email sent");
            res.status(200).json({ status: "OK" });
        } catch (error) {
            console.error("SendGrid error:", error);
            res.status(500).json({ status: "NOT_OK", error });
        }
    });
}
