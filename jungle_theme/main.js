module.exports.init = async function () {

    const nm = api.nexomaker;

    nm.defineThemeVariables({
        "col-primary": "#4a5942",
        "col-secondary": "#3e4637",

        "col-module-background": "#3e4637",
        "col-input-default": "#3e4637",
        "col-dropdown-items": "#141414", //Nicht gesetzt aufgrunf nicht herausfinden was es macht
        "col-ouliner-default": "#292c21",
        "col-ouliner-secondary": "#292c21",

        "col-primary-alpha": "#3e4637",
        "special-button-bg": "#958831",
        "special-button-secondary-bg": "#1f2933",
        "special-button-radius": "12px",

        "col-primary-form": "#958831",
        "col-btn-primary-hover": "#ffe89b",

        "col-cancel-color": "#c49051",

        "radius-none": "0px",
        "radius-xs": "4px",
        "radius-sm": "8px",
        "radius-md": "12px",
        "radius-lg": "16px",
        "radius-xl": "24px",
        "radius-xxl": "32px",
        "radius-round": "2147483647px",

        "accent-col": "#958831o",
        "accent-col-alpha": "#958831",

        "col-txt-primary": "#fbfbfb",
        "col-txt-secondary": "#fbfbfb",
        "col-border-secondary": "#fbfbfb",

        "height-nav": "60px",
        "width-side": "80px",
    });

}

module.exports.metadata = {
    id: "jungle",
    version: "1.0.0"
}