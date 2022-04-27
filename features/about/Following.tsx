import { ListItem, Link, UnorderedList } from '@chakra-ui/react';
import { RegularText } from '@/components/Typography';

export const Following = () => {
  return (
    <UnorderedList spacing="3">
      <ListItem>
        <RegularText fontSize="1.2em">
          <Link
            href="https://www.youtube.com/c/JackHerrington"
            isExternal
            fontWeight="bold"
            textDecor="underline"
            color="blue.400"
          >
            Jack Herrington (youtube)
          </Link>
          : Frontend content
        </RegularText>
      </ListItem>
      <ListItem>
        <RegularText fontSize="1.2em">
          <Link
            href="https://www.youtube.com/c/HusseinNasser-software-engineering"
            isExternal
            fontWeight="bold"
            textDecor="underline"
            color="blue.400"
          >
            Hussein Nasser (youtube)
          </Link>
          : Backend content
        </RegularText>
      </ListItem>
      <ListItem>
        <RegularText fontSize="1.2em">
          <Link
            href="https://www.youtube.com/c/ThePrimeagen"
            isExternal
            fontWeight="bold"
            textDecor="underline"
            color="blue.400"
          >
            The Primeagen (youtube)
          </Link>
          : Vim, Go, TS, Rust
        </RegularText>
      </ListItem>
      <ListItem>
        <RegularText fontSize="1.2em">
          <Link
            href="https://www.youtube.com/c/devaslife"
            isExternal
            fontWeight="bold"
            textDecor="underline"
            color="blue.400"
          >
            Devaslife (youtube)
          </Link>
          : App Development
        </RegularText>
      </ListItem>
      <ListItem>
        <RegularText fontSize="1.2em">
          <Link
            href="https://www.taniarascia.com/"
            isExternal
            fontWeight="bold"
            textDecor="underline"
            color="blue.400"
          >
            Tania Rascia
          </Link>
          : Fullstack Developer{' '}
          <strong> (design was inspired by her website)</strong>
        </RegularText>
      </ListItem>
    </UnorderedList>
  );
};
