import { MutableRefObject, MouseEventHandler } from 'react';
import { µMeme } from '@/models/meme';

export namespace µMemes {
  export interface Props {
    memes: µMeme[];
  }

  export interface Ref {
    node: HTMLDivElement;
    isScrolling: boolean;
    scrollListener?: ScrollListener;
    observer?: IntersectionObserver;
    initialScrollTop?: number;
  }

  export type ScrollListener = (ref: µMemes.Ref) => () => void;
  export type ObserverCB = (ref: µMemes.Ref) => IntersectionObserverCallback;
  export type AnimateCB = (ref: µMemes.Ref) => FrameRequestCallback;

  export interface UseMemesScrollReturn {
    memeRefs: MutableRefObject<µMemes.Ref[]>;
    onMemeClick: (index: number) => void;
  }

  export type UseMemesScroll = (memeCount: number) => UseMemesScrollReturn;
}
