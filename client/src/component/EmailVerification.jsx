import { useAuth } from "../hooks/useAuth";

function EmailVerification() {
  const { EmailVerification } = useAuth();
  return (
    <div className="max-w-3xl mx-auto p-5 text-center">
      <h2 className="text-2xl font-semibold mb-4">Email Verification</h2>
      <button
        onClick={EmailVerification}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Resend Verification Email
      </button>
    </div>
  );
}

export default EmailVerification;
