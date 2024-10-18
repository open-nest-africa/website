import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <nav className="flex gap-x-2">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>

      <h1> Home page</h1>
    </section>
  );
};

export default Home;
