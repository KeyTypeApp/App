interface DisplayRandomWordProps {
  japanese: string;
  variation: string;
  input: string;
}

const DisplayRandomWordComponent = ({
  japanese,
  variation,
  input
}: DisplayRandomWordProps) => {
  return (
    <div className="text-3xl tracking-wide bg-white shadow-lg px-6 py-4 rounded-lg flex flex-col items-center">
      <p className="text-5xl font-extrabold text-indigo-600 tracking-widest">
        {japanese}
      </p>
      <p>
        {variation.split("").map((char, index) => (
          <span key={index} className={index < input.length ? "text-indigo-600" : "text-gray-300"}>
            {char}
          </span>
        ))}
      </p>
    </div>
  );
}

export default DisplayRandomWordComponent