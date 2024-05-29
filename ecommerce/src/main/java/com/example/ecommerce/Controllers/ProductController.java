package com.example.ecommerce.Controllers;

import com.example.ecommerce.DAO.ProductRepository;
import com.example.ecommerce.DAO.SubCategoryRepository;
import com.example.ecommerce.DAO.providerRepository;
import com.example.ecommerce.models.Product;
import com.example.ecommerce.models.SubCategory;
import com.example.ecommerce.models.provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Id;
import java.util.List;


@RestController
    @RequestMapping(value = "/product")
    public class ProductController {
        @Autowired
        private ProductRepository iproduct ;
        @GetMapping ("/all")
        public List<Product> getall(){
            return iproduct.findAll();
        }

        @Autowired
        private SubCategoryRepository isub;
        @Autowired
        private providerRepository ipro;

        @PostMapping("/save/{idsubcategory}/{idprovider}")
            public Product saveproduct(@RequestBody Product d , @PathVariable Long idsubcategory , @PathVariable Long
                                       idprovider)
        {
            SubCategory s=isub.findById(idsubcategory).orElse(null);
            d.setSubcategory(s);

            provider  p=ipro.findById(idprovider).orElse(null);
            d.setProvider(p);
            return iproduct.save(d);
        }
}
