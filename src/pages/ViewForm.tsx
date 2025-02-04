import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

const ViewForm = () => {
  const { formId } = useParams();
  const { toast } = useToast();
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const { data: form, isLoading } = useQuery({
    queryKey: ["form", formId],
    queryFn: async () => {
      // Mock data for now - will be replaced with actual API call
      return {
        id: formId,
        title: "Sample Form",
        description: "This is a sample form description",
        questions: [
          { id: "1", type: "text", question: "What is your name?", required: true },
          { id: "2", type: "text", question: "What is your email?", required: true },
        ],
      };
    },
  });

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", answers);
    toast({
      title: "Form Submitted",
      description: "Thank you for your response!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">{form?.title}</h1>
            <p className="text-gray-500">{form?.description}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {form?.questions.map((question) => (
              <div key={question.id} className="space-y-2">
                <label className="block text-sm font-medium">
                  {question.question}
                  {question.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {question.type === "text" ? (
                  <Input
                    required={question.required}
                    value={answers[question.id] || ""}
                    onChange={(e) =>
                      setAnswers((prev) => ({ ...prev, [question.id]: e.target.value }))
                    }
                  />
                ) : (
                  <Textarea
                    required={question.required}
                    value={answers[question.id] || ""}
                    onChange={(e) =>
                      setAnswers((prev) => ({ ...prev, [question.id]: e.target.value }))
                    }
                  />
                )}
              </div>
            ))}
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewForm;