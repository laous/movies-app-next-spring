package com.miola.movie_reviews_website_spring_boot.jsonModels;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.miola.movie_reviews_website_spring_boot.entities.MovieEntity;

import java.util.List;


public class MovieResults {
    @JsonProperty("page")
    Integer page;

    @JsonProperty("total_results")
    Long total_results;

    @JsonProperty("total_pages")
    Long total_pages;

    @JsonProperty("results")
    List<Movie> results;

    public Integer getPage() {
        return page;
    }

    public Long getTotal_results() {
        return total_results;
    }

    public Long getTotal_pages() {
        return total_pages;
    }

    public List<Movie> getResults() {
        return results;
    }
}
