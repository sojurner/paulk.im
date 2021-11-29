declare namespace Models {
  declare interface Post {
    slug: string;
    excerpt: string;
    title: string;
    category: string;
    tags: string[];
    author: string;
    date: string;
    content: string;
    viewCount: number;
    upvotes: number;
    coverImage: {
      url: string;
    };
  }

  declare interface Meme {
    title: string;
    slug: string;
    tags: string[];
    date: {
      timeFromNow: string;
      label: string;
    };
    viewCount: number;
    upvotes: number;
    image: {
      url: string;
    };
  }

  declare interface Document {
    date: string;
    slug: string;
    title: string;
  }
}

declare namespace Components {
  declare interface ContentProps {
    content: (string | number | undefined)[];
  }
}

declare namespace Types {
  declare type PartialBy<T, K extends keyof T> = Omit<T, K> &
    Partial<Pick<T, K>>;
}
