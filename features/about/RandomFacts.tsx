import Image from 'next/image';
import { ListItem, Box, Link, UnorderedList } from '@chakra-ui/react';
import { RegularText } from '@/components/Typography';

export const RandomFacts = () => {
  return (
    <UnorderedList spacing="3">
      <ListItem fontSize="1.2em">
        Served 4 years in the U.S. Army as a Combat Medic.
      </ListItem>
      <ListItem fontSize="1.2em">
        My last meal: <strong>Chocolate Ice-cream Cake</strong>.
      </ListItem>
      <ListItem fontSize="1.2em">
        <strong>Hiking</strong> nourishes my soul; favorite trail is{' '}
        <Link
          isExternal
          textDecor="underline"
          color="blue.400"
          href="https://www.alltrails.com/trail/us/colorado/saint-vrain-mountain-trail"
        >
          Saint Vrain Mt. Trail
        </Link>
      </ListItem>
      <ListItem fontSize="1.2em">
        Favorite exercise: <strong>10km run</strong>
      </ListItem>
      <ListItem fontSize="1.2em">
        I have 2 cats: <strong>Sozo</strong> (black/white) &{' '}
        <strong>Silver</strong> (gray)
      </ListItem>
      <Box my="2">
        <Image
          src={
            'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/QoB4ol6ET6aeoun7jSkZ'
          }
          alt="my cats"
          layout="responsive"
          height={3024}
          width={4032}
        />
      </Box>
      <ListItem fontSize="1.2em">
        {' '}
        Favorite quote:
        <RegularText
          fontWeight="bold"
          opacity=".8"
          mt="2"
          fontSize={'.9em'}
          marginLeft="1em"
        >
          &#34;Only the disciplined ones in life are free. If you are
          undisciplined, you are a slave to your moods and your passions&#34;
        </RegularText>
        <RegularText opacity=".8" mt="2" marginLeft="1em">
          <strong>- Eliud Kipchoge</strong>
        </RegularText>
      </ListItem>
    </UnorderedList>
  );
};
