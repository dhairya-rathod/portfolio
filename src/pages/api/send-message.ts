import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prisma";
import { contactUsEmailTemplate, sendMail } from "@/utils/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const reqData = req.body;
    const { token } = req.headers;

    if (!token || token !== process.env.NEXT_PUBLIC_TOKEN) {
      return res.status(401).json({ message: "Unauthorized request" });
    }

    const { name, email, message } = reqData;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required parameter" });
    }

    const dbResponse = await prisma.messages.create({
      data: {
        name,
        email,
        message,
      },
    });

    const htmlContent = contactUsEmailTemplate(name, email, message);
    sendMail(htmlContent, "Let's Talk!", email);

    return res
      .status(200)
      .json({ message: "Message sent successfully!", data: dbResponse });
  } catch (error) {
    res.status(400).json(error);
  }
}
