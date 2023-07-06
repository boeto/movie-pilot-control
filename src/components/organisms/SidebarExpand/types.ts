import { LocaleItem } from '@/common';
import type { SidebarItemGroupProps } from '@/components';

interface LocaleItemsProps {
  items: LocaleItem[];
}

interface CurrentLocaleItemProps {
  item: LocaleItem;
}

interface SidebarExpandMenuMainProps extends SidebarItemGroupProps {}
interface SidebarExpandMenuSubProps extends SidebarItemGroupProps {}

export type {
  CurrentLocaleItemProps,
  LocaleItemsProps,
  SidebarExpandMenuMainProps,
  SidebarExpandMenuSubProps,
};
