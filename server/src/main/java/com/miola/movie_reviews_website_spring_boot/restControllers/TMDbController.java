package com.miola.movie_reviews_website_spring_boot.restControllers;

import com.miola.movie_reviews_website_spring_boot.jsonModels.*;
import com.miola.movie_reviews_website_spring_boot.services.TMDbServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tmdb")
@CrossOrigin(origins = "http://localhost:3000")
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
        List<Movie> movies = movieService.fetchUpcomingMovieList();
        for (Movie M : movies) {
            M.setTrailerResult(movieService.fetchTrailers("https://api.themoviedb.org/3/movie/"+M.getId()+"/videos?api_key=6c204a7d2fd848e65c5f5230dbc85bb9"));
        }
        return movies;
    }
    @GetMapping("/trending")
    public List<Movie> getAllTrendingMovies(){
        return movieService.fetchTrendingMovieList();
    }



    @GetMapping("/movieStrip/{id}")
    public Movie getMovieById(@PathVariable("id") Long id){
        return movieService.fetchMovieById("https://api.themoviedb.org/3/movie/"+id+"?api_key=6c204a7d2fd848e65c5f5230dbc85bb9");
    }

    @GetMapping("/search/{movieTitle}")
    public List<Movie> getMovieSearchResult(@PathVariable("movieTitle") String movieTitle){
        return movieService.fetchMoviesBySearchQuery("https://api.themoviedb.org/3/search/movie?api_key=6c204a7d2fd848e65c5f5230dbc85bb9&query="+movieTitle);
    }

    @GetMapping("/castAndCrew/{id}")
    public List<Crew> getCastAndCrew(@PathVariable("id") Long id){
        return movieService.fetchCrews("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=6c204a7d2fd848e65c5f5230dbc85bb9");
    }

    @GetMapping("/similar/{id}")
    public List<Movie> getSimilarMovies(@PathVariable("id") Long id){
        return movieService.fetchMoviesBySearchQuery("https://api.themoviedb.org/3/movie/"+id+"/similar?api_key=6c204a7d2fd848e65c5f5230dbc85bb9");
    }
    @GetMapping("/trailer/{id}")
    public List<Trailer> getTrailer(@PathVariable("id") Long id){
        //https://api.themoviedb.org/3/movie/752623/videos?api_key=6c204a7d2fd848e65c5f5230dbc85bb9
        return movieService.fetchTrailers("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=6c204a7d2fd848e65c5f5230dbc85bb9");
    }

    @GetMapping("/{id}")
    public MoviePayload getMovie(@PathVariable("id") Long id){
        MoviePayload moviePayload = new MoviePayload();
        moviePayload.setMovie(movieService.fetchMovieById("https://api.themoviedb.org/3/movie/"+id+"?api_key=6c204a7d2fd848e65c5f5230dbc85bb9"));
        moviePayload.setSimilarMovies(movieService.fetchMoviesBySearchQuery("https://api.themoviedb.org/3/movie/"+id+"/similar?api_key=6c204a7d2fd848e65c5f5230dbc85bb9"));
        moviePayload.setTrailerResult(movieService.fetchTrailers("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=6c204a7d2fd848e65c5f5230dbc85bb9"));
        moviePayload.setCrew(movieService.fetchCrews("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=6c204a7d2fd848e65c5f5230dbc85bb9"));
        return moviePayload;
    }



}
