import React from "react";
import Sidebar from "./Components/sidebar";
import ProgressCircle from "./Components/progresscircle";
import StatsCard from "./Components/statcard";
import TaskList from "./Components/tasklist";
import FranchiseeCard from "./Components/franchisecard";
import ChatAssistant from "./Components/ChatAssistant";
import Questions, { sampleQuestions } from "./Components/questions";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import PendingQuestions from "./Components/pendingQuestion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="pl-64 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Account Progress */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Account Progress</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ProgressCircle progress={85} />
            </CardContent>
          </Card>

       

            
            <CardContent>
              <FranchiseeCard />
            </CardContent>
        

          {/* Questions Panel */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Key Insights & Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <PendingQuestions title={""} subtitle={""} value={""} questions={[]}  />
            </CardContent>
          </Card>

          {/* Another Questions Panel */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Pending Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Questions questions={sampleQuestions} />
            </CardContent>
          </Card>

          {/* AI Assistant */}
          <Card className="col-span-1">
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
