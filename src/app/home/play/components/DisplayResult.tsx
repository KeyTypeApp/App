interface DisplayResultProps {
  score: number;
  correctTypeCount: number;
  incorrectTypeCount: number;
  accuracyRate: number;
}

const DisplayResultComponent = ({score, correctTypeCount, incorrectTypeCount, accuracyRate}: DisplayResultProps) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 space-y-4">
      <p className="text-3xl font-bold text-red-500 mb-4">
        タイムアップ
      </p>
      <div className="text-2xl text-gray-800 font-semibold">
        <p className="mb-2">
          スコア:
          <span className="text-indigo-600 font-extrabold">
            {score}
          </span>
        </p>
        <p className="mb-2">
          正解:
          <span className="text-indigo-600 font-extrabold">
            {correctTypeCount}回
          </span>
        </p>
        <p className="mb-2">
          不正解:
          <span className="text-indigo-600 font-extrabold">
            {incorrectTypeCount}回
          </span>
        </p>
        <p className="mb-2">
          正確率:
          <span className="text-indigo-600 font-extrabold">
            {accuracyRate.toFixed(1)}%
          </span>
        </p>
      </div>
    </div>
  );
}

export default DisplayResultComponent;