module.exports.init = async function () {

    const nm = api.nexomaker;

    nm.defineThemeVariables({
        "col-primary": "#000000",
        "col-secondary": "#000000",

        //"col-li-primary": "#ffffff", //Nicht gesetzt aufgrunf nicht herausfinden was es macht
        //"col-li-primary2": "#ffffff", //Nicht gesetzt aufgrunf nicht herausfinden was es macht

        "col-module-background": "#000000",
        "col-input-default": "#000000",
        "col-dropdown-items": "#141414", //Nicht gesetzt aufgrunf nicht herausfinden was es macht
        "col-ouliner-default": "#242429",
        "col-ouliner-secondary": "#242429",

        "col-primary-alpha": "#000000",
        "special-button-bg": "#121213",
        "special-button-secondary-bg": "#1e1e20",
        //"special-button-outline": "#121213",

        "col-primary-form": "#b9b9bf",
        "col-btn-primary-hover": "#757579",

        "col-cancel-color": "#d46e70",

        "accent-col": "#35353a",
        "accent-col-alpha": "#272728",

        "col-txt-primary": "#cdcdd2",
        "col-txt-secondary": "#cdcdd2",
        "col-border-secondary": "#60626c",

        "height-nav": "60px",
        "width-side": "80px",
    });

}

module.exports.metadata = {
    id: "onyx",
    version: "1.0.2"
}