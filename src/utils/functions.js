const fs = require("fs");

function pegandoDados(filmeName) {
    const result = JSON.parse(
        fs.readFileSync(`src/database/` + filmeName, "utf8")
    );
    return result;
}

function escrevendoDados(filmeName, data) {
    fs.writeFileSync(`src/database/` + filmeName, JSON.stringify(data));
}

module.exports = {
    pegandoDados,
    escrevendoDados
};
