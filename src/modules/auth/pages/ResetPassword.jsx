import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AuthLayout from "../component/AuthLayout";
import Button from "../../../components/Button";
import TextField from "../../../components/form/TextField";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/password-reset`, {
        token,
        newPassword: password,
      });
      setSuccess("Password has been reset successfully.");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Set New Password" className="flex-col gap-5 w-full max-w-md mx-auto" showOpenNestText={false}>
      <div className="flex flex-col gap-8">
        <p className="text-sm text-[#667185]">Please enter your new password below.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <TextField
            className="border-dark outline-dark py-4"
            placeholder="Enter new password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
          />

          <TextField
            className="border-dark outline-dark py-4"
            placeholder="Confirm new password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength="8"
          />

          {error && <div className="text-red-500 text-sm">{error}</div>}
          {success && <div className="text-green-500 text-sm">{success}</div>}

          <Button
            text={loading ? "Resetting..." : "Reset Password"}
            type="submit"
            disabled={loading}
            className="bg-blue text-white text-base font-semibold px-[114px] py-4 text-center disabled:opacity-50"
          />

          <p className="text-sm text-[#667185] text-center">
            Remember your password?{" "}
            <button type="button" onClick={() => navigate("/login")} className="text-blue font-medium hover:scale-105 hover:translate-x-1 transition-all duration-300 ease-in-out inline-block">
              Back to Login
            </button>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
