"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionObj } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
    const { email, password } = payload;
    const user = dbConnect(collectionObj.user);

    const person = await user.findOne({ email });
    if (!person) return null;


    const isPasswordOk = await bcrypt.compare(password, person.password);
    if (!isPasswordOk) return null;

    return person;
};