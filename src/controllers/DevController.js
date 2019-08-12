module.exports = {
    store(req, res){
        const {username} = req.body.username
        return res.json(username)
    }
}