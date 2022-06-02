import Link from "next/link";


const Logo = () => {
  return (
    <h1 className="cursor-pointer capitalize font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
      <Link href={"/"}>seen+</Link>
    </h1>
  );
};
export default Logo;
