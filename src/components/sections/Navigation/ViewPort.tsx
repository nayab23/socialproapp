import { useState, useEffect } from "react";

const WindowView = (): { x_left: number, x_right: number, y_top: number, y_bottom: number } => {
  const [view, setView] = useState({
    x_left: 0,
    x_right: 0,
    y_top: 0,
    y_bottom: 0,
  });

  const handleView = () => {
    setView({
      x_left: window.pageXOffset,
      x_right: window.pageXOffset + window.innerWidth,
      y_top: window.pageYOffset,
      y_bottom: window.pageYOffset + window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleView);

    return () => {
      window.removeEventListener("scroll", handleView);
    };
  }, []);

  return view;
};

// http://www.gizma.com/easing/
const SmoothScroll = ({ targetId, duration }: { targetId: string, duration: number }) => {
  const targetSection = document.querySelector("#" + targetId);
  if (!targetSection) return;

  var targetPosition = targetSection.getBoundingClientRect().top;
  // console.log(targetPosition, targetSection.offsetTop);
  var startPosition = window.pageYOffset;
  var startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

export { WindowView, SmoothScroll };
