import ActiveLink from './ActiveLink';

export default function Navbar() {
  return (
    <nav className='bg-black px-4'>
      <ul className='flex gap-x-2 py-2 pb-3 flex-col md:flex-row'>
        <li>
          <ActiveLink href='/'>Home</ActiveLink>
        </li>
        <li>
          <ActiveLink href='/campgrounds'>Campgrounds</ActiveLink>
        </li>
      </ul>
    </nav>
  );
}
