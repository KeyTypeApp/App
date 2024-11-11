import { dbConfig } from "@/services/db/dbConfig";
import ScoreBoardPageComponent from "./components/ScoreBoardPage";

export default function Scoreboard() {
  return (
    <ScoreBoardPageComponent scores_url={dbConfig.scores_url} />
  )
}