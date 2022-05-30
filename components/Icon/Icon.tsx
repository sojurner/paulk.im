import { Box } from '@chakra-ui/layout';

import BookmarkIcon from '@/assets/icons/Bookmark.svg';

import CaretDown from '@/assets/icons/CaretDown.svg';
import CaretUp from '@/assets/icons/CaretUp.svg';
import CaretLeft from '@/assets/icons/CaretLeft.svg';
import CaretRight from '@/assets/icons/CaretRight.svg';
import ConfusedTravolta from '@/assets/icons/ConfusedTravolta.svg';

import EyeIcon from '@/assets/icons/Eye.svg';

import GmailIcon from '@/assets/icons/Gmail.svg';
import GithubIcon from '@/assets/icons/Github.svg';

import IdeaIcon from '@/assets/icons/Idea.svg';

import LinkedinIcon from '@/assets/icons/Linkedin.svg';
import Logo from '@/assets/icons/Logo.svg';
import PkAvatar from '@/assets/icons/PkAvatar.svg';

import MemeIcon from '@/assets/icons/Meme.svg';
import Pepe from '@/assets/icons/Pepe.svg';

import OpenWeatherIcon from '@/assets/icons/OpenWeather.svg';

import ResumeIcon from '@/assets/icons/Resume.svg';

import SearchIcon from '@/assets/icons/Search.svg';
import SettingsIcon from '@/assets/icons/Settings.svg';
import SoundCloudIcon from '@/assets/icons/SoundCloud.svg';

import UpvoteIcon from '@/assets/icons/Upvote.svg';

import Wings from '@/assets/icons/Wings.svg';

import X from '@/assets/icons/X.svg';
import Trash from '@/assets/icons/Trash.svg';

import Menu from '@/assets/icons/Menu.svg';
import Youtube from '@/assets/icons/Youtube.svg';
import Video from '@/assets/icons/Video.svg';
import Imgur from '@/assets/icons/Imgur.svg';
import ShareLink from '@/assets/icons/ShareLink.svg';

import AddPlaylist from '@/assets/icons/AddPlaylist.svg';

import MediaBack from '@/assets/icons/MediaBack.svg';
import MediaSkip from '@/assets/icons/MediaSkip.svg';
import MediaPlay from '@/assets/icons/MediaPlay.svg';
import MediaPause from '@/assets/icons/MediaPause.svg';
import MediaFullscreen from '@/assets/icons/MediaFullscreen.svg';

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
  CaretUp,
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
  Menu,
  OpenWeatherIcon,
  ResumeIcon,
  SearchIcon,
  SettingsIcon,
  SoundCloudIcon,
  UpvoteIcon,
  X,
  Youtube,
  Imgur,
  Video,
  ShareLink,
  Pepe,
  AddPlaylist,
  MediaBack,
  MediaSkip,
  MediaPlay,
  MediaPause,
  MediaFullscreen,
  Trash,
  PkAvatar,
};
