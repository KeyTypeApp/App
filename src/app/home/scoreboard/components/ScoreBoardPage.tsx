import useGetScores from "@/hooks/scoreboard/useGetScores";

interface ScoreBoardPageProps {
  scores_url: string | undefined;
}

const ScoreBoardPageComponent = ({
  scores_url
}: ScoreBoardPageProps) => {
  const uuid = useGetScores(scores_url!)
  return (
    <main>
      {uuid? uuid: "load"}
    </main>
  );
}

export default ScoreBoardPageComponent;