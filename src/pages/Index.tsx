import { FormBuilder } from "@/components/FormBuilder/FormBuilder";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Forms</h1>
            </div>
          </div>
        </div>
      </header>
      <main className="py-8">
        <FormBuilder />
      </main>
    </div>
  );
};

export default Index;