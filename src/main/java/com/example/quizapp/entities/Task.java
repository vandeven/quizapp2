package com.example.quizapp.entities;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

/**
 * Created by Ties on 07/04/2014.
 */
@Entity
public class Task {


    protected Task(){
    }

    public Task(String name)
    {
        this.name = name;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
