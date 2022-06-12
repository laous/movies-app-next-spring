
package com.miola.movie_reviews_website_spring_boot.services;

import com.miola.movie_reviews_website_spring_boot.entities.MovieEntity;
import com.miola.movie_reviews_website_spring_boot.entities.UserEntity;
import com.miola.movie_reviews_website_spring_boot.jsonModels.Review;
import com.miola.movie_reviews_website_spring_boot.jsonModels.User;

import java.util.List;

public interface UserService {
    boolean createUser(User user);
    boolean updateUser(User user);
    UserEntity fetchUser(Long id_user);
    boolean deleteUser(Long id_user);
    User authenticate(String username, String password);
    boolean markOrUnmarkAsWatched(Long movieId, Long userId, boolean mark);
    boolean addOrRemoveFromWishList(Long movieId, Long userId, boolean add);
    boolean addOrRemoveFromFavoriteList(Long movieId, Long userId, boolean favorite);
    List<MovieEntity> fetchWatchedList(Long userId);
    List<MovieEntity> fetchWishList(Long userId);
    List<MovieEntity> fetchFavoriteList(Long userId);




}
