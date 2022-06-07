import Link from "next/link";

const HomeMoviesListItem = () => {
  return (
    <div className="flex flex-col space-y-2 my-3 max-w-[47%] md:max-w-none">
      <div className="relative group w-64 max-w-full h-auto">
        {/* Image */}
        <img
          className="w-64 max-w-full h-auto group-hover:opacity-25"
          src="https://m.media-amazon.com/images/I/71-WBN3FCBL._AC_SL1280_.jpg"
        />
        {/* Content on hover */}
        <div className="max-w-full absolute bg-black bottom-0 top-0 left-0 right-0 opacity-0 group-hover:opacity-70 flex flex-col justify-between items-center py-5 px-4">
          <div className="flex flex-col gap-4">
            <header className="flex flex-col gap-1">
              <h2 className="text-xl md:text-2xl font-semibold">Your Name</h2>
              <div className="flex items-center justify-between">
                <span className="text-sm md:text-base font-medium">+16</span>
                <span className="text-base font-medium">|</span>
                <span className="text-base font-medium">+16</span>
                <span className="text-base font-medium">|</span>
                <span className="text-base font-medium">+16</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm md:text-base font-normal text-[#7B7B7B]">
                  Animation,
                </span>
                <span className="text-base font-normal text-[#7B7B7B]">
                  Drama,
                </span>
                <span className="text-base font-normal text-[#7B7B7B]">
                  Fantasy
                </span>
              </div>
            </header>

            {/* content */}
            <div className="flex flex-col gap-1">
              <h4 className="text-base md:text-lg font-semibold">Story</h4>
              <p className="text-xs md:text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                eum voluptates iste officiis obcaecati animi nemo explicabo
                illum.
              </p>
            </div>
          </div>

          <div className="py-1 px-5 rounded-[5px] bg-gradient-to-r p-[6px] from-[#FF6969] to-[#E752FF] cursor-pointer">
            <Link href="/movies/your-name" className="">
              Details
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-5 justify-between px-1">
        <div className="flex flex-col">
          <h3 className="text-xl">Your Name</h3>
          <span className="text-xs">By Makoto Shinkai</span>
        </div>
        <Link href={"/"}>
          <div className="p-0.5  bg-gradient-to-tr  from-[#ff6969] to-[#e752ff] cursor-pointer rounded-sm ">
            <div className="w-full px-2 py-0.5 h-full bg-black font-normal text-xs md:text-sm opacity-90">
              Watched
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default HomeMoviesListItem;
