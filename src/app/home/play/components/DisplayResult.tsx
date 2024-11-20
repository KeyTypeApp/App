import MenuButtonComponent from "@/components/MenuButton";

interface DisplayResultProps {
  score: number;
  correctTypeCount: number;
  incorrectTypeCount: number;
  accuracyRate: number;
}

const DisplayResultComponent = ({score, correctTypeCount, incorrectTypeCount, accuracyRate}: DisplayResultProps) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg p-12 space-y-8 max-w-lg mx-auto">
        <p className="text-3xl font-bold text-red-600">
          タイムアップ
        </p>
        <div className="space-y-4 w-full">
          <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg border-l-4 border-blue-600">
            <span className="text-lg text-gray-600">
              スコア:
            </span>
            <span className="text-xl text-gray-800 font-bold">
              {score}点
            </span>
          </div>
          <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg border-l-4 border-blue-600">
            <span className="text-lg text-gray-600">
              正タイプ数:
            </span>
            <span className="text-xl text-gray-800 font-bold">
              {correctTypeCount}回
            </span>
          </div>
          <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg border-l-4 border-blue-600">
            <span className="text-lg text-gray-600">
              誤タイプ数:
            </span>
            <span className="text-xl text-gray-800 font-bold">
              {incorrectTypeCount}回
            </span>
          </div>
          <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg border-l-4 border-blue-600">
            <span className="text-lg text-gray-600">
              正確率:
            </span>
            <span className="text-xl text-gray-800 font-bold">
              {accuracyRate.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>
      <MenuButtonComponent />
    </div>
  );
};

export default DisplayResultComponent;