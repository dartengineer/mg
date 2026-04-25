import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0;
    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.left = mx + "px";
        dot.current.style.top = my + "px";
      }
      if (ring.current) {
        ring.current.style.left = mx + "px";
        ring.current.style.top = my + "px";
      }
    };
    const over = () => ring.current?.classList.add("hovered");
    const out = () => ring.current?.classList.remove("hovered");

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a,button,[data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });

    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="cursor">
      <div className="cursor-ring" ref={ring} style={{ position: "fixed" }} />
      <div className="cursor-dot" ref={dot} style={{ position: "fixed" }} />
    </div>
  );
}
