import { Box } from '@chakra-ui/react';
import { useRef, useState, useReducer, useEffect } from 'react';

export const useScrollObserver = ({
  onObserve,
}: {
  onObserve: IntersectionObserverCallback;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, toggleLoading] = useReducer(state => !state, false);

  const state = { currentPage, loading };
  const methods = { toggleLoading, setCurrentPage };
};

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
