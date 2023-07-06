import { ReactNode } from 'react';

import { Locale } from '../i18n';

interface LangProps {
  params: { locale: Locale };
}

interface LangChildrenProps extends LangProps {
  children: ReactNode;
}

export type { LangChildrenProps, LangProps };
