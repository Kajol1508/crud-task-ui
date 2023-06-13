import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import TaskListModel from 'src/app/models/taskListModel';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task-list-screen',
  templateUrl: './new-task-list-screen.component.html',
  styleUrls: ['./new-task-list-screen.component.css']
})
export class NewTaskListScreenComponent implements OnInit{
  constructor(private router: Router,
    private taskService: TaskService
    ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  addNewTaskList(title:string){
    if(title){
      this.taskService.createTaskList(title).subscribe
      ((newTaskList: TaskListModel)=>{
        this.router.navigate(['tasklists', newTaskList._id ])
      });
    }else{
      alert("Title cannot be Empty");
      return;
    }
  }

}
