import { db } from "@/db";
import { votes } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function getUserVotedProductIds(): Promise<Set<number>> {
  const { userId } = await auth();
  if (!userId) return new Set();

  const userVotes = await db.select({ productId: votes.productId }).from(votes).where(eq(votes.userId, userId));

  return new Set(userVotes.map((v) => v.productId));
}
