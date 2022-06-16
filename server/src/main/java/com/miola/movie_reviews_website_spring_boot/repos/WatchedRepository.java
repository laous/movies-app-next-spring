package com.miola.movie_reviews_website_spring_boot.repos;

import com.miola.movie_reviews_website_spring_boot.entities.MovieEntity;
import com.miola.movie_reviews_website_spring_boot.entities.UserEntity;
import com.miola.movie_reviews_website_spring_boot.entities.Watched;
import com.miola.movie_reviews_website_spring_boot.jsonModels.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WatchedRepository extends JpaRepository<Watched, Long> {

    Watched findByUserAndMovie(UserEntity user, MovieEntity movie);
    List<Watched> findByUser(UserEntity user);
}