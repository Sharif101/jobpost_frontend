import { useContext, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { Auth } from "../../contexts/context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { dispatchAuth } = useContext(Auth);
  const navigate = useNavigate();

  const [confirmPassShow, setConfirmPassShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let logFetch = await fetch(`https://jobbackend-pi.vercel.app/login`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        dataType: "json",
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      let log = await logFetch.json();

      if (logFetch.ok) {
        dispatchAuth({ type: "token", payload: log.token });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-slate-50 p-10 rounded"
      >
        <p className="text-cyan-500 text-center pb-2 text-xl">Please Login</p>
        <div className="mb-1">
          <label htmlFor="" className="text-xs">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-1 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px] "
          />
        </div>
        <div className="w-full relative">
          <label htmlFor="" className="text-xs">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-1 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px]  md:placeholder:text-[12px] focus:border-primary  transition ease-linear duration-100"
            type={`${confirmPassShow ? "text" : "password"}`}
            placeholder="Confirm password"
          />
          <button
            onClick={() => setConfirmPassShow(!confirmPassShow)}
            type="button"
            className="absolute top-8 right-3 cursor-pointer text-[16px]"
          >
            {!confirmPassShow ? <IoMdEyeOff /> : <IoMdEye />}
          </button>
        </div>
        <p className="text-[12px] mt-2 text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            sign up
          </Link>
        </p>
        <div className="flex items-center justify-center mt-5">
          <button className="border text-[12px] bg-blue-400 text-white px-3 py-1 rounded">
            Sign in
          </button>
        </div>

        <div className="flex items-center justify-center mt-5">
          <p
            onClick={() => {
              setEmail("sharif@gmail.com");
              setPassword("1234");
            }}
            className="w-full border text-[12px] bg-slate-200 text-white px-3 py-1 rounded text-slate-700 font-bold text-center cursor-pointer"
          >
            Credentials
          </p>
        </div>
      </form>
    </div>
  );
}
