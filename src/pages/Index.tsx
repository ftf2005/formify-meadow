import { FormBuilder } from "@/components/FormBuilder/FormBuilder";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "react-router-dom";

const Index = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900">
      <header className="border-b bg-white dark:bg-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Formify</h1>
              <span className="text-sm text-gray-500 dark:text-gray-400">Form Builder</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <FormBuilder />
      </main>
    </div>
  );
};

export default Index;