import Link from "next/link";


const Logo = () => {
  return (
    <h1 className="cursor-pointer capitalize font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF6969] to-[#E752FF]">
      <Link href={"/"}>seen+</Link>
    </h1>
  );
};
export default Logo;
