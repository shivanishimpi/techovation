import jwt from "jsonwebtoken";
import { JsonWebTokenError } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const KEY = "KittiesANDCookiees";
export default function (req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 404;
    res.end("Error");
    return;
  }
  const { username, password } = req.body;
  res.json({
    token: jwt.sign(
      {
        username,
        admin: username == "Sunshine" && password === "Cookie",
      },
      KEY
    ),
  });
}
//http://localhost:3000/api/hello
