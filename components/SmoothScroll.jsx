import React, { useEffect, useRef , useState } from "react";


function useWindowSize() {
  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

const SmoothScroll = ({ children }) => {
  // 1.
  const [windowSize , setWindowSize] = useState({width : 0  , height : 0}) 

  //2.
  const scrollingContainerRef = useRef();

  // 3.
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // 4.
  useEffect(() => {
    setWindowSize({
      width : window.innerWidth,
      height : window.innerHeight
    })
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollingContainerRef.current.getBoundingClientRect().height
    }px`;
  };

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <div style={{
      position : "fixed",
      top : "0",
      left : "0",
      width : "100%",
      height : "100%",
      overflow : "hidden",
      pointerEvents : "none",
    }}>
      <div style={{pointerEvents : "none"}} ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;