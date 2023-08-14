import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Mydiary web App',
      technologies: 'Java,servlets,jsp,css,html,springboot,Mysql',
      description: [
        'My Diary Online is an intuitive and secure web application that allows users to create and maintain',
        
'a personal diary in a digital format. Whether you want to document your thoughts, experiences',
'goals, or simply express yourself, My Diary Online provides a convenient and private platform to',

'This diary project allows you to record daily activities that you can complete throughout the day and',
'that are similar to those found in dairy books sold in stores. It also has capabilities that let you view',
'update, and remove day-by-day entries. In this project, I create the register page if the user is a new',
'user and the login page if the user is an existing user. This is really helpful for remembering our description',
'daily activities. Only the days description can be changed; after the date has been saved, it cannot',
'be changed.'
        
      ],
    },
    
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
