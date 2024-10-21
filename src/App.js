import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLoader from "./components/PageLoader";

function App() {
  const Home = lazy(() => import("./modules/Home"));
  const Login = lazy(() => import("./modules/auth/pages/Login"));
  const Signup = lazy(() => import("./modules/auth/pages/Signup"));
  const Resources = lazy(() => import("./modules/resources/Resources"));
  const GithubAuth = lazy(() => import("./modules/auth/pages/GithubAuth"));
  const Dashboard = lazy(() => import("./modules/auth/pages/Dashboard"));
  return (
		<Router>
			<Suspense fallback={<PageLoader/>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/resources" element={<Resources />} />
					<Route path="/auth/github" element={<GithubAuth />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</Suspense>
		</Router>
  );
}

export default App;
