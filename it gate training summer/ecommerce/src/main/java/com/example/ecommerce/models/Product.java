package com.example.ecommerce.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;

@Entity

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String name;
    private  Long price ;
    private String description;

    @ManyToOne
    @JoinColumn (name = "idsubcategory")
    private SubCategory subcategory ;


    @ManyToOne
    @JoinColumn(name = "idprovider")
    private provider provider;

    @ManyToMany (mappedBy = "products")
    private Collection<Order> orders;

    public SubCategory getSubcategory() {
        return subcategory;
    }

    public void setSubcategory(SubCategory subcategory) {
        this.subcategory = subcategory;
    }


    public com.example.ecommerce.models.provider getProvider() {
        return provider;
    }

    public void setProvider(com.example.ecommerce.models.provider provider) {
        this.provider = provider;
    }


@JsonIgnore
    public Collection<Order> getOrders() {
        return orders;
    }

    public void setOrders(Collection<Order> orders) {
        this.orders = orders;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
