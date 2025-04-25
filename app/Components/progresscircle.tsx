
import { cn } from "@/lib/utils";

interface ProgressCircleProps {
  progress: number;
  size?: "sm" | "md" | "lg";
}

const ProgressCircle = ({ progress, size = "lg" }: ProgressCircleProps) => {
  const circumference = 2 * Math.PI * 45; // r = 45
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-32 h-32",
    lg: "w-40 h-40",
  };

  return (
    <div className={cn("relative", sizeClasses[size])}>
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="45"
          strokeWidth="10"
          stroke="#E2E8F0"
          fill="none"
          className="absolute"
        />
        <circle
          cx="50%"
          cy="50%"
          r="45"
          strokeWidth="10"
          stroke="#6E59A5"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold text-[#6E59A5]">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressCircle;