import { fetchBlogs } from "@/api/blog";
import { useQuery } from "@tanstack/react-query";

export const useBlogs = () =>
  useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
