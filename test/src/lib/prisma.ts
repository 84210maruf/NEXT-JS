 
 
 
import { PrismaClient } from "@prisma/client";



function prismaClientSingleton() {
  return new PrismaClient();
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;

} & typeof global;

export const db = prismaClientSingleton() ?? new PrismaClient();

if (process.env.NODE_ENV !== "production")
  globalThis.prismaGlobal = db;
