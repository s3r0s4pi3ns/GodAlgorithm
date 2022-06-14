import { LegacyRef } from "react";

type WorldProps = {
  canvasRef: LegacyRef<HTMLCanvasElement>;
  width?: number;
  height?: number;
};

const World: React.FC<WorldProps> = ({
  canvasRef,
  width = 1024,
  height = 576,
}): JSX.Element => {
  return (
    <canvas
      className="pixel-art"
      ref={canvasRef}
      width={width}
      height={height}
    ></canvas>
  );
};

export { World };
