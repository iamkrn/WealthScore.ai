import { useState } from "react";

// Props type
type DetailsStepProps = {
  onClose: () => void;
};

export default function DetailsStep({ onClose }: DetailsStepProps) {
  
  // state typing
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleValidate = () => {
    if (!name || !phone) {
      alert("required all fields");
      return;
    }

    onClose();
  };

  return (
    <div>

      <h2 className="text-white mb-3">
        Finish setting up your account
      </h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full p-2 rounded bg-[#0b0f19] border border-gray-700 text-white mb-3"
      />

      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter phone number"
        className="w-full p-2 rounded bg-[#0b0f19] border border-gray-700 text-white mb-3"
      />

      <button
        onClick={handleValidate}
        className="w-full py-2 rounded-lg bg-linear-to-r from-yellow-400 to-cyan-400 text-black"
      >
        Save & Continue
      </button>

    </div>
  );
}