import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { TrendingUp, Award } from "lucide-react";

const InsightsCard = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Key Insights & Feedback</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-green-500" size={20} />
              <span className="text-3xl font-bold">10%</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Sales Growth</p>
          </div>
          <Avatar 
            className="bg-purple-100 text-purple-800 hover:bg-purple-200 flex items-center gap-1"
          >
            <Award size={14} />
            Top Performer
          </Avatar>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">Feedback</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0" />
              <span className="text-sm text-gray-600">
                Participants are requesting more detailed training materials
              </span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default InsightsCard;