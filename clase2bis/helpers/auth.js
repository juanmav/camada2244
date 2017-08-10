module.exports = function (req, res, next) {

    console.log('Estoy en el medio y lo paso');
    console.log(req.method); // GET POST PUT DELETE.

    let random = Math.floor(Math.random() * 10) + 1;

    if (random > 5){ // if user.password == userDb.password
        next();
    } else {
        res.status(403).json({ message: 'No tuviste suerte'});
    }


};