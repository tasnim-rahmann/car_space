"use server";

import dbConnect, { collectionObj } from "@/lib/dbConnect";
import bcrypt from 'bcrypt';

export const registerUser = async (payload) => {
    const user = dbConnect(collectionObj.user);

    const isUser = await user.findOne({ email: payload.email });
    const { name, email, password } = payload;
    if (!email || !password) return null;

    if (!isUser) {
        const hashedPassword = await bcrypt.hash(password, 10);
        payload.password = hashedPassword;
        const result = await user.insertOne(payload);
        const { acknowledged, insertedId } = result;
        return { acknowledged: acknowledged, insertedId: insertedId.toString() };
    }
    return null;
};