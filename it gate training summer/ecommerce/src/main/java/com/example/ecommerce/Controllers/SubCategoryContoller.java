package com.example.ecommerce.Controllers;

import com.example.ecommerce.DAO.CategoryRepository;
import com.example.ecommerce.DAO.SubCategoryRepository;
import com.example.ecommerce.models.Category;
import com.example.ecommerce.models.SubCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/subcategory")
public class SubCategoryContoller {
    @Autowired
    private SubCategoryRepository isubcategory;

    @Autowired
    private CategoryRepository icat;
    @GetMapping("/all")
    public List<SubCategory> getall(){
        return isubcategory.findAll();
    }

    @PostMapping("/save/{idcategory}")
    public SubCategory saveSubcategory(@RequestBody SubCategory s , @PathVariable Long idcategory){
        Category c=icat.findById(idcategory).orElse(null);
        s.setCategory(c);
        return isubcategory.save(s);
    }
}
