import { FC } from 'react';

import { Textarea as FlowbiteTextarea } from '@/components/flowbite-react';

import { getTextareaCustomTheme } from './theme';
import type { TextareaProps } from './types';

const Textarea: FC<TextareaProps> = ({ ...props }) => {
  const theme = getTextareaCustomTheme();
  return <FlowbiteTextarea theme={theme} {...props} />;
};

Textarea.displayName = 'Textarea';

export { Textarea };
