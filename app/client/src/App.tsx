import { useEffect, useRef } from "react";
import { World } from "./components/World";

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      console.log("entro");
      canvasCtxRef.current = canvasRef.current.getContext("2d");

      let ctx = canvasCtxRef.current;
    }
  }, [canvasRef]);

  return (
    <>
      <World canvasRef={canvasRef} />
    </>
  );
}

export default App;
