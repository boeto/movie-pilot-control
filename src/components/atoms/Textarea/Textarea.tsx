import { FC } from 'react';
import type { TextareaProps } from './types';
import { Textarea as FlowbiteTextarea } from '@/components/flowbite-react';
import { textareaCustomTheme } from './theme';

const Textarea: FC<TextareaProps> = ({ ...props }) => {
  return <FlowbiteTextarea theme={textareaCustomTheme} {...props} />;
};

Textarea.displayName = 'Textarea';

export { Textarea };
