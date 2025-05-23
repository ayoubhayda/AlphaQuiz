import ModuleCard from "@/components/general/ModuleCard";
import { modulesList } from "@/constants";
import { checkIfUserHsFinishedOnboarding } from "@/lib/utils";
import { userConected } from "@/utils/userConected";
import React from "react";

const page = async () => {
  const user = await userConected();
  await checkIfUserHsFinishedOnboarding(user.id as string);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 py-6 pb-10">
      {modulesList.map((module) => (
        <ModuleCard key={module.id} module={module} />
      ))}
    </div>
  );
};

export default page;
