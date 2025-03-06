import { useState, useEffect } from "react";

export default function useMousePosition() {
  interface MousePosition {
    x: number;
  }

  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0 });

  function uptadePosition(event: MouseEvent): void {
    setMousePosition({ x: event.clientX });
  }
  useEffect(() => {
    window.addEventListener("mousemove", uptadePosition);
  });

  return mousePosition;
}
