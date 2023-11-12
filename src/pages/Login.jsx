import React, { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EmailInput from "../components/LoginComponent/EmailInput";
import PassInput from "../components/LoginComponent/PassInput";
import LoginButton from "../components/LoginComponent/LoginButton";
import LoginStatus from "../components/LoginComponent/LoginStatus";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resResult, setResResult] = useState(null);
  const navigate = useNavigate();

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const result = await axios.post("http://localhost:4000/login", {
          email,
          password,
        });
        setResResult(result.data);

        if (result.data.status === 200) {
          localStorage.setItem("user", JSON.stringify(result.data.result));
          navigate("/home");
        }
      } catch (error) {
        console.log(error);
      }
    },
    [email, password]
  );
  return (
    <div className="bg-green-200/50 rounded-lg p-4 w-full lg:w-[50%] mx-5">
      <h1 className="text-center font-bold text-4xl mb-5">Login</h1>
      <EmailInput email={email} setEmail={setEmail} />
      <PassInput password={password} setPassword={setPassword} />
      <LoginStatus resResult={resResult} />
      <LoginButton handleLogin={handleLogin} />
    </div>
  );
};
