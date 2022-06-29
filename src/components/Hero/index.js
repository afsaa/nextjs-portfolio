import { useRouter } from 'next/router';
import Image from 'next/image';
import PropTypes from 'prop-types';

import profilePic from '../../public/me.jpg';
import Button from '../../ui/button';

const Hero = ({ name, role, description, imgSrc }) => {
  const router = useRouter();

  return (
    <section className="py-5 px-10 flex items-center justify-around">
      <div className="flex flex-col items-start">
        <h1 className="mb-10 text-6xl text-mirage font-montserrat">{name || 'Andrés Fernando Saa'}</h1>
        <h2 className="mb-5 text-3xl text-primary font-cabin font-bold">{role || 'Desarrollador Frontend'}</h2>
        <h4 className="mb-5 text-lg text-mirage font-montserrat">{description || 'Creando experiencias de usuario vistosas y satisfactorias.'}</h4>
        <Button text="See more" bg="black" color="white" onClick={() => router.push('/about')} />
      </div>
      <div>
        <Image className="rounded-md drop-shadow-xl" src={imgSrc || profilePic} alt="Photo of me" width={500} height={500} />
      </div>
    </section>
  );
};

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
};

export default Hero;
