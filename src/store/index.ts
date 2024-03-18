import { createContext, useContext } from "react";

import { create, useStore as useZustandStore } from "zustand";
import { devtools } from "zustand/middleware";

type StoreInterface = unknown;
const getDefaultInitialState = () => {
  return {};
};

export type StoreType = ReturnType<typeof initializeStore>;

const zustandContext = createContext<StoreType | null>(null);

export const { Provider } = zustandContext;

// eslint-disable-next-line no-unused-vars
export const useStore = <T>(selector: (state: StoreInterface) => T) => {
  const store = useContext(zustandContext);

  if (!store) {
    throw new Error("Store is missing the provider");
  }

  return useZustandStore(store, selector);
};

export const initializeStore = (
  preloadedState: Partial<StoreInterface> = {},
) => {
  return create(
    devtools(
      () => {
        return {
          ...getDefaultInitialState(),
          ...preloadedState,
        };
      },
      { name: "Main Store" },
    ),
  );
};
