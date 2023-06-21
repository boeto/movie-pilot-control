// 'user client';
import {
  Card,
  CustomFlowbiteTheme,
  // theme as flowbiteTheme,
} from '@/components/flowbite-react';
import { CardSizeName, CardsProps } from './types';

const getSizeCardTheme = (
  sizeName: CardSizeName,
): CustomFlowbiteTheme['card'] => {
  let sizeClassName = '';
  switch (sizeName) {
    case CardSizeName.LARGE:
      sizeClassName = 'max-w-5xl';
      break;

    default:
      break;
  }
  const newHorizontal = {
    root: {
      horizontal: {
        on: `flex-col md:flex-row ${sizeClassName}`,
      },
    },
  };
  return newHorizontal;
};

function Cards({ size, children, ...props }: CardsProps) {
  return (
    <>
      {size === CardSizeName.LARGE && (
        <Card {...props} theme={getSizeCardTheme(CardSizeName.LARGE)}>
          {children}
        </Card>
      )}
    </>
  );
}

export { Cards };
