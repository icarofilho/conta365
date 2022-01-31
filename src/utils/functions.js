const fs = require("fs");
const XLSX = require("xlsx");


function excel(){
    const workbook = XLSX.readFile("./src/database/financial.xlsx");
    const sheet_name_list = workbook.SheetNames;
    const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    console.log(xlData);
    return xlData;
}

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
    escrevendoDados,
    excel
};
