package com.miola.movie_reviews_website_spring_boot.entities;


import javax.persistence.*;

@Entity
public class ReviewEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String reviewText;
    // rating with starts
    private double rating;
    @ManyToOne
    @JoinColumn(name = "movie_id")
    private MovieEntity movie;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    public ReviewEntity() {

    }

    public UserEntity getUser() {
        return user;
    }

    public MovieEntity getMovie() {
        return movie;
    }

    public ReviewEntity(String reviewText, double rating, MovieEntity movie, UserEntity user) {
        this.reviewText = reviewText;
        this.rating = rating;
        this.movie = movie;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public void setMovie(MovieEntity movie) {
        this.movie = movie;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}
