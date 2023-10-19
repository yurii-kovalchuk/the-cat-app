import { Image } from "./images";

export enum VoteValue {
  UpVote = 1,
  DownVote = -1,
}

export type Vote = {
  id: string;
  image_id: string;
  sub_id?: string | null;
  created_at: string;
  value: VoteValue;
  country_code: string;
  image: Pick<Image, "id" | "url">;
  message: string;
};

export type VoteInstance = Pick<Vote, "image_id" | "sub_id" | "value">;

export type GetVoteResponse = Omit<Vote, "message">;

export type CreateVoteResponse = Omit<Vote, "created_at" | "image">;
