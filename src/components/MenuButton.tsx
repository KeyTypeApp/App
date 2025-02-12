import useName from "@/hooks/set/useName";
import ButtonComponent from "./Button";

const MenuButtonComponent = () => {
  const name = useName();
  return (
    <div className="flex justify-center space-x-4 my-8">
      <ButtonComponent
        path="/home"
        color="blue"
        text="プレイ"
      />
      {name && (
        <ButtonComponent
        path="/home/scoreboard"
        color="green"
        text="スコア一覧"
        />
      )}
      <ButtonComponent
        path="/home/ranking"
        color="orange"
        text="ランキング"
      />
    </div>
  );
}
  
export default MenuButtonComponent;