import { useRouter } from 'next/router';
import Image from 'next/image';
import PropTypes from 'prop-types';

import profilePic from '../../public/me.jpg';
import Button from '../../ui/button';

const Hero = () => {
  const router = useRouter();

  return (
    <div className="py-5 px-10 flex items-center justify-around">
      <div className="flex flex-col items-start">
        <h1 className="mb-10 text-6xl text-mirage font-montserrat">Andres Fernando Saa</h1>
        <h2 className="mb-5 text-3xl text-primary font-cabin font-bold">Desarrollador Frontend</h2>
        <h4 className="text-lg text-mirage font-montserrat">Creando experiencias de usuario vistosas y satisfactorias.</h4>
        <Button text="Ver más" bg="mirage" color="white" onClick={() => router.push('/about')} />
      </div>
      <div>
        <Image className="rounded-md drop-shadow-xl" src={profilePic} alt="Photo of me" width={500} height={500} />
      </div>
    </div>
  );
};

Hero.propTypes = {};

export default Hero;
