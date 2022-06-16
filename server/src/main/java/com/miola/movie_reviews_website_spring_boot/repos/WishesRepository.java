package com.miola.movie_reviews_website_spring_boot.repos;

import com.miola.movie_reviews_website_spring_boot.entities.MovieEntity;
import com.miola.movie_reviews_website_spring_boot.entities.UserEntity;
import com.miola.movie_reviews_website_spring_boot.entities.Wishes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishesRepository extends JpaRepository<Wishes, Long> {

    Wishes findByUserAndMovie(UserEntity user, MovieEntity movie);
    List<Wishes> findByUser(UserEntity user);
}