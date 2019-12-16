package com.example.ngrx.pattern.services.interfaces;

import com.example.ngrx.pattern.model.Pizza;
import com.example.ngrx.pattern.model.Topping;

import java.util.Set;

public interface IPizzaService {
    Set<Pizza> getPizzas();
    Set<Topping> getToppings();
}
