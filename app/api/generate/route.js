import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const { url, shortUrl } = body;

    // 1. Validate input
    if (!url || !shortUrl) {
      return Response.json(
        { ok: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("url-shortener");
    const collection = db.collection("urls");

    // 2. Normalize URL
    let finalUrl = url.trim();

    if (!/^https?:\/\//i.test(finalUrl)) {
      finalUrl = "https://" + finalUrl;
    }

    // 3. Check duplicate shortUrl
    const existing = await collection.findOne({ shortUrl });

    if (existing) {
      return Response.json(
        { ok: false, message: "Short URL already exists" },
        { status: 409 }
      );
    }

    // 4. Save to DB
    await collection.insertOne({
      url: finalUrl,
      shortUrl,
      createdAt: new Date(),
    });

    // 5. Success response
    return Response.json({
      ok: true,
      shortUrl,
    });

  } catch (error) {
    console.error("API ERROR:", error);

    return Response.json(
      { ok: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}