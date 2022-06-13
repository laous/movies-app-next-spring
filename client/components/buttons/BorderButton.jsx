import Link from "next/link";

const BorderButton = ({ text, color, link, onClick }) => {
  const bgcolor = "bg-" + color + "";
  return (
    <>
      {" "}
      {link ? (
        <Link href={"/"}>
          <div className="p-0.5  bg-gradient-to-tr  from-[#ff6969] to-[#e752ff] cursor-pointer rounded-sm ">
            <div
              className={`w-full px-4 py-1 h-full ${bgcolor} text-xs md:text-sm font-semibold`}
            >
              {text}
            </div>
          </div>
        </Link>
      ) : (
        <button onClick={onClick}>
          <div className="p-0.5  bg-gradient-to-tr  from-[#ff6969] to-[#e752ff] cursor-pointer rounded-sm ">
            <div
              className={`w-full px-4 py-1 h-full ${bgcolor} text-xs md:text-sm font-semibold`}
            >
              {text}
            </div>
          </div>
        </button>
      )}
    </>
  );
};
export default BorderButton;
