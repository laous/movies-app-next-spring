package com.miola.movie_reviews_website_spring_boot.services;

import com.miola.movie_reviews_website_spring_boot.entities.MovieEntity;
import com.miola.movie_reviews_website_spring_boot.jsonModels.Crew;
import com.miola.movie_reviews_website_spring_boot.jsonModels.Movie;
import com.miola.movie_reviews_website_spring_boot.jsonModels.MovieResults;
import com.miola.movie_reviews_website_spring_boot.jsonModels.Trailer;

import java.util.List;

public interface TMDbService {
    Movie fetchMovieById(String uri);
    List<Movie> fetchMoviesBySearchQuery(String uri);
    List<Movie> fetchTopRatedMovieList();
    List<Movie> fetchPopularMovieList();
    List<Movie> fetchTrendingMovieList();
    List<Movie> fetchUpcomingMovieList();
    List<Crew>  fetchCrews(String uri);
    List<Movie> fetchSimilarMoviesList(String uri);
    List<Trailer> fetchTrailers(String uri);

}
