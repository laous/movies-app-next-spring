package com.miola.movie_reviews_website_spring_boot.services;

import com.miola.movie_reviews_website_spring_boot.entities.ReviewEntity;
import com.miola.movie_reviews_website_spring_boot.jsonModels.Review;

import java.util.List;

public interface ReviewService {
    boolean createReview(Review review);
    boolean editeReview(Review review);
    boolean deleteReview(Review review);
    List<ReviewEntity> getAllUserReviews(Long userId);
    List<ReviewEntity> getReviewsByMovie(Long movieId);

}
