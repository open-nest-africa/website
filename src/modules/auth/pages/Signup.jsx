import React from "react";
import AuthLayout from "../component/AuthLayout";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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
      console.log(token);

      localStorage.setItem("accessToken", token);

      console.log("User:", user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during sign-up:", error);
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
