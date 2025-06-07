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
  const [errorMessage, setErrorMessage] = React.useState("");
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
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        setErrorMessage("Popup closed. Please try again.");
      } else if (error.code === "auth/network-request-failed") {
        setErrorMessage("Network error. Please try again.");
      } else if (
        error.code === "auth/account-exists-with-different-credential"
      ) {
        setErrorMessage("Account exists. Please try logging in instead.");
      } else if (error.code === "auth/too-many-requests") {
        setErrorMessage("Too many attempts. Please wait a bit.");
      } else {
        setErrorMessage("Login failed. Please try again.");
      }
    }
  };

  return (
    <AuthLayout title="Sign in" className="flex-col gap-5 w-full max-w-md mx-auto">
      <div className="flex flex-col gap-8">
        <p className="text-2xl font-semibold">Login with your email</p>
        <form action="">
          <TextField className="border-dark outline-dark py-4" placeholder={"Enter your email address"} />
        </form>
        <div className="text-sm text-[#667185]">
          <Link to="/forgot-password" className="font-medium text-blue hover:text-blue-500">
            Forgot your password?
          </Link>
        </div>
        <Button text="Login" className="bg-blue text-white text-base font-semibold px-[114px] py-4 text-center" />
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

          {errorMessage && (
            <p className="text-red-600 text-sm text-center mb-4">
              {errorMessage}
            </p>
          )}
        </div>
        <p className="text-sm text-[#667185]">
          Are you new here?{" "}
          <Link to="/signup" className="text-blue hover:scale-105 hover:translate-x-1 transition-all duration-300 ease-in-out inline-block">
            Create account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
