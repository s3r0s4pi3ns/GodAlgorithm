import { createKeyboard } from "@binary-battles/characters";
import { useEffect, useRef } from "react";
import { World } from "./components/World";

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  const keyboard = createKeyboard(window);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");

      let ctx = canvasCtxRef.current;
    }
  }, [canvasRef]);

  console.log(keyboard);
  console.log(keyboard.getLastPressedKey());
  return (
    <>
      <World canvasRef={canvasRef} />
    </>
  );
}

export default App;
