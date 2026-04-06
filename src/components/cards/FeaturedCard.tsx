import { tagColors } from "@/helper/constant";
import { formatDate, formatReadTime } from "@/helper/format";
import type { IBlogPost } from "@/types/blog";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedCard({ post }: { post: IBlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group col-span-full flex flex-col md:flex-row bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-primary/20 hover:shadow-md transition-all duration-200"
    >
      <div className="md:w-56 lg:w-72 h-36 md:h-auto shrink-0 overflow-hidden">
        <img src={post.heroImage} alt={post.title} className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-between p-6 flex-1">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${tagColors[post.tag] ?? "bg-gray-100 text-gray-500"}`}
            >
              {post.tag}
            </span>
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary text-white">
              Featured
            </span>
          </div>
          <h2 className="text-lg font-black text-gray-900 leading-snug group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        </div>
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
          <span className="flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Read more <ArrowRight className="size-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
