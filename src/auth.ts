import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from './prisma';
import dotenv from 'dotenv';
dotenv.config();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          // Create a new entry in the savedLocations table for the new user
          await prisma.savedLocations.create({
            data: {
              userId: user.id,
              locations: [],
            },
          });
        }
      }
    }
  },
  advanced: {
    disableOriginCheck: true,
  },
});
