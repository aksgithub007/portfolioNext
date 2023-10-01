import { User } from "@/Model/UserSchema";
import { dbConnect } from "@/app/util/db";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  //   console.log(req, "request from add user");
  //   console.log(res, "res from add user");
  //   console.log(req.body, "data");
  // console.log(req.json(), "data");

  //   console.log(data, "dats");

  await dbConnect();
  const response = await User.create(req.body.json());
  console.log(response, "dssd");
  return NextResponse.json({ message: data, success: true }, { status: 201 });
};
