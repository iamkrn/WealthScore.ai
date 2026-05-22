import { useState } from "react";
import WelcomeStep from "./WelcomeStep";
import EmailStep from "./EmailStep";
import DetailsStep from "./DetailsStep";

type StepType = "welcome" | "email" | "details";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [step, setStep] = useState<StepType>("welcome");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 w-[90%] max-w-md">

        {step === "welcome" && (
          <WelcomeStep setStep={setStep} />
        )}

        {step === "email" && (
          <EmailStep
            setStep={setStep}
            onClose={onClose}
            setEmailForDetails={(val) => setEmail(val)}
            setPasswordForDetails={(val) => setPassword(val)}
          />
        )}

        {step === "details" && (
          <DetailsStep
            onClose={onClose}
            email={email}
            password={password}
          />
        )}

      </div>
    </div>
  );
}