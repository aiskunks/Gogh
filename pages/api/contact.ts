import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';


export default function async(
    req: NextApiRequest,
    res: NextApiResponse
) { }

// We'll use this once there's an SMTP service configured for Gogh.AI

let transporter: Transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'sample-email@gmail.com',  // these creds will be env. variables eg. process.env.email
        pass: 'abc123',
    },
});

