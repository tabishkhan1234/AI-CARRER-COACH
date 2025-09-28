"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";




export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("User not logged in");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });
  if (!user) throw new Error("User not found");

  try {
    const result = await db.$transaction(
      async (tx) => {
        let industryInsight = await tx.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        });

        if (!industryInsight) {
          industryInsight = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              salaryRange: [],
              growthRate: 0,
              demandLevel: "Medium",
              topSkills: [],
              marketOutlook: "",
              keyTrends: [],
              recommendedSkills: [],
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
        }
        const updatedUser = await tx.user.update({
          where: { id: user.id },
          data: {
            industry: data.industry,
            experienceLevel: data.experienceLevel,
            bio: data.bio,
            skills: data.skills,
          },
        });
        return { updatedUser, industryInsight };
      },
      {
        timeout: 10000,
      }
    );
    return result.user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update user");
  }
}

export async function getUserOnboardingStatus() {
  const {userId} = await auth();
  if (!userId) throw new Error("User not logged in");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });
  if (!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });
    return { isOnboarded: !! user?.industry, };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to onboardstatus user");
  }
}
