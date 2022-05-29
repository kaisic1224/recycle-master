import { NextApiRequest, NextApiResponse } from "next";
import cohere from "cohere-ai";
cohere.init(process.env.API_KEY!, "2021-11-08");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let question = req.body.question;
  if (question.indexOf("?") === -1) {
    question += "?";
  }

  const response = await cohere.classify(
    "512ae6c1-a4ed-4c7a-9b2d-b568d279ee29-ft",
    {
      inputs: [question as string],
      examples: [
        { text: "Where do I dump plastic cans?", label: "Blue Bin" },
        { text: "Where does broken hangers go?", label: "Garbage Bin" },
        { text: "where do i put sofa?", label: "Oversized Item" },
        { text: "stove?", label: "Metal" },
        { text: "broken bamboo?", label: "Yard Waste" },
        { text: "old scooter?", label: "Not Accepted" },
        { text: "pool blanket?", label: "Drop off depot" },
        { text: "dirty pizza box?", label: "Green Bin" },
        { text: "broken window?", label: "Garbage Bin" },
        { text: "soiled clothes?", label: "Garbage Bin" }
      ]
    }
  );

  const data = response.body.classifications;

  return res.status(200).json(data);
};
