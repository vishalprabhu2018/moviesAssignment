const express = require("express");
const router = express.Router();
const movieController = require('../controllers/movieController');


router.post('/movies', movieController.createMovies);
router.get('/movies', movieController.getAllMovies);
router.get('/movies/:id', movieController.getMovieById);
router.put('/movies/:id', movieController.updateMovieById);
router.delete('/movies/:id', movieController.deleteMovieById);

module.exports = router;