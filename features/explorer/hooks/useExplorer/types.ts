export interface Args {
  memes: Models.Meme[];
  posts: Models.Post[];
}

export interface State {
  explorer: Explorer;
  directoryPosts: Record<string, DirectoryState> | null;
  activeDirectory: string;
  activeFile: string;
}

export interface Methods {
  toggleRootDirectory: (key: keyof Explorer) => void;
  togglePostDirectory: (key: string) => void;
}

export interface Return {
  state: State;
  methods: Methods;
}

//---- misc types ----//
export interface Explorer {
  memes: boolean;
  posts: boolean;
}

export interface DirectoryState {
  files: Models.Post[];
  expanded?: boolean;
  isActive?: boolean;
}
