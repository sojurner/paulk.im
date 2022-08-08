import { RegularText } from '@/components/Typography';
import { Skillset } from './Skillset';

export const Intro = () => {
  return (
    <>
      <RegularText fontSize={'1.2em'}>
        Hello, My name is Paul. Im a full-stack developer based in Colorado.
      </RegularText>

      <RegularText mt="3" fontSize={'1.2em'}>
        Here is my current list of tech know-hows:
      </RegularText>
      <Skillset width={['95%', 540]} />

      <RegularText mt="3" fontSize={'1.2em'}>
        I enjoy sharing ideas and learning of stories from all walks of life!
      </RegularText>
    </>
  );
};
