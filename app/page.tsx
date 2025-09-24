import { Newsletter } from "@/components/Newsletter";
import { Hero } from "@/components/Hero";
import { GetAllPosts } from "@/data";
import { Metadata } from "next";
import { BlogCard } from "@/components/blog_card";
import { Mail, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TwitterIcon } from "@/components/icons/twitter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | PORTAL",
  description:
    "PORTAL is an open-source nextjs blog template design with tailwind CSS.",
};

export default function Page() {
  const posts = GetAllPosts();
  return (
    <div className="container py-24">
      <div className="mb-24 flex flex-col items-start justify-between border-b border-border py-10 md:flex-row md:items-center">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-4xl font-bold text-foreground">Blog</h1>
          <p className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="mt-4 flex items-start gap-2 md:mt-0 md:items-center">
          <span className="hidden text-sm text-muted-foreground lg:block">
            Subscribe via
          </span>
          <Link target="_blank" href="#">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mail className="h-4 w-4" />
            </Button>
          </Link>
          <span className="hidden text-sm text-muted-foreground lg:block">
            Follow on
          </span>
          <Link target="_blank" href="#">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Rss className="h-4 w-4" />
            </Button>
          </Link>
          <span className="hidden text-sm text-muted-foreground lg:block">
            and
          </span>
          <Link target="_blank" href="#">
            <Button variant="ghost" size="icon" className="rounded-full">
              <TwitterIcon />
            </Button>
          </Link>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <Newsletter />
    </div>
  );
}
