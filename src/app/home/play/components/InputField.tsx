import React from "react";

interface inputFieldProps {
  value: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDownBackSpace: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputFieldComponent = React.forwardRef<HTMLInputElement, inputFieldProps>(
  ({value, onChangeValue, onKeyDownBackSpace}, ref) => {
  return (
    <div>
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={onChangeValue}
        onKeyDown={onKeyDownBackSpace}
        className="bg-transparent border-none outline-none w-0 h-0"
        aria-hidden="true"
      />
    </div>
  );
});

InputFieldComponent.displayName = "InputFieldComponent";

export default InputFieldComponent;