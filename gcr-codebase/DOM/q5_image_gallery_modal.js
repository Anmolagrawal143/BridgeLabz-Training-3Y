/**
 * Q5: Image Gallery with Modal Preview
 * Logic:
 * - Clicking an image grid item opens a modal popup displaying a larger view.
 * - Clicking outside the modal container closes the modal.
 * - Uses event.stopPropagation() on the modal inner content box to prevent clicks inside from closing it.
 */

console.log("Q5 Script initialized: Image Gallery with Modal Preview.");

function setupModalHandlers(modalOverlay, modalContent) {
    // Click outside modal closes it
    modalOverlay.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        console.log("Modal closed (Clicked outside)");
    });

    // Stop propagation inside modal content box
    modalContent.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log("Inside modal clicked (propagation stopped)");
    });
}
