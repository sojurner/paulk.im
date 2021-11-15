declare namespace Models {
  declare interface Post {
    slug: string;
    title: string;
    category: string;
    author: string;
    date: string;
    content: string;
  }

  declare interface Meme {
    title: string;
    id: string;
    date: string;
    image: {
      url: string;
    };
  }

  declare interface Document {
    id: number;
    name: string;
    text: string;
  }
}

declare namespace Components {
  declare interface ContentProps {
    content: (string | number | undefined)[];
  }
}
