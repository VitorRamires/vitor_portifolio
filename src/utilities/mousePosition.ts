import { useState, useEffect } from "react";

export default function useMousePosition() {
  interface MousePosition {
    x: number;
  }

  const [referenfeElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0 });

  function uptadePosition(event: MouseEvent): void {
    setMousePosition({ x: event.clientX });
  }

  useEffect(() => {
    if (referenfeElement) {
      referenfeElement.addEventListener("mousemove", uptadePosition);

      return () => {
        referenfeElement.removeEventListener("mousemove", uptadePosition);
      };
    }
  }, [referenfeElement]);

  return { mousePosition, setReferenceElement };
}
