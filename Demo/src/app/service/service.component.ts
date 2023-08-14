import { Component } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {


  constructor(public ts :TestService){




  }

}
