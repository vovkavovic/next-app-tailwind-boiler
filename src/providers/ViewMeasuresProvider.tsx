import React, { ReactNode, createContext, useContext, useState } from "react";

export type Measure = {
  x: number;
  y: number;
  width: number;
  height: number;
  left: number;
  bottom: number;
  top: number;
  right: number;
};

type ViewMeasuresContextType = {
  listMeasure: Measure;
  sliderMeasure: Measure;
  updateListMeasure: (measure: Measure) => void;
  updateSliderMeasure: (measure: Measure) => void;
};

type ViewMeasuresProviderProps = {
  children: ReactNode;
};

const ViewMeasuresContext = createContext<ViewMeasuresContextType | undefined>(
  undefined,
);

export const ViewMeasuresProvider = ({
  children,
}: ViewMeasuresProviderProps) => {
  const [listMeasure, setListMeasure] = useState<Measure>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
  });
  const [sliderMeasure, setSliderMeasure] = useState<Measure>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
  });

  const updateListMeasure = (measure: Measure) => setListMeasure(measure);

  const updateSliderMeasure = (measure: Measure) => setSliderMeasure(measure);

  return (
    <ViewMeasuresContext.Provider
      value={{
        listMeasure,
        sliderMeasure,
        updateListMeasure,
        updateSliderMeasure,
      }}
    >
      {children}
    </ViewMeasuresContext.Provider>
  );
};

export const useViewMeasureContext = () => {
  const context = useContext(ViewMeasuresContext);
  if (!context) {
    throw new Error("useMeasureState must be used within a MeasureProvider");
  }
  return context;
};
