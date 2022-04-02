import 'tailwindcss/tailwind.css';

const navItems = [
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
    pathname: '/exp-and-projects',
    title: 'Experience and Projects',
  },
  {
    id: 4,
    pathname: '/contact',
    title: 'Contact',
  },
];

function MyApp({ Component, pageProps }) {
  return <Component navItems={navItems} {...pageProps} />;
}

export default MyApp;
