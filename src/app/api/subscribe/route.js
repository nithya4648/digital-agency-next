import { connectDB } from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";

export async function POST(req) {
  try {
    await connectDB();
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ success: false, error: "Invalid email" }, { status: 400 });
    }

    await Subscriber.create({ email });
    return Response.json({ success: true });
  } catch (error) {
    // Duplicate email
    if (error.code === 11000) {
      return Response.json({ success: false, error: "Already subscribed" }, { status: 409 });
    }
    return Response.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
