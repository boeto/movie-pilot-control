import { FC } from 'react';

import { Avatar as FlowbiteAvatar } from '@/components/flowbite-react';

import { AvatarGroup } from './AvatarGroup';
import { AvatarGroupCounter } from './AvatarGroupCounter';
import { getAvatarCustomTheme } from './theme';
import type { AvatarComponentProps } from './types';

const AvatarComponent: FC<AvatarComponentProps> = ({ children, ...props }) => {
  const theme = getAvatarCustomTheme();
  return (
    <FlowbiteAvatar theme={theme} {...props}>
      {children}
    </FlowbiteAvatar>
  );
};

AvatarComponent.displayName = 'Avatar';
export const Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
  Counter: AvatarGroupCounter,
});
