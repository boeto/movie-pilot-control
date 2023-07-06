import { FC } from 'react';

import { Textarea as FlowbiteTextarea } from '@/components/flowbite-react';

import { textareaCustomTheme } from './theme';
import type { TextareaProps } from './types';

const Textarea: FC<TextareaProps> = ({ ...props }) => {
  return <FlowbiteTextarea theme={textareaCustomTheme} {...props} />;
};

Textarea.displayName = 'Textarea';

export { Textarea };
