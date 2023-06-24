import { FC } from 'react';
import type { AvatarProps } from './types';
import { Avatar as FlowbiteAvatar } from '@/components/flowbite-react';
import { avatarCustomTheme } from './theme';
import { AvatarGroupCounter } from './AvatarGroupCounter';
import { AvatarGroup } from './AvatarGroup';

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
