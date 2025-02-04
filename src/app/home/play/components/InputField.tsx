export default function InputField({
  input,
  handleChange,
  handleKeyDown,
  inputRef // inputRef を親コンポーネントから受け取る
}: {
  input: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>; // inputRef を受け取る
}) {
  // onBlur でフォーカスが外れないように処理
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault(); // フォーカスを外さない
    inputRef.current?.focus(); // 再度フォーカスをセット
  };

  return (
    <input
      ref={inputRef} // ref を設定
      type="text"
      value={input}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur} // フォーカスが外れないようにする
    />
  );
}
