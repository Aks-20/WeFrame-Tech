
import { Check } from "lucide-react";

const tasks = [
  { title: "Profile Setup", completed: true },
  { title: "Team Training", completed: true },
  { title: "First Review", completed: true },
];

const TaskList = () => {
  return (
    <div className="space-y-2">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center ${
              task.completed ? "bg-[#6E59A5]" : "bg-gray-200"
            }`}
          >
            {task.completed && <Check size={14} className="text-white" />}
          </div>
          <span className={task.completed ? "text-gray-700" : "text-gray-500"}>
            {task.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TaskList;