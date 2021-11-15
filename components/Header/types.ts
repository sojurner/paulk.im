export namespace µHeader {
  export enum Link {
    POSTS = '/posts',
    MEMES = '/memes',
    ABOUT = '/about',
    CONTACT = '/contact',
  }

  export interface Props {
    activeLink: Link;
  }
}
