import { connectToDatabase } from "@/database/connect";

export default async function handler(req, res) {
  const { method } = req;
  const { client } = await connectToDatabase();
  const db = client.db("DataMoa");
  const userCollection = db.collection("user");

  console.log(req.body.email);
  if (req.method === "GET") {
    try {
      const fullUserData = await userCollection.findOne({
        useremail: req.body.email,
      });
      res.status(200).json(fullUserData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
