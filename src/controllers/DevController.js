const axios = require('axios')

module.exports = {
    async store(req, res) {
        const { username } = req.body

        const response = await axios.get(`https://api.github.com/users/${username}`)
        const { name, bio, avatar_url: avatar, company, repos_url } = response.data
        const resultRepos = await axios.get(repos_url)

        return res.json({
            name, 
            bio, 
            avatar, 
            company, 
            repos: resultRepos.data
        })
    }
}