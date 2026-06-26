import React, {useEffect, useRef, useState} from "react";

/**
 * Lightweight, dependency-free replacement for react-headroom.
 * Pins the header on scroll-up, hides it on scroll-down. Keeps the
 * `.headroom-wrapper` / `.headroom` class names so existing CSS still applies.
 */
export default function Headroom({children}) {
  const [pinned, setPinned] = useState(true);
  const [height, setHeight] = useState(0);
  const innerRef = useRef(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    if (innerRef.current) {
      setHeight(innerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current <= 0) {
        setPinned(true);
      } else if (current > lastScroll.current) {
        setPinned(false); // scrolling down → hide
      } else {
        setPinned(true); // scrolling up → show
      }
      lastScroll.current = current;
    };
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="headroom-wrapper" style={{height}}>
      <div
        ref={innerRef}
        className={`headroom headroom--fixed ${
          pinned ? "headroom--pinned" : "headroom--unpinned"
        }`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          transform: pinned ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 200ms ease-in-out"
        }}
      >
        {children}
      </div>
    </div>
  );
}
