package com.miola.movie_reviews_website_spring_boot.jsonModels;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;

@JsonRootName("production_country")
public class ProductionCountry {
    @JsonProperty("iso_3166_1")
    private String isoCode;
    @JsonProperty("name")
    private String name;


}

