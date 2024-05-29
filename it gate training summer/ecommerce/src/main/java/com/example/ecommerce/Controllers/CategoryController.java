package com.example.ecommerce.Controllers;

import com.example.ecommerce.DAO.CategoryRepository;
import com.example.ecommerce.models.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/category")
public class CategoryController {
    @Autowired
    private CategoryRepository icategory;
    @GetMapping ("/all")
    public List<Category> getall(){
        return icategory.findAll();
    }
    @PostMapping("/save")
    public Category savecategory(@RequestBody Category g){
        return icategory.save(g);
    }
}
