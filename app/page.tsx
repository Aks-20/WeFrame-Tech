import React from "react";
import Sidebar from "./Components/sidebar";
import ProgressCircle from "./Components/progresscircle";
import FranchiseeCard from "./Components/franchisecard";
import ChatAssistant from "./Components/ChatAssistant";
import Questions, { sampleQuestions } from "./Components/questions";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import InsightsCard from "./Components/Insightscard";
import ProspectLeads from "./Components/prospectLead";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 pl-64 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Account Progress */}
          <Card className="col-span-1 h-full">
            <CardHeader>
              <CardTitle>Account Progress</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ProgressCircle progress={85} />
            </CardContent>
          </Card>

          {/* Franchisee Card */}
          <Card className="col-span-1 h-full">
            <CardHeader>
              <CardTitle>Franchisee Details</CardTitle>
            </CardHeader>
            <CardContent>
              <FranchiseeCard />
            </CardContent>
          </Card>

          {/* Key Insights & Feedback */}
          <Card className="col-span-1 h-full">
            <CardHeader>
              <CardTitle>Key Insights & Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <InsightsCard />
              <ProspectLeads />
            </CardContent>
          </Card>

          {/* Pending Questions */}
          <Card className="col-span-1 h-full">
            <CardHeader>
              <CardTitle>Pending Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Questions questions={sampleQuestions} />
            </CardContent>
          </Card>

          {/* AI Assistant */}
          <Card className="col-span-1 h-full">
            <CardHeader>
              <CardTitle>AI Assistant</CardTitle>
            </CardHeader>
            <CardContent>
              <ChatAssistant
                title="Chat Assistant"
                value="5"
                subtitle="Ask me anything"
                questions={[]} // Add real questions if needed
              />
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default Index;
