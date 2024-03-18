import { useViewMeasureContext } from "@/providers/ViewMeasuresProvider";
import { CSSProperties, useEffect, useRef } from "react";
import { usePrevious } from "react-use";
import useMeasure from "@/hooks/useMeasure";
import { AnimationSequence, motion, useAnimate } from "framer-motion";
import { useViewParamContext } from "@/providers/ViewParamProvider";
import { easings } from "@/constants/easings";

export default function ModalSlider() {
  const initialContainerStyles = useRef<CSSProperties>({});
  const initialModalBgOverlayStyles = useRef<CSSProperties>({});

  const { updateSliderMeasure, listMeasure, sliderMeasure } =
    useViewMeasureContext();
  const { viewParam } = useViewParamContext();
  const previousViewParam = usePrevious(viewParam);

  const [sliderStateRef, { x, y, width, height, top, right, bottom, left }] =
    useMeasure();

  useEffect(() => {
    updateSliderMeasure({ x, y, width, height, top, right, bottom, left });
  }, [x, y, width, height, top, right, bottom, left]);

  const [scope, animate] = useAnimate();

  // Set initial modal bg overlay styles
  initialModalBgOverlayStyles.current =
    viewParam === "slider"
      ? {
          y: "0%",
          rotate: "0deg",
          opacity: 1,
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

  useEffect(() => {
    const animations =
      viewParam === "slider"
        ? [
            [
              "#modal-bg-overlay",
              { y: ["125%", "0%"], rotate: 0, scale: 1.25 },
              { ease: easings.easeInOutQuint, duration: 1.2, delay: 1.2 },
            ],
            [
              "#main-slider-container",
              {
                // From To logic
                top: [listMeasure.top, sliderMeasure.top],
                left: [listMeasure.left, sliderMeasure.left],
                width: [listMeasure.width, sliderMeasure.width],
                height: [listMeasure.height, sliderMeasure.height],
              },
              {
                ease: easings.easeInOutQuint,
                duration: 1.2,
                delay: 0.013,
                at: "-1.2",
              },
            ],
            /* // show on start
            [
              "#main-slider-container",
              {
                opacity: 1,
              },
              { duration: 0.01, delay: 1.4, at: "-2.4" },
            ],
            // hide on complete
            [
              "#main-slider-container",
              {
                opacity: 0,
              },
              { duration: 0.01, delay: 1.2, at: "2.4" },
            ], */
          ]
        : [
            [
              "#modal-bg-overlay",
              { y: ["0%", "125%"], rotate: -5, scale: 1.25 },
              { ease: easings.easeInOutQuint, duration: 1.2 },
            ],
            [
              "#main-slider-container",
              {
                // From To logic
                top: [sliderMeasure.top, listMeasure.top],
                left: [sliderMeasure.left, listMeasure.left],
                width: [sliderMeasure.width, listMeasure.width],
                height: [sliderMeasure.height, listMeasure.height],
              },
              { ease: easings.easeInOutQuint, duration: 1.2, at: "-1.2" },
            ],
            /* // show on start
            [
              "#main-slider-container",
              {
                opacity: 1,
              },
              { duration: 0.01, delay: 0, at: "-2.4" },
            ],
            // hide on complete
            [
              "#main-slider-container",
              {
                opacity: 0,
              },
              { duration: 0.01, delay: 1.2, at: "2.4" },
            ], */
          ];
    animate([...animations] as AnimationSequence);
  }, [viewParam]);

  /*  STILL NEDD TO HANDLE INITIAL VISBILITY OF #modal-bg-overlay BASED ON PARAM   */
  return (
    <div
      ref={scope}
      className="fixed inset-0 w-full h-full z-40 flex items-center justify-center"
    >
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
