declare namespace Models {
  declare interface TIL {
    title: string;
    slug: string;
    content: string;
    tags: string[];
    date?: string;
  }

  declare interface ContentOfWeek {
    youtubeUrl: string;
    soundCloudUrl: string;
    videoUrl: string | null;
    image: {
      url: string;
      width: number;
      height: number;
    };
    weekRange: string;
    weekNumber: number;
    year: number;
  }

  declare interface Post {
    title: string;
    slug: string;
    resource?: string;
    type: 'image' | 'youtube' | 'misc' | 'soundcloud';
    tag: string[];
    uploadDate: string;
    asset?: {
      url: string;
      width: number;
      height: number;
    };
  }

  declare interface Document {
    date: string;
    slug: string;
    title: string;
    content: string;
    tags: string[];
    date?: string;
  }
}

declare namespace Components {
  declare interface ContentProps {
    content: (string | number | undefined | React.FC)[];
  }
}

declare namespace Types {
  declare type PartialBy<T, K extends keyof T> = Omit<T, K> &
    Partial<Pick<T, K>>;
}
