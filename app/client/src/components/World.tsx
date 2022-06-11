import { LegacyRef } from "react";

type WorldProps = {
  canvasRef?: LegacyRef<HTMLCanvasElement>;
  width: number;
  height: number;
};

const World: React.FC<WorldProps> = ({
  canvasRef,
  width,
  height,
}): JSX.Element => {
  return <canvas ref={canvasRef} width={width} height={height}></canvas>;
};

export { World };
