'use client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, reduxStore } from './store';
import { memo } from 'react';

const StoreProvider = ({ children }: React.PropsWithChildren) => (
  <Provider store={reduxStore}>{children}</Provider>
);

const PersistorProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <PersistGate
      loading={<div>loading persistor</div>}
      persistor={persistor as any}
    >
      {children}
    </PersistGate>
  );
};

const Providers = memo(({ children }: React.PropsWithChildren) => (
  <StoreProvider>
    <PersistorProvider>{children}</PersistorProvider>
  </StoreProvider>
));

Providers.displayName = 'Providers';

export { Providers };
