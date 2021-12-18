import { useEffect, useState } from 'react';
import { µUseComments } from '.';

// we need a function that accepts the script src and couple of other parameters

export const useComments = (
  params: µUseComments.Params
): µUseComments.Return => {
  const { url, theme, issueTerm, repo, ref } = params;

  const [status, setStatus] = useState<µUseComments.Enums.ScriptStatus>(
    url
      ? µUseComments.Enums.ScriptStatus.LOADING
      : µUseComments.Enums.ScriptStatus.IDLE
  );

  // run the useEffect when the url of the script changes
  useEffect(() => {
    if (!ref.current || !url) return;

    const node = ref.current as HTMLDivElement;

    const script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = url;
    script.setAttribute('theme', theme);
    script.setAttribute('issue-term', issueTerm);
    script.setAttribute('repo', repo);

    node.appendChild(script);
  }, [url]);

  return { status };
};
