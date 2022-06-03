import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="relative w-screen bg-black min-h-64  flex items-center justify-center">
      <div className="w-4xl py-20 mb-6 flex flex-col lg:flex-row items-start  justify-between lg:space-x-32 space-y-10 lg:space-y-0">
        <Logo />
        <div className="flex flex-col gap-4">
          <h3>About</h3>
          <ul className="flex flex-col gap-1 ">
            <li className="text-[#C6C6C6] text-sm">Who we are</li>
            <li className="text-[#C6C6C6] text-sm">Meet the team</li>
            <li className="text-[#C6C6C6] text-sm">Carreers</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3>About</h3>
          <ul className="flex flex-col gap-1 ">
            <li className="text-[#C6C6C6] text-sm">Who we are</li>
            <li className="text-[#C6C6C6] text-sm">Meet the team</li>
            <li className="text-[#C6C6C6] text-sm">Carreers</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3>About</h3>
          <ul className="flex flex-col gap-1 ">
            <li className="text-[#C6C6C6] text-sm">Who we are</li>
            <li className="text-[#C6C6C6] text-sm">Meet the team</li>
            <li className="text-[#C6C6C6] text-sm">Carreers</li>
          </ul>
        </div>
      </div>

      <p className="absolute bottom-4 mt-6 mx-auto text-xs">
        with love {"<3"} by marcsox{" "}
      </p>
      <div className="h-1 w-full absolute bottom-0 bg-gradient-to-r from-[#ff6969] to-[#e752ff]"></div>
    </footer>
  );
};
export default Footer;
