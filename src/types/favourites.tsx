import { Image } from "./images";

export type Favourite = {
  id: string;
  user_id: string;
  image_id: string;
  sub_id: string | null;
  created_at: string;
  image: Pick<Image, "id" | "url">;
  message: string;
};

export type FavouriteInstance = Pick<Favourite, "image_id"> & {
  sub_id?: string;
};

export type GetFavourite = Omit<Favourite, "message">;

export type CreateFavourite = Pick<Favourite, "message" | "id">;

export type DeleteFavourite = Pick<Favourite, "message">;
