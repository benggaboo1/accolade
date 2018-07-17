import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteModule, routedComponents, routedModules } from './app.routing.module';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PostsService } from './services/posts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GeneralComponent } from './components/bodyparts/general/general.component';
import { LogInComponent } from './components/log-in/log-in.component';

import { ContentsModule } from 'angular-contents';
import { ModalModule } from 'ngx-bootstrap/modal';
import { VeteransMasterListComponent } from './components/veterans-master-list/veterans-master-list.component';

import { FilterPipe } from './util/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LogInComponent, 
    routedComponents,
    GeneralComponent,
    VeteransMasterListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouteModule,
    FormsModule, ReactiveFormsModule,
    ContentsModule,
    routedModules,
    ModalModule.forRoot()
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
