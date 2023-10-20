export type Favourite = {
  image_id: string;
  sub_id?: string;
};

export type FavouriteResp = {
  id: string;
  user_id: string;
  image_id: string;
  sub_id: string | null;
  created_at: string;
  image: {
    id: string;
    url: string;
  };
};

export type CreateFavouriteResp = {
  message: string;
  id: string;
};

export type DeleteResp = {
  message: string;
};
