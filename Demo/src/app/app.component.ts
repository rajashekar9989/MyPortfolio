import { Component, ViewChild,OnChanges } from '@angular/core';
import { HeaderComponent } from './headercomponent/header.component';
import { HttpClient, } from '@angular/common/http';
import { Observable, debounceTime, from,fromEvent,merge,of,pluck } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  test(){
    console.log("enter clicked")


  }
  

  data = "This is an example component of two way data binding.";
  
  description ="Spring is a lightweight framework. It can be thought of as a framework of frameworks because it provides support to various frameworks such as Struts, Hibernate, Tapestry, EJB, JSF, etc. The framework, in broader sense, can be defined as a structure where we find solution of the various technical pro."

    end=100;
    show=false;
    linkText='readmore'

    toggleArticle(){

      if(this.show){

        this.show=false
        this.end=100
        this.linkText='readmore'
      }
      else{

        this.show=true;
        this.end=this.description.length
        this.linkText='hide'

}

}

h:any;

  getGreen(){

    this.h=true;
  }

  getRed(){

    this.h=false;
  }

       
    }

  


     


  


    




  
  



