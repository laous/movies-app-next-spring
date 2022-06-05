package com.miola.movie_reviews_website_spring_boot.repos;

import com.miola.movie_reviews_website_spring_boot.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}