"use server";
import { revalidatePath } from "next/cache";

export const revalidatePage = (page: string) => {
  revalidatePath(page, "page");
};

export const getPreviewStaticPageUrl = () => {
  return process.env.MOBILE_API;
};
