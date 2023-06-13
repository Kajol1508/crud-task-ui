import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import TaskModel from './models/taskModel';
import TaskListModel from './models/taskListModel';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiConfigService: ApiConfigService) { }

  // to fetch all task lists
  getAllTaskLists(): Observable<TaskListModel[]>{
    return this.apiConfigService.getTaskLists(`tasklists`);
  }
  getAllTasks(taskListId: string): Observable<TaskModel[]>{
    return this.apiConfigService.getTasks(`tasklists/${taskListId}`);
  }

  // create a tasklist
  createTaskList(title: string): Observable<TaskListModel>{
    let data = { 'title': title };
    return this.apiConfigService.post(`tasklists`, data)
  }

  // create method to fetch all the tasks in tasklist
  getAllTasksInTaskList(taskListId: string){
    return this.apiConfigService.getTasks(`tasklists/${taskListId}/tasks`);
  }
// create a task inside particular task list object
  createTaskInsideTaskList(taskListId: string, title: string){
    return this.apiConfigService.post(`tasklists/${taskListId}/tasks`, {title});
  }
  // delete a task list
  deleteTaskList(taskListId: string): Observable<TaskListModel>{
    return this.apiConfigService.deleteTaskList(`tasklists/${taskListId}`);
  }
  // delete a task inside a particular tasklist
  deleteTaskInsideTaskList(taskListId: string, taskId: string): Observable<TaskModel>{
    return this.apiConfigService.deleteTask(`tasklists/${taskListId}/tasks/${taskId}`);
  }
  // update status of a task
  updateTaskStatus(taskListId: string, taskObject: TaskModel): Observable<TaskModel>{
    let updateData = { 'completed': !taskObject.completed};
    return this.apiConfigService.patch(`tasklists/${taskListId}/tasks/${taskObject._id}`, updateData);
  }
}
