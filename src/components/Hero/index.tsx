type HeroProps = {
  error: boolean;
  onError: Function;
  render: Function;
};

const Hero = ({ error, onError, render }: HeroProps) => {
  return (
    <section className="my-4 md:my-10 px-10 py-5 md:py-10 flex flex-wrap">
      {error && onError()}
      {render && render()}
    </section>
  );
};

export default Hero;
