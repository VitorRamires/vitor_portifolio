import { useState, useEffect } from "react";

export default function useMousePosition() {
  interface MousePosition {
    x: number;
    y: number;
  }

  const [referenfeElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  function uptadePosition(event: MouseEvent): void {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }

  useEffect(() => {
    if (referenfeElement) {
      referenfeElement.addEventListener("mousemove", uptadePosition);
    }
  }, [referenfeElement]);

  return { mousePosition, setReferenceElement };
}
