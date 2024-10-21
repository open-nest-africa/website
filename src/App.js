import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const Home = lazy(() => import("./modules/Home"));
  const Login = lazy(() => import("./modules/auth/pages/Login"));
  const Signup = lazy(() => import("./modules/auth/pages/Signup"));
  const Resources = lazy(() => import("./modules/resources/Resources"));
  const AboutUs = lazy(() => import("./modules/about-us/AboutUs"));
  return (
    <Router>
      <Suspense
        fallback={
          <div className="w-full h-screen flex items-center justify-center">
            <ArrowPathIcon className="h-8 w-8 text-blue-500 animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
