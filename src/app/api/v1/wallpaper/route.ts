import { prisma } from "@/lib/prisma";

const getWallpapers = async () => {
  try {
    const wallpapers = await prisma.wallpaper.findMany();
    if (!wallpapers) {
      return [];
    }

    return wallpapers;
  } catch (error) {
    // console.error("PrismaClientError:", error);
    return [{ error: error || "Failed to fetch wallpapers" }];
  }
};

export const GET = async () => {
  const wallpapers = await getWallpapers();

  return Response.json(wallpapers);
};
