import { useState } from "react";
import useAuthStore from "../../store/useAuthStore";

type StepType = "welcome" | "email" | "details";

type EmailStepProps = {
  setStep: (step: StepType) => void;
  onClose: () => void;
  setEmailForDetails: (email: string) => void;
  setPasswordForDetails: (password: string) => void; 
};

export default function EmailStep({ setStep, onClose, setEmailForDetails, setPasswordForDetails }: EmailStepProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

  const { login, isLoading, error, clearError } = useAuthStore();

  const handleSubmit = async () => {
    if (!email || !password) {
      alert("Email aur password zaroori hain");
      return;
    } else {
  setEmailForDetails(email);
  setPasswordForDetails(password); 
  setStep("details");
}

    if (isLoginMode) {
      // Login flow
      await login(email, password);
      const state = useAuthStore.getState();
      if (state.isAuthenticated) {
        onClose();
      }
    } else {
      // Register flow — email save -> go to  details step 
      setEmailForDetails(email);
      setStep("details");
    }
  };

  return (
    <div>
      <h2 className="text-white text-lg mb-4">
        {isLoginMode ? "Login" : "Create Account"}
      </h2>

      {/* Error message */}
      {error && (
        <p className="text-red-400 text-sm mb-3 bg-red-400/10 px-3 py-2 rounded-lg">
          {error}
        </p>
      )}

      <input
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); clearError(); }}
        placeholder="Enter email"
        className="w-full p-2 rounded bg-[#0b0f19] border border-gray-700 text-white mb-3"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => { setPassword(e.target.value); clearError(); }}
        placeholder="Enter password"
        className="w-full p-2 rounded bg-[#0b0f19] border border-gray-700 text-white mb-3"
      />

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full py-2 rounded-lg bg-linear-to-r from-yellow-400 to-cyan-400 text-black font-medium disabled:opacity-50"
      >
        {isLoading ? "Please wait..." : isLoginMode ? "Login" : "Continue"}
      </button>

      {/* Toggle login/register */}
      <p className="text-gray-400 text-sm text-center mt-4">
        {isLoginMode ? "Account ?" : "Login"}
        <button
          onClick={() => { setIsLoginMode(!isLoginMode); clearError(); }}
          className="text-cyan-400 ml-1 hover:underline"
        >
          {isLoginMode ? "Register " : "Login "}
        </button>
      </p>
    </div>
  );
}


