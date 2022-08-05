import React from 'react';
import Image from 'next/image';

interface IImageContainer {
  fields?: {
    profilePicture?: {
      fields?: {
        file?: {
          url?: string;
        };
      };
    };
  };
}

const ImageContainer = ({ fields }: IImageContainer) => {
  return (
    <div className="w-full md:w-auto mt-10 md:ml-2 flex items-center justify-center">
      <Image
        className="rounded-md drop-shadow-xl"
        src={fields?.profilePicture?.fields?.file?.url ? `https:${fields.profilePicture.fields.file?.url}` : '/me.jpg'}
        alt="Photo of me"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ImageContainer;
