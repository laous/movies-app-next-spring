package com.miola.movie_reviews_website_spring_boot.entities;


import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "movie")
public class MovieEntity {
    @Id
    private Long movieId;
    private String name;
    private String description;
    @OneToMany(mappedBy = "movie", fetch = FetchType.EAGER)
    private Set<ReviewEntity> reviewSet;

    public MovieEntity() {

    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<ReviewEntity> getReviewSet() {
        return reviewSet;
    }

    public void setReviewSet(Set<ReviewEntity> reviewSet) {
        this.reviewSet = reviewSet;
    }

    @Override
    public String toString() {
        return "MovieEntity{" +
                "movieId=" + movieId +
                ", name='" + name + '\'' +
                ", description='" + description +
                '}';
    }
}
