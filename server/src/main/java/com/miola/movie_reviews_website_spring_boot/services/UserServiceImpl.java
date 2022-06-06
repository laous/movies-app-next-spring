package com.miola.movie_reviews_website_spring_boot.services;

import com.miola.movie_reviews_website_spring_boot.entities.MovieEntity;
import com.miola.movie_reviews_website_spring_boot.entities.User;
import com.miola.movie_reviews_website_spring_boot.repos.MovieRepository;
import com.miola.movie_reviews_website_spring_boot.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MovieRepository movieRepository;

    @Override
    public boolean markOrUnmarkAsWatched(Long movieId, Long userId, boolean mark) {
        User user = userRepository.findById(userId).orElse(null);
        MovieEntity movie = movieRepository.findById(movieId).orElse(null);

        if(user != null && movie != null){
             Set<MovieEntity> watchedList = user.getWatchedList();
             if(mark == true)  watchedList.add(movie);
             if(mark == false)  watchedList.remove(movie);
             user.setWatchedList(watchedList);
             userRepository.save(user);
            return true;
        }else{
            return false;
        }
    }

    @Override
    public boolean addOrRemoveFromWishList(Long movieId, Long userId, boolean add) {
        User user = userRepository.findById(userId).orElse(null);
        MovieEntity movie = movieRepository.findById(movieId).orElse(null);
        if(user != null && movie != null){
            Set<MovieEntity> wishList = user.getWhishList();
            if(add == true)  wishList.add(movie);
            if(add == false)  wishList.remove(movie);
            user.setWhishList(wishList);
            userRepository.save(user);
            return true;
        }else{
            return false;
        }
    }

    @Override
    public boolean addOrRemoveFromFavoriteList(Long movieId, Long userId, boolean favorite) {
        User user = userRepository.findById(userId).orElse(null);
        MovieEntity movie = movieRepository.findById(movieId).orElse(null);
        if(user != null && movie != null){
            Set<MovieEntity> favoritesList = user.getFavorites();
            if(favorite == true)  favoritesList.add(movie);
            if(favorite == false)  favoritesList.remove(movie);
            user.setFavorites(favoritesList);
            userRepository.save(user);
            return true;
        }else{
            return false;
        }
    }

    @Override
    public List<MovieEntity> fetchWatchedList(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        List<MovieEntity> L = new ArrayList<>();
        if(user != null) {
            for (MovieEntity M : user.getWatchedList()
                 ) {
                L.add(M);
            }
            return L;
        }
        else return null;

    }

    @Override
    public List<MovieEntity> fetchWishList(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        List<MovieEntity> L = new ArrayList<>();
        if(user != null) {
            for (MovieEntity M : user.getWhishList()
            ) {
                L.add(M);
            }
            return L;
        }
        else return null;
    }

    @Override
    public List<MovieEntity> fetchFavoriteList(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        List<MovieEntity> L = new ArrayList<>();
        if(user != null) {
            for (MovieEntity M : user.getFavorites()
            ) {
                L.add(M);
            }
            return L;
        }
        else return null;
    }
}
