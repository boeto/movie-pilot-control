const trimmeLangPathname = (pathname: string, lang: string) => {
  const start = `/${lang}`;
  if (pathname.startsWith(start)) {
    return pathname.replace(start, '');
  } else return pathname;
};

export { trimmeLangPathname };
