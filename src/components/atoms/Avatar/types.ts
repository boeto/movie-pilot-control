import type {
  AvatarGroupCounterProps as FlowbiteAvatarGroupCounterProps,
  AvatarGroupProps as FlowbiteAvatarGroupProps,
} from 'flowbite-react/lib/esm/components/Avatar';

import type { AvatarProps as FlowbiteAvatarProps } from '@/components/flowbite-react';

interface AvatarProps extends Omit<FlowbiteAvatarProps, 'theme'> {}
interface AvatarGroupProps extends Omit<FlowbiteAvatarGroupProps, 'theme'> {}
interface AvatarGroupCounterProps
  extends Omit<FlowbiteAvatarGroupCounterProps, 'theme'> {}

export type { AvatarGroupCounterProps, AvatarGroupProps, AvatarProps };
