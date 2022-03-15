export interface State {
  initialized: boolean;
  memes: Models.Meme[];
  posts: Models.Post[];
}

export interface Methods {
  fetchData: () => Promise<void>;
}

export interface Return {
  state: State;
  methods: Methods;
}
