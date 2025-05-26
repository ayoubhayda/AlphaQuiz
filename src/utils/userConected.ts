import { notFound, redirect } from "next/navigation";
import { auth } from "./auth";
import { prisma } from "./prisma";

export async function userConected() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }

  return session.user;
}


export async function isAdmin() {
  const session = await userConected();

  const user = await prisma.user.findUnique({
      where: {
        id: session.id,
      },
      select: {
        userType: true,
      },
    });
  
    if (user?.userType === "ADMIN") {
      return notFound();
    }
  
    return user;
}
