import { Breed } from "./common";

export type ImagesResp = {
  id: string;
  url: string;
  width: string;
  height: string;
  breeds: Breed[];
  categories?: {
    id: string;
    name: string;
  }[];
};

export type OwnImagesResp = {
  id: string;
  url: string;
  width: string;
  height: string;
  mime_type?: string;
  entities?: [];
  animals?: [];
  categories?: [];
  breeds?: {
    id: string;
    name: string;
    wikipedia_url: string;
  }[];
};

export type CreateImageResp = {
  id: string;
  url: string;
  pending: string;
  approved: string;
};
