import React from 'react';
import Image from 'next/image';

interface IProfilePicture {
  profilePicture?: {
    url?: string;
    description?: string;
  };
}

const ImageContainer = ({ profilePicture }: IProfilePicture) => {
  return (
    <div className="w-full md:w-auto mt-10 md:mt-0 flex items-center justify-self-start">
      <Image className="rounded-xl drop-shadow-xl" src={profilePicture?.url || '/me.jpg'} alt={profilePicture?.description || 'Photo of me'} width={500} height={500} />
    </div>
  );
};

export default ImageContainer;
