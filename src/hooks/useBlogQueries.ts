import { fetchBlogBySlug, fetchBlogs } from "@/api/blog";
import { useQuery } from "@tanstack/react-query";

export const useBlogs = () =>
  useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

export const useBlog = (slug: string) =>
  useQuery({
    queryKey: ["blog", slug],
    queryFn: () => fetchBlogBySlug(slug),
    enabled: !!slug,
  });
