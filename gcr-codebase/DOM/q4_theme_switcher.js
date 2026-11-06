/**
 * Q4: Theme Switcher Using Attribute Manipulation
 * Logic:
 * - Switches between themes ('light', 'dark', 'blue').
 * - Manipulates body element using setAttribute('data-theme', themeName).
 */

function setTheme(themeName) {
    const validThemes = ['light', 'dark', 'blue'];
    if (!validThemes.includes(themeName)) return;

    if (typeof document !== 'undefined') {
        document.body.setAttribute('data-theme', themeName);
        document.body.className = `theme-${themeName}`;
    }
    console.log(`[Theme Switcher] Applied data-theme="${themeName}"`);
}

// Test cases
setTheme('light');
setTheme('dark');
setTheme('blue');
