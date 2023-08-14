import { Component,OnInit } from '@angular/core';
import { BreakpointObserver,Breakpoints } from '@angular/cdk/layout';








@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent  implements OnInit{

  

  constructor(private breakpointobserver: BreakpointObserver){}



  ngOnInit():void{

    this.breakpointobserver.observe([Breakpoints.HandsetLandscape,Breakpoints.WebLandscape])
    .subscribe({
  
      next:(result:any)=>{
        for(let Breakpoint of Object.keys(result.Breakpoints)){

                  if(result.Breakpoints[Breakpoint]){

                  
                  }


        }
        
      }


    })
  }
}
