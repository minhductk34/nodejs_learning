import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();
const { SECRET_TOKEN } = process.env;
export const checkPermission = async (req, res, next) => {
  try {
    //kiem tra dang nhap

    const token = req.headers.authorization?.split(" ")[1];

    // kiem tra token
    if (!token) {
      return res.status(403).json({
        message: "you are not logged",
      });
    }
    //Kiem tra quyen nguoi dung

    const decord = jwt.verify(token, SECRET_TOKEN);
    const userData = await User.findById(decord._id);
    if (!userData) {
      return res.status(403).json({
        message: "Token not found",
      });
    }
    if (userData.role !== "admin") {
      return res.status(403).json({
        message: "u r not a admin",
      });
    }
    return res.status(200).json({
      message: "ok",
     
    });
    next();
  } catch (error) {
    return res.status(500).json({ name: error.name, message: error.message });
  }
};
