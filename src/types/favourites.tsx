import { Image } from "./images";

export type Favourite = {
  id: string;
  user_id: string;
  image_id: string;
  sub_id?: string | null;
  created_at: string;
  image: Pick<Image, "id" | "url">;
  message: string;
};

export type FavouriteInstance = Pick<Favourite, "image_id" | "sub_id">;

export type GetFavouriteResponse = Omit<Favourite, "message">;

export type CreateFavouriteResponse = Pick<Favourite, "message" | "id">;

export type DeleteFavouriteResponse = Pick<Favourite, "message">;
