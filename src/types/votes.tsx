export type Vote = {
  image_id: string;
  sub_id?: string;
  value: 1 | -1;
};

export type VoteResp = {
  id: string;
  image_id: string;
  sub_id: string | null;
  created_at: string;
  value: string;
  country_code: string;
  image: {
    id: string;
    url: string;
  };
};

export type CreateVoteResp = {
  message: string;
  id: string;
  image_id: string;
  value: 1 | -1;
  country_code: string;
};
