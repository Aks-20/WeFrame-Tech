
import Sidebar from "./Components/sidebar";
import ProgressCircle from "./Components/progresscircle";
import StatsCard from "./Components/statcard";
import TaskList from "./Components/tasklist";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PendingQuestions from "./Components/pendingQuestion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="pl-64 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Account Progress</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ProgressCircle progress={85} />
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Steps Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <TaskList />
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Key Insights & Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <StatsCard
                title="Sales Growth"
                value="10%"
                subtitle="Top Performer"
              />
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Financial Wellbeing</CardTitle>
            </CardHeader>
            <CardContent>
              <StatsCard
                title="Total Franchisees"
                value="20"
                subtitle="Active Growth"
              />
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Key Insights & Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <PendingQuestions
               
                title="Pending Questions"
                value="5"
                subtitle="Pending Questions" questions={[]}              />
            </CardContent>
          </Card>





        </div>
      </main>
    </div>
  );
};

export default Index;
