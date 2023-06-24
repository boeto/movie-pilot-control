import { FC } from 'react';
import type { AvatarGroupProps } from './types';
import { Avatar as FlowbiteAvatar } from '@/components/flowbite-react';
import { avatarCustomTheme } from './theme';

const AvatarGroup: FC<AvatarGroupProps> = ({ children, ...props }) => {
  return (
    <FlowbiteAvatar.Group theme={avatarCustomTheme?.group} {...props}>
      {children}
    </FlowbiteAvatar.Group>
  );
};

AvatarGroup.displayName = 'AvatarGroup';

export { AvatarGroup };
