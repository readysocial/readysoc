import type { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
  icon: ReactNode;
};

export default function FormField({
  label,
  id,
  name,
  type = "text",
  placeholder,
  autoComplete,
  icon,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-black">
        {label}
      </label>
      <div className="flex h-12 items-center gap-3 rounded-xl border border-gray-300 bg-white px-4 focus-within:border-[#f6535b] focus-within:ring-1 focus-within:ring-[#f6535b]">
        {icon}
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="w-full min-w-0 border-0 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}
