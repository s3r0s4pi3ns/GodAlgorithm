import { Keyboard, Point2D } from "./types";

declare module "@binary-battles/characters" {
    export function createKeyboard(
        eventTarget: Window,
        supportedKeys?: string[]): Keyboard;
    export function getDirection(keyboard: Keyboard): Point2D
} 