import { DIRECTION, keyboardKeyToDirectionMapper, Point2D } from ".";

export interface Keyboard {
    getLastPressedKey(): string;
}

export const createKeyboard = (
    eventTarget: Window,
    supportedKeys: string[],
): Keyboard => {
    let lastPressedKey = '';

    const updateKey = (key: string) => {
        if (supportedKeys.includes(key) && key !== lastPressedKey) {
            lastPressedKey = key;
        }
    };

    eventTarget.addEventListener('keydown', ({ key }) => updateKey(key));

    return {
        getLastPressedKey() {
            return lastPressedKey;
        },
    };
};

export const getDirection = (keyboard: Keyboard): Point2D => {
    const directionFromKeyBoard = keyboardKeyToDirectionMapper[keyboard.getLastPressedKey()] || '';

    switch (directionFromKeyBoard) {
        case DIRECTION.LEFT:
            return { x: -1, y: 0 };
        case DIRECTION.RIGHT:
            return { x: 1, y: 0 };
        case DIRECTION.UP:
            return { x: 0, y: -1 };
        case DIRECTION.DOWN:
            return { x: 0, y: 1 };
        default:
            return { x: 0, y: 0 };
    }
};