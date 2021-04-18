const { store } = require("./SessionController");

module.exports = {
    async store(req,res) {
        console.log(req.bady);
        console.log(req.file);
        
        return res.json({ok: true})
    }
};