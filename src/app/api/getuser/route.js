import { dbConnect } from "@/app/util/db";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const connection = await dbConnect();
  //   console.log(connection, "Response from db");
  return NextResponse.json(
    { message: "All User", success: true },
    { status: 200 }
  );
};
