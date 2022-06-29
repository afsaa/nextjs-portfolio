type Navigation = {
  title: string;
  pathname: string;
};

type User = {
  name: string;
  role: string;
  summary: string;
  about: string;
  profilePicture: Image;
};

type Preview = {
  experienceHeading: string;
  experienceDescription: string;
  projectHeading: string;
  projectDescription: string;
};

type Experience = {
  jobTitle: string;
  companyName: string;
  description: JSON;
};

type Project = {
  name: string;
  description: string;
};

type SocialMedia = {
  url: string;
  icon: Image;
};
