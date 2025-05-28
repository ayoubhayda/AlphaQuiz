"use server";
import { prisma } from "@/utils/prisma";
import { userConected } from "@/utils/userConected";
import { answerSchema, userCompleteSchema } from "@/utils/zodSchemas";
import { redirect } from "next/navigation";
import { z } from "zod";

// User Complete Action
export async function userComplete(data: z.infer<typeof userCompleteSchema>) {
  const user = await userConected();

  const validatedData = userCompleteSchema.parse(data);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: validatedData.name,
      class: validatedData.class,
      serialNumber: validatedData.serialNumber,
      onboardingComplete: true,
    },
  });

  return redirect("/");
}

// User Complete Action
export async function createAnswer(data: z.infer<typeof answerSchema>) {
  const user = await userConected();
  const validatedData = answerSchema.parse(data);

  // Create the new answer
  await prisma.answer.create({
    data: {
      userId: user.id as string,
      moduleName: validatedData.moduleName,
      moduleSlug: validatedData.moduleSlug,
      score: validatedData.score,
      correctAnswers: validatedData.correctAnswers,
    },
  });

  // Check if user has completed 5 modules
  const userAnswers = await prisma.answer.findMany({
    where: {
      userId: user.id,
    },
    select: {
      moduleSlug: true,
      score: true,
    },
  });

  // Get unique modules (in case user retook some quizzes)
  const uniqueModules = new Map();
  userAnswers.forEach((answer) => {
    if (
      !uniqueModules.has(answer.moduleSlug) ||
      uniqueModules.get(answer.moduleSlug) < answer.score
    ) {
      uniqueModules.set(answer.moduleSlug, answer.score);
    }
  });

  // Check if user completed 5 different modules
  if (uniqueModules.size >= 5) {
    // Calculate average score from the 5 modules
    const scores = Array.from(uniqueModules.values());
    const averageScore = Math.round(
      scores.reduce((sum, score) => sum + score, 0) / scores.length
    );

    // Update user's score
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        score: averageScore,
      },
    });
  }

  return;
}

// Answer Delete Action
export async function deleteAnswer(id: string) {
  await prisma.answer.delete({
    where: { id },
  });
}

// User Delete Action
export async function deleteUser(id: string) {
  await prisma.user.delete({
    where: { id },
  });
}
