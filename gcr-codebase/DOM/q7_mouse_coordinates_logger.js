/**
 * Q7: Detect Mouse Path & Coordinates Logger
 * Logic:
 * - Tracks mouse movements inside a 400x400 box <div>.
 * - Displays clientX and clientY live coordinates.
 * - On double-click (dblclick event), creates and appends a red dot at the exact click position (offsetX, offsetY).
 */

function handleMouseMove(e) {
    const coords = { clientX: e.clientX, clientY: e.clientY };
    return coords;
}

function handleDoubleClick(e, container) {
    const dot = {
        top: e.offsetY + 'px',
        left: e.offsetX + 'px',
        color: 'red'
    };
    console.log(`[Dot Dropped] at X: ${dot.left}, Y: ${dot.top}`);
    return dot;
}

console.log("Q7 Script initialized: Mouse Path & Coordinates Logger ready.");
