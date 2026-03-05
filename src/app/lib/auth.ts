import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
// import { db } from "@/db";
import { prisma } from "./prisma";
import { Role } from "../../generated/prisma/enums";

export const auth = betterAuth({
    database: drizzleAdapter(prisma, {
        provider: "postgresql", // or "mysql", "sqlite"
    }),

    emailAndPassword: {
        enabled: true,
    },


    user: {
        additionalFields: {
            role: {
                type: "string",
                required: true,
                defaultValue: Role.PATIENT
            },
            status: {
                type: "string",
                required: true,
                defaultValue: UserStatus.ACTIVE
            },

            needPasswordChange: {
                type: "boolean",
                required: true,
                defaultValue: false
            },

            isDeleted: {
                type: "boolean",
                required: true,
                defaultValue: false
            },

            deletedAt: {
                type: "date",
                required: false,
                defaultValue: null
            },
        }
    }


});