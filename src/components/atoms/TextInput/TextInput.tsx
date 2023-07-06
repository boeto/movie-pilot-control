import { FC } from 'react';

import { TextInput as FlowbiteTextInput } from '@/components/flowbite-react';

import { textInputCustomTheme } from './theme';
import type { TextInputProps } from './types';

const TextInput: FC<TextInputProps> = ({ ...props }) => {
  return <FlowbiteTextInput theme={textInputCustomTheme} {...props} />;
};

TextInput.displayName = 'TextInput';

export { TextInput };
