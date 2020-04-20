import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

function App() {
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    Axios.defaults.baseURL = "http://localhost:5000";
    Axios.interceptors.request.use(config=>{
      if (token) config.headers.authorization = `Bearer ${token}`;
      console.log( "*******",config)
      return config;
    })
  }, [token]);

  const login = async () => {
    try {
      const { data } = await Axios.post("/auth/signin", {
        email: "gregory.petit@apside.com",
        password: "apside",
      });
      console.log(data);
      setToken(data)
    } catch (e) {
      setError(e.message);
    }
  };
  const logout = () => {};

  const getMe = async () => {
    try {
      const { data } = await Axios.get("/hellome");
      console.log(data);
      setProfile(data)
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{error}</p>
        <p>{token}</p>
      </header>
      <article>
        <h3>Je me logue avec gregory.petit@apside.com</h3>
        <button onClick={login}>Log in</button>
      </article>
      {/* <article>
        <h3>Je me logout </h3>
        <button onClick={logout}>Log out</button>
      </article> */}
      <article>
        <h3>Je récup mon profile </h3>
        <button onClick={getMe}>Get Me</button>
        <p>{profile}</p>
      </article>
    </div>
  );
}

export default App;
