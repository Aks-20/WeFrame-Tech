import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { TrendingUp } from 'lucide-react';
import FinancialWellbeing from './financialWellBeing';

const FranchiseeCard = () => {
  const stages = [
    { name: 'Stage 1 (Initial Inquiry)', count: '02', color: 'bg-[#2E7DAF]' },
    { name: 'Stage 2 (Document Submission)', count: '07', color: 'bg-[#39B6FF]' },
    { name: 'Stage 3 (Training)', count: '05', color: 'bg-[#99D6FF]' },
  ];

  const avatars = [
    '/lovable-uploads/921fd45b-3e51-4c7e-9982-42dceb309652.png',
    '/lovable-uploads/921fd45b-3e51-4c7e-9982-42dceb309652.png',
    '/lovable-uploads/921fd45b-3e51-4c7e-9982-42dceb309652.png',
    '/lovable-uploads/921fd45b-3e51-4c7e-9982-42dceb309652.png',
    '/lovable-uploads/921fd45b-3e51-4c7e-9982-42dceb309652.png',
  ];

  return (
    <Card className="p-6 max-w-md">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold">Total Franchisees Onboard</h2>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-4xl font-bold border-2 border-pink-500 px-2">14</span>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>7.4%</span>
              </div>
              <div className="flex -space-x-2">
                {avatars.map((_, index) => (
                  <Avatar key={index} className="border-2 border-white w-8 h-8">
                    <AvatarImage src="/placeholder.svg" alt={`User ${index + 1}`} />
                  </Avatar>
                ))}
                <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-sm text-gray-600">
                  +7
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {stages.map((stage, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{stage.name}</span>
                <span className="font-semibold">{stage.count}</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100">
                <div 
                  className={`h-full rounded-full ${stage.color}`} 
                  style={{ 
                    width: `${(parseInt(stage.count) / 14) * 100}%` 
                  }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <FinancialWellbeing />
    </Card>
  );
};

export default FranchiseeCard;