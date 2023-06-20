import mongoDbConnection from "@/config/db";
import { NextResponse } from "next/server";
import User from "@/models/User";

// Get all user route.
export const GET = async () => {
  try {
    await mongoDbConnection();
    const users = await User.find();
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};

// Create UserRoute.
export const POST = async (request) => {
  try {
    await mongoDbConnection();

    const data = await request.json();
    const user = await User.create({ ...data });
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};

// Delete UserRoute.
export const DELETE = async (request) => {
  try {
    await mongoDbConnection();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const user = await User.findByIdAndDelete(id);
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};

