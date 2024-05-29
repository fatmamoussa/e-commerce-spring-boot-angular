package com.example.ecommerce.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long Id;
    private String title;
    private String description;



    @OneToMany(mappedBy = "category")
    private java.util.Collection<SubCategory> subCategories;
@JsonIgnore
    public Collection<SubCategory> getSubCategories() {
        return subCategories;
    }

    public void setSubCategories(java.util.Collection<SubCategory> subCategories) {
        this.subCategories = subCategories;
    }




    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
