export enum DIRECTION {
    UP = "UP",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    DOWN = "DOWN",
}

export type MovementKeys = {
    [key: string]: DIRECTION;
};

export type Point2D = { x: number, y: number };
export interface Moveable {
    direction: Point2D;
    speed: Point2D;
}

export const keyboardKeyToDirectionMapper: MovementKeys = {
    ArrowUp: DIRECTION.UP,
    ArrowLeft: DIRECTION.LEFT,
    ArrowRight: DIRECTION.RIGHT,
    ArrowDown: DIRECTION.DOWN,

    w: DIRECTION.UP,
    a: DIRECTION.LEFT,
    d: DIRECTION.RIGHT,
    s: DIRECTION.DOWN,
};
