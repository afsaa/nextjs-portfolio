import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import NavItem, { INavItem } from '../Navbar/partials/NavItem';

const Footer = ({ navItems }: { navItems?: INavItem[] }) => {
  const { locale } = useRouter();
  const [labels, setLabels] = useState({});

  const fetchTranslations = async (componentName: string) => {
    try {
      const labelsResponse = await fetch(`/api/staticdata?locale=${locale}&componentName=${componentName}`);
      if (!labelsResponse.ok) {
        throw new Error('Network response was not ok');
      }
      const labelsData = await labelsResponse.json();
      return setLabels(labelsData);
    } catch (error) {
      console.error('Error fetching labels data:', error);
    }
  };

  useEffect(() => {
    fetchTranslations('Footer');
  }, []);

  return (
    <div className="mt-10 p-5 md:px-11 md:py-16 flex flex-col md:flex-row justify-between bg-black shadow-xl">
      <div className="flex flex-col md:flex-row">
        {navItems?.map(({ sys, title, pathname }) => (
          <NavItem key={sys?.id} title={title} pathname={pathname} />
        ))}
      </div>
      <div className="flex items-center justify-center md:justify-start my-5 md:my-0">
        <p className="font-cabin text-center md:text-left text-carrara/50"> &copy; 2023 Andres Saa. {labels['allRightsReserved']}.</p>
      </div>
    </div>
  );
};

export default Footer;
