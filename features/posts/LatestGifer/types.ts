import { ReactJSXIntrinsicAttributes } from '@emotion/react/types/jsx-namespace';
import { DetailedHTMLProps, IframeHTMLAttributes } from 'react';

export type Props = DetailedHTMLProps<
  IframeHTMLAttributes<HTMLIFrameElement>,
  HTMLIFrameElement
>;
