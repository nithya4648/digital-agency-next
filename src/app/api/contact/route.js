import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    await Contact.create(body);

    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json({
      success: false,
    });
  }
}