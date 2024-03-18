"use client";

import { useViewMeasureContext } from "@/providers/ViewMeasuresProvider";
import Image from "next/image";
import { useEffect } from "react";
import useMeasure from "@/hooks/useMeasure";
import { useViewParamContext } from "@/providers/ViewParamProvider";
import { motion } from "framer-motion";
import { easings } from "@/constants/easings";

type CardProps = {
  title: string;
  image: {
    url: string;
    alt: string;
    height: string | number;
    width: string | number;
  };
  className: string;
  isFirst: boolean;
  length?: number;
  index?: number;
};

export default function Card({
  title = "Project Title",
  image,
  className,
  isFirst,
  length = 0,
  index = 0,
}: CardProps) {
  const { updateListMeasure, listMeasure } = useViewMeasureContext();
  const { viewParam } = useViewParamContext();

  const [listStateRef, { x, y, width, height, top, right, bottom, left }] =
    useMeasure();

  useEffect(() => {
    if (isFirst) {
      updateListMeasure({ x, y, width, height, top, right, bottom, left });
    }
  }, [x, y, width, height, top, right, bottom, left, isFirst]);

  const delay = (length - index - 1) * 0.03;

  const cardVariants = {
    slider: { opacity: 0 },
    list: { opacity: 1 },
  };

  const overlayVariants = {
    slider: { rotate: 0, y: "0%", opacity: 1, scale: "1.25" },
    list: { rotate: "-5deg", y: "120%", opacity: 1, scale: "1.25" },
  };

  const titleVariants = {
    slider: { y: "-100%" },
    list: { y: "0%" },
  };

  return (
    <div className={className}>
      <motion.div
        initial={viewParam}
        variants={cardVariants as any}
        animate={viewParam}
        transition={{
          duration: index === 0 && isFirst ? 0 : 1.2,
          ease: easings.easeInOutQuint,
          delay:
            viewParam === "slider"
              ? index === 0 && isFirst
                ? 1.41
                : 0.9 + delay
              : index === 0 && isFirst
                ? 1.1
                : 0.6 + 0.03 * index,
        }}
        className="aspect-[294/165] w-full mb-[12px] relative z-10 rounded-[16px] overflow-hidden"
      >
        {image !== null ? (
          <Image
            src={image.url}
            alt={image.alt}
            fill={false}
            height={image.height as number}
            width={image.width as number}
            className="w-full h-full object-cover"
          />
        ) : null}
        {isFirst ? (
          <div
            ref={listStateRef}
            className="w-full h-full absolute inset-0 z-20 bg-red-500/50 z-20"
          />
        ) : null}
        <motion.div
          initial={viewParam}
          variants={overlayVariants}
          animate={viewParam}
          transition={{
            duration: 1.2,
            ease: easings.easeInOutQuint,
            delay:
              viewParam === "slider"
                ? 0.3 + delay
                : index !== 0
                  ? 0.9 + 0.03 * index
                  : 0.9,
          }}
          className="absolute inset-0 z-30 h-full w-full bg-blue-500"
          /* onAnimationComplete={(variant) =>
            setCardAnimationComplete(variant as WorksListingViewType)
          } */
        />
      </motion.div>
      <motion.h2 className="mt-[16px] flex overflow-hidden uppercase text-[16px]">
        <motion.span
          initial="list"
          variants={titleVariants}
          animate={viewParam}
          transition={{
            duration: 1.2,
            ease: easings.easeInOutQuint,
            delay:
              viewParam === "slider"
                ? 0.3 + delay
                : index !== 0
                  ? 0.6 + 0.03 * index
                  : 0.6,
          }}
        >
          {title}
        </motion.span>
      </motion.h2>
    </div>
  );
}
