"use client";

import { useEffect, useRef } from "react";

export default function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!cursor || !finePointer.matches) return;

    document.body.classList.add("custom-cursor-enabled");

    const onPointerMove = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.style.opacity = "1";
    };
    const onPointerOver = (event: PointerEvent) => {
      if (event.target instanceof Element && event.target.closest("a, button, [role='button']")) {
        cursor.classList.add("cursor-hover");
      }
    };
    const onPointerOut = (event: PointerEvent) => {
      if (event.target instanceof Element && event.target.closest("a, button, [role='button']")) {
        cursor.classList.remove("cursor-hover");
      }
    };
    const onPointerLeave = () => {
      cursor.style.opacity = "0";
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div ref={cursorRef} className="animated-cursor" aria-hidden="true">
      <span className="animated-cursor-ring" />
      <span className="animated-cursor-dot" />
    </div>
  );
}
