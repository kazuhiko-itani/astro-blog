import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export const getBlogs = async () => {
  const posts = await getCollection("blog");

  return sortByDate(posts);
};

const sortByDate = (blogs: CollectionEntry<"blog">[]) => {
  return blogs.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
};
