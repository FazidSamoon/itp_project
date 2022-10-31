const Banner = () => {
  return (
    <div
      style={{ backgroundImage: "url(/images/mainBanner.png)" }}
      className="w-screen h-screen flex items-center"
    >
      <div className="ml-10">
        <div className="max-w-[20rem] text-left">
          <span className="text-5xl text-white tracking-wider font-bold">
            We Are Heritage
          </span>
        </div>
        <div className="max-w-[50rem] text-left mt-2">
          <span className="text-white text-sm tracking-wider">
            A hotel is an establishment that provides paid lodging on a
            short-term basis. Facilities provided inside a hotel room may range
            from a modest-quality mattress in a small room to large suites with
            bigger, higher-quality beds, a dresser, a refrigerator and other
            kitchen facilities, upholstered chairs, a flat screen television,
            and en-suite bathrooms
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
