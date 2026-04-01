import { API_URL } from "@/helper/constant";
import type { IBlogPostDetail } from "@/types/blog";

export const fetchBlogs = async (): Promise<IBlogPostDetail[]> => {
  const res = await fetch(`${API_URL}/api/blogs`);
  if (!res.ok) throw new Error("Failed to fetch blog posts");
  const data = await res.json();
  return data.data;
};

export const fetchBlogBySlug = async (
  slug: string,
): Promise<IBlogPostDetail> => {
  const res = await fetch(`${API_URL}/api/blogs/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch blog post");
  const data = await res.json();
  return data.data;
};
