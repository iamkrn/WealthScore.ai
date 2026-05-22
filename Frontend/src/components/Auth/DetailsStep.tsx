import { useState } from "react";
import useAuthStore from "../../store/useAuthStore";

type DetailsStepProps = {
  onClose: () => void;
  email: string;
  password: string;
};

export default function DetailsStep({ onClose, email, password }: DetailsStepProps) {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const { register, isLoading, error, clearError } = useAuthStore();

  const handleSubmit = async () => {
    if (!name || !phone) {
      alert("Name aur phone zaroori hain");
      return;
    }

    await register(name, email, password, phone);

    const state = useAuthStore.getState();
    if (state.isAuthenticated) {
      onClose();
    }
  };

  return (
    <div>
      <h2 className="text-white text-lg mb-4">
        Finish setting up your account
      </h2>

      {/* Error message */}
      {error && (
        <p className="text-red-400 text-sm mb-3 bg-red-400/10 px-3 py-2 rounded-lg">
          {error}
        </p>
      )}

      <input
        type="text"
        value={name}
        onChange={(e) => { setName(e.target.value); clearError(); }}
        placeholder="Enter your name"
        className="w-full p-2 rounded bg-[#0b0f19] border border-gray-700 text-white mb-3"
      />

      <input
        type="text"
        value={phone}
        onChange={(e) => { setPhone(e.target.value); clearError(); }}
        placeholder="Enter phone number"
        className="w-full p-2 rounded bg-[#0b0f19] border border-gray-700 text-white mb-3"
      />

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full py-2 rounded-lg bg-linear-to-r from-yellow-400 to-cyan-400 text-black font-medium disabled:opacity-50"
      >
        {isLoading ? "Please wait..." : "Create Account"}
      </button>
    </div>
  );
}