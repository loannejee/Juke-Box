// Milestone 2: Routes
const router = require('express').Router();
const Album = require('../db/models/Album');
const Artist = require('../db/models/Artist');

module.exports = router;

// GET /api/albums
router.get('/', async (req, res, next) => {
    try {
        const albums = await Album.findAll({ include: Artist });
        res.json(albums);
    } catch (err) {
        next(err);
    }
});

// GET /api/albums/:albumId
router.get('/:id', async (req, res, next) => {
    try {
        const album = await Album.findByPk(req.params.id, { include: Artist })
        res.json(album);
    } catch (error) {
        next(error);
    }
});