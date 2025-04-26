// Components/question.tsx
import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Circle } from "lucide-react";

interface Question {
  id: number;
  user: {
    name: string;
    username: string;
    avatar?: string;
  };
  question: string;
  timeAgo: string;
  isOnline: boolean;
}

export const sampleQuestions: Question[] = [
  {
    id: 1,
    user: {
      name: "Phoenix Baker",
      username: "phoenix",
      avatar: "/lovable-uploads/8d704a4a-5358-4d14-8393-7c614baf2fde.png"
    },
    question: "What are the requirements for opening a new store?",
    timeAgo: "5min ago",
    isOnline: true
  },
  {
    id: 2,
    user: {
      name: "Koray Okumus",
      username: "koray",
    },
    question: "How do I manage inventory effectively?",
    timeAgo: "4hr ago",
    isOnline: true
  }
];

interface QuestionsProps {
  questions: Question[];
}

const Questions: React.FC<QuestionsProps> = ({ questions }) => {
  return (
    <Card className="p-6 max-w-md w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Pending Questions</h2>
        <span className="bg-blue-100 text-blue-700 text-sm font-medium px-2.5 py-0.5 rounded-full">
          {questions.length.toString().padStart(2, '0')}
        </span>
      </div>

      <div className="space-y-6">
        {questions.map((item) => (
          <div key={item.id} className="flex items-start gap-3">
            <div className="relative">
              <Avatar>
                <AvatarImage src={item.user.avatar} alt={item.user.name} />
                <AvatarFallback>{item.user.name[0]}</AvatarFallback>
              </Avatar>
              {item.isOnline && (
                <Circle className="absolute bottom-0 right-0 w-3 h-3 text-emerald-500 fill-emerald-500" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-900">{item.user.name}</p>
                  <p className="text-sm text-gray-500">@{item.user.username}</p>
                </div>
                <span className="text-sm text-gray-500">{item.timeAgo}</span>
              </div>
              <p className="mt-2 text-gray-600">{item.question}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Questions;
