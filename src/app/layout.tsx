import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// 这个组件只是简单地传递其子元素，
// 但是这个文件的存在解决了Next.js 13.4中链接点击切换语言环境会导致完全重新加载的问题。
// Even though this component is just passing its children through, the presence
// of this file fixes an issue in Next.js 13.4 where link clicks that switch
// the locale would otherwise cause a full reload.

const RootLayout = ({ children }: Props) => {
  return children;
};
export default RootLayout;
