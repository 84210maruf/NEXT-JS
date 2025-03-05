import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter} from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { sendEmail } from "./../actions/email";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "mongodb",
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
    },
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail:async({user, token}) => {
            const verificationUrl = `${process.env.BETTER_AUTH_URL}/api/auth/verify-email?token=${token}&callbackURL=${process.env.EMAIL_VERIFICATION_CALLBACK_URL}`;
            await sendEmail({
                to: user.email,
                subject: "Verify your email",
                text: `Click this link to verify your email: ${verificationUrl}`,
            });
        },  
    }
} satisfies BetterAuthOptions)