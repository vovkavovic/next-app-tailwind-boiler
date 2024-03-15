import { useViewMeasureContext } from "@/providers/ViewMeasuresProvider";
import { CSSProperties, useEffect, useRef } from "react";
import useMeasure from "@/hooks/useMeasure";
import { motion } from "framer-motion";
import { useViewParamContext } from "@/providers/ViewParamProvider";

export default function ModalSlider() {
  const initialContainerStyles = useRef<CSSProperties>({});
  const initialModalBgOverlayStyles = useRef<CSSProperties>({});

  const { updateSliderMeasure, listMeasure, sliderMeasure } =
    useViewMeasureContext();
  const { viewParam } = useViewParamContext();

  const [sliderStateRef, { x, y, width, height, top, right, bottom, left }] =
    useMeasure();

  useEffect(() => {
    updateSliderMeasure({ x, y, width, height, top, right, bottom, left });
  }, [x, y, width, height, top, right, bottom, left]);

  // Set initial modal bg overlay styles
  initialModalBgOverlayStyles.current =
    viewParam === "slider"
      ? {
          y: "0%",
          rotate: "0deg",
        }
      : {
          y: "125%",
          rotate: "-5deg",
          scale: 1.25,
        };

  // Set initial container styles
  initialContainerStyles.current =
    viewParam === "slider"
      ? {
          top: sliderMeasure.top,
          left: sliderMeasure.left,
          width: sliderMeasure.width,
          height: sliderMeasure.height,
        }
      : {
          top: listMeasure.top,
          left: listMeasure.left,
          width: listMeasure.width,
          height: listMeasure.height,
          // opacity: 0,
        };

  return (
    <div className="fixed inset-0 w-full h-full z-40 flex items-center justify-center">
      <div
        ref={sliderStateRef}
        className="bg-green-500/50 z-20 aspect-[1152/648] h-[calc(100%-216px)] w-[74%] rounded-[16px]"
      />

      <motion.div
        id="main-slider-container"
        className="bg-orange-500 absolute rounded-[16px] z-20"
        style={initialContainerStyles.current}
      />

      <motion.div
        id="modal-bg-overlay"
        className="absolute inset-0 w-full h-full bg-blue-800 z-10"
        style={initialModalBgOverlayStyles.current}
      />
    </div>
  );
}
