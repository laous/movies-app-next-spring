package com.miola.movie_reviews_website_spring_boot.jsonModels;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;



public class Genre {
    @JsonProperty("id")
    private int id;

    @JsonProperty("name")
    private String name;
}
