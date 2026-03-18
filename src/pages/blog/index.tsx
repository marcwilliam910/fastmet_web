import { useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: Date;
  readTime: number;
  tag: string;
  featured?: boolean;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const formatDate = (d: Date) =>
  d.toLocaleDateString("en-PH", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const formatReadTime = (mins: number) => `${mins} min read`;

// ─── Tags ─────────────────────────────────────────────────────────────────────

const TAGS = ["All", "Announcement", "Drivers", "Users", "Guide", "Updates"];

// ─── Posts (replace with API) ─────────────────────────────────────────────────

const posts: BlogPost[] = [
  {
    slug: "introducing-fastmet",
    title: "Introducing FastMet: Metro Deliveries, Reimagined",
    excerpt:
      "We're building a faster, more reliable way to move goods across the metro. Here's what FastMet is, why we built it, and what's coming next for the platform.",
    date: new Date("2026-03-10"),
    readTime: 3,
    tag: "Announcement",
    featured: true,
  },
  {
    slug: "why-we-chose-our-drivers",
    title: "Why Driver Experience Comes First at FastMet",
    excerpt:
      "From the founding bonus to the gear pack, every reward in our pre-registration is designed to show drivers they're not just partners — they're the core of FastMet.",
    date: new Date("2026-03-14"),
    readTime: 4,
    tag: "Drivers",
  },
  {
    slug: "pre-registration-guide",
    title: "How the Pre-Registration Rewards Actually Work",
    excerpt:
      "A clear breakdown of every reward tier for drivers and users — what you get, when you get it, and how the raffle fits in.",
    date: new Date("2026-03-17"),
    readTime: 5,
    tag: "Guide",
  },
  {
    slug: "user-vouchers-explained",
    title: "Your Early User Vouchers: What They Cover",
    excerpt:
      "We know delivery credits sound simple, but there's a lot of thought behind how we structured them. Here's exactly how your vouchers work at launch.",
    date: new Date("2026-03-18"),
    readTime: 3,
    tag: "Users",
  },
  {
    slug: "app-update-march",
    title: "March Update: What's New Before Launch",
    excerpt:
      "Live tracking improvements, booking flow changes, and a sneak peek at the driver dashboard — here's everything that shipped this month.",
    date: new Date("2026-03-19"),
    readTime: 4,
    tag: "Updates",
  },
  {
    slug: "driver-onboarding-process",
    title: "A Look Inside the FastMet Driver Onboarding",
    excerpt:
      "From pre-registration to your first trip — we walk you through every step of the onboarding process so you know exactly what to expect.",
    date: new Date("2026-03-20"),
    readTime: 6,
    tag: "Drivers",
  },
];

// ─── Tag styles ───────────────────────────────────────────────────────────────

const tagColors: Record<string, string> = {
  Announcement: "bg-primary/10 text-primary",
  Drivers: "bg-sky-100 text-sky-700",
  Users: "bg-violet-100 text-violet-700",
  Guide: "bg-green-100 text-green-700",
  Updates: "bg-amber-100 text-amber-700",
};

// ─── Blog Card ────────────────────────────────────────────────────────────────

function BlogCard({ post }: { post: BlogPost }) {
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
            {formatDate(post.date)}
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

// ─── Featured Card ────────────────────────────────────────────────────────────

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group col-span-full flex flex-col md:flex-row bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-primary/20 hover:shadow-md transition-all duration-200"
    >
      {/* Color block */}
      <div className="md:w-56 lg:w-72 h-36 md:h-auto bg-gradient-to-br from-primary/80 to-orange-400 shrink-0 flex items-center justify-center">
        <span className="text-5xl select-none">🚚</span>
      </div>

      {/* Content */}
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
              {formatDate(post.date)}
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogList() {
  const [activeTag, setActiveTag] = useState("All");

  const featured = posts.find((p) => p.featured);
  const filtered = posts
    .filter((p) => !p.featured)
    .filter((p) => activeTag === "All" || p.tag === activeTag);

  const showFeatured = activeTag === "All" && featured;

  return (
    <section className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        {/* ── Page header ──────────────────────────────────────────────── */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            FastMet Blog
          </p>
          <h1 className="text-3xl font-black tracking-tight text-gray-900">
            News, guides & updates
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Everything happening at FastMet — straight from the team.
          </p>
        </div>

        {/* ── Tag filter tabs ───────────────────────────────────────────── */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          {TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                activeTag === tag
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white border border-gray-200 text-gray-500 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* ── Posts grid ───────────────────────────────────────────────── */}
        {filtered.length === 0 && !showFeatured ? (
          <div className="py-20 text-center text-gray-400 text-sm">
            No posts in this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {showFeatured && <FeaturedCard post={featured!} />}
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
