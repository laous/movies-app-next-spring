const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-80 h-auto shadow-2xl bg-zinc-800 rounded-md  px-6 py-7">
      <form
        className="flex flex-col space-y-8 rounded-md justify-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h3>New member? Create a new account!</h3>
        <input
          type={"text"}
          placeholder="Full name"
          name={"full-name"}
          className="py-2 px-3 rounded-md outline-none bg-stone-200 text-black "
        />
        <input
          type={"text"}
          placeholder="Username"
          name={"username"}
          className="py-2 px-3 rounded-md outline-none bg-stone-200 text-black "
        />
        <input
          type={"text"}
          placeholder="Email"
          name={"email"}
          className="py-2 px-3 rounded-md outline-none bg-stone-200 text-black"
        />
        <input
          type={"password"}
          placeholder="Password"
          name={"password"}
          className="py-2 px-3 rounded-md outline-none bg-stone-200 text-black"
        />
        <input
          type="submit"
          value="Register"
          className="py-2 px-3 rounded-md  bg-gray-900 cursor-pointer "
        />
      </form>
    </div>
  );
};
export default Register;
