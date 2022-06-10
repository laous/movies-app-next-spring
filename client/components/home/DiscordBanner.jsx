import { SiDiscord } from "react-icons/si";

const DiscordBanner = () => {
  return (
    <div className="mt-20 relative w-screen bg-black max-h-[220px] flex items-end justify-center">
      <div className="max-w-5xl w-full flex items-end justify-between">
        {/* Discord logo */}
        <img
          src="./assets/discord.svg"
          className="absolute right-2 bottom-0 max-w-[72px] md:max-w-none hidden md:flex"
        />

        <img
          src="./assets/movienight.svg"
          className="w-[500px] max-h-36 md:max-h-[382px] self-center md:self-end mb-[-14px]"
        />
        <div className="flex flex-col justify-center gap-4 max-w-xs mb-3 md:mb-12 z-10">
          <p className="font-medium text-sm md:text-base ">
            Join the discord to watch movies in streams with the community every
            night!
          </p>
          <div className="flex items-center gap-3">
            <span className="font-medium text-xs md:text-sm text-[#C6C6C6]">
              +3k Members
            </span>
            <span className="font-medium text-xs md:text-sm text-[#C6C6C6]">
              +200 Movie Streamed
            </span>
          </div>
          <button className="py-1.5 px-2.5 bg-[#1A52E4] max-w-[170px] rounded-lg flex items-center justify-center gap-2">
            <span>Join us</span>
            <SiDiscord />
          </button>
        </div>
      </div>
    </div>
  );
};
export default DiscordBanner;
