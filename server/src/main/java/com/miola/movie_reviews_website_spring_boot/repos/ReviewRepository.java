package com.miola.movie_reviews_website_spring_boot.repos;


import com.miola.movie_reviews_website_spring_boot.entities.MovieEntity;
import com.miola.movie_reviews_website_spring_boot.entities.ReviewEntity;
import com.miola.movie_reviews_website_spring_boot.entities.UserEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ReviewRepository extends CrudRepository<ReviewEntity, Long> {
    List<ReviewEntity> findByUser(UserEntity user);
    List<ReviewEntity> findByMovie(MovieEntity movie);
}