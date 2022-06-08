package com.miola.movie_reviews_website_spring_boot.jsonModels;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;


@JsonIgnoreProperties(ignoreUnknown = true)
public class Crew {

        @JsonProperty("id")
        private Long id;

        @JsonProperty("known_for_department")
        private String department;

        @JsonProperty("name")
        private String name;

        @JsonProperty("profile_path")
        private String profile_image;

        @JsonProperty("character")
        private String character_name;

        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }

        public String getDepartment() {
                return department;
        }

        public void setDepartment(String department) {
                this.department = department;
        }

        public String getName() {
                return name;
        }

        public void setName(String name) {
                this.name = name;
        }

        public String getProfile_image() {
                return profile_image;
        }

        public void setProfile_image(String profile_image) {
                this.profile_image = profile_image;
        }

        public String getCharacter_name() {
                return character_name;
        }

        public void setCharacter_name(String character_name) {
                this.character_name = character_name;
        }
}
