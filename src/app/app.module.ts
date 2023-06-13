import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TaskScreenComponent } from './screens/task-screen/task-screen.component';
import { NewTaskScreenComponent } from './screens/new-task-screen/new-task-screen.component';
import { NewTaskListScreenComponent } from './screens/new-task-list-screen/new-task-list-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskScreenComponent,
    NewTaskScreenComponent,
    NewTaskListScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
