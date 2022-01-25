const { pegandoDados, escrevendoDados } = require("../utils/functions");


module.exports = {
    //! LISTA USUARIOS
    async usuarios(req, res) {
        const users = pegandoDados("users.json");
        res.status(200).json({ users: users });
    },
    //! ADICIONA USUARIO
    async addUsuarios(req, res) {
        const users = pegandoDados("users.json");
        const n = users.length -1;
        const id = users[n]?.id + 1 || 1
        const { name, email } = req.body;

        const campos = Object.keys(req.body);

        
        const user = {
            id,
            name,
            email
        };
        if (campos.length > 2) {
            return res
                .status(400)
                .json({ error: `Foram informados campos a mais... Informar apenas Nome e E-mail !` });
        }
        if ( !name || !email ) {
            return res.status(400).json({ error: `Os campos Nome e/ou E-mail não foram passados` });
        } 
        users.push(user);
        escrevendoDados("users.json", users);
        return res.status(200).json({ user });
    },
    //! ALTERAR USUARIO
    async atualizarUsuario(req, res) {
        // #swagger.tags = [ "Usuários" ]
        const { id } = req.params;
        const users = pegandoDados("users.json");
        const user = users.find(user => user.id == Number(id));

        const data = req.body;

        !user ? res.status(400).json({ error: `Usuário não encontrado` }) : null;

        const updateUser = users.map( item => {
            if (item.id == Number(id)) {
                return {
                    ...item,
                    ...data
                }
            }
            return {...item};
        })
        escrevendoDados("users.json", updateUser);
        return res.status(200).json({ user: { ...user, ...data } });
    },
    //! Listar Usuario
    async listarUsuario(req, res) {
        const { id } = req.params;
        const users = pegandoDados("users.json");
        const user = users.find(user => user.id == Number(id));

        !user ? res.status(400).json({ error: `Usuário não encontrado` }) : res.status(200).json({ user });
    }

}