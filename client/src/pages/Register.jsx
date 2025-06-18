import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        pnumber,
        password,
      });
      alert("Registration Successfully...! Now You can Login....!!");
    } catch (e) {
      alert("Try Failed. Please try Again Later....");
    }
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center">REGISTER</h1>
        <form className="max-w-lg mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="your@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Phone No."
            value={pnumber}
            onChange={(e) => setPnumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Register</button>
          <div className="text-center py-2">
            Alredy a member?
            <Link className="underline text" to={"/login"}>
              LOGIN
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
