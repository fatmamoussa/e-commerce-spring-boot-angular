package com.example.ecommerce.DAO;

import com.example.ecommerce.models.provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface providerRepository extends JpaRepository<provider,Long> {
}
