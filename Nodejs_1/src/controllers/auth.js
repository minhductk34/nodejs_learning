import User from "../models/User.js";
import { signInValidator, signUpValidator } from "../validation/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// const result = dotenv.config();

// if (result.error) {
//   throw result.error;
// }

// console.log(result.parsed);

const { SECRET_TOKEN } = process.env;

export const signUp = async (req, res) => {
  try {
    //validate
    const { error } = signUpValidator.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({ messages: errors });
    }
    //Check user not existing

    const userExit = await User.findOne({ email: req.body.email });
    if (userExit) {
      return res.status(400).json({ messages: "User already exists" });
    }
    // hashing password
    const hashedPassword = await bcryptjs.hash(req.body.password, 10);
    // create password hash
    const userPassword = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    //delete password and alert user password created

    userPassword.password = undefined;
    return res
      .status(200)
      .json({ messages: "Password created successfully", userPassword });
  } catch (error) {
    return res.status(500).json({ name: error.name, message: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    //Vaidate data
    const { error } = signInValidator.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errorMessages = error.details.map(
        (errorMessage) => errorMessage.message
      );
      return res.status(400).json({ message: errorMessages });
    }

    //Check email

    const userExit = await User.findOne({
      email: req.body.email,
    });
    if (!userExit) {
      return res.status(404).json({
        message: "Email chua duoc dang ky",
      });
    }
    //check Password

    const checkPassword = await bcryptjs.compare(
      req.body.password,
      userExit.password
    );
    if (!checkPassword) {
      return res.status(404).json({
        message: "Password is not correct",
      });
    }
    console.log(SECRET_TOKEN);
    // check jwt token
    const accessToken = jwt.sign({ _id: userExit._id }, SECRET_TOKEN,);
    console.log(accessToken);
    return res.status(200).json({ message: "login success" });
  } catch (error) {
    return res.status(500).json({ name: error.name, message: error.message });
  }
};
