import { questionType } from '@/constants';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { CheckCircle2, Circle } from 'lucide-react';

interface QuestionCardProps {
  question: questionType;
  questionIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onAnswerSelect: (optionId: number) => void;
  isSubmitted?: boolean;
}

const QuestionCard = ({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  isSubmitted = false
}: QuestionCardProps) => {
  return (
    <Card className="w-full shadow-none transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="text-sm font-medium">
            Question {questionIndex + 1} sur {totalQuestions}
          </Badge>
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
            {question.points} Points
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrect = option.id === question.rightOptionId;
            const showResult = isSubmitted;
            const buttonVariant: "default" | "outline" | "secondary" | "destructive" = "outline";

            let buttonClass = "w-full justify-start text-left h-auto p-4 transition-all duration-200 hover:scale-[1.01] cursor-pointer";

            if (showResult) {
              if (isCorrect) {
                buttonClass += " border-green-500 bg-green-50 hover:bg-green-100 text-green-700";
              } else if (isSelected && !isCorrect) {
                buttonClass += " border-red-500 bg-red-50 hover:bg-red-100 text-red-700";
              } else {
                buttonClass += " opacity-60";
              }
            } else if (isSelected) {
              buttonClass += " border-primary bg-primary/10 hover:bg-primary/20 text-primary";
            }

            return (
              <Button
                key={option.id}
                variant={buttonVariant}
                className={buttonClass}
                onClick={() => !isSubmitted && onAnswerSelect(option.id)}
                disabled={isSubmitted}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="flex-shrink-0">
                    {showResult ? (
                      isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : isSelected ? (
                        <Circle className="h-5 w-5 text-red-600 fill-red-600" />
                      ) : (
                        <Circle className="h-5 w-5 text-gray-400" />
                      )
                    ) : (
                      <Circle className={`h-5 w-5 ${isSelected ? 'text-primary fill-primary' : 'text-gray-400'}`} />
                    )}
                  </div>
                  <span className="text-base font-medium flex-1">
                    {option.option}
                  </span>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;