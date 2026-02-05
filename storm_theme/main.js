module.exports.init = async function () {

    const nm = api.nexomaker;

    nm.defineThemeVariables({
        "col-primary": "#1b2229",
        "col-secondary": "#171d23",

        "col-module-background": "#171d23",
        "col-input-default": "#171d23",
        "col-dropdown-items": "#141414", //Nicht gesetzt aufgrunf nicht herausfinden was es macht
        "col-ouliner-default": "#26303a",
        "col-ouliner-secondary": "#26303a",

        "col-primary-alpha": "#171d23",
        "special-button-bg": "#1b2229",
        "special-button-secondary-bg": "#1f2933",
        "special-button-radius": "12px",

        "col-primary-form": "#fdd651",
        "col-btn-primary-hover": "#ffe89b",

        "col-cancel-color": "#e66f23",

        "radius-none": "0px",
        "radius-xs": "4px",
        "radius-sm": "8px",
        "radius-md": "12px",
        "radius-lg": "16px",
        "radius-xl": "24px",
        "radius-xxl": "32px",
        "radius-round": "2147483647px",

        "accent-col": "#1f2933",
        "accent-col-alpha": "#1f2933",

        "col-txt-primary": "#efaf24",
        "col-txt-secondary": "#efaf24",
        "col-border-secondary": "#efaf24",

        "height-nav": "60px",
        "width-side": "80px",
    });

}

module.exports.metadata = {
    id: "storm",
    version: "1.0.0"
}