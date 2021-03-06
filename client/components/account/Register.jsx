import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../reducers/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsRegister(true);
    const userData = { fullname, email, username, password };
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_LINK + "/user",
      userData,
      config
    );
    if (response.data) {
      toast.success("Account Created", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "green",
          color: "white",
        },
      });
      toast.info("You have to sign in now!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Invalid informations!", {
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
    }
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
          required
        />
        <input
          type={"text"}
          placeholder="Username"
          name={"username"}
          value={username}
          className="py-2 px-3 rounded-md outline-none bg-stone-200 text-black "
          onChange={onChange}
          required
        />
        <input
          type={"text"}
          placeholder="Email"
          name={"email"}
          value={email}
          className="py-2 px-3 rounded-md outline-none bg-stone-200 text-black"
          onChange={onChange}
          required
        />
        <input
          type={"password"}
          placeholder="Password"
          name={"password"}
          value={password}
          className="py-2 px-3 rounded-md outline-none bg-stone-200 text-black"
          onChange={onChange}
          required
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
