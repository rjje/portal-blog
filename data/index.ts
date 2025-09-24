import { posts as allPosts } from "@/data/posts";
import type { Post } from "@/types";

// slugify a title
function slugify(slug: string) {
  return slug.toLowerCase().trim().split(" ").join("-");
}

// Get All Page
export function GetAllPosts() {
  return allPosts;
}

// Read page
export function GetPost(slug: string) {
  return allPosts.find((post) => post?.slug === slug);
}

// Get Post related for exmple: health, etc.
export function RelatedPosts(tag: string, dontInclude: string) {
  const RelatedPosts: Post[] = [];

  allPosts.map((post) => {
    if (post.tags !== undefined) {
      post.tags.filter((item) => {
        if (slugify(item) === slugify(tag)) {
          if (dontInclude !== post.slug) {
            RelatedPosts.push(post);
          }
        }
      });
    }
  });
  return RelatedPosts;
}

// get tag related posts
export async function GetTagsPost(slug: string) {
  const TagPosts: Post[] = [];

  allPosts.map((post) => {
    if (post.tags !== undefined) {
      post.tags.filter((tag) => {
        if (tag.toLowerCase().trim().split(" ").join("-") === slug) {
          TagPosts.push(post);
        }
      });
    }
  });

  return TagPosts;
}

// get only tag
export async function GetTags() {
  const TagsList: { slug: string }[] = [];

  allPosts.map((post) => {
    if (post.tags !== undefined) {
      post.tags.filter((tag) => {
        let formatTag = tag.toLowerCase().trim().split(" ").join("-");
        if (formatTag) {
          TagsList.push({ slug: formatTag });
        }
      });
    }
  });
  return TagsList;
}
