export default function DisplayRandomWord({ japanese, variation }: { japanese: string; variation: string }) {
  return (
    <div>
      <h2>{japanese}</h2>
      <h3>{variation}</h3>
    </div>
  );
}