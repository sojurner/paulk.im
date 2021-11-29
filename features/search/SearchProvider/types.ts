import { Document } from 'flexsearch';

export interface Props {
  memes: Models.Meme[];
  posts: Models.Post[];
}

export interface State {
  initialQuery?: string;
  memeDocument: Document<unknown, true>;
  postDocument: Document<unknown, true>;
}

export interface Methods {
  onAddMemes: (memes: Models.Meme[]) => void;
  onAddPosts: (posts: Models.Post[]) => void;
}

export interface Return {
  state: State;
  methods: Methods;
}
