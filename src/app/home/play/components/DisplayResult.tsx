interface DisplayResultProps {
  score: number;
  accuracyRate: number;
}

const DisplayResultComponent = ({score, accuracyRate}: DisplayResultProps) => {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-red-500 mb-4">
        タイムアップ
      </p>
      <p className="text-xl">
        スコア:{score}
      </p>
      <p className="text-xl">
        正確率:{accuracyRate.toFixed(1)}%
      </p>
    </div>
  );
}

export default DisplayResultComponent;