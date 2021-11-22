import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Playfair Display', serif;
        src: url('../../assets/fonts/Playfair/PlayfairDisplay-Regular.ttf');
      }

      @font-face {
        font-family: 'IBM Plex Serif', serif;
        src: url('../../assets/fonts/IBM/IBMPlexSerif-Regular.ttf');
      }
    `}
  />
);
