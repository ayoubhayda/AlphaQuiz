import { prisma } from "@/utils/prisma";
import { notFound, redirect } from "next/navigation";

export const getCompany = async (userId: string) => {
  const data = await prisma.company.findUnique({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      name: true,
      logo: true,
      location: true,
      about: true,
      xAccount: true,
      website: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!data) {
    return redirect("/");
  }

  return data;
};

// Get all active jobs
export const getJobsDataMutation = async () => {
  const data = await prisma.job.findMany({
    where: {
      status: "ACTIVE",
    },
    select: {
      id: true,
      jobTitle: true,
      salaryFrom: true,
      salaryTo: true,
      employmentType: true,
      location: true,
      createdAt: true,
      company: {
        select: {
          id: true,
          name: true,
          logo: true,
          location: true,
          about: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
};

// Get Job Details
export const getJobMutation = async (jobId: string, userId?: string) => {
  const [jobData, savedJob] = await Promise.all([
    await prisma.job.findUnique({
      where: {
        status: "ACTIVE",
        id: jobId,
      },
      select: {
        jobTitle: true,
        jobDescription: true,
        location: true,
        employmentType: true,
        benefits: true,
        createdAt: true,
        listingDuration: true,
        company: {
          select: {
            name: true,
            logo: true,
            location: true,
            about: true,
          },
        },
      },
    }),

    userId
      ? prisma.savedJob.findUnique({
          where: {
            jobId_userId: {
              userId: userId,
              jobId: jobId,
            },
          },
          select: {
            id: true,
          },
        })
      : null,
  ]);

  if (!jobData) {
    return notFound();
  }

  return {
    jobData,
    savedJob,
  };
};

// Get Favorites Jobs
export const getFavoritesMutation = async (userId: string) => {
  const data = await prisma.savedJob.findMany({
    where: {
      userId: userId,
    },
    select: {
      job: {
        select: {
          id: true,
          jobTitle: true,
          salaryFrom: true,
          salaryTo: true,
          employmentType: true,
          location: true,
          createdAt: true,
          company: {
            select: {
              name: true,
              logo: true,
              location: true,
              about: true,
            },
          },
        },
      },
    },
  });

  return data;
};

// Get my jobs
export const getMyJobsMutation = async (userId: string) => {
  const data = await prisma.job.findMany({
    where: {
      company: {
        userId: userId,
      },
    },
    select: {
      id: true,
      jobTitle: true,
      status: true,
      createdAt: true,
      company: {
        select: {
          name: true,
          logo: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
};

// Get my job
export const getMyJobMutation = async (jobId: string, userId: string) => {
  const data = await prisma.job.findUnique({
    where: {
      id: jobId,
      company:{
        userId: userId,
      }
    },
    select: {
      benefits: true,
      id: true,
      jobTitle: true,
      jobDescription: true,
      salaryFrom: true,
      salaryTo: true,
      location: true,
      employmentType: true,
      listingDuration: true,
      company: {
        select: {
          about: true,
          name: true,
          location: true,
          website: true,
          xAccount: true,
          logo: true,
        },
      },
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
};
