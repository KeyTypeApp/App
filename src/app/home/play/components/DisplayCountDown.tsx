interface DisplayCountDownProps {
  countdown: number;
}

const DisplayCountDownComponent = ({
  countdown
}: DisplayCountDownProps) => {
  return (
    <p className="text-5xl font-bold text-gray-900">
      {countdown}
    </p>
  );
};

export default DisplayCountDownComponent;