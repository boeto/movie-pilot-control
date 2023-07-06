import { FC } from 'react';

import { Avatar as FlowbiteAvatar } from '@/components/flowbite-react';

import { avatarCustomTheme } from './theme';
import type { AvatarGroupProps } from './types';

const AvatarGroup: FC<AvatarGroupProps> = ({ children, ...props }) => {
  return (
    <FlowbiteAvatar.Group theme={avatarCustomTheme?.group} {...props}>
      {children}
    </FlowbiteAvatar.Group>
  );
};

AvatarGroup.displayName = 'AvatarGroup';

export { AvatarGroup };
