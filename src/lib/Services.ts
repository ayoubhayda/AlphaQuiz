import { prisma } from "@/utils/prisma";

// Get my answer
export const getMyAnswerMutation = async (
  moduleSlug: string,
  userId: string
) => {
  const data = await prisma.answer.findFirst({
    where: {
      moduleSlug: moduleSlug,
      userId: userId,
    },
    select: {
      moduleName: true,
      moduleSlug: true,
      score: true,
      correctAnswers: true,
    },
  });

  return data;
};

// Get answers
export const getAnswersMutation = async (
  moduleSlug: string = "",
  classSlug: string = "",
  page: number = 1,
  pageSize: number = 10
) => {
  const skip = (page - 1) * pageSize;

  const [data, allAnswers, totalCount] = await Promise.all([
    prisma.answer.findMany({
      where: {
        moduleSlug: moduleSlug !== "" ? moduleSlug : undefined,
        user: {
          class: classSlug !== "" ? classSlug : undefined,
          userType: "USER",
          onboardingComplete: true
        },
      },
      skip: skip,
      take: pageSize,
      select: {
        id: true,
        moduleName: true,
        moduleSlug: true,
        score: true,
        createdAt: true,
        user: {
          select: {
            name: true,
            serialNumber: true,
            class: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.answer.findMany({
      where: {
        moduleSlug: moduleSlug !== "" ? moduleSlug : undefined,
        user: {
          class: classSlug !== "" ? classSlug : undefined,
          userType: "USER",
          onboardingComplete: true
        },
      },
      select: {
        moduleSlug: true,
        score: true,
        user: {
          select: {
            serialNumber: true,
          },
        },
      },
    }),

    prisma.answer.count({
      where: {
        moduleSlug: moduleSlug !== "" ? moduleSlug : undefined,
        user: {
          class: classSlug !== "" ? classSlug : undefined,
          userType: "USER",
          onboardingComplete: true
        },
      },
    }),
  ]);

  return {
    answers: data,
    allAnswers: allAnswers,
    totalPages: Math.ceil(totalCount / pageSize),
  };
};

// Get users
export const getUsersMutation = async (
  classSlug: string = "",
  page: number = 1,
  pageSize: number = 10
) => {
  const skip = (page - 1) * pageSize;

  const [data, allUsers, totalCount] = await Promise.all([
    prisma.user.findMany({
      where: {
        class: classSlug !== "" ? classSlug : undefined,
        userType: "USER",
        onboardingComplete: true
      },
      skip: skip,
      take: pageSize,
      select: {
        id: true,
        name: true,
        serialNumber: true,
        class: true,
        score:true,
        answers:true
      },
      orderBy: {
        score: "desc",
      },
    }),

    prisma.user.findMany({
      where: {
        class: classSlug !== "" ? classSlug : undefined,
        userType: "USER",
        onboardingComplete: true
      },
      select: {
        serialNumber: true,
      },
    }),

    prisma.user.count({
      where: {
        class: classSlug !== "" ? classSlug : undefined,
        userType: "USER",
        onboardingComplete: true
      },
    }),
  ]);

  return {
    users: data,
    allUsers: allUsers,
    totalPages: Math.ceil(totalCount / pageSize),
  };
};
