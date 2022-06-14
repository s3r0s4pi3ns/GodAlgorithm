import { useEffect, useRef } from "react";
import { LaptopFactory, PlayerFactory } from "../Core/Entities/factories";
import { canvasPositionDebugger } from "../utils";

export const BattleField = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");

      if (process.env.NODE_ENV !== "production") {
        canvasPositionDebugger(canvasRef.current);
      }

      let ctx = canvasCtxRef.current;

      const office = new Image();
      office.src = "/assets/maps/office_test_map.png";

      office.onload = () => {
        ctx?.drawImage(office, 0, 0);
      };
    }
  }, [canvasRef]);

  console.log(new PlayerFactory().create());
  console.log(new LaptopFactory().create());

  return (
    <div className="col-start-2 col-span-2 border-black">
      <canvas ref={canvasRef} className="w-full h-full">
        Your browser does not support canvas to play this game
      </canvas>
    </div>
  );
};
