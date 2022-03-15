import React from 'react';
import { Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

import { useResponsiveContext } from '@/features/responsive';
import { LatestBlogCard } from '@/features/home/LatestBlogCard';
import { LatestMemeCard } from '@/features/home/LatestMemeCard';

import { Title } from '@/components/Typography';

import { µHomeRoot } from '.';

export const HomeRoot: React.FC<µHomeRoot.Props> = ({
  latestItems,
  ...props
}) => {
  const { collapsible, mediaQueries } = useResponsiveContext();

  return (
    <Flex
      alignItems="center"
      flexDir="column"
      overflowX="hidden"
      overflowY="auto"
      py="4em"
      {...(!collapsible.state.collapsed &&
        !mediaQueries.state.isLargerThan500 && {
          onClick: collapsible.methods.toggleCollapsed,
        })}
      {...props}
    >
      <Title mb="5" letterSpacing="3px">
        Latest
      </Title>
      <Flex
        my="5"
        flexWrap="wrap"
        justifyContent="center"
        maxWidth="1240px"
        spacing="10"
      >
        {latestItems.map((ITEM, index) => {
          const width = [
            '100%',
            '500px',
            index % 4 === 0 || (index - 3) % 4 === 0 ? '500px' : '320px',
            index % 4 === 0 ? '500px' : '320px',
          ];

          switch (ITEM.type) {
            case 'POST':
              return (
                <NextLink
                  key={ITEM.data.slug}
                  href={`/posts/${ITEM.data.slug}`}
                >
                  <div>
                    <LatestBlogCard width={width} post={ITEM.data} />
                  </div>
                </NextLink>
              );
            case 'MEME':
              return (
                <NextLink
                  key={ITEM.data.slug}
                  href={`/memes/${ITEM.data.slug}`}
                >
                  <div>
                    <LatestMemeCard width={width} meme={ITEM.data} />
                  </div>
                </NextLink>
              );
            default:
              return <></>;
          }
        })}
      </Flex>
    </Flex>
  );
};

// export const HomeRoot: React.FC<µHomeRoot.Props> = props => {
//   return (
//     <Flex
//       height="100%"
//       width="100%"
//       flexDir="column"
//       overflow="auto"
//       py="1.5em"
//       // background="linear-gradient(180deg, var(--chakra-colors-blue-50) 0%, var(--chakra-colors-purple-50) 20%, var(--chakra-colors-pink-50) 40%, var(--chakra-colors-red-50) 60%, var(--chakra-colors-green-50) 80%, var(--chakra-colors-cyan-50) 100%)"
//       // py="4em"
//       {...props}
//     >
//       <Header />

//       <Grid
//         mt="5%"
//         mb="5%"
//         width="75%"
//         minW="1000px"
//         bg="white"
//         gridTemplateAreas={`
//           "intro image"
//         `}
//         gridTemplateColumns={'1fr 1fr'}
//         padding="2em"
//         pos="relative"
//         alignContent="center"
//         borderTop="1px solid"
//         borderRight="1px solid"
//         borderBottom="1px solid"
//         borderColor="gray.100"
//         borderRadius="0 10px 10px 0"
//         boxShadow="0 0 5px rgba(0,0,0,0.1)"
//       >
//         <GridItem gridArea="intro" alignSelf="center" justifySelf="center">
//           <Box p="3" height="100%" mt="-20%">
//             <LargeHeading color="blackAlpha.800">Welcome!</LargeHeading>
//             <Title my="1" color="blackAlpha.700" letterSpacing="0">
//               Im Paul,
//             </Title>
//             <SubTitle mt="3" color="blackAlpha.600" letterSpacing="0">
//               And this is my website
//             </SubTitle>
//           </Box>
//         </GridItem>
//         <GridItem
//           gridArea="image"
//           height="max-content"
//           justifySelf="center"
//           alignSelf="flex-start"
//           position="relative"
//         >
//           <NextImage src={LandingImage} height="400px" width="300px" />
//           <LandingCurvedSvg />
//           <LandingName />
//         </GridItem>
//       </Grid>
//       <Box
//         pos="relative"
//         _after={{
//           position: 'absolute',
//           content: "''",
//           width: '30vw',
//           borderBottom: '2px solid',
//           borderColor: 'var(--chakra-colors-blackAlpha-100)',
//           top: '50%',
//           right: '-30vw',
//         }}
//         _before={{
//           position: 'absolute',
//           content: "''",
//           width: '30vw',
//           borderBottom: '2px solid',
//           borderColor: 'var(--chakra-colors-blackAlpha-100)',
//           top: '50%',
//           left: '-30vw',
//         }}
//         alignSelf="center"
//         fontSize="10em"
//       >
//         <Wings />
//       </Box>
//       <Grid
//         my="5%"
//         width="75%"
//         minW="1000px"
//         bg="white"
//         gridTemplateAreas={`
//           "intro image"
//         `}
//         gridTemplateColumns={'1fr 1fr'}
//         padding="2em"
//         pos="relative"
//         alignContent="center"
//         alignSelf="flex-end"
//         borderTop="1px solid"
//         borderLeft="1px solid"
//         borderBottom="1px solid"
//         borderColor="gray.100"
//         borderRadius="10px 0 0 10px"
//       >
//         <GridItem gridArea="intro" alignSelf="center" justifySelf="center">
//           <VStack
//             alignItems="flex-start"
//             p="3"
//             spacing="5"
//             height="100%"
//             mt="-20%"
//           >
//             <SubTitle
//               mt="3"
//               lineHeight="40px"
//               color="blackAlpha.600"
//               letterSpacing="0"
//             >
//               {`The UI/UX design was inspired by Tania Rascia's website.`}
//             </SubTitle>
//             <SubTitle
//               mt="3"
//               lineHeight="40px"
//               color="blackAlpha.600"
//               letterSpacing="0"
//             >{`Thanks to Tania!`}</SubTitle>
//           </VStack>
//         </GridItem>

//         <GridItem
//           gridArea="image"
//           height="max-content"
//           justifySelf="center"
//           alignSelf="flex-start"
//           position="relative"
//         >
//           <NextImage src={LandingImage} height="400px" width="300px" />
//           <LandingCurvedSvg />
//           <LandingName />
//         </GridItem>
//       </Grid>
//       {/* <Box
//         pos="relative"
//         _after={{
//           position: 'absolute',
//           content: "''",
//           height: '250%',
//           width: '250%',
//           borderBottom: '2px solid',
//           borderLeft: '2px solid',
//           borderColor: 'var(--chakra-colors-gray-300)',
//           top: '-250%',
//           transform: 'translateY(20%)',
//           left: '-260%',
//         }}
//         _before={{
//           position: 'absolute',
//           content: "''",
//           height: '250%',
//           width: '250%',
//           borderTop: '2px solid',
//           borderRight: '2px solid',
//           borderColor: 'var(--chakra-colors-gray-300)',
//           bottom: '-250%',
//           transform: 'translateY(-20%)',
//           right: '-260%',
//         }}
//         alignSelf="center"
//         fontSize="10em"
//       >
//         <Wings />
//       </Box> */}
//     </Flex>
//   );
// };
