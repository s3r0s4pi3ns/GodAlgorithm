/**
 * Allow know the exact position when click above the canvas
 * @param canvas 
 */
export const canvasPositionDebugger = (canvas: HTMLCanvasElement) => {
    canvas.addEventListener(
        "pointerdown",
        function (e) {
            var pos = getMousePos(canvas, e);

            console.log(`X: ${pos.x} Y: ${pos.y}`)
        },
        false
    );

    function getMousePos(canvas: HTMLCanvasElement, e: MouseEvent) {
        var rect = canvas.getBoundingClientRect();
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
}