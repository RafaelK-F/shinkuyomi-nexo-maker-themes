module.exports.init = async function () {

    const nm = api.nexomaker;

    nm.defineThemeVariables({
        "col-primary": "#38373d",
        "col-secondary": "#5f5d67",

        "col-module-background": "#5f5d67",
        "col-input-default": "#5f5d67",
        "col-dropdown-items": "#141414", //Nicht gesetzt aufgrunf nicht herausfinden was es macht
        "col-ouliner-default": "#d3cce2",
        "col-ouliner-secondary": "#d3cce2",

        "col-primary-alpha": "#5f5d67",
        "special-button-bg": "#4f9ec3",
        "special-button-secondary-bg": "#61c8f7",
        "special-button-radius": "12px",

        "col-primary-form": "#4f9ec3",
        "col-btn-primary-hover": "#61c8f7",

        "col-cancel-color": "#d83d47",

        "radius-none": "0px",
        "radius-xs": "4px",
        "radius-sm": "8px",
        "radius-md": "12px",
        "radius-lg": "16px",
        "radius-xl": "24px",
        "radius-xxl": "32px",
        "radius-round": "2147483647px",

        "accent-col": "#4f9ec3",
        "accent-col-alpha": "#4f9ec3",

        "col-txt-primary": "#a8bdfd",
        "col-txt-secondary": "#a8bdfd",
        "col-border-secondary": "#a8bdfd",

        "height-nav": "60px",
        "width-side": "80px",
    });

}

module.exports.metadata = {
    id: "water",
    version: "1.0.0"
}