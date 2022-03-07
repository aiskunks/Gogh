import { NextApiRequest, NextApiResponse } from 'next'

// Dummy API
export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ basic: 'Dummy API' })
}
