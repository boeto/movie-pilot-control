import type {
  AvatarGroupCounterProps as FlowbiteAvatarGroupCounterProps,
  AvatarGroupProps as FlowbiteAvatarGroupProps,
} from 'flowbite-react/lib/esm/components/Avatar';

import type { AvatarProps as FlowbiteAvatarProps } from '@/components/flowbite-react';

interface AvatarGroupCustomThemeProps {}
interface AvatarGroupCounterCustomThemeProps {}

interface AvatarCustomThemeProps {
  avatarGroup?: AvatarGroupCustomThemeProps;
  avatarGroupCounter?: AvatarGroupCounterCustomThemeProps;
}

interface AvatarComponentProps
  extends Omit<FlowbiteAvatarProps, 'theme'>,
    AvatarCustomThemeProps {}

interface AvatarGroupProps
  extends Omit<FlowbiteAvatarGroupProps, 'theme'>,
    AvatarGroupCustomThemeProps {}
interface AvatarGroupCounterProps
  extends Omit<FlowbiteAvatarGroupCounterProps, 'theme'>,
    AvatarGroupCounterCustomThemeProps {}

export type {
  AvatarComponentProps,
  AvatarCustomThemeProps,
  AvatarGroupCounterProps,
  AvatarGroupProps,
};
