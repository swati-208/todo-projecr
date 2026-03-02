package com.jspm.todo_project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ToDo {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String title;
    private Boolean completed;
    public ToDo(){}
    ToDo(String title,Boolean completed){
        this.title=title;
        this.completed=completed;
    }
    public void setId(Long id){
        this.id=id;
    }
    public Long getId(){
        return id;
    }
    public void setTitle(String title){
        this.title=title;
    }
    public String getTitle(){
        return title;
    }
    public void setCompleted(Boolean completed){
        this.completed=completed;
    }
    public Boolean getCompleted(){
        return completed;
    }
}
