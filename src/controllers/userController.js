const { pegandoDados, escrevendoDados } = require("../utils/functions");


module.exports = {
    //! LISTA USUARIOS
    async usuarios(req, res) {
        const users = pegandoDados("users.json");
        // #swagger.tags = [ "Users" ]
        // #swagger.summary = 'Lista de usuários'
        // #swagger.description = 'Endpoit contendo toda a listagem de usuários'
        res.status(200).json({ users: users });
    },
    //! ADICIONA USUARIO
    async addUsuarios(req, res) {
        // #swagger.tags = [ "Users" ]
        // #swagger.summary = 'Add Usuários'
        // #swagger.description = 'Endpoit irá adicionar novos usuários de acordo com o body'
        /* #swagger.parameters['name'] = [
            {
                "in": "body",
                "description": "Dados do usuário",
                "required": true,
                "type":"string",
                "schema": {
                    $name : "John Snow",
                    $email : "winteriscomming@gmail.com",
                }
            }
        ] */
        const users = pegandoDados("users.json");
        const n = users.length - 1;
        const id = users[n]?.id + 1 || 1;
        const { name, email } = req.body;

        const campos = Object.keys(req.body);

        const user = {
            id,
            name,
            email,
        };
        if (campos.length > 2) {
            return res.status(400).json({
                error: `Foram informados campos a mais... Informar apenas Nome e E-mail !`,
            });
        }
        if (!name || !email) {
            return res.status(400).json({
                error: `Os campos Nome e/ou E-mail não foram passados`,
            });
        }
        users.push(user);
        escrevendoDados("users.json", users);
        return res.status(200).json({ user });
    },
    //! ALTERAR USUARIO
    async atualizarUsuario(req, res) {
        // #swagger.tags = [ "Users" ]
        // #swagger.summary = 'Atualiza Usuários'
        // #swagger.description = 'Endpoit irá atualizar um usuario de acordo com o body'
        /* #swagger.parameters['obj'] = [
            {
                "in": "body",
                "description": "Dados do usuário",
                "required": true,
                "type":"string",
                "schema": {
                    $id : "1",
                    $name : "John Snow",
                    $email : ""
                }
            }
        ] */
        const { id } = req.params;
        const users = pegandoDados("users.json");
        const user = users.find((user) => user.id == Number(id));

        const data = req.body;

        !user
            ? res.status(400).json({ error: `Usuário não encontrado` })
            : null;

        const updateUser = users.map((item) => {
            if (item.id == Number(id)) {
                return {
                    ...item,
                    ...data,
                };
            }
            return { ...item };
        });
        escrevendoDados("users.json", updateUser);
        return res.status(200).json({ user: { ...user, ...data } });
    },
    //! Listar Usuario
    async listarUsuario(req, res) {
        // #swagger.tags = [ "Users" ]
        // #swagger.summary = 'Lista usuário'
        // #swagger.description = 'Endpoit irá retornar um usuario de acordo com o id'
        /* #swagger.parameters['id'] = [
            {
                "in": "params",
                "description": "ID do usuário",
                "required": true,
                "type":"number",
                "schema": {
                    $ID : 2
                    
                }
            }
        ] */
        const { id } = req.params;
        const users = pegandoDados("users.json");
        const user = users.find((user) => user.id == Number(id));

        !user
            ? res.status(400).json({ error: `Usuário não encontrado` })
            : res.status(200).json({ user });
    },
};