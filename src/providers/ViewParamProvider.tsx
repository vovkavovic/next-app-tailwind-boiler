import { useRouter } from "next/router";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type WorksListingViewType = "slider" | "list";
interface ViewParamContextType {
  viewParam: WorksListingViewType;
  setViewParam: (newValue: WorksListingViewType) => void;
}

const ViewParamContext = createContext<ViewParamContextType | undefined>(
  undefined,
);

export const useViewParamContext = () => {
  const context = useContext(ViewParamContext);
  if (!context) {
    throw new Error("useViewParam must be used within a ViewParamProvider");
  }
  return context;
};

/* const getViewParam = (url: string) => {
  const urlSearchParams = new URLSearchParams(url.split("?")?.[1]);
  const currentView =
    (urlSearchParams.get("view") as WorksListingViewType) || "slider";
  return currentView;
};
const viewParam = getViewParam(router.asPath); */

export const ViewParamProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [viewParam, setViewParamState] = useState<WorksListingViewType>(() => {
    const urlSearchParams = new URLSearchParams(router.asPath.split("?")?.[1]);
    const currentView =
      (urlSearchParams.get("view") as WorksListingViewType) || "slider";
    return currentView;
  });

  const setViewParam = (newValue: WorksListingViewType) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.set("view", newValue);
    router.push(`${router.pathname}?${urlSearchParams.toString()}`, undefined, {
      shallow: true,
    });
    setViewParamState(newValue);
  };

  return (
    <ViewParamContext.Provider value={{ viewParam, setViewParam }}>
      {children}
    </ViewParamContext.Provider>
  );
};
