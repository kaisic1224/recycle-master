import { NextApiRequest, NextApiResponse } from "next";
import cohere from "cohere-ai";
cohere.init(process.env.API_KEY!, "2021-11-08");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const bin = req.query.prediction;

  const response = await cohere.generate("large", {
    prompt: `Post: Throw it in the ${bin}\nHashtag:`,
    max_tokens: 50,
    temperature: 1,
    k: 0,
    p: 0.75
  });
  const data = response.body;

  return res.status(200).json(data);
};
