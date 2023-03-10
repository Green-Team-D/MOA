import cloudinary from "cloudinary";

export default async function handler(req, res) {
  const { currentUserId, title, type, style } = req.body;

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_APIKEY,
  });
  const openai = new OpenAIApi(configuration);
  try {
    const response = await openai.createImage({
      prompt: req.query.p,
      n: parseInt(req.query.n),
      size: "256x256",
    });

    // console.log(req.query.p);
    // console.log(response.data.data[0].url);
    console.log(title);

    if (response.data.data.length === 0) {
      throw new Error("no Data!!!");
    }

    res.status(200).json({ result: response.data.data });

    // const token = req.headers.authorization;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate image" });
  }
}