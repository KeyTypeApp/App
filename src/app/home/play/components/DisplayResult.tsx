export default function DisplayResult({ score, accuracy }: { score: number; accuracy: number }) {
  return (
    <div>
      <h1>ゲーム終了</h1>
      <p>スコア: {score}</p>
      <p>正確率: {accuracy}%</p>
    </div>
  );
}