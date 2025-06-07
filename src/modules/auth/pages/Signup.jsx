import React from "react";
import AuthLayout from "../component/AuthLayout";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const navigate = useNavigate();

  const handleGithubLogin = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URL;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;
    window.location.href = githubAuthUrl;
  };

  const handleGoogleSignup = async () => {
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
        setErrorMessage("Signup failed. Please try again.");
      }
    }
  };

  return (
    <AuthLayout title="Sign up" className="flex-col items-center">
      <div>
        <div className="space-y-4 flex flex-col justify-center items-center w-[448px] pt-10">
          <Button
            onClick={handleGithubLogin}
            text="Continue with Github"
            icon="/images/github-logo.svg"
            className="bg-primary text-[#344054] text-base font-semibold align-center py-4 px-24 w-full"
          />

          <Button
            onClick={handleGoogleSignup}
            text="Continue with Google"
            icon="/images/google-logo.svg"
            className="bg-primary text-[#344054] text-base font-semibold align-center py-4 px-24 w-full"
          />

          {errorMessage && (
            <p className="text-red-600 text-sm text-center mb-4">
              {errorMessage}
            </p>
          )}
          <div className="flex items-center w-full gap-x-3">
            <h className="border border-green-900 border-solid w-full" />
            or
            <h className="border border-[#344054] w-full" />
          </div>
          <Button
            text="Continue with Email"
            className="bg-white border-[1.5px] border-[#D0D5DD] border-solid text-[#344054] text-base font-semibold py-4 px-[130px] w-full"
          />
          <p className="text-base text-[#667185]">
            By creating an account you agree with our Terms of Service, Privacy
            Policy, and our default Notification Settings.
          </p>
        </div>
        <p className="text-sm text-[#667185] mt-10">
          Already have an account?{" "}
          <span className="font-medium text-[#0C9EDD]">
            <Link to="/login">Sign in</Link>
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Signup;
