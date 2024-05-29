package com.example.ecommerce.DAO;

import com.example.ecommerce.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoustomRepository extends JpaRepository<Customer,Long> {
}
