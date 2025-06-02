import React from "react";
import AuthLayout from "../component/AuthLayout";
import Button from "../../../components/Button";
import TextField from "../../../components/form/TextField";
import { FormDivider } from "../../../components/FormDivider";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleGithubLogin = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URL;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;
    window.location.href = githubAuthUrl;
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();

      localStorage.setItem("accessToken", token);

      console.log("User:", user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <AuthLayout
      title="Sign in"
      className="flex-col gap-5 w-full max-w-md mx-auto"
    >
      <div className="flex flex-col gap-8">
        <p className="text-2xl font-semibold">Login with your email</p>
        <form action="">
          <TextField
            className="border-dark outline-dark py-4"
            placeholder={"Enter your email address"}
          />
        </form>
        <Button
          text="Login"
          className="bg-blue text-white text-base font-semibold px-[114px] py-4 text-center"
        />
        <FormDivider text={"or"} />
        <div className="flex flex-col gap-3">
          <Button
            onClick={handleGithubLogin}
            icon="/images/github-logo.svg"
            text="Continue with Github"
            className="bg-white text-black text-base font-semibold px-[108px] py-4 text-center border border-dark rounded-md"
          />
          <Button
            onClick={handleGoogleLogin}
            icon="/images/google-logo.svg"
            text="Continue with Google"
            className="bg-white text-black text-base font-semibold px-[110px] py-4 text-center border border-dark rounded-md"
          />
        </div>
        <p className="text-sm text-[#667185]">
          Are you new here?{" "}
          <Link to="/signup" className="text-blue">
            Create account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
