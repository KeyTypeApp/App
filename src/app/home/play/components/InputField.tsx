interface InputFieldProps {
  input: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const InputFieldComponent = ({
  input,
  handleChange,
  handleKeyDown,
  inputRef
}: InputFieldProps) => {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    inputRef.current?.focus();
  }
  return (
    <input
      ref={inputRef}
      type="text"
      value={input}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      className="bg-transparent border-none outline-none w-0 h-0"
      aria-hidden="true"
    />
  );
}

export default InputFieldComponent;