
export interface Moveable {
    direction: Point2D;
    speed: Point2D;
}

export interface Keyboard {
    getLastPressedKey(): string;
}

export enum DIRECTION {
    UP = "UP",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    DOWN = "DOWN",
}

export type MovementKeys = {
    [key: string]: DIRECTION;
};

export type Point2D = { x: number, y: number }
