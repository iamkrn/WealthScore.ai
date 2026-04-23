type Props = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
  icon?: string;
  isMoney?: boolean;
};

export default function FormInput({
  label,
  placeholder,
  value,
  onChange,
  isMoney = false,
  icon,
}: Props) {
  return (
    <div>
      <label className="text-sm text-gray-400 mb-1 block">
        {label}
      </label>

      <div className="relative">

        {isMoney && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            ₹
          </span>
        )}

        {icon && !isMoney && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}

        <input
          value={value}
          placeholder={placeholder || `Enter ${label}`}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full p-2 rounded bg-[#0b0f19] border border-gray-700 text-white 
          ${isMoney || icon ? "pl-8" : ""}`}
        />
      </div>
    </div>
  );
}