import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid/v1';


@Injectable()
export class TasksService {
  //Simulate db by use of memory(array)
  private tasks: Task[]= []; 

  //make the array available to task controller
  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const task: Task = {
      id : uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    }
    this.tasks.push(task);
    return task;
  }
}
