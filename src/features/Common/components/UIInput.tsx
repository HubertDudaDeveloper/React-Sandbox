import { ChangeEvent, ReactNode } from "react";
import clsx from "clsx";
import "@/features/Common/styles/UIInput.scss"

type UIInputProps = {
  id?: string;
  name?: string;
  label?: string;
  value: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  error?: string;
  onChange: (value: string) => void;
  className?: string;
};

const UIInput = ({
  id,
  name,
  label,
  value,
  placeholder,
  type = "text",
  disabled = false,
  required = false,
  readonly = false,
  error,
  onChange,
  className,
}: UIInputProps) => {
  const inputId = id ?? name ?? "input";
  const errorId = `${inputId}-error`;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={clsx("ui-input", className)}>
      {label && (
        <label htmlFor={inputId} className="ui-input__label">
          {label}
          {required && " *"}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        onChange={handleChange}
        className={clsx("ui-input__field", {
          "ui-input__field--error": error,
        })}
      />

      {error && (
        <p id={errorId} className="ui-input__error">
          {error}
        </p>
      )}
    </div>
  );
};

export default UIInput;
