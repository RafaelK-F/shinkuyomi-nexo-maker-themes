module.exports.init = async function () {

    const nm = api.nexomaker;

    nm.defineThemeVariables({
        "col-primary": "#333339",
        "col-secondary": "#2c2d32",

        "col-module-background": "#2c2d32",
        "col-input-default": "#333339",
        "col-dropdown-items": "#141414", //Nicht gesetzt aufgrunf nicht herausfinden was es macht
        "col-ouliner-default": "#242429",
        "col-ouliner-secondary": "#242429",

        "col-primary-alpha": "#3d3c45",
        "special-button-bg": "#2c2d32",
        "special-button-secondary-bg": "#35353a",

        "col-primary-form": "#ffffff",
        "col-btn-primary-hover": "#c4c5c9",

        "col-cancel-color": "#d46e70",

        "accent-col": "#35353a",
        "accent-col-alpha": "#272728",

        "col-txt-primary": "#cacaca",
        "col-txt-secondary": "#9B9B9B",
        "col-border-secondary": "#242424",

        "height-nav": "60px",
        "width-side": "80px",
    });

}

module.exports.metadata = {
    id: "ash",
    version: "1.0.1"
}