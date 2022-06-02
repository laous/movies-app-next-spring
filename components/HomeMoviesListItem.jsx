import Link from "next/link";

const HomeMoviesListItem = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="relative group w-64 max-w-64 h-auto">
        {/* Image */}
        <img
          className="w-64 max-w-64 h-auto group-hover:opacity-25"
          src="https://m.media-amazon.com/images/I/71-WBN3FCBL._AC_SL1280_.jpg"
        />
        {/* Content on hover */}
        <div class="absolute  top-0 left-0 opacity-0 group-hover:opacity-100">
          haha
        </div>
      </div>

      <div className="flex items-center space-x-5 justify-between px-1">
        <div className="flex flex-col">
          <h3 className="text-xl">Your Name</h3>
          <span className="text-sm">By Shinkai</span>
        </div>
        <div className="py-1 px-5  bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
          <Link href="/" className="">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomeMoviesListItem;
