module.exports.init = async function () {

    const nm = api.nexomaker;

    nm.defineThemeVariables({
        "col-primary": "#282435",
        "col-secondary": "#282435",

        "col-li-primary": "#a4825d",
        "col-li-primary2": "#a4825d",

        "col-module-background": "#282435",
        "col-input-default": "#282435",
        "col-dropdown-items": "#141414", //Nicht gesetzt aufgrunf nicht herausfinden was es macht
        "col-ouliner-default": "#4ebe90",
        "col-ouliner-secondary": "#4ebe90",

        "col-primary-alpha": "#282435",
        "special-button-bg": "#6ea97d",
        "special-button-secondary-bg": "#60b385",
        //"special-button-outline": "#121213",

        "col-primary-form": "#6ea97d",
        "col-btn-primary-hover": "#60b385",

        "col-cancel-color": "#d26348",

        "accent-col": "#6ea97d",
        "accent-col-alpha": "#6ea97d",

        "col-txt-primary": "#d26348",
        "col-txt-secondary": "#d26348",
        "col-border-secondary": "#d26348",

        "height-nav": "60px",
        "width-side": "80px",
    });

}

module.exports.metadata = {
    id: "nexomc",
    version: "1.0.1"
}