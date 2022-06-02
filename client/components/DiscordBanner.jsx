const DiscordBanner = () => {
  return (
    <div className="mt-20 relative w-screen bg-black max-h-[220px] flex items-end justify-center">
      <div className="max-w-5xl w-full flex items-end justify-between">
        <img
          src="./assets/movienight.svg"
          className="w-[500px] max-h-[352px] self-end mb-[-14px]"
        />
        <div className="flex flex-col justify-center gap-4 max-w-xs pb-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            nesciunt quo consequuntur cumque velit fugiat dolor beatae nemo.
          </p>
          <div>
            <span>+3k Members</span>
            <span> haha</span>
          </div>
          <button className="py-3 px-5 bg-violet-700 max-w-[170px] rounded-md">
            Join Us
          </button>
        </div>
        <img src="./assets/discord.svg" className="absolute right-0 bottom-0" />
      </div>
    </div>
  );
};
export default DiscordBanner;
