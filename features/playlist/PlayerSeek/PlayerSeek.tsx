import {
  SliderTrack,
  Slider,
  SliderProps,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';

import { usePlaylistContext } from '@/features/playlist';

export const PlayerSeek: React.VFC<SliderProps> = props => {
  const { usePlaylistPlayer } = usePlaylistContext();

  return (
    <Slider
      onChangeStart={usePlaylistPlayer.methods.toggleIsSeeking}
      onChange={usePlaylistPlayer.methods.setPlayed}
      aria-label="slider-ex-1"
      value={usePlaylistPlayer.state.played}
      min={0}
      max={100}
      {...props}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};
