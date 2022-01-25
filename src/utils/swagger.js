const swaggerAutogen = require("swagger-autogen")();
const outputFile = "./src/swagger-output.json";
const endPointsFiles = ["src/server.js"];

const doc = {
    openapi: "3.0.0",
    info: {
        title: "DevinBank API",
        description: "api para gestão financeira",
        version: "1.0.0",
    },
    host: "localhost:3333",
};

swaggerAutogen(outputFile , endPointsFiles, doc);
