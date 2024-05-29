package com.example.ecommerce.Controllers;


import com.example.ecommerce.DAO.providerRepository;
import com.example.ecommerce.models.provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/provider")
public class providercontroller {
    @Autowired
    private providerRepository iprovider;



            @GetMapping("/all")
    public List<provider>  getall(){
                return iprovider.findAll();
            }

@PostMapping("/save")
public provider saveprovider(@RequestBody provider p)
{return iprovider.save(p);

}}