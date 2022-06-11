import { MemeIcon, Pepe, IdeaIcon } from '@/components/Icon';
import { Variant } from './types';

export const ICON_MAPPING: Record<Variant, any> = {
  'Media Feed': MemeIcon,
  'Today I Learned': IdeaIcon,
  About: Pepe,
};
