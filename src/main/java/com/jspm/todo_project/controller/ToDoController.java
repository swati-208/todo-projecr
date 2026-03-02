package com.jspm.todo_project.controller;

import com.jspm.todo_project.entity.ToDo;
import com.jspm.todo_project.repo.ToDoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = "http://localhost:3000")
public class ToDoController {

    private final ToDoRepository toDoRepo;
    public ToDoController(ToDoRepository toDoRepo){
        this.toDoRepo=toDoRepo;
    }
//    @GetMapping("/hello")
//    public String hello(){
//        return "Hello students:";
//    }
    //create
    @PostMapping
    public ToDo createToDo(@RequestBody ToDo todo){
        return toDoRepo.save(todo);
    }
    //fetch all
    @GetMapping
    public List<ToDo> getAllToDos(){
        return toDoRepo.findAll();
    }
    //fetch by id
    @GetMapping("/{id}")
    public ToDo getTodoById(@PathVariable Long id){
        return toDoRepo.findById(id).orElseThrow(()->new RuntimeException("ToDo not found"));
    }
    //update
    @PutMapping("/{id}")
    public ToDo updateToDo(@PathVariable Long id, @RequestBody ToDo updatedToDo){
        ToDo todo=toDoRepo.findById(id).orElseThrow(()->new RuntimeException("Todo not found"));
        todo.setTitle(updatedToDo.getTitle());
        todo.setCompleted(updatedToDo.getCompleted());
        return toDoRepo.save(todo);
    }
    //Delete
    @DeleteMapping("/{id}")
    public String deleteToDo(@PathVariable Long id){
        toDoRepo.deleteById(id);
        return "Todo deleted suceesfully";
    }
}
