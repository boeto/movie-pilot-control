import { FC } from 'react';
import type { AvatarGroupCounterProps } from './types';
import { Avatar as FlowbiteAvatar } from '@/components/flowbite-react';
import { avatarCustomTheme } from './theme';

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
