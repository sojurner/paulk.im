import { Document } from 'flexsearch';

export interface Args {
  memes: Models.Meme[];
  posts: Models.Post[];
}

export interface State {
  memeDocument: Document<unknown, true>;
  postDocument: Document<unknown, true>;
}

export interface Methods {}

export interface Return {
  state: State;
  methods: Methods;
}
