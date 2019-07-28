const express = require('express');
const router = express.Router();
const queries = require('../controllers/queries');

// GET routes
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '../../../client' });
});
router.get('/brands', (req, res) => {
    queries.getBrandList().then((motorcycles) => res.send(motorcycles));
});
router.get('/:brand', (req, res) => {
    queries.getBrandModels(req.params.brand.toLowerCase()).then((models) => res.send(models));
});
router.get('/:brand/:model', (req, res) => {
    queries.getModel(req.params).then((model) => res.send(model));
});

// POST routes
router.post('/:brand', (req, res) => {
    queries.createModel(req.params.brand, req.body).then((models) => res.send(models));
});

// PUT routes
router.put('/:brand/:model', (req, res) => {
    queries.updateModel(req.params, req.body).then((model) => res.send(model));
});

// DELETE routes
router.delete('/:brand/:model', (req, res) => {
    queries.deleteModel(req.params).then(() => res.send({deleted: true}));
});
module.exports = router;
