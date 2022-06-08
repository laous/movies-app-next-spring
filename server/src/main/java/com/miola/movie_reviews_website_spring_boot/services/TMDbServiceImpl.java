package com.miola.movie_reviews_website_spring_boot.services;

import com.miola.movie_reviews_website_spring_boot.entities.MovieEntity;
import com.miola.movie_reviews_website_spring_boot.jsonModels.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Service
public class TMDbServiceImpl implements TMDbService {
    @Value("${tmdb.api.key}")
    private String tmdbApiKey;

    @Value("${tmdb.base.url}")
    private String tmdbBaseUrl;

    @Value("${tmdb.top.rated.movie.url}")
    private String topRatedMovieUrl;

    @Value("${tmdb.popular.movie.url}")
    private String popularMovieUrl;

    @Value("${tmdb.trending.movie.url}")
    private String trendingMovieUrl;

    @Value("${tmdb.upcoming.movie.url}")
    private String upcomingMovieUrl;

    @Value("${tmdb.search.movie.url}")
    private String tmdbSearchMovieUrl;

    @Value("${tmdb.movie.id.url}")
    private String tmdbMovieIdUrl;


    @Autowired
    private RestTemplate restTemplate;


    @Override
    public List<Movie> fetchTopRatedMovieList() {
        MovieResults movieResults = restTemplate.getForObject(topRatedMovieUrl, MovieResults.class);
        return movieResults.getResults();
    }

    @Override
    public List<Movie> fetchPopularMovieList() {
        MovieResults movieResults = restTemplate.getForObject(popularMovieUrl, MovieResults.class);
        return movieResults.getResults();
    }

    @Override
    public List<Movie> fetchTrendingMovieList() {
        MovieResults movieResults = restTemplate.getForObject(trendingMovieUrl, MovieResults.class);
        return movieResults.getResults();
    }

    @Override
    public List<Movie> fetchUpcomingMovieList() {
        MovieResults movieResults = restTemplate.getForObject(upcomingMovieUrl, MovieResults.class);
        return movieResults.getResults();
    }

    @Override
    public List<Crew> fetchCrews(String uri) {
        CrewResult crewResult = restTemplate.getForObject(uri, CrewResult.class);
        return crewResult.getCrew();
    }

    @Override
    public List<Movie> fetchSimilarMoviesList(String uri) {
        MovieResults movieResults = restTemplate.getForObject(uri, MovieResults.class);
        return movieResults.getResults();
    }

    @Override
    public List<Trailer> fetchTrailers(String uri) {
        TrailerResult trailerResult = restTemplate.getForObject(uri, TrailerResult.class);
        return trailerResult.getTrailers();
    }

    @Override
    public Movie fetchMovieById(String uri) {
        Movie movie = restTemplate.getForObject(uri, Movie.class);
        return movie;
    }

    @Override
    public List<Movie> fetchMoviesBySearchQuery(String uri) {
        MovieResults movieResults = restTemplate.getForObject(uri,MovieResults.class);
        return movieResults.getResults();
    }




}
