const { getData } = require('../utils/functions')


module.exports = {
    async index(req, res) {
        const users = getData('users.json')
        res.status(200).json({ users: users });
    }
}