import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { QuestionTypes, type QuestionType } from "./QuestionTypes";
import { QuestionCard } from "./QuestionCard";
import { Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Question {
  type: QuestionType;
  id: string;
}

export const FormBuilder = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const { toast } = useToast();

  const addQuestion = (type: QuestionType) => {
    setQuestions([...questions, { type, id: crypto.randomUUID() }]);
  };

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, idx) => idx !== index));
  };

  const handleSave = () => {
    // TODO: Implement form saving logic
    toast({
      title: "Form Saved",
      description: "Your form has been saved successfully.",
    });
  };

  return (
    <div className="form-container">
      <div className="space-y-4 mb-8 animate-fade-in">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Form Title"
          className="text-2xl font-semibold"
        />
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Form Description"
        />
      </div>

      <div className="space-y-6">
        {questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            type={question.type}
            onDelete={() => removeQuestion(index)}
            index={index}
          />
        ))}
      </div>

      <div className="sticky bottom-6 flex justify-between items-center bg-white/80 backdrop-blur-sm rounded-lg p-4 border mt-8">
        <QuestionTypes onAdd={addQuestion} />
        <Button onClick={handleSave} className="flex items-center gap-2">
          <Save className="w-4 h-4" />
          Save Form
        </Button>
      </div>
    </div>
  );
};