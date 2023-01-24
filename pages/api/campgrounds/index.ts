import type { NextApiRequest, NextApiResponse } from 'next';

type Campground = {
  _id: number;
  name: string;
  price: number;
  description: string;
};

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Campground[]>
) {
  const campgrounds: Campground[] = [
    {
      _id: 1,
      name: 'Yosemite',
      price: 40,
      description: 'cool',
    },
  ];
  return res.status(200).json(campgrounds);
}
