import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const Home = lazy(() => import("./modules/Home"));
  const Login = lazy(() => import("./modules/auth/pages/Login"));
  const Signup = lazy(() => import("./modules/auth/pages/Signup"));
  const Resources = lazy(() => import("./modules/resources/Resources"));
  return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/resources" element={<Resources />} />
				</Routes>
			</Suspense>
		</Router>
  );
}

export default App;
