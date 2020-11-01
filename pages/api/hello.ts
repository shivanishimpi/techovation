// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"

export default (req:NextApiRequest, res:NextApiResponse) => {
  // It should NOT be a react component
  // This is a rest api endpoint
  res.statusCode = 200
  // res.json({ name: 'Sunshine Cookie' })
  res.json({status: 'ok'})
}
// http://localhost:3000/api/hello