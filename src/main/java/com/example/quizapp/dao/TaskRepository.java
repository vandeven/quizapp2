package com.example.quizapp.dao;

import com.example.quizapp.entities.Task;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Ties on 07/04/2014.
 */
public interface TaskRepository extends CrudRepository<Task, Long> {
}
