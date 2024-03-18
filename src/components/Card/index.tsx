"use client";

import { useViewMeasureContext } from "@/providers/ViewMeasuresProvider";
import Image from "next/image";
import { useEffect } from "react";
import useMeasure from "@/hooks/useMeasure";

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
};

export default function Card({
  title = "Project Title",
  image,
  className,
  isFirst,
}: CardProps) {
  const { updateListMeasure, listMeasure } = useViewMeasureContext();

  const [listStateRef, { x, y, width, height, top, right, bottom, left }] =
    useMeasure();

  useEffect(() => {
    if (isFirst) {
      updateListMeasure({ x, y, width, height, top, right, bottom, left });
    }
  }, [x, y, width, height, top, right, bottom, left, isFirst]);

  return (
    <div className={className}>
      <div className="aspect-[294/165] w-full mb-[12px] relative z-10 rounded-[16px] overflow-hidden">
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
      </div>
      <h2 className="uppercase text-[16px]">{title}</h2>
    </div>
  );
}
