import { Button as FlowbiteButton } from '@/components/flowbite-react';

export interface ButtonProps
  extends React.ComponentProps<typeof FlowbiteButton> {
  color?: 'primary' | 'secondary';
}
