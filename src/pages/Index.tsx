import { FormBuilder } from "@/components/FormBuilder/FormBuilder";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold text-gray-900">Formify</h1>
              <span className="text-sm text-gray-500">Form Builder</span>
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