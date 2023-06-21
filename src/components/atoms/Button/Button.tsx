import {
  CustomFlowbiteTheme,
  Button as FlowbiteButton,
} from '@/components/flowbite-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

type FlowbiteButtonType = typeof FlowbiteButton;
interface ButtonProps extends FlowbiteButtonType {}
type ButtonProps2 = ForwardRefExoticComponent<
  ButtonProps & RefAttributes<HTMLButtonElement | HTMLAnchorElement>
>;

// const Button = (props: ButtonProps) => (
//   <FlowbiteButton {...props} />
//   <FlowbiteButton/>
// );

// export { Button };

const buttonCustomTheme: CustomFlowbiteTheme['button'] = {
  //   button: {
  color: {
    primary:
      'text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
  },
  outline: {
    on: 'transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit',
  },
  size: {
    md: 'text-sm px-3 py-2',
  },
};
// // };
// <FlowbiteButton />;
// export const Button = (props: FlowbiteButtonType) => (
//   <FlowbiteButton {...props} />
// );

// export default function MyPage() {
//   return <Button theme={customTheme}>Click me</Button>;
// }
