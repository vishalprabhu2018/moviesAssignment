
const Movie=require('../models/movie')

const createMovies=async (req, res) => {
    try {
      const movie = new Movie(req.body);
      await movie.save();
      res.status(201).send(movie);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  const getAllMovies= async (req, res) => {
    try {
      const movies = await Movie.find();
      res.send(movies);
    } catch (error) {
      res.status(500).send(error);
    }
  }

 const getMovieById = async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) {
        return res.status(404).send();
      }
      res.send(movie);
    } catch (error) {
      res.status(500).send(error);
    }
  };



const updateMovieById = async (req, res) => {
    try {
      const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!movie) {
        return res.status(404).send();
      }
      res.send(movie);
    } catch (error) {
      res.status(400).send(error);
    }
  };


   const deleteMovieById = async (req, res) => {
    try {
      const movie = await Movie.findByIdAndDelete(req.params.id);
      if (!movie) {
        return res.status(404).send();
      }
      res.send(movie);
    } catch (error) {
      res.status(500).send(error);
    }
  };



  module.exports = {
  createMovies,
  getAllMovies,
  getMovieById,
  updateMovieById,
  deleteMovieById
  };