import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import  prisma  from "./prisma";
export const auth = betterAuth({
    
    database: prismaAdapter(prisma, {
        provider: "mongodb",
    }),
   
    secret: process.env.AUTH_SECRET,
    advanced:{
        generateId:false
    },
    
    /**
     * * emailAndPassword is used to enable email and password authentication
     * * socialProviders is used to enable social authentication
     */

    emailAndPassword:{
        enabled: true,
    },
    // socialProviders: {
    //     google: {
             
    //         clientId: env.GOOGLE_CLIENT_ID ??"",
             
    //         clientSecret: env.GOOGLE_CLIENT_SECRET ??""
    //     },
        
    // },
     
    /**      
     * * Plugins are used to extend the functionality of BetterAuth.
     * * Expo plugin for handling expo mobile app authentication
     * * oAuthProxy plugin for handling oAuth authentication redireact url
     * * openAPI plugin for handling openAPI authentication
     */

    // plugins: [expo(), oAuthProxy(),
    //     openAPI()
        
    //     /** 
    //      * TODO: Add custom session function to add custom data to the session
    //     */

        

    //     // customSession(async ({user, session})=>{
    //     //     const role = await db.query.user
    //     //     return {
    //     //     user:{
    //     //         ...user,
    //     //         role: role?.role  as string
    //     //     },
    //     //     session
    //     //     }
    //     // }
    //     // )
    // ],

})


export type Session = typeof auth.$Infer.Session;
