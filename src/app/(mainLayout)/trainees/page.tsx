import React, { Suspense } from "react";
import { checkIfUserHsFinishedOnboarding } from "@/lib/utils";
import { isNotAdmin, userConected } from "@/utils/userConected";
import AdminPageSkeleton from "@/components/general/AdminPageSkeleton";
import AdminTraineesPage from "@/components/pages/AdminTraineesPage";

type SearchParams = {
  searchParams: Promise<{
    page?: string;
    class?: string;
    module?: string;
  }>;
};

const page = async ({ searchParams }: SearchParams) => {
  const userSession = await userConected();
  await checkIfUserHsFinishedOnboarding(userSession.id as string);
  await isNotAdmin();
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const moduleSlug = params.module || "";
  const classSlug = params.class || "";

  const filterKey = `page=${currentPage};module=${moduleSlug};class=${classSlug}`;
  return (
    <Suspense fallback={<AdminPageSkeleton />} key={filterKey}>
      <AdminTraineesPage currentPage={currentPage} classSlug={classSlug} />
    </Suspense>
  );
};

export default page;
