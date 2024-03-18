import { useState } from "react";

import useSsrSafeLayoutEffect from "@/hooks/useSsrSafeLayoutEffect";
import useLenisScrollStore from "@/store/LenisStore";
import { useFrame } from "@studio-freight/hamo";
import Lenis from "@studio-freight/lenis";

/* Import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; */

export default function useLenisScroll() {
  const [hash, setHash] = useState<string>("");
  const [lenis, setLenis] = useLenisScrollStore((state: any) => {
    return [state.lenis, state.setLenis];
  });

  useSsrSafeLayoutEffect(() => {
    const lenisRef = new Lenis({
      duration: 0.8,

      // EaseOutQuint
      easing: (t) => {
        return 1 - Math.pow(1 - t, 5);
      },
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    setLenis(lenisRef);

    return () => {
      lenisRef.destroy();
      setLenis(null);
    };
  }, []);

  /*
   * UseEffect(() => {
   *   router.beforePopState((state) => {
   *     state.options.scroll = false
   *     return true
   *   })
   * }, [])
   */

  useSsrSafeLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useSsrSafeLayoutEffect(() => {
    if (lenis && hash) {
      // Scroll to on hash change
      const target = document.querySelector(hash);

      lenis.scrollTo(target, { offset: -1.1 });
    }
  }, [lenis, hash]);

  useSsrSafeLayoutEffect(() => {
    // Catch anchor links
    function onClick(e: Event) {
      e.preventDefault();
      const node = e.currentTarget;

      if (node instanceof HTMLLinkElement) {
        const hashRef = node.href.substring(1);

        setHash(`#${hashRef}`);
        setTimeout(() => {
          window.location.hash = `#${hashRef}`;
        }, 0);
      }
    }

    const internalLinks = [...document.querySelectorAll("[href]")].filter(
      (node) => {
        return node instanceof HTMLLinkElement && node.href.includes("#");
      },
    );

    internalLinks.forEach((node) => {
      node.addEventListener(
        "click",
        (e: Event) => {
          return onClick(e);
        },
        false,
      );
    });

    return () => {
      internalLinks.forEach((node) => {
        node.addEventListener(
          "click",
          (e: Event) => {
            return onClick(e);
          },
          false,
        );
      });
    };
  }, []);

  useFrame((time: any) => {
    lenis.raf(time);
  }, undefined);

  /*
   * UseEffect(() => {
   * if (lenis) {
   *  lenis.on('scroll', ScrollTrigger.update);
   * }
   * }, [lenis]);
   */

  return null;
}
