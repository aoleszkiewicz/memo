import { Media } from "../shared";
import { Author } from "./author";

export type Post = {
  slug: string;
  author: Author;
  date: Date;
  title: string;
  description?: string;
  images?: Media<"multiple">;
  thumbnail: Media<"single">;
  comment?: string;
  songs?: string[];
};

export type SnapshotPost = Omit<Post, "description" | "images" | "comment" | "songs">;
