import { useCallback, useState, useRef, useLayoutEffect } from "react";
import { isBrowser, noop } from "react-use/lib/misc/util";

export type UseMeasureRect = Pick<
  DOMRectReadOnly,
  "x" | "y" | "top" | "left" | "right" | "bottom" | "height" | "width"
>;
export type UseMeasureRef<E extends Element = Element> = (element: E) => void;
export type UseMeasureResult<E extends Element = Element> = [
  UseMeasureRef<E>,
  UseMeasureRect,
];

const defaultState: UseMeasureRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

/**
 * A React hook for measuring the dimensions and position of a DOM element relative to the viewport.
 * This custom version addresses and fixes coordinate calculation issues
 * found in the `react-use` library's version of the `useMeasure` hook. By utilizing both `ResizeObserver`
 * and `getBoundingClientRect`, it provides accurate and up-to-date measurements of the element's `x`, `y`,
 * `width`, `height`, `top`, `left`, `bottom`, and `right` properties.
 *
 * The hook leverages `useLayoutEffect` to ensure measurements are taken at the correct time during the
 * rendering lifecycle, minimizing layout thrashing by using `requestAnimationFrame` for updates. It also
 * includes an immediate measurement upon setup to capture the initial dimensions and position of the element,
 * useful for when the element does not resize immediately after mounting.
 *
 * @returns {UseMeasureResult<E>} A tuple containing:
 * 1. A ref callback to attach to the target element.
 * 2. An object with the measured dimensions and position of the element.
 *
 * @example
 * const [ref, { x, y, width, height, top, left, bottom, right }] = useMeasure();
 * // Use `ref` to attach to the target element and destructured values for dimensions and position.
 *
 * @author Vladimir De Vico
 */
function useMeasure<E extends Element = Element>(): UseMeasureResult<E> {
  const [rect, setRect] = useState<UseMeasureRect>(defaultState);
  const elementRef = useRef<E | null>(null);

  const setElement = useCallback((element: E | null) => {
    elementRef.current = element;
  }, []);

  useLayoutEffect(() => {
    if (!elementRef.current) return;

    const measure = () => {
      requestAnimationFrame(() => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();
          setRect({
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            top: rect.top,
            left: rect.left,
            bottom: rect.bottom,
            right: rect.right,
          });
        }
      });
    };

    const observer = new ResizeObserver(measure);
    observer.observe(elementRef.current);

    // Optional: Measure once initially in case the element doesn't resize immediately
    measure();

    return () => {
      observer.disconnect();
    };
  }, []);

  const ref = useCallback(
    (node: E) => {
      setElement(node);
    },
    [setElement],
  );

  return [ref, rect];
}

export default isBrowser && typeof ResizeObserver !== "undefined"
  ? useMeasure
  : ((() => [noop, defaultState]) as typeof useMeasure);
