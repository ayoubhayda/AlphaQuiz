import QuizPage from "@/components/pages/QuizPage";
import { getMyAnswerMutation } from "@/lib/Services";
import { isAdmin, userConected } from "@/utils/userConected";
import React from "react";

type Params = Promise<{ slug: string }>;
const page = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const user = await userConected();
  await isAdmin();
  const data = await getMyAnswerMutation(slug, user.id!)
  return <QuizPage slug={slug} data={data} />;
};

export default page;
