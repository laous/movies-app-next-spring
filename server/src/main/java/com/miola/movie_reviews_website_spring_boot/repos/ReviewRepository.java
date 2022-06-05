package com.miola.movie_reviews_website_spring_boot.repos;

import com.miola.movie_reviews_website_spring_boot.entities.Review;
import org.springframework.data.repository.CrudRepository;

public interface ReviewRepository extends CrudRepository<Review, Long> {
}