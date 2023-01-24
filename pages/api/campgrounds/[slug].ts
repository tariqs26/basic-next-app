import { Campground } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Campground | undefined>
) {
  const { slug } = req.query;

  const campgrounds: Campground[] = [
    {
      _id: 1,
      name: 'Yosemite',
      price: 40,
      description: 'cool',
    },
  ];

  const camp = campgrounds.find((camp) => camp.name === slug);
  return res.status(200).json(camp);
}
