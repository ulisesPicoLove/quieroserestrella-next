import {
  connectMongo,
  disconnectMongo,
} from "../../../lib/dbconnection/mongodb";
import User from "../../../lib/models/Users";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

const hashPass = async (unHashPass) => {
  return bcrypt.hash(unHashPass, 10).then((hash) => {
    return hash;
  });
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const passEncrypt = await hashPass(password);
    const session = await getServerSession(req, res, authOptions)
    if (session) {
      try {
        await connectMongo();
        const userExist = await User.find({ email: email }).exec();
        if (userExist.length === 0) {
          const newUser = new User({
            email: email,
            password: passEncrypt,
          });
          await newUser.save();
          res.status(200).json({ message: "Ok" });
        } else {
          res.status(400).json({message: "User already exists."})
        }
      } catch (error) {
        res.status(500).json({ error: error });
      } finally {
        await disconnectMongo();
      }
    } else {
      res.status(401).json({ message: "Unauthorized" });  
    }
  } else {
    res.status(500).json({ message: "Method not allowed." });
  }
}
