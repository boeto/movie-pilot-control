import { createPaths } from './create-paths';
import { PathLanbels, PathsCollapse, PathsItem } from './types';

import { localeOption } from '../i18n';

const getCollapsePaths = () =>
  createPaths().filter((p) => 'item' in p) as PathsCollapse[];

const findCollapseLabelByPath = (path: string) => {
  const collapse = getCollapsePaths().find((c) =>
    c.item.find((item) => path.includes(item.path)),
  );

  return collapse?.collapseLabel;
};

const findPath = ({ itemLabel, collapseLabel }: PathLanbels) => {
  const paths = createPaths();
  if (collapseLabel) {
    const collapse = paths.find(
      (c) => 'collapseLabel' in c && c.collapseLabel === collapseLabel,
    ) as PathsCollapse;
    const item = collapse.item.find((i) => i.itemLabel === itemLabel);

    return item?.path || '/not-found';
  }
  const item = paths.find(
    (i) => 'path' in i && i.itemLabel === itemLabel,
  ) as PathsItem;
  return item.path;
};

const getLocalePath = (
  locale: string = localeOption.defaultLocale,
  pathLanbels: PathLanbels = { itemLabel: 'dashboard' },
) => {
  const path = findPath(pathLanbels);

  const localePath =
    locale === localeOption.defaultLocale ? path : `/${locale}${path}`;

  return localePath;
};

const trimmeLocalePathname = (pathname: string, locale: string) => {
  const start = `/${locale}`;
  if (pathname.startsWith(start)) {
    return pathname.replace(start, '');
  }
  return pathname;
};

export {
  findCollapseLabelByPath,
  findPath,
  getCollapsePaths,
  getLocalePath,
  trimmeLocalePathname,
};
