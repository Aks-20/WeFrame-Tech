import React from 'react';
import { Check, Circle } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Step {
  name: string;
  completed: boolean;
}

const StepsList = () => {
  const completedSteps: Step[] = [
    { name: 'Profile Setup', completed: true },
    { name: 'Initial Training', completed: true },
    { name: 'Legal Documents', completed: true },
  ];

  const remainingSteps: Step[] = [
    { name: 'Financial Integration', completed: false },
    { name: 'Final Review', completed: false },
  ];

  const StepItem = ({ step }: { step: Step }) => (
    <div className="flex items-center gap-3 py-2">
      {step.completed ? (
        <div className="text-green-500">
          <Check className="h-5 w-5" />
        </div>
      ) : (
        <Circle className="h-5 w-5 text-gray-300" />
      )}
      <span className="text-gray-700">{step.name}</span>
    </div>
  );

  return (
    <Card className="p-6 max-w-md space-y-6">
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Steps Completed</h3>
        {completedSteps.map((step, index) => (
          <StepItem key={index} step={step} />
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Steps Remaining</h3>
        {remainingSteps.map((step, index) => (
          <StepItem key={index} step={step} />
        ))}
      </div>
    </Card>
  );
};

export default StepsList;