import { Button } from "@/components/ui/button";
import { PlusCircle, Type, List, CheckSquare } from "lucide-react";

export type QuestionType = "text" | "multiple" | "checkbox";

interface QuestionTypesProps {
  onAdd: (type: QuestionType) => void;
}

export const QuestionTypes = ({ onAdd }: QuestionTypesProps) => {
  return (
    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg animate-fade-in">
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() => onAdd("text")}
      >
        <Type className="w-4 h-4" />
        Text
      </Button>
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() => onAdd("multiple")}
      >
        <List className="w-4 h-4" />
        Multiple Choice
      </Button>
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() => onAdd("checkbox")}
      >
        <CheckSquare className="w-4 h-4" />
        Checkbox
      </Button>
    </div>
  );
};