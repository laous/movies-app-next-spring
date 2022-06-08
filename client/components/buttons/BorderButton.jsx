import Link from "next/link";

const BorderButton = ({ text, color, link }) => {
  const bgcolor = "bg-" + color + "";
  return (
    <Link href={"/"}>
      <div className="p-0.5  bg-gradient-to-tr  from-[#ff6969] to-[#e752ff] cursor-pointer rounded-sm ">
        <div
          className={`w-full px-4 py-1 h-full ${bgcolor} text-xs md:text-sm font-semibold`}
        >
          {text}
        </div>
      </div>
    </Link>
  );
};
export default BorderButton;
