interface DisplayTimeLimitProps {
  timeLeft: number;
}

const DisplayTimeLimitComponent = ({
  timeLeft
}: DisplayTimeLimitProps) => {
  return (
    <p className="text-2xl font-semibold text-gray-900">
      残り時間: {timeLeft}秒
    </p>
  );
}

export default DisplayTimeLimitComponent;