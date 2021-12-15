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
    if (!url) {
      return setStatus(µUseComments.Enums.ScriptStatus.IDLE);
    }

    let script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('theme', theme);
    script.setAttribute('issue-term', issueTerm);
    script.setAttribute('repo', repo);

    // Add script to document body
    if (!ref.current) return;

    const nodeRef = ref.current as HTMLElement
    if(nodeRef.hasChildNodes()) {
      nodeRef.innerHTML = '';
    }

    nodeRef.appendChild(script);

    // store status of the script

    const setAttributeStatus = (event: Event) => {
      setStatus(
        event.type === 'load'
          ? µUseComments.Enums.ScriptStatus.READY
          : µUseComments.Enums.ScriptStatus.ERROR
      );
    };

    script.addEventListener('load', setAttributeStatus);
    script.addEventListener('error', setAttributeStatus);

    return () => {
      // useEffect clean up
      if (script) {
        script.removeEventListener('load', setAttributeStatus);
        script.removeEventListener('error', setAttributeStatus);
      }
    };
  }, [url, theme]);

  return { status };
};
