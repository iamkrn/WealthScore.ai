import { useState } from "react";

// Step type (same as AuthModal)
type StepType = "welcome" | "email" | "details";

// Props type
type EmailStepProps = {
  setStep: (step: StepType) => void;
  onClose: () => void;
};

export default function EmailStep({ setStep, onClose }: EmailStepProps) {
  const [email, setEmail] = useState<string>("");

  const handleValidate = () => {
    if (!email) {
      alert("please enter Email correctly");
      return;
    }

    console.log("clicked");

    // 👉 next step (optional flow)
    setStep("details");

    
     onClose();
  };

  return (
    <div>
      <h2 className="text-white mb-3">Continue with Email</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        className="w-full p-2 rounded bg-[#0b0f19] border border-gray-700 text-white mb-3"
      />

      <button
        onClick={handleValidate}
        className="w-full py-2 rounded-lg bg-linear-to-r from-yellow-400 to-cyan-400 text-black"
      >
        Continue
      </button>
    </div>
  );
}