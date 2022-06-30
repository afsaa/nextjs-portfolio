import { useRouter } from 'next/router';
import Image from 'next/image';

import profilePic from '../../public/me.jpg';
import Button from '../../ui/button';

type IHero = {
  name: string;
  role: string;
  description: string;
  imgSrc: string;
};

const Hero = ({ name, role, description, imgSrc }: IHero) => {
  const router = useRouter();

  return (
    <section className="py-5 px-10 flex items-center justify-around">
      <div className="flex flex-col items-start">
        <h1 className="mb-10 text-6xl text-mirage font-montserrat">{name}</h1>
        <h2 className="mb-5 text-3xl text-primary font-cabin font-bold">{role}</h2>
        <h4 className="mb-5 text-lg text-mirage font-montserrat">{description}</h4>
        <Button text="See more" bg="black" color="white" onClick={() => router.push('/about')} />
      </div>
      <div>
        <Image className="rounded-md drop-shadow-xl" src={imgSrc || profilePic} alt="Photo of me" width={500} height={500} />
      </div>
    </section>
  );
};

export default Hero;
