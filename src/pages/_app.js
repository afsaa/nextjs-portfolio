import 'tailwindcss/tailwind.css';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function MyApp({ Component, pageProps }) {
  const { data: contentTypeEntries } = useSWR(`api/contentful/content-types/navigation`, fetcher);
  const navItems = contentTypeEntries?.items?.map((navItem) => {
    return {
      id: navItem.sys.id,
      pathname: navItem.fields.pathname,
      title: navItem.fields.title,
    };
  });
  console.log(navItems);
  return <Component navItems={navItems} {...pageProps} />;
}

export default MyApp;
