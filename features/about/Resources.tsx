import { ListItem, Link, UnorderedList } from '@chakra-ui/react';
import { RegularText } from '@/components/Typography';

export const Resources = () => {
  return (
    <UnorderedList spacing="3">
      <ListItem>
        <RegularText fontSize="1.2em">
          <Link
            href="https://undesign.learn.uno"
            isExternal
            fontWeight="bold"
            textDecor="underline"
            color="blue.400"
          >
            Undesign
          </Link>
          : A resource of resources
        </RegularText>
      </ListItem>
      <ListItem>
        <RegularText fontSize="1.2em">
          <Link
            href="https://learningmusic.ableton.com/index.html"
            isExternal
            fontWeight="bold"
            textDecor="underline"
            color="blue.400"
          >
            Ableton (learning music)
          </Link>
          : cool way to learn music
        </RegularText>
      </ListItem>
      <ListItem>
        <RegularText fontSize="1.2em">
          <Link
            href="https://remarkable.com/roomtothink"
            isExternal
            fontWeight="bold"
            textDecor="underline"
            color="blue.400"
          >
            Remarkable (think rooms)
          </Link>
          : virtual spaces with soundtracks and visuals
        </RegularText>
      </ListItem>
      <ListItem>
        <RegularText fontSize="1.2em">
          <Link
            href="https://www.uidownload.com/"
            isExternal
            fontWeight="bold"
            textDecor="underline"
            color="blue.400"
          >
            UI Download
          </Link>
          : Free vector graphics for designers
        </RegularText>
      </ListItem>
      <ListItem>
        <RegularText fontSize="1.2em">
          <Link
            href="https://www.svgrepo.com/"
            isExternal
            fontWeight="bold"
            textDecor="underline"
            color="blue.400"
          >
            SVG Repo
          </Link>
          : Another great resource for free SVG vectors
        </RegularText>
      </ListItem>
      <ListItem>
        <RegularText fontSize="1.2em">
          <Link
            href="https://gifer.com/"
            isExternal
            fontWeight="bold"
            textDecor="underline"
            color="blue.400"
          >
            Gifer
          </Link>
          : give the gift of gifs
        </RegularText>
      </ListItem>
      <ListItem>
        <RegularText fontSize="1.2em">
          <Link
            href="https://roadmap.sh/"
            isExternal
            fontWeight="bold"
            textDecor="underline"
            color="blue.400"
          >
            Roadmap
          </Link>
          : roadmaps, guides, and educational content
        </RegularText>
      </ListItem>
      <ListItem>
        <RegularText fontSize="1.2em">
          <Link
            href="https://openbase.com/"
            isExternal
            fontWeight="bold"
            textDecor="underline"
            color="blue.400"
          >
            Openbase
          </Link>
          : Choose the right npm package every time
        </RegularText>
      </ListItem>
    </UnorderedList>
  );
};
