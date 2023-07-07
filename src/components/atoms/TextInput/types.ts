import type { TextInputProps as FlowbiteTextInputProps } from '@/components/flowbite-react';

interface TextInputCustomThemeProps {}

interface TextInputProps
  extends Omit<FlowbiteTextInputProps, 'theme'>,
    TextInputCustomThemeProps {}

export type { TextInputCustomThemeProps, TextInputProps };
