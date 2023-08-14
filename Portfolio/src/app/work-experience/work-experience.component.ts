import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {

      
        role: 'Associate Consultent ',
        company: 'Incresol Software Services',
        duration: 'july-2023 - present',
        description: [
          'Worked with web applications',
          'Worked on different technologies such as (java,Jsp,Angular, SpringBoot, Mysql)',
        ],
      },
      {
      role: 'Associate Trainee',
      company: 'Prowess Software Services',
      duration: 'sep 2021 - Nov-2022',
      description: [
        'Worked for Syncron client project.',
        'Working on based on client needs customize the project like add new featurs' ,
      'and remove the old features.',
      ],
    },
    
    
    
   
  ];
  constructor() {}

  ngOnInit(): void {}
}
