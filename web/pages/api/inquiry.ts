import { NextApiRequest, NextApiResponse } from "next";
import sg from "@sendgrid/mail";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    sg.setApiKey(process.env.SENDGRID_API_KEY || "");

    try {
        await sg.send({
            to: "info@nobletravels.com",
            from: "noreply@nobletravels.com",
            subject: "INQUIRY FORM FROM NOBLETRAVELS WEBSITE",
            text: `Name – ${req.body.name}
Email – ${req.body.email}
Contact – ${req.body.contact}
Subject – ${req.body.subject}
Message – ${req.body.message}
\n\n\n\n\n\n\n–––––––––––––––––––––––––––––––
IP DATA – ${JSON.stringify(req.body.ipAddress, null, 4)}`,
        });
        console.log(`Email sent`);
        res.status(200).json({
            status: "OK",
        });
    } catch (error) {
        res.status(200).json({
            status: "NOT_OK",
            error: error,
        });
    }
}
