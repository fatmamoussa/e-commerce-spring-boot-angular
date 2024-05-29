package com.example.ecommerce.Controllers;

import com.example.ecommerce.DAO.CoustomRepository;
import com.example.ecommerce.DAO.OrderRepository;
import com.example.ecommerce.models.Customer;
import com.example.ecommerce.models.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/Order")
public class OrderController {
    @Autowired
    private OrderRepository iorder;
    @Autowired
    private CoustomRepository icus;

    @GetMapping("/all")
    public List<Order> getall(){
        return iorder.findAll();
    }

    @PostMapping("/save/{idcustomer}")
    public Order saveorder(@RequestBody Order o,@PathVariable Long idcustomer){
        Customer c=icus.findById(idcustomer).orElse(null);
        o.setCustomer(c);
        return iorder.save(o);
    }
}
