import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import TaskListModel from 'src/app/models/taskListModel';
import TaskModel from 'src/app/models/taskModel';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-screen',
  templateUrl: './task-screen.component.html',
  styleUrls: ['./task-screen.component.css'],
})
export class TaskScreenComponent implements OnInit {
  taskLists: TaskListModel[] = [];
  tasks: TaskModel[] = [];
  taskListId: string = '';

  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.taskService.getAllTaskLists().subscribe((allTaskLists) => {
      this.taskLists = allTaskLists;
      // this.router.navigate([`task-list`, this.taskLists[0]['_id']]);
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.taskListId = params['taskListId'];
      if (this.taskListId) {
        this.taskService
          .getAllTasksInTaskList(this.taskListId)
          .subscribe((tasks: TaskModel[]) => (this.tasks = tasks)
          );
        }
    }
    );
  }
  
  taskClicked(task: TaskModel){
    console.log(task);
    this.taskService.updateTaskStatus(this.taskListId, task)
    .subscribe(()=> task.completed = !task.completed);
  }

  deleteTask(task: TaskModel){
    this.taskService.deleteTaskInsideTaskList(this.taskListId, task._id)
    .subscribe((taskDeleted: TaskModel)=>{
      this.tasks = this.tasks.filter(t => t._id !=taskDeleted._id);
    });
  }

  deleteTaskList(taskListClicked: TaskListModel){
    this.taskService.deleteTaskList(taskListClicked._id)
    .subscribe(()=>{
      this.taskLists = this.taskLists.filter(tL => tL._id !=taskListClicked._id);
    });
  }
  addNewTask(){
    if(this.taskListId){
      // route the user to add the task for selected task
      this.router.navigate(['./new-task'], {relativeTo: this.activatedRoute})
    }else{
      alert("Please select a task list!!!");
      return;
    }
  }
}
