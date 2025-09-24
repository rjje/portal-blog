"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Tag,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GetAllPosts } from "@/data";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function BlogCard({ post }: { post: Post }) {
  let getDate = dayjs(post.date).format("DD MMM, YYYY");
  let slug = post.title?.toLowerCase().replaceAll(" ", "-");
  return (
    <Card className="mx-auto max-w-xl rounded-sm shadow-md">
      <CardContent className="p-5">
        <div className="mt-3 mb-4 flex items-center justify-between">
          <Button variant={"link"} className="rounded-full px-0 text-sm">
            {" "}
            <Tag /> {post.category}{" "}
          </Button>
          <time className="text-sm font-bold" title={post.date}>
            {getDate}
          </time>
        </div>
        <Link
          className="hover:underline hover:underline-offset-4"
          href={`/read/${slug}`}
        >
          <CardTitle className="text-2xl leading-tight font-semibold tracking-tight">
            {post.title}
          </CardTitle>
        </Link>
        <CardDescription className="my-4 text-sm text-muted-foreground">
          {post.description}
        </CardDescription>
        <div className="mt-5 flex items-center gap-3">
          <Avatar className="size-5 border outline">
            <AvatarImage src="/images/user.png" alt={post.author} />
            <AvatarFallback>{post.author} </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground">
            {" "}
            {post.author}{" "}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
