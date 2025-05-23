"use server";
import { prisma } from "@/utils/prisma";
import { userConected } from "@/utils/userConected";
import { userCompleteSchema } from "@/utils/zodSchemas";
import { redirect } from "next/navigation";
import { z } from "zod";


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
      onboardingComplete: true,
    },
  });

  return redirect("/");
}

