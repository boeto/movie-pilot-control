import type { TextInputProps as FlowbiteTextInputProps } from '@/components/flowbite-react';

export interface TextInputProps extends Omit<FlowbiteTextInputProps, 'theme'> {}
