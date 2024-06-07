import { ButtonProps } from '../button';

interface IButtonLink extends ButtonProps {
  active: boolean;
}

const ButtonLink = ({ type, content, active, onClick }: IButtonLink) => {
  return (
    <button className="bg-transparent" type={type} onClick={onClick}>
      <p className={`p-2 ${active ? 'font-normal' : 'font-bold'} ${active ? 'outline-none' : 'ring-2 ring-carrara'} font-cabin text-white`}>{content.toLocaleUpperCase()}</p>
    </button>
  );
};

export default ButtonLink;
