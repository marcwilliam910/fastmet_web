import { tagColors } from "@/helper/constant";
import { formatDate, formatReadTime } from "@/helper/format";
import type { IBlogPost } from "@/types/blog";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }: { post: IBlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 p-6 hover:border-primary/20 hover:shadow-md transition-all duration-200"
    >
      <span
        className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-4 w-fit ${tagColors[post.tag] ?? "bg-gray-100 text-gray-500"}`}
      >
        {post.tag}
      </span>
      <h2 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors flex-1">
        {post.title}
      </h2>
      <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-50">
        <div className="flex items-center gap-3 text-[11px] text-gray-400">
          <span className="flex items-center gap-1">
            <CalendarDays className="size-3" />
            {formatDate(post.createdAt)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3" />
            {formatReadTime(post.readTime)}
          </span>
        </div>
        <ArrowRight className="size-4 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
      </div>
    </Link>
  );
}
