import type { AvatarProps as FlowbiteAvatarProps } from '@/components/flowbite-react';
import type { AvatarGroupProps as FlowbiteAvatarGroupProps } from 'flowbite-react/lib/esm/components/Avatar';
import type { AvatarGroupCounterProps as FlowbiteAvatarGroupCounterProps } from 'flowbite-react/lib/esm/components/Avatar';

export interface AvatarProps extends Omit<FlowbiteAvatarProps, 'theme'> {}
export interface AvatarGroupProps
  extends Omit<FlowbiteAvatarGroupProps, 'theme'> {}
export interface AvatarGroupCounterProps
  extends Omit<FlowbiteAvatarGroupCounterProps, 'theme'> {}
