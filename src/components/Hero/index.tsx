const Hero = ({ error, onError, render }) => {
  return (
    <section className="m-0 md:my-4 px-10 py-5 md:py-10 flex flex-wrap items-center justify-around md:flex-nowrap">
      {error && onError()}
      {render && render()}
    </section>
  );
};

export default Hero;
