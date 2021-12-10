export interface Props {
  width: number | string;
  latestItems: (LatestPost | LatestMeme)[];
}

export interface Methods {}

export interface LatestItems<TType extends 'POST' | 'MEME', TData> {
  type: TType;
  data: TData;
}

export type LatestPost = LatestItems<'POST', Models.Post>;
export type LatestMeme = LatestItems<'MEME', Models.Meme>;
