import { CustomFlowbiteTheme, theme } from '@/components/flowbite-react';

const getButtonCustomTheme = (): CustomFlowbiteTheme['button'] => {
  const buttonCustomTheme = {
    color: {
      primary: theme.button.color.info.replace(/cyan/g, 'primary'),
    },
  };

  return buttonCustomTheme;
};

const getButtonGroupCustomTheme = (): CustomFlowbiteTheme['buttonGroup'] => {
  const buttonGroupCustomTheme = {};
  return buttonGroupCustomTheme;
};

export { getButtonCustomTheme, getButtonGroupCustomTheme };
