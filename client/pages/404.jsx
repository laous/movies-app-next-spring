import Link from "next/link";

const Lost = () => {
  return (
    <div>
      Lost?{" "}
      <Link href="/">
        <span className="underline cursor-pointer">Go Home</span>
      </Link>
    </div>
  );
};
export default Lost;
