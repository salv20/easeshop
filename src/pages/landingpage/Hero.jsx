import Sliders from "./Sliders";

const Hero = () => {
  return (
    <section className="text-center gap-12 flex flex-col py-4">
      <div className="flex flex-col gap-4">
        <button
          aria-label="easestore-button"
          className="transition-all w-fit mx-auto duration-700  border-[1px] border-[#858585] border-r-0 rounded-2xl px-4 py-1 text-[#858585] hover:tracking-wider hover:text-white"
        >
          Easestore collections, 2024
        </button>

        <h2 className=" font-semibold text-[#c8c9c9] text-lg lg:text-2xl">
          Where style and luxury trends, resonate and flourishes.
          <br />
          <span className="text-white font-bold">EASESTORE</span> Keeps it
          simple, keeps it classy.
        </h2>

        <p className="text-[#9d9b9b] text-sm">
          Find things thats suits you, that&apos;s how to look and feel
          extraordinary.
          <br className="hidden md:block" />
          Easestore offers the best of accessories.
        </p>

        <button
          aria-label="new-collection"
          className="btn-new w-fit text-[#3c3a3a] new-btn mx-auto transition-all duration-500 relative rounded-2xl py-1 px-3 items-center bg-[#c8c9c9] font-semibold"
        >
          <span>New collection</span>
        </button>
      </div>

      <Sliders />
    </section>
  );
};

export default Hero;
