---
title: 'The Confusing Parts of Modern Korean Culture'
excerpt: 'All modernized cultures have both good and bad elements.  Then there are parts that are just confusing...'
date: '2020-12-15'
tags: [korea, culture, military]
category: culture
author:
  name: 'Paul Kim'
  picture: '/assets/blog/authors/jj.jpeg'
coverImage:
  url: 'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/H1Fkast7STkrzdgZ8U0w'
---

## React performance

When people mention `Optimization` or `Performance` in React, it basically has become a euphemism for 'We don't know what the hell we're talking about'. If you look across the web, you'll an endless sea of colorful articles from developers courageously taking their own shot on this loaded topic. So without further ado, here is my own take.

There are various metrics that can be used to identify performance bottlenecks. The one Im most familiar with and one which i'll focus on are unnecessary re-renders.

## When does a component re-render?

Basic Rule of thumb:
any state change within its parent tree will trigger a re-render.

consider this basic example:

<ReactLiveEditor code={{"
const shouldRerenderMemo = fields => (
prevProps,
nextProps
) => {
return fields.every(FIELD => prevProps[FIELD] === nextProps[FIELD]);
};

const ButtonRaw = ({increment, value, ...props}) => {
console.count('raw-'+ value)

return (<Button onClick={() => increment(value)} {...props} />)
}

const ButtonMemo = React.memo(({increment, value, ...props}) => {
console.count('memo-' + value)

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
}} />

```jsx
const Tag = ({ isActive, value, ...props }) => {
  console.count(value);

  return (
    <Button
      {...(isActive && { style: { backgroundColor: 'blue' } })}
      {...props}
    >
      {value}
    </Button>
  );
};

const TagControl = () => {
  const [activeTag, setActiveTag] = React.useState();

  return (
    <div className="container">
      {['html', 'javascript', 'css', 'typescript'].map(tag => {
        <Tag
          isActive={tag === activeTag}
          value={tag}
          onClick={() => setActiveTag(tag)}
        />;
      })}
    </div>
  );
};
```

The `TagControl` serves as the parent state management container and controls the render flow between the list of `Tags`

The `Tag` is a true functional component, in the sense that it accepts props and translates into ui elements accordingly. I've added a `console.count()` to track the render counter

If you've already played around with the example, you'll notice that a click on any tag will trigger a re-render across all siblings.

As I mentioned at the beginning:

> Any state change within its parent tree will trigger a rerender.

Even if the Tag props remain unchanged, a re-render occurs because any onClick event fires a set state action. This in turn causes `TagControl` to be re-rendered and consequently each child in its tree follow suit.

## How to manage re-renders?

In the example above, it's not necessary to have each sibling tag be re-rendered especially when its prop structure remains the same between state changes.

Ideally we would want only the Tag of the onclick event to be re-rendered.

Fortunately, React provides multiple tools to reduce the number of re-renders when applicable.

The main combination toolset I use is `React.useCallback` + `React.memo`

## React.memo

Before digging into React.memo, I would like to point out that optimizations of any type involve tradeoffs. React.memo is no different. Its important to be mindful of its usage before getting lost into the mindset of premature optimizations.

For more detailed analysis on the consequences of `React.memo`, checkout out this article: [Before You memo()](https://overreacted.io/before-you-memo/) by Dan abromav.

If we look at `React.memo`'s type definition:

```js
function memo<P extends object>(
    Component: FunctionComponent<P>,
    propsAreEqual?: (prevProps: Readonly<PropsWithChildren<P>>, nextProps: Readonly<PropsWithChildren<P>>) => boolean
): NamedExoticComponent<P>;
```

it takes two arguments:

- the `Component Definition`
- an `optional callback function` to flexibly define the re-render conditions by comparing `prevProps` with the `nextProps`
  - if none is provided, React will execute a default shallow comparison between the two prop objects

Personally, I like to provide my own fine-tuned callback to only check for prop fields that I know will should trigger a rerender. Sometimes, you as the developer will know more about your application's expected behavior, than react does.

A simple example usage of `React.memo`:

```js
const shouldRerenderMemo = propList => (prevProps, nextProps) => {
  return propList.every(field => prevProps[field] === nextProps[field]);
};

const MemoTag = React.memo(Tag, shouldRerenderMemo(['isActive', 'value']));
```
