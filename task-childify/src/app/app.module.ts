import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule} from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { TaskComponent } from './task/task.component';
import { CheckTaskComponent } from './check-task/check-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChildTaskComponent } from './child-task/child-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';

@NgModule({
  declarations: [
    TaskComponent,
    CheckTaskComponent,
    TaskListComponent,
    ChildTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [TaskComponent,TaskListComponent]
})
export class AppModule { }
