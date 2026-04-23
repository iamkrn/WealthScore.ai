// Step type (same)
type StepType = "welcome" | "email" | "details";

// Props type
type WelcomeStepProps = {
  setStep: (step: StepType) => void;
};

export default function WelcomeStep({ setStep }: WelcomeStepProps) {
  return (
    <div className="text-center">

      <h2 className="text-white text-lg mb-4">Welcome!</h2>

      <button
        onClick={() => setStep("details")}
        className="w-full py-2 rounded-lg bg-linear-to-r from-yellow-400 to-cyan-400 text-black mb-3"
      >
        Continue with Google
      </button>

      <button
        onClick={() => setStep("email")}
        className="w-full py-2 rounded-lg border border-gray-600 text-white"
      >
        Continue with Email
      </button>

    </div>
  );
}