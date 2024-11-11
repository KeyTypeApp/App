interface ScoreProps {
  uuid: string;
  score: number;
  correctTypeCount: number;
  incorrectTypeCount: number;
  accuracyRate: number;
}

export const saveScore = async ({uuid, score, correctTypeCount, incorrectTypeCount, accuracyRate}: ScoreProps) => {
    
      try {
        const response = await fetch("http://localhost:3002/scores", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({uuid, score, correctTypeCount, incorrectTypeCount, accuracyRate}),
        });
    
        if (!response.ok) {
          throw new Error("スコアの保存に失敗しました");
        }
    
        console.log("スコアが保存されました");
      } catch (error) {
        console.error("スコア保存エラー:", error);
      }
    };
    