import React from 'react';
import { Flex, Box, Button, Tag } from '@chakra-ui/react';
import { RegularText } from '@/components/Typography';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import { µReactLiveEditor } from '.';

const scope = { Flex, Button, RegularText, Tag };
const code = `
const shouldRerenderMemo = fields => (
    prevProps,
    nextProps
  ) => {
    return fields.every(FIELD => prevProps[FIELD] === nextProps[FIELD]);
  };

const ButtonRaw = ({increment, value, ...props}) => {
  return (<Button onClick={() => increment(value)} {...props} />)
}

const ButtonMemo = React.memo(({increment, value, ...props}) => {
  return (<Button onClick={() => increment(value)} {...props} />)
}, shouldRerenderMemo(['value']))

const useIncrement = (initialValue = 0) => {
  const [count, setCount] = React.useState(initialValue)


  const increment = React.useCallback((n) => {
    setCount(state => state + n);
  }, [])

  return { count, increment }
}

const App = () => {
  const { count, increment } = useIncrement();

  return (
    <div className="App">
      {[3, 7, 21, 32].map((n) => {
        // check difference in rerenders
        // return <ButtonRaw mr="2" increment={increment} value={n} key={n}>+ {n}</ButtonRaw>;
        return <ButtonMemo mr="2" increment={increment} value={n} key={n}>+ {n}</ButtonMemo>;
      })}
      <Flex>count: {count}</Flex>
    </div>
  )
}

render(
  <App />
)
`;

export const ReactLiveEditor: React.FC<
  µReactLiveEditor.Types.Props
> = props => {
  return (
    <LiveProvider
      code={code}
      scope={scope}
      theme={µReactLiveEditor.Styles.reactLiveHome as any}
      noInline
      {...props}
    >
      <Box
        borderRadius="10px"
        boxShadow="1px 1px 20px rgba(20, 20, 20, 0.27)"
        overflow="hidden"
      >
        <Flex
          justifyContent="stretch"
          alignItems="stretch" /*TODO: add media query*/
        >
          <Box
            maxHeight="500px"
            minWidth="300px"
            overflow="auto"
            fontSize="1.2em"
            bg="blue.900"
          >
            <LiveEditor />
          </Box>
          <Box
            minWidth="300px"
            padding=".5rem"
            height="auto"
            overflow="auto"
            background="whiteAlpha.300"
          >
            <LivePreview />
          </Box>
        </Flex>
        <Box
          background="red.400"
          whiteSpace="pre-wrap"
          textAlign="left"
          fontSize="-moz-initial.9em"
        >
          <LiveError style={{ padding: '1em 2em' }} />
        </Box>
      </Box>
    </LiveProvider>
  );
};
