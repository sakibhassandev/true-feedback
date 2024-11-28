import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, otp } = await request.json();
    console.log(username, otp);

    const user = await UserModel.findOne({ username });

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    const isCodeValid = user.verifyCode === otp;
    const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();

    if (isCodeValid && isCodeNotExpired) {
      user.isVerified = true;
      await user.save();
      return Response.json(
        {
          success: true,
          message: "Account verified successfully",
        },
        { status: 200 }
      );
    }

    return Response.json(
      {
        success: false,
        message: "Invalid code or code expired",
      },
      { status: 400 }
    );
  } catch (error) {
    console.log("Error in verifying User route", error);
    return Response.json(
      {
        success: false,
        message: "Error in verifying User",
      },
      { status: 500 }
    );
  }
}
