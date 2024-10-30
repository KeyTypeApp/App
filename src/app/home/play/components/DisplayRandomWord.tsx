import { WordsProps } from "@/domain/words";

interface DisplayRandomWordProps {
  randomWord: string;
  value: string;
  words: WordsProps
}

const DisplayRandomWordComponent = ({
  randomWord, value, words
}: DisplayRandomWordProps) => {
  return (
    <div className="text-3xl tracking-wide bg-white shadow-lg px-6 py-4 rounded-lg flex flex-col items-center">
      <p className="text-5xl font-extrabold text-indigo-600 tracking-widest">
        {randomWord}
      </p>
      <div className="flex">
        {randomWord && words[randomWord] && words[randomWord].split("").map((char, index) => (
          <span
            key={index}
            className={index<value.length && value[index]===char?"text-indigo-600" : "text-gray-300"}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DisplayRandomWordComponent;