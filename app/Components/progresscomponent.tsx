// progresscomponent.js
interface ProgressProps {
  value: number;
  max?: number;
  color?: string;
}

export const Progress = ({ value, max = 100, color = "blue" }: ProgressProps) => {
    const progressPercentage = (value / max) * 100;
  
    return (
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-sm font-semibold">Progress</span>
          </div>
          <div>
            <span className="text-xs font-semibold">{value}/{max}</span>
          </div>
        </div>
        <div className="flex mb-2 w-full h-2 bg-gray-200 rounded-full">
          <div
            style={{ width: `${progressPercentage}%` }}
            className={`h-full rounded-lg ${color === "blue" ? "bg-blue-500" : "bg-green-500"}`}
          ></div>
        </div>
      </div>
    );
  };
  