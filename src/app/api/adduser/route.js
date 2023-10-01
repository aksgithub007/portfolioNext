import { User } from "@/Model/UserSchema";
import { dbConnect } from "@/app/util/db";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const body = await req.json();

  await dbConnect();
  const response = await User.create(body);
  console.log(response, "dssd");
  return NextResponse.json({ message: body, success: true }, { status: 201 });
};
