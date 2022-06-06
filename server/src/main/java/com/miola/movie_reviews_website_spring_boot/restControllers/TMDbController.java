package com.miola.movie_reviews_website_spring_boot.restControllers;

import com.miola.movie_reviews_website_spring_boot.entities.MovieEntity;
import com.miola.movie_reviews_website_spring_boot.jsonModels.Movie;
import com.miola.movie_reviews_website_spring_boot.jsonModels.MovieResults;
import com.miola.movie_reviews_website_spring_boot.services.TMDbServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tmdb")
public class TMDbController {
    @Autowired
    private TMDbServiceImpl movieService;

    @GetMapping("/topRated")
    public List<Movie> getAllTopRatedMovies(){
        return movieService.fetchTopRatedMovieList();
    }
    @GetMapping("/popular")
    public List<Movie> getAllPopularMovies(){
        return movieService.fetchPopularMovieList();
    }
    @GetMapping("/upcoming")
    public List<Movie> getAllUpcomingMovies(){
        return movieService.fetchUpcomingMovieList();
    }
    @GetMapping("/trending")
    public List<Movie> getAllTrendingMovies(){
        return movieService.fetchTrendingMovieList();
    }

    @GetMapping("/{id}")
    public Movie getMovieById(@PathVariable("id") Long id){
        return movieService.fetchMovieById("https://api.themoviedb.org/3/movie/"+id+"?api_key=6c204a7d2fd848e65c5f5230dbc85bb9");
    }

    @GetMapping("/search/{movieTitle}")
    public List<Movie> getMovieSearchResult(@PathVariable("movieTitle") String movieTitle){
        return movieService.fetchMoviesBySearchQuery("https://api.themoviedb.org/3/search/movie?api_key=6c204a7d2fd848e65c5f5230dbc85bb9&query="+movieTitle);
    }
}
