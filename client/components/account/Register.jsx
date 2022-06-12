import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../reducers/authSlice";

const Register = () => {
  const dispatch = useDispatch();

  // handle form
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const { fullname, email, username, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { fullname, email, username, password };
    dispatch(register(userData));
  };

  return (
    <div
      className="flex flex-col items-center justify-center  w-80 h-auto shadow-2xl bg-zinc-600 rounded-md  px-6 py-7"
      style={{
        background:
          "linear-gradient(180deg, rgba(217, 217, 217, 0.1) 0%, rgba(100, 100, 100, 0.1) 100%)",
      }}
    >
      <form
        className="flex flex-col space-y-8 rounded-md justify-center"
        onSubmit={handleSubmit}
      >
        <h3>New member? Create a new account!</h3>
        <input
          type={"text"}
          placeholder="Full name"
          name={"fullname"}
          value={fullname}
          className="py-2 px-3 rounded-md outline-none bg-stone-200 text-black "
          onChange={onChange}
        />
        <input
          type={"text"}
          placeholder="Username"
          name={"username"}
          value={username}
          className="py-2 px-3 rounded-md outline-none bg-stone-200 text-black "
          onChange={onChange}
        />
        <input
          type={"text"}
          placeholder="Email"
          name={"email"}
          value={email}
          className="py-2 px-3 rounded-md outline-none bg-stone-200 text-black"
          onChange={onChange}
        />
        <input
          type={"password"}
          placeholder="Password"
          name={"password"}
          value={password}
          className="py-2 px-3 rounded-md outline-none bg-stone-200 text-black"
          onChange={onChange}
        />
        <input
          type="submit"
          value="Register"
          className="py-2 px-3 rounded-md  bg-black cursor-pointer "
        />
      </form>
    </div>
  );
};
export default Register;
