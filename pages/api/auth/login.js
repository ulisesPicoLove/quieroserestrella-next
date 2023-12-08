import {
  connectMongo,
  disconnectMongo,
} from "../../../lib/dbconnection/mongodb";
import User from "../../../lib/models/Users";
import bcrypt from "bcrypt";

const isSamePass = (unHashPass, hashPass) => {
  return bcrypt.compare(unHashPass, hashPass).then((result) => {
    return result;
  });
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    try {
      await connectMongo();
      const user = await User.find({ email: email }).exec();
      if (user.length === 1) {
        const dbEmail = user[0].email;
        const hashPass = user[0].password;
        const login = await isSamePass(password, hashPass);
        if (login === true && dbEmail === email) {
          res.status(200).json({ Message: "Ok" });
        } else {
          res.status(401).json({ Message: "Error en el correo o contraseña" });
        }
      } else {
        res.status(401).json({ Message: "Error en el correo o contraseña" });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    } finally {
      await disconnectMongo();
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
