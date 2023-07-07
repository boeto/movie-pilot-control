import { FC } from 'react';

import { TextInput as FlowbiteTextInput } from '@/components/flowbite-react';

import { getTextInputCustomTheme } from './theme';
import type { TextInputProps } from './types';

const TextInput: FC<TextInputProps> = ({ ...props }) => {
  const theme = getTextInputCustomTheme();
  return <FlowbiteTextInput theme={theme} {...props} />;
};

TextInput.displayName = 'TextInput';

export { TextInput };
