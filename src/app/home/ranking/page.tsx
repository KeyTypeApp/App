import { dbConfig } from "@/services/db/dbConfig";
import RankingPageComponent from "./components/RankingPage";

export default function Ranking() {
  return (
    <main>
      <RankingPageComponent
        users_url={dbConfig.users_url}
        scores_url={dbConfig.scores_url}
      />
    </main>
  );
};