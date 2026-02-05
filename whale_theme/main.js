module.exports.init = async function () {

    const nm = api.nexomaker;

    nm.defineThemeVariables({
        "col-primary": "#1c202a",
        "col-secondary": "#14161e",

        "col-module-background": "#14161e",
        "col-input-default": "#14161e",
        "col-dropdown-items": "#141414", //Nicht gesetzt aufgrunf nicht herausfinden was es macht
        "col-ouliner-default": "#2f3549",
        "col-ouliner-secondary": "#2f3549",

        "col-primary-alpha": "#14161e",
        "special-button-bg": "#30374b",
        "special-button-secondary-bg": "#454c63",
        "special-button-radius": "12px",

        "col-primary-form": "#63697d",
        "col-btn-primary-hover": "#aac5db",

        "col-cancel-color": "#eb6a6b",

        "radius-none": "0px",
        "radius-xs": "4px",
        "radius-sm": "8px",
        "radius-md": "12px",
        "radius-lg": "16px",
        "radius-xl": "24px",
        "radius-xxl": "32px",
        "radius-round": "2147483647px",

        "accent-col": "#30374b",
        "accent-col-alpha": "#30374b",

        "col-txt-primary": "#959cb3",
        "col-txt-secondary": "#959cb3",
        "col-border-secondary": "#16161f",

        "height-nav": "60px",
        "width-side": "80px",
    });

}

module.exports.metadata = {
    id: "whale",
    version: "1.0.0"
}