import { ChangeEvent } from "react";

interface TextInputProps {
  type: string;
  value: string | number;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  classes?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  type = "text",
  required = false,
  value,
  placeholder,
  disabled,
  classes,
  error,
  onChange,
  ...props
}: TextInputProps) => {
  return (
    <input
      type={type}
      className={`block w-full h-12 sm:h-14 px-4 text-xl outline-none border-2 bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5 ${
        error ? "border-red" : "border-purple"
      } ${classes}`}
      name="name"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete="off"
      disabled={disabled}
      required={required}
      {...props}
    />
  );
};

export default TextInput;
