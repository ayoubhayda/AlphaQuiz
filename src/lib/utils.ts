import { prisma } from "@/utils/prisma";
import { clsx, type ClassValue } from "clsx"
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function checkIfUserHsFinishedOnboarding(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      userType: true,
      onboardingComplete: true,
    },
  });

  if (user?.userType === "USER" && user?.onboardingComplete === false) {
    return redirect("/onboarding");
  }

  return user;
}
