import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <div className="text-left">
          <InputBox placeholder="saad@gmail.com" label={"Email"} onChange={e => {
            setUsername(e.target.value);
          }} />
          <InputBox placeholder="123456" label={"Password"} onChange={(e) => {
            setPassword(e.target.value)
          }}/>
        </div>
        <div className="pt-4">
          <Button onClick={async () => {
            try{
              const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password
              });
              localStorage.setItem("token", response.data.token)
              if (response.status === 200) {
                toast.success("Logged in successfully");
                navigate("/dashboard");
              }
            }
            catch(error){
              toast.error("Please enter the correct details");
          }}} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/"} />
      </div>
    </div>
  </div>
}
export default Signin;