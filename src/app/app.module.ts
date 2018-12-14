import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderComponent } from './provider/provider.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { HeaderComponent } from './header/header.component';
import { VirtualClassroomComponent } from './virtual-classroom/virtual-classroom.component';
import { LogInComponent } from './index/log-in/log-in.component';
import { SignUpComponent } from './index/sign-up/sign-up.component';
import { SubjectsComponent } from './dashboard/subjects/subjects.component';
import { CreateSubjectComponent } from './dashboard/create-subject/create-subject.component';
import { ScheduleComponent } from './classroom/schedule/schedule.component';
import { DescriptionComponent } from './classroom/description/description.component';
import { DiscussionComponent } from './classroom/discussion/discussion.component';
import { ContentComponent } from './classroom/content/content.component';
import { VirtualChatComponent } from './virtual-classroom/virtual-chat/virtual-chat.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
//import { MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ProviderComponent,
    IndexComponent,
    DashboardComponent,
    ClassroomComponent,
    HeaderComponent,
    SignUpComponent,
    VirtualClassroomComponent,
    LogInComponent,
    SubjectsComponent,
    CreateSubjectComponent,
    ScheduleComponent,
    DescriptionComponent,
    DiscussionComponent,
    ContentComponent,
    VirtualChatComponent,
    //MatSidenavModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    //MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
