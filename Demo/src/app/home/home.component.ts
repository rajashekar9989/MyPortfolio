import { Component, Input, OnInit } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()parentdata="";

constructor(){

    console.log("constructor called");
    
  }

  ngOnInit(): void {
      console.log("onInit called");
      console.log("parent data:",this.parentdata)
  }



  

 
  

}


