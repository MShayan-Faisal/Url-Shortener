import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export const dynamic = 'force-dynamic';

export default async function Page({ params }) {
    const { shorturl } = await params;

    const client = await clientPromise;
    const db = client.db("url-shortener");
    const collection = db.collection("urls");

    const doc = await collection.findOne({ shorturl: shorturl });

    if (doc && doc.url) {
        redirect(doc.url);
    } else {
        redirect(process.env.NEXT_PUBLIC_HOST || "/");
    }

    return null;
}