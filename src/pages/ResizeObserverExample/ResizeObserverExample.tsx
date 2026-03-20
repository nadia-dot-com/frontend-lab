import { useRef } from "react";
import { useResize } from "../../hooks/useResize";

export function ResizeObserverExample () {
  const cardRef = useRef<HTMLDivElement>(null);
  const { width } = useResize(cardRef);

  const isWide = width > 500;
  return (
    <div
      ref={cardRef}
      style={{
        width: "100%",
        border: "1px solid black",
        padding: "20px",
        resize: "both",
        overflow: "auto",
      }}
    >
      <p>
        Ten komponent jest: <strong>{isWide ? "Szeroki" : "Wąski"}</strong>
      </p>
      <p>Przeciągnij róg elementu, aby zmienić jego rozmiar!</p>
    </div>
  );
};
