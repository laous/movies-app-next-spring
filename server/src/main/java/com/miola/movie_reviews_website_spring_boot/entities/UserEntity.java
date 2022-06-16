
package com.miola.movie_reviews_website_spring_boot.entities;


import javax.persistence.*;
import java.util.Set;

@Entity
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String fullname;
    private String username;
    private String email;
    private String password;

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private Set<Watched> watchedList;

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private Set<Favorites> favorites;

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private Set<Wishes> wishes;


    public Set<Favorites> getFavorites() {
        return favorites;
    }

    public Set<Wishes> getWishes() {
        return wishes;
    }

    public void setWishes(Set<Wishes> wishes) {
        this.wishes = wishes;
    }

    public void setFavorites(Set<Favorites> favorites) {
        this.favorites = favorites;
    }


    public UserEntity() {
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
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


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Watched> getWatchedList() {
        return watchedList;
    }

    public void setWatchedList(Set<Watched> watchedList) {
        this.watchedList = watchedList;
    }

    @Override
    public String toString() {
        return "UserEntity{" +
                "id=" + id +
                ", fullname='" + fullname + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
