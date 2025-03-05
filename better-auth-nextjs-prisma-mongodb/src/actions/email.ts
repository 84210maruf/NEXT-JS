"use server";

import sgMail from "@sendgrid/mail";

export async function sendEmail({
    to,
    subject,
    text
}: {
    to: string;
    subject: string;
    text: string;
}) {
    if (!process.env.SENDGRID_API_KEY) {
        throw new Error("SENDGRID_API_KEY not set");
    }
    if (!process.env.EMAIL_FROM) {
        throw new Error("EMAIL_FROM not set");
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const message = {
        to: to.toLowerCase().trim(),
        from: process.env.EMAIL_FROM,
        subject: subject.trim(),
        text: text.trim(),
    };

    try {
        const [respose] = await sgMail.send(message);

        if (respose.statusCode >= 202) {
            throw new Error(`Failed to send email: ${respose.statusCode}`);
        }
        
        return {
            success:true,
            messageId: respose.headers["x-message-id"],
        };
    } catch (error) {
        console.error("Failed to send email", error);
        
        return {
            success: false,
            mssage:"Failed to send email try latter",
        };
    }
}