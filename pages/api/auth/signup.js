import { connectMongo, disconnectMongo } from "../../../lib/dbconnection/mongodb";
import User from '../../../lib/models/Users'
import bcrypt from 'bcrypt'

const hashPass = async (unHashPass) => {
  return bcrypt.hash(unHashPass, 10)
    .then((hash)=>{
      return hash;
    })
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const passEncrypt = await hashPass(password);
    try {
      await connectMongo();
      const newUser = new User({
        email: email,
        password: passEncrypt
      })
      await newUser.save()
      res.status(200).json({ Message: "Ok" });
    } catch (error) {
      
    }
    finally {
      await disconnectMongo();
    }
  } else {
    res.status(500).json({ message: "Method not allowed." });
  }
}
