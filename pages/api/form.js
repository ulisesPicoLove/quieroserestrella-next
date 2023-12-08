import { connectMongo, disconnectMongo } from "../../lib/dbconnection/mongodb";
import response from "../../lib/models/Responses";

const handdler = async (req, res) => {
  if (req.method === "POST") {
    const { name, phone, city, location, colonia, codigoPostal } = req.body;
    try {
      await connectMongo();
      const newResponse = new response({
        name: name,
        phone: phone,
        city: city,
        location: location,
        colonia: colonia,
        codigoPostal: codigoPostal,
      });
      await newResponse.save();
      res.status(200).json({ message: "Ok", data: newResponse });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    } finally {
      await disconnectMongo();
    }
  } else if (req.method === "GET") {
    try {
        await connectMongo();
        const data = await response.find({});
        res.status(200).json({ message: "Ok", data: data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    } finally {
      await disconnectMongo();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handdler;
