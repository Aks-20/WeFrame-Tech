import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LeadCardProps {
  name: string;
  stage: string;
  imageUrl: string;
}

const LeadCard = ({ name, stage, imageUrl }: LeadCardProps) => {
  return (
    <div className="flex items-center p-4 hover:bg-gray-50 transition-colors rounded-lg">
      <Avatar className="h-10 w-10">
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div className="ml-4 flex-1">
        <h3 className="font-medium text-sm text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">Stage: {stage}</p>
      </div>
    </div>
  );
};

export default LeadCard;
