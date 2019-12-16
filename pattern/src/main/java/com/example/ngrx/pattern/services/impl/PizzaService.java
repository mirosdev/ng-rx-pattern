package com.example.ngrx.pattern.services.impl;

import com.example.ngrx.pattern.model.Pizza;
import com.example.ngrx.pattern.model.Topping;
import com.example.ngrx.pattern.services.interfaces.IPizzaService;
import org.springframework.stereotype.Service;

import java.util.Set;


@Service
public class PizzaService implements IPizzaService {

    @Override
    public Set<Pizza> getPizzas() {
        return Pizza.getPizzas();
    }

    @Override
    public Set<Topping> getToppings() {
        return Topping.getToppings();
    }
}
