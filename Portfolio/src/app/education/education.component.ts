import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Brilliant Institute of Engineering & Technology ",
      course: 'Btech',
      duration: '2017-2020',
      score: '70%',
    },
    
    {
      institute: 'Brilliant Grammer Educational society',
      course: 'Diploma',
      duration: '2014-2017',
      score: '75%',
    },
    
    {
      institute: 'Gajwel Model School',
      course: 'SSC',
      duration: '2013-2014',
      score: '85%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
