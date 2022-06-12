import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../reducers/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // handle form
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password };
    dispatch(login(userData));
  };

  const { user, status, message } = useSelector((state) => state.auth);
  console.log("USer state :", user);

  useEffect(() => {
    if (status === "failed") {
      toast.error("Wrong Credentials", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "darkred",
        },
      });
      console.log("failed");
    }
    if (status === "succeeded" || user) {
      toast.success("Success", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "green",
        },
      });
      router.push("/");
      dispatch(reset());
    }
  }, [user, status, message, router, dispatch]);

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
        onSubmit={handleSubmit}
      >
        <h3>Already have an account?</h3>
        <input
          type={"text"}
          placeholder="Username or Email"
          name={"username"}
          value={username}
          className="py-2 px-3 rounded-md outline-none bg-stone-100 text-black"
          required
          onChange={onChange}
        />
        <input
          type={"password"}
          placeholder="Password"
          name={"password"}
          value={password}
          className="py-2 px-3 rounded-md outline-none bg-stone-200 text-black"
          required
          onChange={onChange}
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
