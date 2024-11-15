import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen w-screen">
      <h1 className="text-3xl font-semibold bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
        Please Login First To Continue
      </h1>
      <div className="form-container shadow-lg shadow-green-600 w-3/6 rounded-md p-14">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <input
            required
            className="text-black outline-none  text-lg px-5 py-3 rounded-full border-2 focus:border-green-400 focus:ring-2 focus:ring-green-400 w-full font-medium"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            required
            className="text-black outline-none text-lg px-5 py-3 rounded-full border-2 focus:border-green-400 focus:ring-2 focus:ring-green-400 w-full font-medium"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="submit"
            className="text-white bg-green-600 hover:bg-green-400 outline-none text-lg px-5 py-3 rounded-full border-none  w-full font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
