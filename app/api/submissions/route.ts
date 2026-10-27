import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export const runtime = "nodejs";

const GENERATIONS = ["C3", "C4", "C6", "C7", "C8", "ZR1X"] as const;

/** Owner gallery submissions live in MongoDB. */
export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const db = await getDb();
  const items = await db
    .collection("submissions")
    .find({ userId })
    .sort({ createdAt: -1 })
    .limit(50)
    .project({ userId: 0 })
    .toArray();

  return NextResponse.json({ items: items.map((d) => ({ ...d, _id: String(d._id) })) });
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => null);
  const title = typeof body?.title === "string" ? body.title.trim().slice(0, 120) : "";
  const message = typeof body?.message === "string" ? body.message.trim().slice(0, 2000) : "";
  const generation = GENERATIONS.includes(body?.generation) ? body.generation : null;
  const imageUrl = typeof body?.imageUrl === "string" && /^https?:\/\//.test(body.imageUrl) ? body.imageUrl.slice(0, 500) : null;

  if (!title || !generation) {
    return NextResponse.json({ error: "title and generation are required" }, { status: 400 });
  }

  const db = await getDb();
  const doc = { userId, title, message, generation, imageUrl, status: "pending", createdAt: new Date() };
  const res = await db.collection("submissions").insertOne(doc);
  return NextResponse.json({ id: String(res.insertedId) }, { status: 201 });
}
