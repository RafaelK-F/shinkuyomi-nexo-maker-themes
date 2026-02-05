module.exports.init = async function () {

    const nm = api.nexomaker;

    nm.defineThemeVariables({
        "col-primary": "#4c007c",
        "col-secondary": "#350058",

        "col-module-background": "#350058",
        "col-input-default": "#350058",
        "col-dropdown-items": "#141414", //Nicht gesetzt aufgrunf nicht herausfinden was es macht
        "col-ouliner-default": "#170027",
        "col-ouliner-secondary": "#170027",

        "col-primary-alpha": "#350058",
        "special-button-bg": "#5f0a87",
        "special-button-secondary-bg": "#a14d8b",
        "special-button-radius": "12px",

        "col-primary-form": "#5f0a87",
        "col-btn-primary-hover": "#a14d8b",

        "col-cancel-color": "#df404c",

        "radius-none": "0px",
        "radius-xs": "4px",
        "radius-sm": "8px",
        "radius-md": "12px",
        "radius-lg": "16px",
        "radius-xl": "24px",
        "radius-xxl": "32px",
        "radius-round": "2147483647px",

        "accent-col": "#5f0a87",
        "accent-col-alpha": "#5f0a87",

        "col-txt-primary": "#f40174",
        "col-txt-secondary": "#f40174",
        "col-border-secondary": "#f40174",

        "height-nav": "60px",
        "width-side": "80px",
    });

}

module.exports.metadata = {
    id: "plum",
    version: "1.0.0"
}