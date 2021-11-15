export namespace µUsePanelPosts {
  export interface State {
    activeDirectory: string;
    categories: Record<string, Models.Post[]>
  }

  export interface Methods {
    onDirectoryClick: (key: string) => void;
  }

  export interface Params {
    posts: Models.Post[]
  }

  export interface Return {
    state: State;
    methods: Methods;
  }
}