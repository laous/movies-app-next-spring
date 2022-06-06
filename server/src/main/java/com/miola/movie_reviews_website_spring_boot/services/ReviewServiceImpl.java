package com.miola.movie_reviews_website_spring_boot.services;

import com.miola.movie_reviews_website_spring_boot.entities.MovieEntity;
import com.miola.movie_reviews_website_spring_boot.entities.ReviewEntity;
import com.miola.movie_reviews_website_spring_boot.entities.UserEntity;
import com.miola.movie_reviews_website_spring_boot.jsonModels.Review;
import com.miola.movie_reviews_website_spring_boot.repos.MovieRepository;
import com.miola.movie_reviews_website_spring_boot.repos.ReviewRepository;
import com.miola.movie_reviews_website_spring_boot.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private MovieRepository movieRepository;

    @Override
    public boolean createReview(Review review) {
        if(review != null) {
            ReviewEntity reviewEntity = new ReviewEntity();
            MovieEntity movie = movieRepository.findById(review.getMovieId()).orElse(null);
            if(movie == null) {
                MovieEntity movieEntity = new MovieEntity();
                movieEntity.setMovieId(review.getMovieId());
                movieRepository.save(movieEntity);
                movie = movieRepository.findById(movieEntity.getMovieId()).orElse(null);
            }
            reviewEntity.setMovie(movie);
            UserEntity user = userRepository.findById(review.getUserId()).orElse(null);
            if(user == null) return false;
            reviewEntity.setUser(user);
            reviewEntity.setReviewText(review.getReviewText());
            reviewEntity.setRating(review.getRating());
            reviewRepository.save(reviewEntity);
            return true;
        }
        return false;
    }

    @Override
    public boolean editeReview(Review review) {
        if(review != null) {
            ReviewEntity reviewEntity = reviewRepository.findById(review.getReviewId()).orElse(null);
            if(reviewEntity != null) {
                MovieEntity movie = movieRepository.findById(review.getMovieId()).orElse(null);
                reviewEntity.setMovie(movie);
                UserEntity user = userRepository.findById(review.getUserId()).orElse(null);
                if (user == null) return false;
                reviewEntity.setUser(user);
                reviewEntity.setReviewText(review.getReviewText());
                reviewEntity.setRating(review.getRating());
                reviewRepository.save(reviewEntity);
                return true;
            }
            return false;
        }
        return false;
    }

    @Override
    public boolean deleteReview(Review review) {
        try{
            reviewRepository.deleteById(review.getReviewId());
            return true;
        }catch (Exception e){
            return false;
        }
    }

    @Override
    public List<ReviewEntity> getAllUserReviews(Long userId) {
        UserEntity user = userRepository.findById(userId).orElse(null);
        if(user != null) return reviewRepository.findByUser(user);
        else return null;
    }

    @Override
    public List<ReviewEntity> getReviewsByMovie(Long movieId) {
        return reviewRepository.findByMovie(movieRepository.findById(movieId).orElse(null));
    }
}
