import Navbar from "@/components/Navbar";

const links = [{ 
  pathname: '/home',
  title: 'Home',
 },
 { 
  pathname: '/about',
  title: 'About me',
 },
 { 
  pathname: '/exp-&-projects',
  title: 'Experience and Projects',
 },
 { 
  pathname: '/contact',
  title: 'Contact',
 },
]

export default function Home() {
  return (
    <div>
      <Navbar navLinks={links} />
    </div>
  )
}
