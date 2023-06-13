import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskScreenComponent } from './screens/task-screen/task-screen.component';
import { NewTaskListScreenComponent } from './screens/new-task-list-screen/new-task-list-screen.component';
import { NewTaskScreenComponent } from './screens/new-task-screen/new-task-screen.component';

const routes: Routes = [
  {path: '', redirectTo: 'tasklists', pathMatch: 'full'},
  {path: 'tasklists', component: TaskScreenComponent},
  {path: 'tasklists/:taskListId', component: TaskScreenComponent},
  {path: 'new-task-list', component: NewTaskListScreenComponent},
  {path: 'tasklists/:taskListId/new-task', component: NewTaskScreenComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
