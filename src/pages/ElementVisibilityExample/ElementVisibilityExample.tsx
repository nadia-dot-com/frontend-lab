import { useElementVisibility } from "@/hooks/useElementVisibility";

export function ElementVisibilityExample() {
  const { ref, isVisible } = useElementVisibility();

const currentClass = `transition-opacity duration-500 flex flex-col items-center justify-center 
    ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div className="flex-center-col w-full">
      <div className="h-[1600px] w-full bg-element-bg text-center relative">
        <span className="absolute top-5 font-medium" >
          Scroll Down
        </span>
      </div>
      <div className={currentClass} ref={ref}>
        <img src="/public/img/cat.webp" width="250" height="340" />
        <div>Cute cat</div>
      </div>
    </div>
  );
}
