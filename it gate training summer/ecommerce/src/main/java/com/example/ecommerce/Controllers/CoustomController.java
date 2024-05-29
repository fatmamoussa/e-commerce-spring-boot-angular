package com.example.ecommerce.Controllers;


import com.example.ecommerce.DAO.CoustomRepository;
import com.example.ecommerce.DAO.UserRepository;
import com.example.ecommerce.models.Customer;
import com.example.ecommerce.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/coustom")
public class CoustomController {
    @Autowired
    private CoustomRepository iCoustom;
    @GetMapping("/all")
    public List<Customer> getall(){
        return iCoustom.findAll();
    }

@PostMapping("/save")
public Customer savecoustom(@RequestBody Customer c) {
    return  iCoustom.save(c);
}
}

