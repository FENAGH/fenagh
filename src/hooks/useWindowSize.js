import {useState, useEffect} from 'react'

export default function useWindowSize() {
  const isBrowser = typeof window !== 'undefined'
  const [windowSize, setWindowSize] = useState({
    width: isBrowser ? window.innerWidth : 1200,
    height: isBrowser ? window.innerHeight : 800
  })

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    if (!isBrowser) return false

    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, [isBrowser]);

  return windowSize;
}
