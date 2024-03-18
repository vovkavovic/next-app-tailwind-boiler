import ListingProjects from "@/components/ListingProjects";
import ModalSlider from "@/components/ModalSlider";
import { useViewParamContext } from "@/providers/ViewParamProvider";
import useLenisScrollStore from "@/store/LenisStore";

export default function Home() {
  const { viewParam, setViewParam } = useViewParamContext();

  const lenis = useLenisScrollStore((state) => state.lenis);
  const setMainLenisStopped = useLenisScrollStore(
    (state) => state.setMainLenisStopped,
  );

  return (
    <main className="flex min-h-screen flex-col items-start justify-start py-[120px] px-[8.125vw] bg-white text-black">
      <div className="grid grid-cols-4 gap-16">
        <ListingProjects />

        <ModalSlider />

        <button
          className="w-[60px] h-[60px] z-50 bg-blue-500 fixed left-[32px] bottom-[32px] flex justify-center items-center text-[12px]"
          onClick={() => {
            if (viewParam === "list" && lenis) {
              lenis?.scrollTo(0, {
                duration: lenis?.actualScroll > 0 ? 1.2 : 0,
                onComplete: () => {
                  lenis?.stop();
                  setMainLenisStopped(true);
                },
              });
            } else {
              setTimeout(() => {
                lenis?.start();
                setMainLenisStopped(false);
              }, 1200);
            }

            viewParam === "slider"
              ? setViewParam("list")
              : setViewParam("slider");
          }}
        >
          toggle me
        </button>
      </div>
    </main>
  );
}
