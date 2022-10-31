import { authLogin, authRegister } from "../services/authServices.js";
import { makeResponse } from "../utils/response.js";
import { badRequest } from "../errors/badRequest.js";
import { generateAccessToken } from "../utils/jwt.js";


//TODO : build seperate register functionalities in frontend and provide isStaff = true in admin registration panel
//todo : handle duplicate key value pair issue simply can fixed by limiting 1 login for user
export const registerUser = async (req, res) => {
  const user = await authRegister(req.body);
  if (!user) return makeResponse({ res, status: 500, message: "Registration failed..." });
  if (user.status) return makeResponse({ res, ...user });
  const { password, ...otherDetails } = user._doc;
  const accessToken = await generateAccessToken(otherDetails);

  return makeResponse({
    res,
    status: 200,
    data: { otherDetails, token: accessToken },
    messsage: "User creation successfull..."
  });
};

export const loginUser = async (req, res) => {
  const user = await authLogin(req.body);
  if (!user) return makeResponse({ res, status: 500, message: "Login failed..." });
  if (user.status) return makeResponse({ res, ...user });
  const { password, ...otherDetails } = user._doc;
  const accessToken = await generateAccessToken(otherDetails);
  return makeResponse({
    res,
    status: 200,
    data: { otherDetails, token: accessToken },
    message: "User login successfull..."}
  );
};
