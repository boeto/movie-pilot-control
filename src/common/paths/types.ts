import { IconType } from 'react-icons';

interface PathLanbels {
  itemLabel: string;
  collapseLabel?: string;
}

interface PathsItem {
  itemLabel: string;
  icon: IconType;
  path: string;
}

interface PathsCollapse {
  collapseLabel: string;
  icon: IconType;
  item: PathsItem[];
}

type PathsCollapseItem = (PathsItem | PathsCollapse)[];

export type { PathLanbels, PathsCollapse, PathsCollapseItem, PathsItem };
