import { Media, Response } from "../shared";

export type Author = Response<{ fullName: string; avatar: Media }>;
