import { Register, SignIn } from "../../components";

const Account = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between md:gap-32 gap-12 h-full py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-xl">Sign in</h2>
        <SignIn />
      </div>

      <div className="hidden lg:flex border-l h-[200px]"></div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-xl">Create a new account</h2>
        <Register />
      </div>
    </main>
  );
};
export default Account;
