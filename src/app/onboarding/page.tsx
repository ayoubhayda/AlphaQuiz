import OnboardingForm from "@/components/forms/onboarding/OnboardingForm";
import { prisma } from "@/utils/prisma";
import { userConected } from "@/utils/userConected";
import { redirect } from "next/navigation";
import React from "react";

async function checkIfUserHsFinishedOnboarding(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      userType: true,
      onboardingComplete: true,
    },
  });

  if (user?.userType === "USER" && user?.onboardingComplete === true) {
    return redirect("/");
  }

  return user;
}

const page = async () => {
  const user = await userConected();
  await checkIfUserHsFinishedOnboarding(user.id as string);
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center py-10">
      <OnboardingForm />
    </div>
  );
};

export default page;
