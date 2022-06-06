
package com.miola.movie_reviews_website_spring_boot.entities;


import javax.persistence.*;
import java.util.Set;

@Entity
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String username;
    private String email;
    private String password;
    @OneToMany
    private Set<MovieEntity> whishList;
    @OneToMany
    private Set<MovieEntity> favorites;
    @OneToMany
    private Set<MovieEntity> watchedList;


    public UserEntity(String username, String email, String password, Set<MovieEntity> whishList, Set<MovieEntity> favorites) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.whishList = whishList;
        this.favorites = favorites;
    }

    public UserEntity() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<MovieEntity> getWhishList() {
        return whishList;
    }

    public void setWhishList(Set<MovieEntity> whishList) {
        this.whishList = whishList;
    }

    public Set<MovieEntity> getFavorites() {
        return favorites;
    }

    public void setFavorites(Set<MovieEntity> favorites) {
        this.favorites = favorites;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<MovieEntity> getWatchedList() {
        return watchedList;
    }

    public void setWatchedList(Set<MovieEntity> watchedList) {
        this.watchedList = watchedList;
    }
}
