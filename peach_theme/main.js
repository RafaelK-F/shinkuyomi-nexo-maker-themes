module.exports.init = async function () {

    const nm = api.nexomaker;

    nm.defineThemeVariables({
        "col-primary": "#49292f",
        "col-secondary": "#5e3640",

        "col-module-background": "#5e3640",
        "col-input-default": "#5e3640",
        "col-dropdown-items": "#141414", //Nicht gesetzt aufgrunf nicht herausfinden was es macht
        "col-ouliner-default": "#caad9b",
        "col-ouliner-secondary": "#caad9b",

        "col-primary-alpha": "#5e3640",
        "special-button-bg": "#f5aeb9",
        "special-button-secondary-bg": "#eebcae",
        "special-button-radius": "12px",

        "col-primary-form": "#f5aeb9",
        "col-btn-primary-hover": "#eebcae",

        "col-cancel-color": "#c5536c",

        "radius-none": "0px",
        "radius-xs": "4px",
        "radius-sm": "8px",
        "radius-md": "12px",
        "radius-lg": "16px",
        "radius-xl": "24px",
        "radius-xxl": "32px",
        "radius-round": "2147483647px",

        "accent-col": "#49292f",
        "accent-col-alpha": "#49292f",

        "col-txt-primary": "#f7e0e4",
        "col-txt-secondary": "#f7e0e4",
        "col-border-secondary": "#49292f",

        "height-nav": "60px",
        "width-side": "80px",
    });

}

module.exports.metadata = {
    id: "peach",
    version: "1.0.0"
}