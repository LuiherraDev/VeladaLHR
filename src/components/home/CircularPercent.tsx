interface CircularProgressProps {
  percentage: number;
  option: string;
}

const CircularProgress = ({ percentage, option }: CircularProgressProps) => {
  const radius = 140;
  const stroke = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-full max-w-80 mx-auto">
      <svg className="transform -rotate-90 w-full h-auto" viewBox="0 0 320 320">

        <circle
          cx="160"
          cy="160"
          r={radius}
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          className="text-gray-900"
        />

        <circle
          cx="160"
          cy="160"
          r={radius}
          stroke="url(#progressGradient)"
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 1s ease-in-out'
          }}
          strokeLinecap="round"
        />

        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#893802" />
            <stop offset="100%" stopColor="#BA8D6B" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute flex flex-col items-center">
        <span className="text-5xl font-bold tracking-tighter">
          <p className="text-2xl text-txt-holder">{option}</p>
          {percentage}%
        </span>
      </div>
    </div>

  );
};

export default CircularProgress;