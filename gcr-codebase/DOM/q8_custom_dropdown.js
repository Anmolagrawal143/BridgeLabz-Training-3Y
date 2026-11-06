/**
 * Q8: Custom Dropdown Using Only JavaScript (No <select> Tag)
 * Logic:
 * - Custom dropdown with toggle menu button.
 * - Updates button text upon option selection.
 * - Uses capturing phase (useCapture = true) for window click listener to close dropdown when clicking outside.
 */

class CustomDropdown {
    constructor() {
        this.isOpen = false;
        this.selectedOption = "Select Option";
    }

    toggle() {
        this.isOpen = !this.isOpen;
        console.log(`Dropdown State: ${this.isOpen ? 'OPEN' : 'CLOSED'}`);
    }

    select(option) {
        this.selectedOption = option;
        this.isOpen = false;
        console.log(`Selected Option: "${this.selectedOption}"`);
    }

    closeOutside() {
        if (this.isOpen) {
            this.isOpen = false;
            console.log("Dropdown Closed via Event Capturing Outside Click");
        }
    }
}

console.log("=== Q8: Custom Dropdown Test ===");
const dropdown = new CustomDropdown();
dropdown.toggle();
dropdown.select("Option 2 - Advanced JS");
dropdown.toggle();
dropdown.closeOutside();
