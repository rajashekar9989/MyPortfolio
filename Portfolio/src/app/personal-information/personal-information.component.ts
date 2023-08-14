import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', '  Emmadi Rajashekar Reddy'],
    ['DOB', '22/10/1998'],
    ['Work Exp', '1.5 Years'],
    ['Education', 'B-tech (2020)'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 1.2 years of experience in software industry.',
    'Working as Associate Consultent in incresol software services for various technologies (Java,J2EE,Angular,Mysql,SperingBoot).',
    
    
  ];

  constructor() {}

  ngOnInit(): void {}
}
