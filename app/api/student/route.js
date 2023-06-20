import mongoDbConnection from "@/config/db";
import { NextResponse } from "next/server";
import Student from "@/models/Student";

// Get AllStudent.
export const GET = async () => {
  try {
    // MongoDbConnection.
    await mongoDbConnection();
    const students = await Student.find();
    return NextResponse.json({ students });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};

// Create Student.
export const POST = async (request) => {
  try {
    // MongoDbConnection.
    await mongoDbConnection();
    const data = await request.json();
    const student = await Student.create({ ...data });
    return NextResponse.json({ student });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};

// Create Student.
export const DELETE = async (request) => {
  try {
    // MongoDbConnection.
    await mongoDbConnection();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const student = await Student.findByIdAndDelete(id);
    return NextResponse.json({ student });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
