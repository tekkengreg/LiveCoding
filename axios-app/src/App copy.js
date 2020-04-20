import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.defaults.baseURL = "http://localhost:5000";
    axios.interceptors.request.use((config) => {
      console.log(config);
      if (token) config.headers.authorization = `Bearer ${token}`;
      return config;
    });
  }, [token]);

  const login = async () => {
    setError(null);

    try {
      const { data } = await axios.post("/auth/signin", {
        email: "gregory.petit@apside.com",
        password: "apside",
      });
      setToken(data);
    } catch (e) {
      console.warn(e);
      setError(e.message);
    }
  };
  const logout = () => setToken(null);

  const getMe = async () => {
    setError(null);
    try {
      const { data } = await axios.get("/hellome");
      setProfile(data);
    } catch (e) {
      console.warn(e);
      setError(e.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: "red" }}>{error}</p>
        <p>{token}</p>
      </header>
      <article>
        <h3>Je me logue avec gregory.petit@apside.com</h3>
        <button onClick={login}>Log in</button>
      </article>
      <article>
        <h3>Je me logout </h3>
        <button onClick={logout}>Log out</button>
      </article>
      <article>
        <h3>Je récup mon profile </h3>
        <button onClick={getMe}>Get Me</button>
        <h4>---- {profile} -----</h4>
      </article>
    </div>
  );
}

export default App;
