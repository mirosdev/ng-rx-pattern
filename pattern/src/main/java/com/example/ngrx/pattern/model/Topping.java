package com.example.ngrx.pattern.model;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

public class Topping {
    private Long id;
    private String name;

    public Topping(Long id, String name) {
        this.id = id;
        this.name = name;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Topping)) return false;
        Topping topping = (Topping) o;
        return Objects.equals(getId(), topping.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }

    public static Set<Topping> getToppings() {
        Set<Topping> toppingList = new HashSet<>();
        Topping topping1 = new Topping(1L, "anchovy");
        Topping topping2 = new Topping(2L, "bacon");
        Topping topping3 = new Topping(3L, "basil");
        Topping topping4 = new Topping(4L, "chili");
        Topping topping5 = new Topping(5L, "mozzarella");
        Topping topping6 = new Topping(6L, "mushroom");
        Topping topping7 = new Topping(7L, "olive");
        Topping topping8 = new Topping(8L, "onion");
        Topping topping9 = new Topping(9L, "pepper");
        Topping topping10 = new Topping(10L, "pepperoni");
        Topping topping11 = new Topping(11L, "sweetcorn");
        Topping topping12 = new Topping(12L, "tomato");

        toppingList.add(topping1);
        toppingList.add(topping2);
        toppingList.add(topping3);
        toppingList.add(topping4);
        toppingList.add(topping5);
        toppingList.add(topping6);
        toppingList.add(topping7);
        toppingList.add(topping8);
        toppingList.add(topping9);
        toppingList.add(topping10);
        toppingList.add(topping11);
        toppingList.add(topping12);

        return toppingList;
    }
}
