import { SetStateAction } from "react";

import { produce } from "immer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set: SetStateAction<any>) => {
  return {
    lenis: null,
    setLenis: (instance: any) => {
      return set(
        produce((st: any) => {
          st.lenis = instance;
        }),
        false,
        "SCROLL/SET_INSTANCE",
      );
    },
    mainLenisStopped: false,
    setMainLenisStopped: (bool: boolean) => {
      return set(
        () => {
          return { mainLenisStopped: bool };
        },
        false,
        "WORKS_VIEW/SET_MAIN_LENIS_STOPPED",
      );
    },
  };
};

const useLenisScrollStore = create(
  devtools(store, { name: "LenisScroll Store" }),
);

export default useLenisScrollStore;
