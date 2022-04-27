import { Box } from '@chakra-ui/react';
import { Types } from '.';

export const LatestGifer: React.VFC<Types.Props> = props => {
  return (
    <Box width="100%" pt="177.746%" position="relative">
      <iframe
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        frameBorder="0"
        loading="lazy"
        allowFullScreen
        {...props}
      ></iframe>
    </Box>
  );
};
