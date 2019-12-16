package com.example.ngrx.pattern.web;

import com.example.ngrx.pattern.model.Pizza;
import com.example.ngrx.pattern.model.Topping;
import com.example.ngrx.pattern.services.interfaces.IPizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api")
public class RestEndpoint {

    private final IPizzaService iPizzaService;

    @Autowired
    public RestEndpoint(IPizzaService iPizzaService) {
        this.iPizzaService = iPizzaService;
    }

    @GetMapping("/pizzas")
    public Set<Pizza> getPizzas() {
        return this.iPizzaService.getPizzas();
    }

    @GetMapping("/toppings")
    public Set<Topping> getToppings() {
        return this.iPizzaService.getToppings();
    }

    @PostMapping("/pizzas")
    public Pizza createPizza(@RequestBody Pizza pizza) {
        return pizza;
    }

    @PutMapping("/pizzas")
    public Pizza updatePizza(@RequestBody Pizza pizza) {
        return pizza;
    }

    @DeleteMapping("/pizzas/{id}")
    public Long deletePizza(@PathVariable Long id) {
        return id;
    }
}
