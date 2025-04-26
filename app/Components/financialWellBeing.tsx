import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const FinancialWellbeing = () => {
  return (
    <Card className="p-6 max-w-md">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-medium text-gray-900">Financial Wellbeing</h2>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-4xl font-bold">20</span>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>2.1%</span>
              </div>
            </div>
            <p className="text-gray-600 mt-1">Total Franchisees</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 mb-2">Target</p>
            <p className="text-2xl font-semibold">$500,000</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 mb-2">Current</p>
            <p className="text-2xl font-semibold">$450,000</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FinancialWellbeing;