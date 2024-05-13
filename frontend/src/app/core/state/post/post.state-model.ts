import { Post, Response, SnapshotPost } from "../../types";

export type PostStateModel = {
  posts: Response<SnapshotPost, true>;
  post: { id: number; attributes: Post } | null;
  lastViewedPosts: Response<Post, true>;
  pagination: {
    page: number;
    limit: number;
    reachedMax: boolean;
  };
};
