import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, GripVertical } from "lucide-react";
import type { QuestionType } from "./QuestionTypes";

interface QuestionCardProps {
  type: QuestionType;
  onDelete: () => void;
  index: number;
}

export const QuestionCard = ({ type, onDelete, index }: QuestionCardProps) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>(type !== "text" ? [""] : []);

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <div className="question-card group animate-fade-in">
      <div className="flex items-center gap-4 mb-4">
        <GripVertical className="w-5 h-5 text-gray-400 cursor-move opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="text-sm font-medium text-gray-500">Question {index + 1}</span>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={onDelete}
        >
          <Trash2 className="w-4 h-4 text-destructive" />
        </Button>
      </div>

      <Input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question"
        className="mb-4"
      />

      {type !== "text" && (
        <div className="space-y-2">
          {options.map((option, idx) => (
            <Input
              key={idx}
              value={option}
              onChange={(e) => updateOption(idx, e.target.value)}
              placeholder={`Option ${idx + 1}`}
              className="mb-2"
            />
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={addOption}
            className="text-sm"
          >
            Add Option
          </Button>
        </div>
      )}
    </div>
  );
};