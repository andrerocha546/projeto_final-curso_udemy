module.exports = midddleware => {
    return (req, res, next) => {
        if(req.user.admin) {
            midddleware(req, res, next)
        } else {
            res.status(401).send('Usuário não é administrador')
        }
    }
}