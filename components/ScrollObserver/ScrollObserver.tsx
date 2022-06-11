import { Box } from '@chakra-ui/react';
import { useRef, useEffect } from 'react';

export const ScrollObserver: React.FC<{
  pageCount: number;
  onObserve: IntersectionObserverCallback;
}> = ({ pageCount, onObserve, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentRef = ref.current;

    if (!currentRef) return;

    const io = new IntersectionObserver(onObserve);

    io.observe(currentRef);

    return () => io.disconnect();
  });

  return (
    <>
      <Box ref={ref} />
    </>
  );
};
