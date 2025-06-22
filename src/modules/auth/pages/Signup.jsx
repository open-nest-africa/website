import React from "react";
import AuthLayout from "../component/AuthLayout";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleGithubLogin = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URL;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;
    window.location.href = githubAuthUrl;
  };
  return (
    <AuthLayout title="Sign up" className="flex-col items-center">
      <div>
        <div className="space-y-4 flex flex-col justify-center items-center w-[448px] pt-10">
          <Button
            onClick={handleGithubLogin}
            text="Continue with Github"
            icon="/images/github-logo.svg"
            type="auth"
            className="bg-primary text-[#344054] text-base font-semibold align-center py-4 px-24 w-full"
          />
          <Button
            text="Continue with Google"
            icon="/images/google-logo.svg"
            type="auth"
            className="bg-primary text-[#344054] text-base font-semibold align-center py-4 px-24 w-full"
          />
          <div className="flex items-center w-full gap-x-3">
            <h className="border border-green-900 border-solid w-full" />
            or
            <h className="border border-[#344054] w-full" />
          </div>
          <Button
            text="Continue with Email"
            type="auth"
            className="bg-white border-[1.5px] border-[#D0D5DD] border-solid text-[#344054] text-base font-semibold py-4 px-[130px] w-full"
          />
          <p className="text-base text-[#667185]">
            By creating an account you agree with our Terms of Service, Privacy
            Policy, and our default Notification Settings.
          </p>
        </div>
        <p className="text-sm text-[#667185] mt-10">
          Already have an account?{" "}
          <span className="font-medium text-[#0C9EDD] hover:font-bold transition-all duration-300 ease-in-out inline-blockk">
            <Link to="/login">Sign in</Link>
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Signup;
