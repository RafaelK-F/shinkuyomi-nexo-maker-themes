module.exports.init = async function () {

    const nm = api.nexomaker;

    nm.defineThemeVariables({
        "col-primary": "#282828",
        "col-secondary": "#1c1c1c",

        "col-module-background": "#1c1c1c",
        "col-input-default": "#1c1c1c",
        "col-dropdown-items": "#141414", //Nicht gesetzt aufgrunf nicht herausfinden was es macht
        "col-ouliner-default": "#404040",
        "col-ouliner-secondary": "#404040",

        "col-primary-alpha": "#1c1c1c",
        "special-button-bg": "#252525",
        "special-button-secondary-bg": "#282828",
        "special-button-radius": "12px",

        "col-primary-form": "#dbdee1",
        "col-btn-primary-hover": "#b9c4c4",

        "col-cancel-color": "#fce100",

        "radius-none": "0px",
        "radius-xs": "4px",
        "radius-sm": "8px",
        "radius-md": "12px",
        "radius-lg": "16px",
        "radius-xl": "24px",
        "radius-xxl": "32px",
        "radius-round": "2147483647px",

        "accent-col": "#252525",
        "accent-col-alpha": "#252525",

        "col-txt-primary": "#949ba4",
        "col-txt-secondary": "#949ba4",
        "col-border-secondary": "#949ba4",

        "height-nav": "60px",
        "width-side": "80px",
    });

}

module.exports.metadata = {
    id: "stone",
    version: "1.0.0"
}