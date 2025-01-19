import { PrismaClient } from '@prisma/client';

const globalPrisma =global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
      log: {'query'},
  })

if (Process.env.NODE_ENV !== 'production') globalForPRisma.prisma = prisma