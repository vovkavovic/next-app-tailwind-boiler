import { useViewMeasureContext } from "@/providers/ViewMeasuresProvider";
import { CSSProperties, useEffect, useLayoutEffect, useRef } from "react";
import { usePrevious, useUpdateEffect } from "react-use";
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
          transform: "translateY(0%)",
          rotate: "0deg",
          opacity: 1,
          scale: 1.25,
        }
      : {
          transform: "translateY(125%)",
          rotate: "-5deg",
          opacity: 1,
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
          opacity: 0,
        }
      : {
          top: listMeasure.top,
          left: listMeasure.left,
          width: listMeasure.width,
          height: listMeasure.height,
          opacity: 0,
        };

  useUpdateEffect(() => {
    const animations =
      viewParam === "slider"
        ? [
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
                delay: 1.2,
              },
            ],
            // show on start
            [
              "#main-slider-container",
              {
                opacity: 1,
              },
              { duration: 0.01, delay: 0, at: "-1.2" },
            ],
            // hide on complete
            [
              "#main-slider-container",
              {
                opacity: 0,
              },
              { duration: 0.01, delay: 2.4, at: "1.2" },
            ],
          ]
        : [
            [
              "#main-slider-container",
              {
                // From To logic
                top: [sliderMeasure.top, listMeasure.top],
                left: [sliderMeasure.left, listMeasure.left],
                width: [sliderMeasure.width, listMeasure.width],
                height: [sliderMeasure.height, listMeasure.height],
              },
              { ease: easings.easeInOutQuint, duration: 1.2 },
            ],
            // show on start
            [
              "#main-slider-container",
              {
                opacity: 1,
              },
              { duration: 0.01, delay: 0, at: "-1.2" },
            ],
            // hide on complete
            [
              "#main-slider-container",
              {
                opacity: 0,
              },
              { duration: 0.01, delay: 1.2, at: "1.2" },
            ],
          ];
    animate([...animations] as AnimationSequence);
  }, [viewParam]);

  /*  Check when scroll is 0 and all cards are masked A->B*/
  /*  Check main view is masked B->A*/

  /*  STILL NEDD TO HANDLE INITIAL VISBILITY OF #modal-bg-overlay BASED ON PARAM   */

  const mainSliderContainerVariants = {
    slider: {
      top: sliderMeasure.top,
      left: sliderMeasure.left,
      width: sliderMeasure.width,
      height: sliderMeasure.height,
      opacity: 0,
    },
    list: {
      top: listMeasure.top,
      left: listMeasure.left,
      width: listMeasure.width,
      height: listMeasure.height,
      opacity: 0,
    },
  };

  const bgOverlayVariants = {
    slider: {
      y: "0%",
      rotate: "0deg",
      scale: 1,
    },
    list: {
      y: "125%",
      rotate: "-5deg",
      scale: 1.25,
    },
  };

  return (
    <div
      ref={scope}
      className="fixed inset-0 w-full h-full z-40 flex items-center justify-center"
    >
      <div
        ref={sliderStateRef}
        className="z-20 aspect-[1152/648] h-[calc(100%-216px)] w-[74%] rounded-[16px]"
      />

      {listMeasure.top !== 0 || sliderMeasure.top !== 0 ? (
        <motion.div
          initial={
            viewParam === "slider"
              ? mainSliderContainerVariants.slider
              : mainSliderContainerVariants.list
          }
          id="main-slider-container"
          className="bg-blue-500 absolute rounded-[16px] z-20"
          style={initialContainerStyles.current}
        />
      ) : null}

      <motion.div
        initial={
          viewParam === "slider"
            ? bgOverlayVariants.slider
            : bgOverlayVariants.list
        }
        id="modal-bg-overlay"
        variants={bgOverlayVariants}
        animate={viewParam}
        transition={{
          duration: 1.2,
          delay: viewParam === "list" ? 0 : 1.2,
          ease: easings.easeInOutQuint,
        }}
        className="absolute inset-0 w-full h-full bg-blue-800 z-10"
        style={initialModalBgOverlayStyles.current}
      />
    </div>
  );
}
