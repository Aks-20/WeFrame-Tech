import React from 'react';
import LeadCard from './LeadCard';

const leads = [
  {
    id: 1,
    name: 'Wade Warren',
    stage: 'Initial Inquiry',
    imageUrl: '/placeholder.svg',
  },
  {
    id: 2,
    name: 'Ava Wright',
    stage: 'Initial Inquiry',
    imageUrl: '/placeholder.svg',
  },
  {
    id: 3,
    name: 'Cody Fisher',
    stage: 'Initial Inquiry',
    imageUrl: '/placeholder.svg',
  },
];

const ProspectLeads = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Prospect Leads</h2>
        <div className="space-y-2">
          {leads.map((lead) => (
            <LeadCard
              key={lead.id}
              name={lead.name}
              stage={lead.stage}
              imageUrl={lead.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProspectLeads;