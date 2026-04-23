import { useState } from "react";
import WelcomeStep from "./WelcomeStep";
import EmailStep from "./EmailStep";
import DetailsStep from "./DetailsStep";

// ✅ Step type (strict control)
type StepType = "welcome" | "email" | "details";

// ✅ Props type
type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [step, setStep] = useState<StepType>("welcome");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 w-[90%] max-w-md">

        {step === "welcome" && <WelcomeStep setStep={setStep} />}
        
        {step === "email" && (
          <EmailStep setStep={setStep} onClose={onClose} />
        )}
        
        {step === "details" && (
          <DetailsStep onClose={onClose} />
        )}

      </div>

    </div>
  );
}