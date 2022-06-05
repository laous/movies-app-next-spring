
package com.miola.movie_reviews_website_spring_boot.entities;


import javax.persistence.*;
import java.util.Set;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String username;
    private String email;
    private String password;
    @OneToMany
    private Set<Movie> whishList;
    @OneToMany
    private Set<Movie> favorites;

    public User(String username, String email, String password, Set<Movie> whishList, Set<Movie> favorites) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.whishList = whishList;
        this.favorites = favorites;
    }

    public User() {
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

    public Set<Movie> getWhishList() {
        return whishList;
    }

    public void setWhishList(Set<Movie> whishList) {
        this.whishList = whishList;
    }

    public Set<Movie> getFavorites() {
        return favorites;
    }

    public void setFavorites(Set<Movie> favorites) {
        this.favorites = favorites;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
