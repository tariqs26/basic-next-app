import Link from 'next/link';
import { Campground } from '@/types';

async function getCampgrounds() {
  const res = await fetch('http://localhost:3000/api/campgrounds', {
    next: {
      revalidate: 1, // In seconds
    },
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
}

export default async function Campgrounds() {
  const data: Campground[] = await getCampgrounds();
  return (
    <>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white w-fit py-2 px-4 rounded
        transition duration-200 each-in-out'
      >
        Add Campground
      </button>
      <ul>
        {data.map((campground: Campground) => (
          <li key={campground._id} className='border'>
            <Link href={`/campgrounds/${campground._id}`}>
              {campground.name}
            </Link>
            <p>{campground.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
