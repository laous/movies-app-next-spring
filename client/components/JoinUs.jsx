import Link from "next/link";

const JoinUs = () => {
  return (
    <section className="max-w-5xl w-full hidden md:flex flex-col md:flex-row items-center justify-between px-5">
      <img
        src="./assets/walking-girl.svg"
        className="max-h-[450px] self-end mb-[-32px] z-10"
      />
      <div className="flex flex-col gap-3 items-center justify-center">
        <h3 className="font-bold text-2xl">What are you waiting for?</h3>
        <p className="text-[#C6C6C6] text-base">
          Become a member for free and share your taste of movies with the
          community
        </p>
        <Link href={"/account"}>
          <div className="p-0.5  bg-gradient-to-tr  from-[#ff6969] to-[#e752ff] cursor-pointer rounded-sm">
            <div className="w-full px-12 py-1.5 h-full bg-black font-normal text-base ">
              Join Now
            </div>
          </div>
        </Link>
      </div>
      <img
        src="./assets/movie-camera.svg"
        alt=""
        className="max-h-[370px] self-end mb-[-5px]"
      />
    </section>
  );
};
export default JoinUs;
