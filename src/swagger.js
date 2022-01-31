const swaggerAutogen = require("swagger-autogen")();
const outputFile = "./src/swagger_output.json";
const endPointsFiles = ["src/routes/index.js"];

const doc = {
    swagger: "3.0",
    info: {
        version: "1.0.0",
        title: "DevinBank API | Conta 365",
        description: "API de gestão financeira - Desenvolvido para DevinHouse",
    },
    host: "localhost:3333",
    basePath: "/",
    schemes: ["http"],
    consumes: ["application/json", "application/xml"],
    produces: ["application/json"],
    tags:[
        {
            name: "Users",
            description: "EndPoint para usuários"
        },
        {
            name: "Financial",
            description: "EndPoint para contas financeiras"
        }
    ]
};

swaggerAutogen(outputFile , endPointsFiles, doc);
