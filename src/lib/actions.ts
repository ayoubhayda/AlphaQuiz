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

  await prisma.answer.create({
    data:{
      userId: user.id as string,
      moduleName: validatedData.moduleName,
      moduleSlug: validatedData.moduleSlug,
      score: validatedData.score,
      correctAnswers: validatedData.correctAnswers,
    }
  })

  return;
}

// Answer Delete Action
export async function deleteAnswer(id: string) {
  await prisma.answer.delete({
    where: { id },
  });
}

