import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Button } from 'flowbite-react';

const customTheme = {
  //   button: {
  color: {
    primary: 'bg-red-500 hover:bg-red-600',
  },
  //   },
};

export default function MyPage() {
  return <Button theme={customTheme}>Click me</Button>;
}
