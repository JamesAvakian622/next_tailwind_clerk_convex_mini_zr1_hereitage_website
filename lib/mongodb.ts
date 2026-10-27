import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;

// Reuse one client across hot reloads (dev) and lambda invocations (prod).
const globalForMongo = globalThis as unknown as { _mongoClient?: Promise<MongoClient> };

export function getClient(): Promise<MongoClient> {
  if (!uri) throw new Error("MONGODB_URI is not set");
  globalForMongo._mongoClient ??= new MongoClient(uri).connect();
  return globalForMongo._mongoClient;
}

export async function getDb(name = "myzr1"): Promise<Db> {
  return (await getClient()).db(name);
}
