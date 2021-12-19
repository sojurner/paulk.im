import { GithubIcon, GmailIcon, LinkedinIcon } from '@/components/Icon';

import { Enums, Types } from '.';

export const contactLinks: Types.ContactLink[] = [
  {
    type: Enums.LinkType.EXTERNAL,
    name: 'github',
    Icon: GithubIcon,
    link: 'https://github.com/sojurner',
  },
  {
    type: Enums.LinkType.EXTERNAL,
    name: 'linkedin',
    Icon: LinkedinIcon,
    link: 'https://www.linkedin.com/in/paulkim-sojurner/',
  },
  {
    type: Enums.LinkType.EMAIL,
    name: 'gmail',
    Icon: GmailIcon,
    link: 'mailto:paul.kim0591@gmail.com',
  },
];
