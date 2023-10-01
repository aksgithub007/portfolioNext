import { User } from "@/Model/UserSchema";
import { dbConnect } from "@/app/util/db";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const connection = await dbConnect();
  //   console.log(connection, "Response from db");
  const data = await User.find();

  return NextResponse.json({ message: data, success: true }, { status: 200 });
};
