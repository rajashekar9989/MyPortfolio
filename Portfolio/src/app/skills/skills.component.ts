import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'intermidiate',
      rating: 75,
    },
    {
      name: 'Spring Framework',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'intermidiate',
      rating: 85,
    },
    {
      name: 'Mysql',
      level: 'intermidiate',
      rating: 85,
    },
    {
      name: 'JAVA',
      level: 'Expert',
      rating: 85,
    },
   
  ];
  constructor() {}

  ngOnInit(): void {}
}
