import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@/contexts/ThemeContext";

const Dashboard = () => {
  const { theme } = useTheme();

  const { data: submissions, isLoading } = useQuery({
    queryKey: ["form-submissions"],
    queryFn: async () => {
      // Mock data - replace with actual API call
      return [
        { id: 1, formId: "1", name: "John Doe", email: "john@example.com", submittedAt: "2024-02-20" },
        { id: 2, formId: "1", name: "Jane Smith", email: "jane@example.com", submittedAt: "2024-02-21" },
      ];
    },
  });

  const { data: analyticsData } = useQuery({
    queryKey: ["form-analytics"],
    queryFn: async () => {
      // Mock data - replace with actual API call
      return [
        { date: "2024-02-15", submissions: 4 },
        { date: "2024-02-16", submissions: 6 },
        { date: "2024-02-17", submissions: 8 },
        { date: "2024-02-18", submissions: 5 },
        { date: "2024-02-19", submissions: 9 },
      ];
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Form Submissions Overview</CardTitle>
          <CardDescription>View all form submissions and analytics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="submissions"
                  stroke={theme === 'dark' ? '#4ADE80' : '#16a34a'}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Submitted At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>{submission.name}</TableCell>
                  <TableCell>{submission.email}</TableCell>
                  <TableCell>{submission.submittedAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;