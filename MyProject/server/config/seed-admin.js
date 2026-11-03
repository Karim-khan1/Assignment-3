import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export async function seedAdmin() {
    const { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_NAME } = process.env;
    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
        console.warn("Admin seeding skipped: set ADMIN_EMAIL and ADMIN_PASSWORD.");
        return;
    }
    if (ADMIN_PASSWORD.length < 12) throw new Error("ADMIN_PASSWORD must have at least 12 characters.");
    const email = ADMIN_EMAIL.trim().toLowerCase();
    const existing = await User.findOne({ email });
    if (existing) {
        if (existing.role !== "admin") throw new Error("ADMIN_EMAIL belongs to a non-admin account; choose another address.");
        return;
    }
    await User.create({ name: ADMIN_NAME || "Administrator", email,
        passwordHash: await bcrypt.hash(ADMIN_PASSWORD, 12), role: "admin" });
    console.log("Admin account initialized.");
}
