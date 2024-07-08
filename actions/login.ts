"use server";

import * as z from "zod";

import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserbyEmail } from '@/data/user';

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return  {error: "Invalid credentials!"};
    }

    const { email, password } = validatedFields.data;
    const existingUser = await getUserbyEmail(email);

    try {
        await signIn("credentials", {
            email, 
            password, 
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        });
    return { success: "Logged in!"}
    
    } catch (error) {
        if (error instanceof AuthError){
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid Credentials!"};
                default:
                    return { error: "An error occurred! Check credentials and try again!"};
            }
        }
        
        throw error;
    }
};