package com.miola.movie_reviews_website_spring_boot.jsonModels;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.miola.movie_reviews_website_spring_boot.entities.MovieEntity;
import com.miola.movie_reviews_website_spring_boot.entities.User;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Review {

    @JsonProperty("reviewId")
    private Long reviewId;
    @JsonProperty("movieId")
    private Long movieId;
    @JsonProperty("rating")
    private double rating;
    @JsonProperty("reviewText")
    private String reviewText;
    @JsonProperty("userId")
    private Long userId;

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getReviewId() {
        return reviewId;
    }

    public void setReviewId(Long reviewId) {
        this.reviewId = reviewId;
    }

    public Review(Long movieId, double rating, String reviewText, Long userId) {
        this.movieId = movieId;
        this.rating = rating;
        this.reviewText = reviewText;
        this.userId = userId;
    }

    public Review() {
    }

    @Override
    public String toString() {
        return "Review{" +
                "movieId='" + movieId + '\'' +
                ", rating=" + rating +
                ", reviewText='" + reviewText + '\'' +
                ", userId='" + userId + '\'' +
                '}';
    }
}
