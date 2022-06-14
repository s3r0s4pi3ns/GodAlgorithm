import { Keyboard, Point2D } from "./types";

declare module "@god-algorithm-battles/characters" {
    export function createKeyboard(
        eventTarget: Window,
        supportedKeys?: string[]): Keyboard;
    export function getDirection(keyboard: Keyboard): Point2D
} 