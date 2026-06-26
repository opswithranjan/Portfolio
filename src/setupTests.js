import "vitest-canvas-mock";
import "@testing-library/jest-dom";

// jsdom does not implement matchMedia; Main reads it at render time.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // Deprecated
    removeListener: () => {}, // Deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {}
  })
});
