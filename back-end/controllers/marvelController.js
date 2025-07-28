const connection = require('../database/db')

function index(req, res) {

    const sql = 'SELECT * FROM products'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results)
    })
}

function indexHeroBanners(req, res) {

    const sql = 'SELECT * FROM hero_banners'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results)
    })
}

module.exports = {
    index,
    indexHeroBanners
}