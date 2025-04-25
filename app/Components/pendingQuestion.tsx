import React from 'react';
import Image from 'next/image';

interface QuestionAuthor {
  name: string;
  username: string;
  avatar: string;
  isPremium: boolean;
}

interface Question {
  id: number;
  author: QuestionAuthor;
  question: string;
  timeAgo: string;
}

interface PendingQuestionsProps {
  title: string;
  subtitle: string;
  value: string; // Added the missing 'value' property
  questions: Question[]; // Added the 'questions' property
};

const PendingQuestions: React.FC<PendingQuestionsProps> = ({ 
  title = "Pending Questions", 
 
  questions = [
    {
      id: 1,
      author: {
        name: 'Phoenix Baker',
        username: '@phoenix',
        avatar: '/avatars/phoenix.jpg',
        isPremium: true
      },
      question: 'What are the requirements for opening a new store?',
      timeAgo: '5min ago'
    },
    {
      id: 2,
      author: {
        name: 'Koray Okumus',
        username: '@koray',
        avatar: '/avatars/koray.jpg',
        isPremium: false
      },
      question: 'How do I manage inventory effectively?',
      timeAgo: '4hr ago'
    }
  ]
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">New</span>
      </div>
      
      <div className="space-y-4">
        {questions.map((question) => (
          <div key={question.id} className="border-b pb-3 last:border-b-0">
            <div className="flex items-center gap-2 mb-1">
              <div className="relative">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                  {/* Fallback colored circle if image fails to load */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                    {question.author.name.charAt(0)}
                  </div>
                  
                  {/* Using Next.js Image with error handling */}
                  <Image 
                    src={question.author.avatar} 
                    alt={question.author.name}
                    width={32}
                    height={32}
                    className="object-cover absolute inset-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                {question.author.isPremium && (
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-3 h-3 border border-white"></div>
                )}
              </div>
              <div>
                <p className="text-sm font-medium">{question.author.name}</p>
                <p className="text-xs text-gray-500">{question.author.username}</p>
              </div>
              <span className="text-xs text-gray-400 ml-auto">{question.timeAgo}</span>
            </div>
            <p className="text-sm text-gray-700 mt-1">{question.question}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingQuestions;