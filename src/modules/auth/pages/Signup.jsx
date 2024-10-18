import React from "react";
import AuthLayout from "../component/AuthLayout";
import Button from "../../../components/Button";
import TextField from "../../../components/form/TextField";

const Signup = () => {
  return (
    <AuthLayout title="Sign up">
      <div>
        <form action="">
          <TextField className="border-dark outline-dark" label="name" />
        </form>
        <Button text="signup" />
      </div>
    </AuthLayout>
  );
};

export default Signup;
