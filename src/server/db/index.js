const { PrismaClient } = require('@prisma/client');

const global = {
    prisma: PrismaClient | undefined
};

export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    global.prisma = db;
}
