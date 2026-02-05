module.exports.init = async function () {

    const nm = api.nexomaker;

    nm.defineThemeVariables({
        "col-primary": "#1a191c",
        "col-secondary": "#121212",

        "col-module-background": "#121212",
        "col-input-default": "#121212",
        "col-dropdown-items": "#141414", //Nicht gesetzt aufgrunf nicht herausfinden was es macht
        "col-ouliner-default": "#feb80a",
        "col-ouliner-secondary": "#feb80a",

        "col-primary-alpha": "#121212",
        "special-button-bg": "#e3a518",
        "special-button-secondary-bg": "#fdb40b",
        "special-button-radius": "12px",

        "col-primary-form": "#e3a518",
        "col-btn-primary-hover": "#fdb40b",

        "col-cancel-color": "#6d000a",

        "radius-none": "0px",
        "radius-xs": "4px",
        "radius-sm": "8px",
        "radius-md": "12px",
        "radius-lg": "16px",
        "radius-xl": "24px",
        "radius-xxl": "32px",
        "radius-round": "2147483647px",

        "accent-col": "#c38700",
        "accent-col-alpha": "#c38700",

        "col-txt-primary": "#fbfbfb",
        "col-txt-secondary": "#fbfbfb",
        "col-border-secondary": "#fbfbfb",

        "height-nav": "60px",
        "width-side": "80px",
    });

}

module.exports.metadata = {
    id: "lemon",
    version: "1.0.0"
}