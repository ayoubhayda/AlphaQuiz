"use client";

import QuestionCard from "@/components/general/QuestionCard";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  AlertCircle,
  Trophy,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  CircleCheckBig,
  Loader2,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import Link from "next/link";
import { getQuizList } from "@/constants";
import { redirect } from "next/navigation";
import { createAnswer } from "@/lib/actions";
import { z } from "zod";
import { answerSchema } from "@/utils/zodSchemas";

const QuizPage = ({
  slug,
  data,
}: {
  slug: string;
  data: z.infer<typeof answerSchema> | null;
}) => {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState(data ? true : false);
  const [showError, setShowError] = useState(false);
  const [score, setScore] = useState(data ? data.score : 0);
  const [animateScore, setAnimateScore] = useState(data ? true : false);
  const [pending, setPending] = useState(false);

  const quiz = getQuizList(slug); // In a real app, you'd fetch based on slug

  if (!slug || !quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Chargement...</h2>
          <p className="text-muted-foreground">
            {!slug ? "Chargement du quiz..." : "Quiz non trouvé"}
          </p>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (questionId: number, optionId: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
    setShowError(false);
  };

  const calculateScore = async () => {
    let correctAnswers = 0;
    quiz.questions.forEach((question) => {
      if (answers[question.id] === question.rightOptionId) {
        correctAnswers++;
      }
    });
    return Math.round((correctAnswers / quiz.questions.length) * 100);
  };

  const handleRetry = () => {
    return redirect("/");
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBadgeColor = (score: number) => {
    if (score >= 80) return "bg-green-100 text-green-800 border-green-200";
    if (score >= 60) return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  const correctAnswers = data
    ? data.correctAnswers
    : quiz.questions.filter(
        (question) => answers[question.id] === question.rightOptionId
      ).length;

  const progress = (Object.keys(answers).length / quiz.questions.length) * 100;

  const handleSubmit = async () => {
    // Check if all questions are answered
    const unansweredQuestions = quiz.questions.filter(
      (question) => !(question.id in answers)
    );

    if (unansweredQuestions.length > 0) {
      setShowError(true);
      // Scroll to first unanswered question
      const firstUnanswered = unansweredQuestions[0];
      const element = document.getElementById(`question-${firstUnanswered.id}`);
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    try {
      setPending(true);
      const finalScore = await calculateScore();
      await createAnswer({
        moduleName: quiz.moduleName,
        moduleSlug: quiz.moduleSlug,
        score: finalScore,
        correctAnswers: correctAnswers,
      });

      setIsSubmitted(true);
      setScore(finalScore);

      // Animate score after a short delay
      setTimeout(() => {
        setAnimateScore(true);
      }, 500);

      // Scroll to results
      setTimeout(() => {
        document.getElementById("results")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 1000);
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        console.error("Error creating job:", error);
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="py-8 ">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux Modules
          </Link>

          <Card className="shadow-none">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Image
                  src={quiz.moduleIconImage}
                  alt={quiz.moduleName}
                  width={64}
                  height={64}
                  className="size-16 border border-border rounded-lg overflow-hidden"
                />
                <div className="flex-1">
                  <CardTitle className="text-3xl font-bold mb-2">
                    Quiz {quiz.moduleName}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {quiz.description}
                  </CardDescription>
                  <div className="flex items-center gap-4 mt-3">
                    <Badge variant="secondary" className="text-sm">
                      {quiz.questions.length} Questions
                    </Badge>
                    <Badge className="bg-primary/10 text-primary">
                      {quiz.questions.length * 5} Points au Total
                    </Badge>
                  </div>
                </div>
              </div>

              {!isSubmitted && (
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Progression</span>
                    <span className="text-sm text-muted-foreground">
                      {Object.keys(answers).length} sur {quiz.questions.length}{" "}
                      répondues
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}
            </CardHeader>
          </Card>
        </div>

        {/* Error Alert */}
        {showError && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              Veuillez répondre à toutes les questions avant de soumettre le
              quiz.
            </AlertDescription>
          </Alert>
        )}

        {/* Results Section */}
        {isSubmitted && (
          <div id="results" className="mb-8">
            <Card className="shadow-none border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 pt-10">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <Trophy
                      className={`h-16 w-16 ${getScoreColor(
                        score
                      )} transition-all duration-1000 ${
                        animateScore ? "scale-110" : "scale-100"
                      }`}
                    />
                    {animateScore && (
                      <div className="absolute inset-0 animate-ping">
                        <Trophy
                          className={`h-16 w-16 ${getScoreColor(
                            score
                          )} opacity-20`}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <CardTitle className="text-4xl font-bold mb-3">
                  Quiz Terminé !
                </CardTitle>

                <div
                  className={`text-6xl font-bold mb-4 transition-all duration-1000 ${
                    animateScore ? "scale-110" : "scale-100"
                  } ${getScoreColor(score)}`}
                >
                  {animateScore ? score : 0}%
                </div>

                <Badge
                  className={`text-lg px-4 py-2 ${getScoreBadgeColor(score)}`}
                >
                  {score >= 80
                    ? "Excellent !"
                    : score >= 60
                    ? "Bon Travail !"
                    : "Continuez à Apprendre !"}
                </Badge>

                <div className="flex justify-center gap-8 mt-6 text-center">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="font-semibold">
                      {correctAnswers} Correcte{correctAnswers > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <span className="font-semibold">
                      {quiz.questions.length - correctAnswers} Incorrecte
                      {quiz.questions.length - correctAnswers > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleRetry}
                  className="mt-6 text-white cursor-pointer"
                  size="lg"
                >
                  <CircleCheckBig className="h-4 w-4 mr-1" />
                  Terminé
                </Button>
              </CardHeader>
            </Card>
          </div>
        )}

        {/* Questions */}
        {!isSubmitted && (
          <div className="space-y-8">
            {quiz.questions.map((question, index) => (
              <div key={question.id} id={`question-${question.id}`}>
                <QuestionCard
                  question={question}
                  questionIndex={index}
                  totalQuestions={quiz.questions.length}
                  selectedAnswer={answers[question.id]}
                  onAnswerSelect={(optionId) =>
                    handleAnswerSelect(question.id, optionId)
                  }
                  isSubmitted={isSubmitted}
                />
              </div>
            ))}
          </div>
        )}

        {/* Submit Button */}
        {!isSubmitted && (
          <div className="mt-12 text-center w-full">
            <Button
              onClick={handleSubmit}
              size="lg"
              className="text-white cursor-pointer w-full"
              disabled={pending}
            >
              {pending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  <span>Chargement...</span>
                </>
              ) : (
                "Soumettre le Quiz"
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
