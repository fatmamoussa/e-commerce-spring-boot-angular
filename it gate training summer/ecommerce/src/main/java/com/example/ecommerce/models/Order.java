package com.example.ecommerce.models;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name="orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private Long Ref;
    private String Date;

    @ManyToOne
    @JoinColumn(name = "idcustomer")
    private Customer customer;


    @ManyToMany
    @JoinTable(name = "ord_prod",joinColumns = @JoinColumn(name = "ord_ID"),
            inverseJoinColumns=@JoinColumn(name = "prod_ID"))
    private Collection<Product> products;


    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }



    public Collection<Product> getProducts() {
        return products;
    }

    public void setProducts(Collection<Product> products) {
        this.products = products;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Long getRef() {
        return Ref;
    }

    public void setRef(Long ref) {
        Ref = ref;
    }

    public String getDate() {
        return Date;
    }

    public void setDate(String date) {
        this.Date = date;
    }

    public Long getPrice() {
        return Price;
    }

    public void setPrice(Long price) {
        Price = price;
    }

    private Long Price;
}
