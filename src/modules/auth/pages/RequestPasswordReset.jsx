import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthLayout from "../component/AuthLayout";
import Button from "../../../components/Button";
import TextField from "../../../components/form/TextField";

const RequestPasswordReset = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await axios.post("http://localhost:4000/auth/password-request", { email });
      setSuccess("Password reset link has been sent to your email.");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to send reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Reset Password" className="flex-col gap-5 w-full max-w-md mx-auto">
      <div className="flex flex-col gap-8">
        <p className="text-2xl font-semibold">Reset your password</p>
        <p className="text-sm text-[#667185]">Enter your email address and we'll send you a link to reset your password.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <TextField
            className="border-dark outline-dark py-4"
            placeholder="Enter your email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {error && <div className="text-red-500 text-sm">{error}</div>}
          {success && <div className="text-green-500 text-sm">{success}</div>}

          <Button
            text={loading ? "Sending..." : "Send Reset Link"}
            type="submit"
            disabled={loading}
            className="bg-blue text-white text-base font-semibold px-[114px] py-4 text-center disabled:opacity-50"
          />

          <p className="text-sm text-[#667185] text-center">
            Remember your password?{" "}
            <button type="button" onClick={() => navigate("/login")} className="text-blue font-medium">
              Back to Login
            </button>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default RequestPasswordReset;
