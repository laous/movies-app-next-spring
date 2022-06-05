package com.miola.movie_reviews_website_spring_boot.entities;


import javax.persistence.*;
import java.util.Set;

@Entity
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    // the movie's id in the TMDB Api
    private Long mdbdId;

    @OneToMany(mappedBy = "movie", fetch = FetchType.EAGER)
    private Set<Review> reviewSet;

    public Movie(Long mdbdId, Set<Review> reviewSet) {
        this.mdbdId = mdbdId;
        this.reviewSet = reviewSet;
    }

    public Movie() {

    }

    public Long getMdbdId() {
        return mdbdId;
    }

    public void setMdbdId(Long mdbdId) {
        this.mdbdId = mdbdId;
    }

    public Set<Review> getReviewSet() {
        return reviewSet;
    }

    public void setReviewSet(Set<Review> reviewSet) {
        this.reviewSet = reviewSet;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
