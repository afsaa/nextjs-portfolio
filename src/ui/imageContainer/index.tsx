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
    <div className="w-full md:w-1/2 lg:w-1/3 mt-10 md:mt-0 flex items-center justify-center">
      <Image className="rounded-xl drop-shadow-xl" src={profilePicture?.url || '/me.jpg'} alt={profilePicture?.description || 'Photo of me'} width={450} height={450} />
    </div>
  );
};

export default ImageContainer;
