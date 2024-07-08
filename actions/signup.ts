"use server";

import * as z from "zod";

import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

import { SignupSchema } from "@/schemas";
import { getUserbyEmail } from "@/data/user";

export const signup = async (values: z.infer<typeof SignupSchema>) => {
    const validatedFields = SignupSchema.safeParse(values);

    if (!validatedFields.success) {
        return  {error: "Invalid credentials!"};
    }

    const { email, name, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserbyEmail(email);

    if (existingUser) {
        return { error: "Email already exists!" };
    }

    await db.user.create({
        data: {
            email,
            name,
            password: hashedPassword,
        },
    });

    return { success: "Verification email sent!" };
};