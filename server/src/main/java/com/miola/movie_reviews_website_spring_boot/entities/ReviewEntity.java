package com.miola.movie_reviews_website_spring_boot.entities;


import javax.persistence.*;
import java.util.Date;

@Entity
public class ReviewEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String reviewText;
    // rating with starts
    private double rating;
    private String reviewHeadLine;
    private Date reviewDate;
    @ManyToOne
    @JoinColumn(name = "movie_id")
    private MovieEntity movie;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    public String getReviewHeadLine() {
        return reviewHeadLine;
    }

    public void setReviewHeadLine(String reviewHeadLine) {
        this.reviewHeadLine = reviewHeadLine;
    }

    public Date getReviewDate() {
        return reviewDate;
    }

    public void setReviewDate(Date reviewDate) {
        this.reviewDate = reviewDate;
    }

    public ReviewEntity() {

    }

    public UserEntity getUser() {
        return user;
    }

    public MovieEntity getMovie() {
        return movie;
    }

    public ReviewEntity(String reviewText, double rating, MovieEntity movie, UserEntity user, String reviewHeadLine, Date reviewDate) {
        this.reviewText = reviewText;
        this.rating = rating;
        this.movie = movie;
        this.user = user;
        this.reviewHeadLine = reviewHeadLine;
        this.reviewDate = reviewDate;
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

    @Override
    public String toString() {
        return "ReviewEntity{" +
                "id=" + id +
                ", reviewText='" + reviewText + '\'' +
                ", rating=" + rating +
                ", reviewHeadLine='" + reviewHeadLine + '\'' +
                ", reviewDate=" + reviewDate +
                '}';
    }
}
