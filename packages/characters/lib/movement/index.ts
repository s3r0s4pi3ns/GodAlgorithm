export enum DIRECTION {
    UP = "UP",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    DOWN = "DOWN",
}

export type MovementKeys = {
    [key: string]: DIRECTION;
};

export const movementKeys: MovementKeys = {
    ArrowUp: DIRECTION.UP,
    ArrowLeft: DIRECTION.LEFT,
    ArrowRight: DIRECTION.RIGHT,
    ArrowDown: DIRECTION.DOWN,

    w: DIRECTION.UP,
    a: DIRECTION.LEFT,
    d: DIRECTION.RIGHT,
    s: DIRECTION.DOWN,
};
