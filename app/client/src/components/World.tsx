import { LegacyRef } from "react";

type WorldProps = {
  canvasRef: LegacyRef<HTMLCanvasElement>;
  width?: number;
  height?: number;
};

const World: React.FC<WorldProps> = ({
  canvasRef,
  width = 352,
  height = 198,
}): JSX.Element => {
  return (
    <div className="game-container">
      <canvas ref={canvasRef} width={width} height={height}></canvas>
    </div>
  );
};

export { World };
