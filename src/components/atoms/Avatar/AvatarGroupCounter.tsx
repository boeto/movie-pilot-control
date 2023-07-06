import { FC } from 'react';

import { Avatar as FlowbiteAvatar } from '@/components/flowbite-react';

import { avatarCustomTheme } from './theme';
import type { AvatarGroupCounterProps } from './types';

const AvatarGroupCounter: FC<AvatarGroupCounterProps> = ({
  children,
  ...props
}) => {
  return (
    <FlowbiteAvatar.Counter theme={avatarCustomTheme?.groupCounter} {...props}>
      {children}
    </FlowbiteAvatar.Counter>
  );
};

export { AvatarGroupCounter };
