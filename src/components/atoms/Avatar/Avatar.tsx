import { FC } from 'react';

import { Avatar as FlowbiteAvatar } from '@/components/flowbite-react';

import { AvatarGroup } from './AvatarGroup';
import { AvatarGroupCounter } from './AvatarGroupCounter';
import { avatarCustomTheme } from './theme';
import type { AvatarProps } from './types';

const AvatarComponent: FC<AvatarProps> = ({ children, ...props }) => {
  return (
    <FlowbiteAvatar theme={avatarCustomTheme} {...props}>
      {children}
    </FlowbiteAvatar>
  );
};

AvatarComponent.displayName = 'Avatar';
export const Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
  Counter: AvatarGroupCounter,
});
