const fs = require("fs");

function getData(filmeName) {
    const result = JSON.parse(
        fs.readFileSync(`src/database/` + filmeName, "utf8")
    );
    return result;
}

module.exports = {
    getData,
};
