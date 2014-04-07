package com.example.quizapp.controllers;

import com.example.quizapp.dao.TaskRepository;
import com.example.quizapp.entities.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Ties on 07/04/2014.
 */
@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @ResponseBody
    @RequestMapping("/")
    public String init(){
        taskRepository.save(new Task("test1"));
        return "taskcontroller werkt";
    }

    @RequestMapping("/add/{taskName}")
    public void addTask(@PathVariable String taskName){
        taskRepository.save(new Task(taskName));
    }

    @ResponseBody
    @RequestMapping("/list")
    public Iterable<Task> list(){
        return taskRepository.findAll();
    }

}
