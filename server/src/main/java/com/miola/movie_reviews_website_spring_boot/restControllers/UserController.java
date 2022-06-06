package com.miola.movie_reviews_website_spring_boot.restControllers;


import com.miola.movie_reviews_website_spring_boot.entities.MovieEntity;
import com.miola.movie_reviews_website_spring_boot.entities.ReviewEntity;
import com.miola.movie_reviews_website_spring_boot.jsonModels.Movie;
import com.miola.movie_reviews_website_spring_boot.jsonModels.MovieResults;
import com.miola.movie_reviews_website_spring_boot.jsonModels.Review;
import com.miola.movie_reviews_website_spring_boot.services.ReviewServiceImpl;
import com.miola.movie_reviews_website_spring_boot.services.TMDbServiceImpl;
import com.miola.movie_reviews_website_spring_boot.services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServiceImpl userService;
    @Autowired
    private TMDbServiceImpl tmDbService;
    @Autowired
    private ReviewServiceImpl reviewService;

    @GetMapping("/markWatched/{id_user}/{id_movie}")
    public boolean markAsWatched(@PathVariable("id_user") Long id_user, @PathVariable("id_movie") Long id_movie){
        if(userService.markOrUnmarkAsWatched(id_movie, id_user, true)) return true;
        return false;
    }

    @GetMapping("/unMarkWatched/{id_user}/{id_movie}")
    public boolean unMarkAsWatched(@PathVariable("id_user") Long id_user, @PathVariable("id_movie") Long id_movie){
        if(userService.markOrUnmarkAsWatched(id_movie, id_user, false)) return true;
        return false;
    }

    @GetMapping("/watchedList/{id_user}")
    public List<Movie> getWatchedList(@PathVariable("id_user") Long id_user){
        List<Movie> watchedListJson = new ArrayList<>();
        for(MovieEntity M : userService.fetchWatchedList(id_user)){
            String url = "https://api.themoviedb.org/3/movie/"+M.getMovieId()+"?api_key=6c204a7d2fd848e65c5f5230dbc85bb9";
            Movie m = tmDbService.fetchMovieById(url);
            watchedListJson.add(m);
        }
        return watchedListJson;
    }
    @GetMapping("/addToWishList/{id_user}/{id_movie}")
    public boolean addToWishList(@PathVariable("id_user") Long id_user, @PathVariable("id_movie") Long id_movie){
        if(userService.addOrRemoveFromWishList(id_movie, id_user, true)) return true;
        return false;
    }
    @GetMapping("/removeFromWishList/{id_user}/{id_movie}")
    public boolean removeFromWishList(@PathVariable("id_user") Long id_user, @PathVariable("id_movie") Long id_movie){
        if(userService.addOrRemoveFromWishList(id_movie, id_user, false)) return true;
        return false;
    }
    @GetMapping("/wishList/{id_user}")
    public List<Movie> getWishList(@PathVariable("id_user") Long id_user){
        List<Movie> wishListJson = new ArrayList<>();
        for(MovieEntity M : userService.fetchWishList(id_user)){
            String url = "https://api.themoviedb.org/3/movie/"+M.getMovieId()+"?api_key=6c204a7d2fd848e65c5f5230dbc85bb9";
            Movie m = tmDbService.fetchMovieById(url);
            wishListJson.add(m);
        }
        return wishListJson;
    }
    @GetMapping("/addToFavoritesList/{id_user}/{id_movie}")
    public boolean addToFavoritesList(@PathVariable("id_user") Long id_user, @PathVariable("id_movie") Long id_movie){
        if(userService.addOrRemoveFromFavoriteList(id_movie, id_user, true)) return true;
        return false;
    }
    @GetMapping("/removeFromFavoritesList/{id_user}/{id_movie}")
    public ResponseEntity removeFromFavoritesList(@PathVariable("id_user") Long id_user, @PathVariable("id_movie") Long id_movie){
        if(userService.addOrRemoveFromFavoriteList(id_movie, id_user, false)) return new ResponseEntity<>("true", HttpStatus.OK);
        return new ResponseEntity<>("true", HttpStatus.OK);
    }
    @GetMapping("/favoritesList/{id_user}")
    public List<Movie> getFavoritesList(@PathVariable("id_user") Long id_user){
        List<Movie> favoritesListJson = new ArrayList<>();
        for(MovieEntity M : userService.fetchFavoriteList(id_user)){
            String url = "https://api.themoviedb.org/3/movie/"+M.getMovieId()+"?api_key=6c204a7d2fd848e65c5f5230dbc85bb9";
            Movie m = tmDbService.fetchMovieById(url);
            favoritesListJson.add(m);
        }
        return favoritesListJson;
    }


    @PostMapping("/review")
    public ResponseEntity createReview(@RequestBody Review review){
        if(reviewService.createReview(review)) return new ResponseEntity<>("true", HttpStatus.OK);
        else return new ResponseEntity<>("false", HttpStatus.OK);
    }

    @PutMapping("/review")
    public ResponseEntity editReview(@RequestBody Review review){
        if(reviewService.editeReview(review)) return new ResponseEntity<>("true", HttpStatus.OK);
        else return new ResponseEntity<>("false", HttpStatus.OK);
    }

    @DeleteMapping("/review")
    public ResponseEntity deleteReview(@RequestBody Review review){
        if(reviewService.deleteReview(review)) return new ResponseEntity<>("true", HttpStatus.OK);
        else return new ResponseEntity<>("false", HttpStatus.OK);
    }

    @GetMapping("/review/user/{id_user}")
    public List<Review> getReviewsByUser(@PathVariable("id_user") Long id_user){
        List<Review> reviewsJson = new ArrayList<>();
        for(ReviewEntity R : reviewService.getAllUserReviews(id_user)){
            Review r = new Review();
            r.setReviewId(R.getId());
            r.setMovieId(R.getMovie().getMovieId());
            r.setUserId(R.getUser().getId());
            r.setRating(R.getRating());
            r.setReviewText(R.getReviewText());
            reviewsJson.add(r);
        }
        return reviewsJson;
    }

    @GetMapping("/review/movie/{id_movie}")
    public List<Review> getReviewsByMovie(@PathVariable("id_movie") Long id_movie){
        List<Review> reviewsJson = new ArrayList<>();
        for(ReviewEntity R : reviewService.getReviewsByMovie(id_movie)){
            Review r = new Review();
            r.setReviewId(R.getId());
            r.setMovieId(R.getMovie().getMovieId());
            r.setUserId(R.getUser().getId());
            r.setRating(R.getRating());
            r.setReviewText(R.getReviewText());
            reviewsJson.add(r);
        }
        return reviewsJson;
    }







}
