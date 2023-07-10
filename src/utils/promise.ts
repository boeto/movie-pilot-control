const delay = (
  milliseconds: number,
): { promise: Promise<void>; clear: () => void; cancel: () => void } => {
  let timer: NodeJS.Timeout;
  let resolveFn: () => void;

  const promise = new Promise<void>((resolve) => {
    resolveFn = resolve;
    timer = setTimeout(resolve, milliseconds);
  });

  // You don't need to manually call clearTimeout.
  const clear = (): void => {
    clearTimeout(timer);
  };

  const cancel = (): void => {
    clearTimeout(timer);
    resolveFn!();
  };

  return { promise, clear, cancel };
};

export { delay };
