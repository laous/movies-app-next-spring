package com.miola.movie_reviews_website_spring_boot.restControllers;


import com.miola.movie_reviews_website_spring_boot.entities.MovieEntity;
import com.miola.movie_reviews_website_spring_boot.jsonModels.Movie;
import com.miola.movie_reviews_website_spring_boot.jsonModels.MovieResults;
import com.miola.movie_reviews_website_spring_boot.services.TMDbServiceImpl;
import com.miola.movie_reviews_website_spring_boot.services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/markWatched/{id_user}/{id_movie}")
    public boolean markAsWatched(@PathVariable("id_user") Long id_user, @PathVariable("id_movie") Long id_movie){
        if(userService.markOrUnmarkAsWatched(id_movie, id_user, true)) return true;
        return false;
    }

    @GetMapping("/nnMarkWatched/{id_user}/{id_movie}")
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
    public boolean removeFromFavoritesList(@PathVariable("id_user") Long id_user, @PathVariable("id_movie") Long id_movie){
        if(userService.addOrRemoveFromFavoriteList(id_movie, id_user, false)) return true;
        return false;
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

}
