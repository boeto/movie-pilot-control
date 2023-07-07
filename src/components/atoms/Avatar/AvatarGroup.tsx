import { FC } from 'react';

import { Avatar as FlowbiteAvatar } from '@/components/flowbite-react';

import { getAvatarCustomTheme } from './theme';
import type { AvatarGroupProps } from './types';

const AvatarGroup: FC<AvatarGroupProps> = ({ children, ...props }) => {
  const theme = getAvatarCustomTheme()?.group;
  return (
    <FlowbiteAvatar.Group theme={theme} {...props}>
      {children}
    </FlowbiteAvatar.Group>
  );
};

AvatarGroup.displayName = 'AvatarGroup';

export { AvatarGroup };
