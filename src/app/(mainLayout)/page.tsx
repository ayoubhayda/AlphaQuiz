import React, { Suspense } from "react";
import ModuleCard from "@/components/general/ModuleCard";
import AdminPage from "@/components/pages/AdminPage";
import { modulesList } from "@/constants";
import { checkIfUserHsFinishedOnboarding } from "@/lib/utils";
import { userConected } from "@/utils/userConected";
import AdminPageSkeleton from "@/components/general/AdminPageSkeleton";

type SearchParams = {
  searchParams: Promise<{
    page?: string;
    class?: string;
    module?: string;
  }>;
};

const page = async ({ searchParams }: SearchParams) => {
  const userSession = await userConected();
  const user = await checkIfUserHsFinishedOnboarding(userSession.id as string);
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const moduleSlug = params.module || "";
  const classSlug = params.class || "";

  const filterKey = `page=${currentPage};module=${moduleSlug};class=${classSlug}`;

  return (
    <>
      {user?.userType === "ADMIN" ? (
        <Suspense fallback={<AdminPageSkeleton />} key={filterKey}>
          <AdminPage
            currentPage={currentPage}
            moduleSlug={moduleSlug}
            classSlug={classSlug}
          />
        </Suspense>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 py-6 pb-10">
          {modulesList.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              userId={userSession.id!}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default page;
