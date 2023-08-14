import { Compiler, Component, NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './headercomponent/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestPipe } from './test.pipe';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TestService } from './test.service';
import { UsersComponent } from './users/users.component';
import { UsercardComponent } from './usercard/usercard.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule,Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TestModule } from './test/test.module';
import { ChangeInterceptor } from './change.interceptor';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestPipe,
    AboutComponent,
    HomeComponent,
    ServiceComponent,
    UsersComponent,
    UsercardComponent,
    ProductsComponent,
    TodoformComponent,
    TodolistComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TestModule,
  
    

  ],
  providers: [TestService, 

    {
          provide:HTTP_INTERCEPTORS,
          useClass:ChangeInterceptor,
          multi:true

    }
  
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
