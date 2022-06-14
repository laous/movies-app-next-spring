import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="relative w-screen bg-black min-h-64  flex items-center justify-center">
      <div className="w-full max-w-3xl py-20 mb-6 flex flex-col md:flex-row items-center md:items-start  justify-between md:space-x-32 space-y-10 md:space-y-0">
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

      <div className="absolute bottom-4 mt-6 mx-auto text-sm">
        <a
          href="https://laous.netlify.app/"
          target={"_blank"}
          className="hover:text-red-300"
        >
          with love {"<3"}
        </a>
      </div>
      <div className="h-1 w-full absolute bottom-0 bg-gradient-to-r from-[#ff6969] to-[#e752ff]"></div>
    </footer>
  );
};
export default Footer;
