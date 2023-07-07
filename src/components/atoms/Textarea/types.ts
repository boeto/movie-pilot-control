import type { TextareaProps as FlowbiteTextareaProps } from '@/components/flowbite-react';

interface TextareaCustomThemeProps {}

interface TextareaProps
  extends Omit<FlowbiteTextareaProps, 'theme'>,
    TextareaCustomThemeProps {}

export type { TextareaCustomThemeProps, TextareaProps };
