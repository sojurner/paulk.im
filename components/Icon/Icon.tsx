import { Box } from '@chakra-ui/layout';

import BookmarkIcon from '@/assets/icons/Bookmark.svg';

import CaretDown from '@/assets/icons/CaretDown.svg';
import CaretLeft from '@/assets/icons/CaretLeft.svg';
import CaretRight from '@/assets/icons/CaretRight.svg';
import ConfusedTravolta from '@/assets/icons/ConfusedTravolta.svg';

import EyeIcon from '@/assets/icons/Eye.svg';

import GmailIcon from '@/assets/icons/Gmail.svg';
import GithubIcon from '@/assets/icons/Github.svg';

import IdeaIcon from '@/assets/icons/Idea.svg';

import LinkedinIcon from '@/assets/icons/Linkedin.svg';
import Logo from '@/assets/icons/Logo.svg';

import MemeIcon from '@/assets/icons/Meme.svg';

import OpenWeatherIcon from '@/assets/icons/OpenWeather.svg';

import ResumeIcon from '@/assets/icons/Resume.svg';

import SearchIcon from '@/assets/icons/Search.svg';
import SettingsIcon from '@/assets/icons/Settings.svg';
import SoundCloudIcon from '@/assets/icons/SoundCloud.svg';

import UpvoteIcon from '@/assets/icons/Upvote.svg';

import Wings from '@/assets/icons/Wings.svg';

import X from '@/assets/icons/X.svg';

import { µIcon } from '.';

export const IconWrapper: React.FC<µIcon.Props> = ({
  isActive = true,
  ...props
}) => {
  return <Box {...props} {...(!isActive && { filter: 'grayscale(1)' })}></Box>;
};

export {
  BookmarkIcon,
  CaretDown,
  CaretLeft,
  CaretRight,
  ConfusedTravolta,
  EyeIcon,
  GithubIcon,
  GmailIcon,
  IdeaIcon,
  LinkedinIcon,
  Logo,
  Wings,
  MemeIcon,
  OpenWeatherIcon,
  ResumeIcon,
  SearchIcon,
  SettingsIcon,
  SoundCloudIcon,
  UpvoteIcon,
  X,
};
