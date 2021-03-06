package com.miola.movie_reviews_website_spring_boot.services;

import com.miola.movie_reviews_website_spring_boot.entities.*;
import com.miola.movie_reviews_website_spring_boot.jsonModels.User;
import com.miola.movie_reviews_website_spring_boot.repos.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private WatchedRepository watchedRepository;
    @Autowired
    private FavoritesRepository favoritesRepository;
    @Autowired
    private WishesRepository wishesRepository;

    @Override
    public boolean createUser(User user) {
        UserEntity userEntity = new UserEntity();
        if(user != null) {
            try{
                userEntity.setFullname(user.getFullname());
                userEntity.setUsername(user.getUsername());
                userEntity.setEmail(user.getEmail());
                userEntity.setPassword(user.getPassword());
                String password = userEntity.getPassword();
                userEntity.setPassword(encryptionMd5(password));
                userRepository.save(userEntity);
                return true;
            }catch (Exception e){
                e.printStackTrace();
                return false;
            }
        }else{
            return false;
        }

    }

    @Override
    public boolean updateUser(User user) {
        if(user != null && userRepository.existsById(user.getUserId()) == true) {
            try{
                UserEntity userEntity = userRepository.findById(user.getUserId()).orElse(null);
                //userEntity.setId(user.getUserId());
                userEntity.setFullname(user.getFullname());
                userEntity.setUsername(user.getUsername());
                userEntity.setEmail(user.getEmail());
                userEntity.setPassword(user.getPassword());
                String password = userEntity.getPassword();
                userEntity.setPassword(encryptionMd5(password));
                userRepository.save(userEntity);
                return true;
            }catch (Exception e){
                e.printStackTrace();
                return false;
            }
        }else{
            return false;
        }
    }

    @Override
    public UserEntity fetchUser(Long id_user) {
        return userRepository.findById(id_user).orElse(null);
    }

    @Override
    public boolean deleteUser(Long id_user) {
        if (userRepository.existsById(id_user)){
            userRepository.deleteById(id_user);
            return true;
        }
        return false;
    }

    @Override
    public User authenticate(String usernameOrEmail, String password) {
        String username = null, email = null;
        if(usernameOrEmail.contains("@")) email =  usernameOrEmail;
        else username = usernameOrEmail;
        UserEntity user = userRepository.findByUsernameOrEmail(username, email);
        System.out.println("user entity : "+userRepository.findByUsernameOrEmail(username, email));
        System.out.println("user password : "+password);
        if(user == null){
            return null;
        }
        if(encryptionMd5(password).equals(user.getPassword())) {
                User user1 = new User();
                user1.setUserId(user.getId());
                user1.setFullname(user.getFullname());
                user1.setUsername(user.getUsername());
                user1.setEmail(user.getEmail());
                System.out.println("user1  : "+user1);
                //user1.setPassword();
                return user1;
        } else return null;

    }

    //TODO create movie if it does not exist
    @Override
    public boolean markOrUnmarkAsWatched(Long movieId, Long userId, boolean mark) {
        UserEntity user = userRepository.findById(userId).orElse(null);
        MovieEntity movie = movieRepository.findById(movieId).orElse(null);
        if(movie == null) {
            movie = new MovieEntity();
            movie.setMovieId(movieId);
            movieRepository.save(movie);
        }
        if(user != null){
            if(mark == true){
                Watched watched = new Watched();
                watched.setUser(user);
                watched.setMovie(movie);
                watchedRepository.save(watched);;
            }
             if(mark == false) {
                 Watched watched = watchedRepository.findByUserAndMovie(user, movie);
                 if(watched != null)
                     watchedRepository.delete(watched);
             }
            return true;
        }else{
            return false;
        }
    }

    @Override
    public boolean addOrRemoveFromWishList(Long movieId, Long userId, boolean add) {
        UserEntity user = userRepository.findById(userId).orElse(null);
        MovieEntity movie = movieRepository.findById(movieId).orElse(null);
        if(movie == null) {
            movie = new MovieEntity();
            movie.setMovieId(movieId);
            movieRepository.save(movie);
        }
        if(user != null){
            if(add == true){
                Wishes wishes = new Wishes();
                wishes.setUser(user);
                wishes.setMovie(movie);
                wishesRepository.save(wishes);
            }
            if(add == false) {
                Wishes wishes = wishesRepository.findByUserAndMovie(user, movie);
                if(wishes != null)
                    wishesRepository.delete(wishes);
            }
            return true;
        }else{
            return false;
        }
    }

    @Override
    public boolean addOrRemoveFromFavoriteList(Long movieId, Long userId, boolean favorite) {
        UserEntity user = userRepository.findById(userId).orElse(null);
        MovieEntity movie = movieRepository.findById(movieId).orElse(null);
        if(movie == null) {
            movie = new MovieEntity();
            movie.setMovieId(movieId);
            movieRepository.save(movie);
        }
        if(user != null){
            if(favorite == true){
                Favorites favorites = new Favorites();
                favorites.setUser(user);
                favorites.setMovie(movie);
                favoritesRepository.save(favorites);;
            }
            if(favorite == false) {
                Favorites favorites = favoritesRepository.findByUserAndMovie(user, movie);
                if(favorites != null)
                    favoritesRepository.delete(favorites);
            }
            return true;
        }else{
            return false;
        }
    }

    @Override
    public List<MovieEntity> fetchWatchedList(Long userId) {
        UserEntity user = userRepository.findById(userId).orElse(null);
        List<MovieEntity> L = new ArrayList<>();
        if(user != null) {
            List<Watched> watcheds = watchedRepository.findByUser(user);
            for (Watched M : watcheds
                 ) {
                L.add(M.getMovie());
            }
            return L;
        }
        else return null;

    }

    @Override
    public List<MovieEntity> fetchWishList(Long userId) {
        UserEntity user = userRepository.findById(userId).orElse(null);
        List<MovieEntity> L = new ArrayList<>();
        if(user != null) {
            List<Wishes> wishes = wishesRepository.findByUser(user);
            for (Wishes W : wishes
            ) {
                L.add(W.getMovie());
            }
            return L;
        }
        else return null;
    }

    @Override
    public List<MovieEntity> fetchFavoriteList(Long userId) {
        UserEntity user = userRepository.findById(userId).orElse(null);
        List<MovieEntity> L = new ArrayList<>();
        if(user != null) {
            List<Favorites> favorites = favoritesRepository.findByUser(user);
            for (Favorites F : favorites
            ) {
                L.add(F.getMovie());
            }
            return L;
        }
        else return null;
    }











    //============================================================\\
    public String encryptionMd5(String passwordToHash){
        String generatedPassword = null;
        try {
            // Create MessageDigest instance for MD5
            MessageDigest md = MessageDigest.getInstance("MD5");

            // Add password bytes to digest
            md.update(passwordToHash.getBytes());

            // Get the hash's bytes
            byte[] bytes = md.digest();

            // This bytes[] has bytes in decimal format. Convert it to hexadecimal format
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < bytes.length; i++) {
                sb.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
            }

            // Get complete hashed password in hex format
            generatedPassword = sb.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return generatedPassword;
    }
}
