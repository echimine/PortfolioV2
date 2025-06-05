import Lenis from '@studio-freight/lenis';

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    duration: 3.2,
    easing: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    lerp: 0.05,
    smoothWheel: true,
    infinite: false,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  (window as any).lenis = lenis;
});
