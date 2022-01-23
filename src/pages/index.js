import Navbar from '@/components/Navbar';

const links = [
  {
    id: 1,
    pathname: '/',
    title: 'Home',
  },
  {
    id: 2,
    pathname: '/about',
    title: 'About me',
  },
  {
    id: 3,
    pathname: '/exp-&-projects',
    title: 'Experience and Projects',
  },
  {
    id: 4,
    pathname: '/contact',
    title: 'Contact',
  },
];

export default function Home() {
  return (
    <div>
      <Navbar navLinks={links} />
    </div>
  );
}
