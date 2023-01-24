const TitleSections = ({ title }) => {
  return (
    <div>
      <h2 className="text-gray-200 text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center tracking-[1px] underline underline-offset-[10px] decoration-yellow-500/80">
        {title}
      </h2>
    </div>
  );
};

export default TitleSections;
