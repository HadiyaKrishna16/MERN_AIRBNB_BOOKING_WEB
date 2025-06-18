import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext.jsx";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const {data} = await axios.post("/login", { email, password, });
      setUser(data); 
      // if (userInfo.data == userDoc) {
      alert("Login Successfull..");
      setRedirect(true);
      // } else {
      // }
    } catch (e) {
      // console.log("error")
      alert("Login failed...");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="md-32">
        <h1 className="text-4xl text-center">LOGIN</h1>
        <form className="max-w-lg mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="your@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center py-2">
            Don't have an account yet?
            <Link className="underline text" to={"/register"}>
              REGISTER NOW
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
