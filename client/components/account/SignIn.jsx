const SignIn = () => {
  return (
    <div
      className="flex flex-col items-center justify-center self-stretch w-80  shadow-2xl bg-zinc-700 rounded-md  px-6 py-4"
      style={{
        background:
          "linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(100, 100, 100, 0.1) 100%)",
      }}
    >
      <form
        className="flex flex-col space-y-8 rounded-md justify-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h3>Already have an account?</h3>
        <input
          type={"text"}
          placeholder="Username or Email"
          name={"username"}
          className="py-2 px-3 rounded-md outline-none bg-stone-100 text-black"
        />
        <input
          type={"password"}
          placeholder="Password"
          name={"password"}
          className="py-2 px-3 rounded-md outline-none bg-stone-200 text-black"
        />
        <input
          type="submit"
          value="Sign in"
          className="py-2 px-3 rounded-md  bg-black cursor-pointer "
        />
      </form>
    </div>
  );
};
export default SignIn;
