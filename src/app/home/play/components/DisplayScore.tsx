export default function DisplayScore({ score, accuracy }: { score: number; accuracy: number }) {
  return (
    <div>
      <p>スコア: {score}</p>
      <p>正確率: {accuracy}%</p>
    </div>
  );
}