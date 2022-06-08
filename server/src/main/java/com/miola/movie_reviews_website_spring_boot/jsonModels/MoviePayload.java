package com.miola.movie_reviews_website_spring_boot.jsonModels;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class MoviePayload {


    @JsonProperty("movie_fields")
    Movie movie;

    @JsonProperty("movie_trailers")
    List<Trailer> trailerResult;

    @JsonProperty("similar_movies")
    List<Movie> similarMovies;

    @JsonProperty("cast_and_crew")
    List<Crew> crew;

    public List<Crew> getCrew() {
        return crew;
    }

    public void setCrew(List<Crew> crew) {
        this.crew = crew;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public List<Trailer> getTrailerResult() {
        return trailerResult;
    }

    public void setTrailerResult(List<Trailer> trailerResult) {
        this.trailerResult = trailerResult;
    }

    public List<Movie> getSimilarMovies() {
        return similarMovies;
    }

    public void setSimilarMovies(List<Movie> similarMovies) {
        this.similarMovies = similarMovies;
    }
}
