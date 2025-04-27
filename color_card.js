// Color data source
const colorData = {
    "Red": {
      "A700": "#D50000",
      "A400": "#FF1744",
      "A200": "#FF5252",
      "A100": "#FF8A80",
      "900": "#B71C1C",
      "800": "#C62828",
      "700": "#D32F2F",
      "600": "#E53935",
      "500": "#F44336",
      "400": "#EF5350",
      "300": "#E57373",
      "200": "#EF9A9A",
      "100": "#FFCDD2",
      "50": "#FFEBEE"
    },
    "Pink": {
      "A700": "#C51162",
      "A400": "#F50057",
      "A200": "#FF4081",
      "A100": "#FF80AB",
      "900": "#880E4F",
      "800": "#AD1457",
      "700": "#C2185B",
      "600": "#D81B60",
      "500": "#E91E63",
      "400": "#EC407A",
      "300": "#F06292",
      "200": "#F48FB1",
      "100": "#F8BBD0",
      "50": "#FCE4EC"
    },
    "Purple": {
      "A700": "#AA00FF",
      "A400": "#D500F9",
      "A200": "#E040FB",
      "A100": "#EA80FC",
      "900": "#4A148C",
      "800": "#6A1B9A",
      "700": "#7B1FA2",
      "600": "#8E24AA",
      "500": "#9C27B0",
      "400": "#AB47BC",
      "300": "#BA68C8",
      "200": "#CE93D8",
      "100": "#E1BEE7",
      "50": "#F3E5F5"
    },
    "Blue": {
        "A700": "#2962FF",
        "A400": "#2979FF",
        "A200": "#448AFF",
        "A100": "#82B1FF",
        "900": "#0D47A1",
        "800": "#1565C0",
        "700": "#1976D2",
        "600": "#1E88E5",
        "500": "#2196F3",
        "400": "#42A5F5",
        "300": "#64B5F6",
        "200": "#90CAF9",
        "100": "#BBDEFB",
        "50": "#E3F2FD"
    },
    "Cyan": {
        "A700": "#00B8D4",
        "A400": "#00E5FF",
        "A200": "#18FFFF",
        "A100": "#84FFFF",
        "900": "#006064",
        "800": "#00838F",
        "700": "#0097A7",
        "600": "#00ACC1",
        "500": "#00BCD4",
        "400": "#26C6DA",
        "300": "#4DD0E1",
        "200": "#80DEEA",
        "100": "#B2EBF2",
        "50": "#E0F7FA"
    },
    "Green": {
        "A700": "#00C853",
        "A400": "#00E676",
        "A200": "#69F0AE",
        "A100": "#B9F6CA",
        "900": "#1B5E20",
        "800": "#2E7D32",
        "700": "#388E3C",
        "600": "#43A047",
        "500": "#4CAF50",
        "400": "#66BB6A",
        "300": "#81C784",
        "200": "#A5D6A7",
        "100": "#C8E6C9",
        "50": "#E8F5E9"
    },
    "Yellow": {
        "A700": "#FFD600",
        "A400": "#FFEA00",
        "A200": "#FFFF00",
        "A100": "#FFFF8D",
        "900": "#F57F17",
        "800": "#F9A825",
        "700": "#FBC02D",
        "600": "#FDD835",
        "500": "#FFEB3B",
        "400": "#FFEE58",
        "300": "#FFF176",
        "200": "#FFF59D",
        "100": "#FFF9C4",
        "50": "#FFFDE7"
    },
    "Orange": {
        "A700": "#FF6D00",
        "A400": "#FF9100",
        "A200": "#FFAB40",
        "A100": "#FFD180",
        "900": "#E65100",
        "800": "#EF6C00",
        "700": "#F57C00",
        "600": "#FB8C00",
        "500": "#FF9800",
        "400": "#FFA726",
        "300": "#FFB74D",
        "200": "#FFCC80",
        "100": "#FFE0B2",
        "50": "#FFF3E0"
    },
    "Brown": {
        "900": "#3E2723",
        "800": "#4E342E",
        "700": "#5D4037",
        "600": "#6D4C41",
        "500": "#795548",
        "400": "#8D6E63",
        "300": "#A1887F",
        "200": "#BCAAA4",
        "100": "#D7CCC8",
        "50": "#EFEBE9"
    },
    "Gray": {
        "900": "#212121",
        "800": "#424242",
        "700": "#616161",
        "600": "#757575",
        "500": "#9E9E9E",
        "400": "#BDBDBD",
        "300": "#E0E0E0",
        "200": "#EEEEEE",
        "100": "#F5F5F5",
        "50": "#FAFAFA"
    },
    "Blue Gray": {
        "900": "#263238",
        "800": "#37474F",
        "700": "#455A64",
        "600": "#546E7A",
        "500": "#607D8B",
        "400": "#78909C",
        "300": "#90A4AE",
        "200": "#B0BEC5",
        "100": "#CFD8DC",
        "50": "#ECEFF1"
    },
    "Black": {
        "Black": "#000000"
    },
    "White": {
        "White": "#FFFFFF"
    }
  };

// Defines the display order of color columns
const colorOrder = ["Red", "Pink", "Purple", "Blue", "Cyan", "Green", "Yellow", "Orange", "Brown", "Gray", "Blue Gray"];

// Defines the display order of color weights (rows)
const weightOrder = ["900", "800", "700", "600", "500", "400", "300", "200", "100", "50", "A700", "A400", "A200", "A100"];

// Maps internal color names to i18n message keys
const colorMsgKeys = {
    "Red": "colorRed", "Pink": "colorPink", "Purple": "colorPurple",
    "Blue": "colorBlue", "Cyan": "colorCyan", "Green": "colorGreen",
    "Yellow": "colorYellow", "Orange": "colorOrange", "Brown": "colorBrown",
    "Gray": "colorGray", "Blue Gray": "colorBlueGray",
    "White": "colorWhite", "Black": "colorBlack"
};

// Gets the localized color name using i18n API
function getLocalizedColorName(internalName) {
    const msgKey = colorMsgKeys[internalName];
    return msgKey ? chrome.i18n.getMessage(msgKey) : internalName; // Fallback to internal name
}

// Determines appropriate text color (light/dark) based on background color hex and weight
function getTextColor(bgColorHex, weight, colorName) {
    // Handle White/Black explicitly
    if (bgColorHex === "#FFFFFF") return "#202124"; // Use dark text for White swatch
        if (bgColorHex === "#000000") return "#FFFFFF"; // Use light text for Black swatch

    // Determine based on weight/series
    const weightNum = parseInt(weight.replace('A', ''));
    const isAccent = weight.startsWith('A');
    // Weights 500-900 and Accent 700/400 are generally darker backgrounds
    const isDarkBgCandidate = (weightNum >= 500 && weightNum <= 900) || (isAccent && (weight === 'A700' || weight === 'A400'));

    if (isDarkBgCandidate) {
        return "rgba(255, 255, 255, 0.9)"; // Light text for dark backgrounds
    } else {
        // Use the 900 shade of the current color family for light backgrounds
        const darkColor = colorData[colorName]?.["900"];
        // Fallback to a default dark if 900 is missing
        return darkColor || "rgba(0, 0, 0, 0.8)";
    }
}

// Find column indices for spanning White/Black swatches
const brownIndex = colorOrder.indexOf("Brown");
const blueGrayIndex = colorOrder.indexOf("Blue Gray");

// --- GLOBAL STATE ---
let currentColorFormat = 'HEX'; // Tracks the current display/copy format ('HEX' or 'RGB')
let currentTheme = 'system';    // Tracks the selected theme ('light', 'dark', or 'system')

// --- HELPERS ---

// Converts a HEX color string to an RGB string "r,g,b"
function hexToRgb(hex) {
    if (hex.startsWith('#')) {
        hex = hex.substring(1);
    }
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r},${g},${b}`;
}

// Creates the inner elements (weight and value spans) for a color swatch
function createSwatchContentElements(weight, hexValue) {
    const textWrapper = document.createElement('div');
    textWrapper.classList.add('swatch-text-wrapper');

    const weightSpan = document.createElement('span');
    weightSpan.classList.add('swatch-weight');
    weightSpan.textContent = weight;

    const valueSpan = document.createElement('span');
    valueSpan.classList.add('swatch-value');
    valueSpan.textContent = currentColorFormat === 'HEX' ? hexValue : hexToRgb(hexValue);

    textWrapper.appendChild(weightSpan);
    textWrapper.appendChild(valueSpan);

    return textWrapper;
}

// --- PALETTE GENERATION ---

// Generates the entire color palette grid dynamically
function generatePaletteRevised() {
    const paletteContainer = document.getElementById('palette-container');
    if (!paletteContainer) {
        return;
    }
    paletteContainer.innerHTML = '';
    paletteContainer.style.setProperty('--num-columns', colorOrder.length);

    // Create Header Row
    colorOrder.forEach((colorName, colIndex) => {
        const headerCell = document.createElement('div');
        headerCell.classList.add('grid-cell', 'header-cell');
        headerCell.textContent = getLocalizedColorName(colorName);
        headerCell.style.gridColumn = colIndex + 1;
        headerCell.style.gridRow = 1;
        paletteContainer.appendChild(headerCell);
    });

    // Create Color Cells (including placeholders and spanned White/Black)
    let whiteSwatchAdded = false;
    let blackSwatchAdded = false;
    const totalRows = weightOrder.length;
    const totalCols = colorOrder.length;

    weightOrder.forEach((weight, rowIndex) => {
        colorOrder.forEach((colorName, colIndex) => {
            const gridRowIndex = rowIndex + 2; // +1 for header, +1 for 1-based index
            const gridColIndex = colIndex + 1; // 1-based index

            // Check for areas designated for spanned White/Black swatches first
            const isWhiteArea = (weight === 'A700' || weight === 'A400') && (colIndex >= brownIndex && colIndex <= blueGrayIndex);
            const isBlackArea = (weight === 'A200' || weight === 'A100') && (colIndex >= brownIndex && colIndex <= blueGrayIndex);

            // Handle White Spanning Cell
            if (isWhiteArea) {
                if (!whiteSwatchAdded && weight === 'A700' && colIndex === brownIndex) {
                    const whiteCell = document.createElement('div');
                    whiteCell.classList.add('grid-cell');
                    // Span 3 columns (Brown, Gray, Blue Gray) and 2 rows (A700, A400)
                    whiteCell.style.gridColumn = `${brownIndex + 1} / span 3`;
                    whiteCell.style.gridRow = `${weightOrder.indexOf('A700') + 2} / span 2`;

                    const hexValue = colorData["White"]["White"];
                    const rgbValue = hexToRgb(hexValue);
                    const wcName = "White";
                    const wcWeight = "White";

                    if (weightOrder.indexOf('A700') === 0 && brownIndex === 0) whiteCell.classList.add('corner-top-left');
                    if (weightOrder.indexOf('A700') === 0 && blueGrayIndex === totalCols - 1) whiteCell.classList.add('corner-top-right');

                    // Create background and foreground swatch elements
                    const swatchBg = document.createElement('div');
                    swatchBg.classList.add('color-swatch-bg');
                    swatchBg.style.backgroundColor = hexValue;

                    const swatchFg = document.createElement('div');
                    swatchFg.classList.add('color-swatch');
                    swatchFg.style.backgroundColor = hexValue;
                    swatchFg.dataset.hex = hexValue;
                    swatchFg.dataset.rgb = rgbValue;
                    swatchFg.dataset.colorName = wcName;
                    swatchFg.dataset.weight = wcWeight;
                    const textColor = getTextColor(hexValue, wcWeight, wcName);
                    swatchFg.style.color = textColor;
                    const textContentWrapper = createSwatchContentElements(wcWeight, hexValue);
                    swatchFg.appendChild(textContentWrapper);

                    whiteCell.appendChild(swatchBg);
                    whiteCell.appendChild(swatchFg);
                    paletteContainer.appendChild(whiteCell);
                    whiteSwatchAdded = true;
                }
                return;
            }

            // Handle Black Spanning Cell
            if (isBlackArea) {
                if (!blackSwatchAdded && weight === 'A200' && colIndex === brownIndex) {
                    const blackCell = document.createElement('div');
                    blackCell.classList.add('grid-cell');
                    // Span 3 columns and 2 rows (A200, A100)
                    blackCell.style.gridColumn = `${brownIndex + 1} / span 3`;
                    blackCell.style.gridRow = `${weightOrder.indexOf('A200') + 2} / span 2`;

                    const hexValue = colorData["Black"]["Black"];
                    const rgbValue = hexToRgb(hexValue);
                    const bcName = "Black";
                    const bcWeight = "Black";

                    // Add corner classes
                    const blackRowStartIdx = weightOrder.indexOf('A200');
                    const blackRowEndIdx = blackRowStartIdx + 1; // Index of the last row spanned by black
                    if (blackRowEndIdx === totalRows - 1 && brownIndex === 0) blackCell.classList.add('corner-bottom-left');
                    if (blackRowEndIdx === totalRows - 1 && blueGrayIndex === totalCols - 1) blackCell.classList.add('corner-bottom-right');

                    // Create background and foreground swatch elements
                    const swatchBg = document.createElement('div');
                    swatchBg.classList.add('color-swatch-bg');
                    swatchBg.style.backgroundColor = hexValue;

                    const swatchFg = document.createElement('div');
                    swatchFg.classList.add('color-swatch');
                    swatchFg.style.backgroundColor = hexValue;
                    swatchFg.dataset.hex = hexValue;
                    swatchFg.dataset.rgb = rgbValue;
                    swatchFg.dataset.colorName = bcName;
                    swatchFg.dataset.weight = bcWeight;
                    const textColor = getTextColor(hexValue, bcWeight, bcName);
                    swatchFg.style.color = textColor;
                    const textContentWrapper = createSwatchContentElements(bcWeight, hexValue);
                    swatchFg.appendChild(textContentWrapper);

                    blackCell.appendChild(swatchBg);
                    blackCell.appendChild(swatchFg);
                    paletteContainer.appendChild(blackCell);
                    blackSwatchAdded = true;
                }
                return;
            }

            // --- Regular Cell Creation or Placeholder ---
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.style.gridColumn = gridColIndex;
            cell.style.gridRow = gridRowIndex;

            const shades = colorData[colorName];
            if (shades && shades[weight]) {
                // Create a regular color swatch cell
                const hexValue = shades[weight];
                const rgbValue = hexToRgb(hexValue);

                // Add corner classes to the cell if it's at a grid corner
                if (rowIndex === 0 && colIndex === 0) cell.classList.add('corner-top-left');
                if (rowIndex === 0 && colIndex === totalCols - 1) cell.classList.add('corner-top-right');
                if (rowIndex === totalRows - 1 && colIndex === 0) cell.classList.add('corner-bottom-left');
                if (rowIndex === totalRows - 1 && colIndex === totalCols - 1) cell.classList.add('corner-bottom-right');

                // Create background swatch (non-interactive, just color)
                const swatchBg = document.createElement('div');
                swatchBg.classList.add('color-swatch-bg');
                swatchBg.style.backgroundColor = hexValue;

                // Create foreground swatch (interactive, contains text, handles clicks)
                const swatchFg = document.createElement('div');
                swatchFg.classList.add('color-swatch');
                swatchFg.style.backgroundColor = hexValue;
                swatchFg.dataset.hex = hexValue;
                swatchFg.dataset.rgb = rgbValue;
                swatchFg.dataset.colorName = colorName;
                swatchFg.dataset.weight = weight;
                const textColor = getTextColor(hexValue, weight, colorName);
                swatchFg.style.color = textColor;
                const textContentWrapper = createSwatchContentElements(weight, hexValue);
                swatchFg.appendChild(textContentWrapper);

                cell.appendChild(swatchBg);
                cell.appendChild(swatchFg);
            } else {
                // Create a placeholder cell for missing color/weight combinations
                cell.classList.add('placeholder');
                // Add corner classes to placeholder if needed
                if (rowIndex === 0 && colIndex === 0) cell.classList.add('corner-top-left');
                if (rowIndex === 0 && colIndex === totalCols - 1) cell.classList.add('corner-top-right');
                if (rowIndex === totalRows - 1 && colIndex === 0) cell.classList.add('corner-bottom-left');
                if (rowIndex === totalRows - 1 && colIndex === totalCols - 1) cell.classList.add('corner-bottom-right');
            }
            paletteContainer.appendChild(cell);
        });
    });
}

// --- UI INTERACTIONS ---

// Toast Notification Logic
const toastElement = document.getElementById('toast');
let toastTimeoutId = null;

// Shows a toast message, localizing the message key
function showToast(messageKey, substitutions = [], duration = 1500) {
    if (!toastElement) return;

    // Clear any existing hide timer
    if (toastTimeoutId) {
        clearTimeout(toastTimeoutId);
    }

    // Get localized message
    const message = chrome.i18n.getMessage(messageKey, substitutions);

    toastElement.textContent = message;
    toastElement.classList.add('active');

    // Set a timer to hide the toast
    toastTimeoutId = setTimeout(() => {
        toastElement.classList.remove('active');
        toastTimeoutId = null;
    }, duration);
}

// Sets up the click listener on the palette for copying color values
function setupCopyListener() {
    const paletteContainer = document.getElementById('palette-container');
    if (!paletteContainer) return;

    paletteContainer.addEventListener('click', (event) => {
        const swatch = event.target.closest('.color-swatch');

        if (swatch) {
            const formatToCopy = currentColorFormat;
            const hexValue = swatch.dataset.hex;
            const rgbValue = swatch.dataset.rgb;
            let valueToCopy = '';

            if (formatToCopy === 'HEX' && hexValue) {
                valueToCopy = hexValue;
            } else if (formatToCopy === 'RGB' && rgbValue) {
                valueToCopy = rgbValue;
            } else {
                valueToCopy = hexValue || rgbValue || '';
            }

            if (valueToCopy) {
                navigator.clipboard.writeText(valueToCopy)
                    .then(() => {
                        // Show confirmation toast
                        showToast('copiedToast', [formatToCopy, valueToCopy]);
                    })
                    .catch(err => {
                        showToast('copyFailedToast', [], 2000);
                    });
            }
        }
    });
}

// Updates the text content (HEX/RGB) and font size of all swatches
function updateAllSwatchValues() {
    const swatches = document.querySelectorAll('.color-swatch');
    const normalFontSize = '11px';
    const smallerFontSize = '10px';

    swatches.forEach(swatch => {
        // Find the value and weight spans within the swatch's text wrapper
        const valueSpan = swatch.querySelector('.swatch-text-wrapper .swatch-value');
        const weightSpan = swatch.querySelector('.swatch-text-wrapper .swatch-weight');

        if (valueSpan && weightSpan) {
            const hex = swatch.dataset.hex;
            const rgb = swatch.dataset.rgb;

            if (currentColorFormat === 'HEX') {
                valueSpan.textContent = hex;
                valueSpan.style.fontSize = normalFontSize;
                weightSpan.style.fontSize = normalFontSize;
            } else { // currentColorFormat === 'RGB'
                valueSpan.textContent = rgb;
                valueSpan.style.fontSize = smallerFontSize;
                weightSpan.style.fontSize = smallerFontSize;
            }
        }
    });
}

// Sets up the listener for the HEX/RGB toggle switch
function setupToggleListener() {
    const toggleInput = document.getElementById('format-toggle');
    if (!toggleInput) return;

    toggleInput.addEventListener('change', () => {
        currentColorFormat = toggleInput.checked ? 'RGB' : 'HEX';
        updateAllSwatchValues();
    });
}

// --- THEME MANAGEMENT ---

// Applies the specified theme ('light', 'dark', or resolves 'system') to the body
function applyTheme(theme) {
    const body = document.body;
    let themeToApply = theme;

    if (theme === 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        themeToApply = systemPrefersDark ? 'dark' : 'light';
    }

    if (themeToApply === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }

     const selectedRadio = document.getElementById(`theme-${theme}`);
     if (selectedRadio) {
         selectedRadio.checked = true;
     }
}

// Loads the theme preference from localStorage on startup
function loadThemePreference() {
    const savedTheme = localStorage.getItem('colorCardTheme') || 'system'; // Default to 'system'
    currentTheme = savedTheme;
    applyTheme(currentTheme); // Apply the loaded theme
}

// Saves the selected theme preference to localStorage
function saveThemePreference(theme) {
    localStorage.setItem('colorCardTheme', theme);
}

// Sets up the listener for the theme switcher
function setupThemeSwitcherListener() {
    const themeSwitcher = document.querySelector('.theme-switcher-container .segmented-control');
    if (!themeSwitcher) {
        return;
    }

    // Timeout ID to debounce rapid theme changes and allow CSS transition to complete
    let themeChangeTimeoutId = null;

    themeSwitcher.addEventListener('change', (event) => {
        if (event.target.name === 'theme-toggle') {
            const newTheme = event.target.value;
            currentTheme = newTheme;

            // Clear any pending timeout from previous clicks
            if (themeChangeTimeoutId) {
                clearTimeout(themeChangeTimeoutId);
            }

            themeChangeTimeoutId = setTimeout(() => {
                saveThemePreference(currentTheme);
                applyTheme(currentTheme);
                themeChangeTimeoutId = null;
            }, 300); // Delay slightly longer than CSS transition
        }
    });
}

// Sets up a listener for changes in the OS's preferred color scheme
function setupSystemThemeListener() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
        if (currentTheme === 'system') {
            applyTheme('system');
        }
    };

    if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
    } else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleChange);
    }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadThemePreference();      // Load and apply saved theme preference first
    generatePaletteRevised();   // Generate the color grid
    setupCopyListener();        // Enable copy-on-click
    setupToggleListener();      // Enable HEX/RGB toggle
    setupThemeSwitcherListener(); // Enable theme switching
    setupSystemThemeListener(); // Listen for OS theme changes
});