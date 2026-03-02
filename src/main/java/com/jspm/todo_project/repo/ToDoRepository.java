package com.jspm.todo_project.repo;

import com.jspm.todo_project.entity.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoRepository extends JpaRepository<ToDo,Long>{

}

