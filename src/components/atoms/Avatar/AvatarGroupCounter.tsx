import { FC } from 'react';

import { Avatar as FlowbiteAvatar } from '@/components/flowbite-react';

import { getAvatarCustomTheme } from './theme';
import type { AvatarGroupCounterProps } from './types';

const AvatarGroupCounter: FC<AvatarGroupCounterProps> = ({
  children,
  ...props
}) => {
  const theme = getAvatarCustomTheme()?.groupCounter;
  return (
    <FlowbiteAvatar.Counter theme={theme} {...props}>
      {children}
    </FlowbiteAvatar.Counter>
  );
};

export { AvatarGroupCounter };
