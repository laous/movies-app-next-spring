package com.miola.movie_reviews_website_spring_boot.services;

import com.miola.movie_reviews_website_spring_boot.entities.MovieEntity;
import com.miola.movie_reviews_website_spring_boot.entities.UserEntity;
import com.miola.movie_reviews_website_spring_boot.jsonModels.User;
import com.miola.movie_reviews_website_spring_boot.repos.MovieRepository;
import com.miola.movie_reviews_website_spring_boot.repos.UserRepository;
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
    public boolean authenticate(String usernameOrEmail, String password) {
        String username = null, email = null;
        if(usernameOrEmail.contains("@")) email =  usernameOrEmail;
        else username = usernameOrEmail;
        UserEntity user = userRepository.findByUsernameOrEmail(username, email);
        if(user == null){
            return false;
        }else{
            if(encryptionMd5(password).equals(user.getPassword())) {
                return true;
            }
            else return false;
        }
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
        UserEntity user = userRepository.findById(userId).orElse(null);
        MovieEntity movie = movieRepository.findById(movieId).orElse(null);
        if(movie == null) {
            movie = new MovieEntity();
            movie.setMovieId(movieId);
            movieRepository.save(movie);
        }
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
        UserEntity user = userRepository.findById(userId).orElse(null);
        MovieEntity movie = movieRepository.findById(movieId).orElse(null);
        if(movie == null) {
            movie = new MovieEntity();
            movie.setMovieId(movieId);
            movieRepository.save(movie);
        }
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
        UserEntity user = userRepository.findById(userId).orElse(null);
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
        UserEntity user = userRepository.findById(userId).orElse(null);
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
        UserEntity user = userRepository.findById(userId).orElse(null);
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
