const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="h-24 md:h-20 w-full border-t-2 border-indigo-800 backdrop-filter backdrop-blur-md px-8">
      <div className="h-full w-full flex flex-col justify-center items-center gap-1">
        <h5 className="text-yellow-200 font-bold text-sm sm:text-base md:text-lg text-center">
          Created with a lot of effort, love and hope for the future.
        </h5>
        <div className="flex justify-center items-center gap-2 md:gap-4">
          <span className="text-sky-500 font-bold text-sm sm:text-base lg:text-lg text-center">
            By Matias Arias
          </span>

          <span className="text-gray-200 font-bold text-sm sm:text-base lg:text-lg text-center">
            &#169; {year}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
