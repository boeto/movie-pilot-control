import { FC } from 'react';
import type { TextInputProps } from './types';
import { TextInput as FlowbiteTextInput } from '@/components/flowbite-react';
import { textInputCustomTheme } from './theme';

const TextInput: FC<TextInputProps> = ({ ...props }) => {
  return <FlowbiteTextInput theme={textInputCustomTheme} {...props} />;
};

TextInput.displayName = 'TextInput';

export { TextInput };
