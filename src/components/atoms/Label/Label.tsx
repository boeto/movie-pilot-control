import { FC } from 'react';

import { Label as FlowbiteLabel } from '@/components/flowbite-react';

import { getLabelCustomTheme } from './theme';
import type { LabelProps } from './types';

const Label: FC<LabelProps> = ({ children, isRequire = false, ...props }) => {
  // let labelCustomThemeMerged = labelCustomTheme;
  // if (isRequire) {
  //   labelCustomThemeMerged = labelCustomTheme
  //     ? labelCustomThemeRequire &&
  //       mergeDeep(labelCustomTheme, labelCustomThemeRequire)
  //     : labelCustomThemeRequire;
  // }

  return (
    <FlowbiteLabel theme={getLabelCustomTheme({ isRequire })} {...props}>
      {children}
    </FlowbiteLabel>
  );
};

Label.displayName = 'Label';

export { Label };
