import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapContext = (callback, scopeRef, deps = []) => {
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      callback({ prefersReducedMotion });
    }, scopeRef?.current || undefined);

    return () => ctx.revert();
  }, deps);
};

export const useScrollReveal = (
  targetRef,
  {
    y = 30,
    x = 0,
    opacity = 0,
    scale = 1,
    duration = 0.85,
    delay = 0,
    stagger = 0,
    start = "top 85%",
    ease = "power3.out",
    once = true,
  } = {},
  deps = []
) => {
  useEffect(() => {
    if (!targetRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(targetRef.current, { opacity: 1, y: 0, x: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const el = targetRef.current;
      const targets =
        el.getAttribute?.("data-reveal-group") !== null
          ? el.children
          : el;

      gsap.from(targets, {
        y,
        x,
        opacity,
        scale,
        duration,
        delay,
        stagger: stagger || 0,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
          markers: false,
        },
      });
    });

    return () => ctx.revert();
  }, deps);
};

export const useParallax = (
  targetRef,
  {
    yPercent = 15,
    xPercent = 0,
    start = "top bottom",
    end = "bottom top",
    scrub = 1.2,
  } = {},
  deps = []
) => {
  useEffect(() => {
    if (!targetRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(targetRef.current, {
        yPercent,
        xPercent,
        ease: "none",
        scrollTrigger: {
          trigger: targetRef.current,
          start,
          end,
          scrub,
        },
      });
    });

    return () => ctx.revert();
  }, deps);
};

export const useMagnetic = (ref, strength = 0.3) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      xTo(deltaX);
      yTo(deltaY);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);
};
