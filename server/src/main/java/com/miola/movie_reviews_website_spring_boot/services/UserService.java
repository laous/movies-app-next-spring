package com.miola.movie_reviews_website_spring_boot.services;

import com.miola.movie_reviews_website_spring_boot.entities.MovieEntity;
import com.miola.movie_reviews_website_spring_boot.entities.User;

import java.util.List;

public interface UserService {
    boolean markOrUnmarkAsWatched(Long movieId, Long userId, boolean mark);
    boolean addOrRemoveFromWishList(Long movieId, Long userId, boolean add);
    boolean addOrRemoveFromFavoriteList(Long movieId, Long userId, boolean favorite);
    List<MovieEntity> fetchWatchedList(Long userId);
    List<MovieEntity> fetchWishList(Long userId);
    List<MovieEntity> fetchFavoriteList(Long userId);



}
