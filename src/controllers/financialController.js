const XLSX = require('xlsx')

const { pegandoDados, escrevendoDados, excel } = require("../utils/functions");

module.exports = {
    async listar(req, res) {
        // #swagger.tags = [ "Financial" ]
        function leerExcel(file) {
            const workbook = XLSX.readFile(file);
            const worksheet = workbook.SheetNames;
            // console.log(workbook);
            console.log(worksheet);
        }

        leerExcel("financial.xlsx");

        // pegando os dados do banco
        const financial = pegandoDados("financial.json");
        res.status(200).json({ financial: financial });
    }
};
