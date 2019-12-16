package com.example.ngrx.pattern.model;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

public class Pizza {
    private Long id;
    private String name;
    private Set<Topping> toppings;

    public Pizza(Long id, String name, Set<Topping> toppings) {
        this.id = id;
        this.name = name;
        this.toppings = toppings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Topping> getToppings() {
        return toppings;
    }

    public void setToppings(Set<Topping> toppings) {
        this.toppings = toppings;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Pizza)) return false;
        Pizza pizza = (Pizza) o;
        return getId().equals(pizza.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }

    public static Set<Pizza> getPizzas() {
        Set<Topping> toppingList = new HashSet<>();
        Topping topping1 = new Topping(1L, "anchovy");
        Topping topping2 = new Topping(2L, "bacon");
        Topping topping3 = new Topping(3L, "basil");
        Topping topping4 = new Topping(4L, "chili");
        toppingList.add(topping1);
        toppingList.add(topping2);
        toppingList.add(topping3);
        toppingList.add(topping4);

        Set<Pizza> pizzas = new HashSet<>();

        Pizza pizza1 = new Pizza(1L, "Blazin' Inferno", toppingList);
        Pizza pizza2 = new Pizza(2L, "Seaside Surfin'", toppingList);
        Pizza pizza3 = new Pizza(3L, "Plain Ol' Pepperoni", toppingList);

        pizzas.add(pizza1);
        pizzas.add(pizza2);
        pizzas.add(pizza3);
        return pizzas;
    }
}
