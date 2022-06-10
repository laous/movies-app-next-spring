import { Register, SignIn } from "../../components";

const Account = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between md:gap-32 gap-12 h-full py-16">
      <SignIn />
      <div className="hidden lg:flex border-l h-[200px]"></div>
      <Register />
    </main>
  );
};
export default Account;
