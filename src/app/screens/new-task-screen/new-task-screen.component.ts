import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task-screen',
  templateUrl: './new-task-screen.component.html',
  styleUrls: ['./new-task-screen.component.css']
})
export class NewTaskScreenComponent implements OnInit{
  taskListId:string = '';
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService){
      this.activatedRoute.params.subscribe(
        (params: Params)=>{
          this.taskListId = params['taskListId'];
        }
      );
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addNewTask(title: string){
    this.taskService.createTaskInsideTaskList(this.taskListId, title)
    .subscribe(()=>{
      this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    })
  }
}
