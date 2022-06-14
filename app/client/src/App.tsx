import { useEffect, useRef } from "react";
import { World } from "./components/World";
import TileCourseMap from "./assets/maps/tiles-course-map.png";

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d", {
        alpha: false,
      });

      let ctx = canvasCtxRef.current;

      const map = new Image();
      map.src = TileCourseMap;

      map.onload = (event: Event) => {
        return ctx?.drawImage(map, -2000, -400);
      };
    }
  }, [canvasRef]);

  return (
    <>
      <World canvasRef={canvasRef} />
    </>
  );
}

export default App;
