const { pegandoDados, escrevendoDados } = require("../utils/functions");


module.exports = {
    async usuarios(req, res) {
        const users = pegandoDados("users.json");
        res.status(200).json({ users: users });
    }

    
}