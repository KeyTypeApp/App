interface DisplayScoreProps {
  score: number;
  accuracyRate: number;
}

const DisplayScoreComponent = ({score, accuracyRate}: DisplayScoreProps) => {
  return (
    <div className="flex space-x-3 mt-2">
      <div className="flex flex-col items-center bg-gradient-to-br bg-blue-400 text-white text-lg px-4 py-2 rounded-md shadow-md">
        <p className="uppercase tracking-wide">
          スコア
        </p>
        <p className="text-xl mt-1">
          {score}
        </p>
      </div>
      <div className="flex flex-col items-center bg-gradient-to-br bg-blue-400 text-white text-lg px-4 py-2 rounded-md shadow-md">
        <p className="uppercase tracking-wide">
          正確率
        </p>
        <p className="text-xl mt-1">
          {accuracyRate.toFixed(1)}%
        </p>
      </div>
    </div>
  );
};

export default DisplayScoreComponent;