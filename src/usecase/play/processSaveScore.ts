export interface SaveScoreProps {
  uuid: string;
  score: number;
  correctTypeCount: number;
  incorrectTypeCount: number;
  accuracyRate: number;
  incorrectChars: { [key: string]: number };
}

export const saveScore = async ({
  uuid,
  score,
  correctTypeCount,
  incorrectTypeCount,
  accuracyRate,
  incorrectChars,
}: SaveScoreProps): Promise<void> => {
  try {
    const response = await fetch("http://localhost:3002/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid,
        score,
        correctTypeCount,
        incorrectTypeCount,
        accuracyRate,
        incorrectChars,
      }),
    });

    if (!response.ok) {
      throw new Error("スコアの保存に失敗しました。");
    }
  } catch (error) {
    console.error("スコアの保存に失敗しました。", error);
  }
};
