import { Component, ElementRef, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('autoHeight', [
      transition('* => *', [
        style({ height: '0', overflow: 'hidden' }),
        animate('300ms', style({ height: '*' })),
      ]),
    ]),
  ],
})
export class SkillsComponent {

  dynamicSlides = [
    {
      id: 1,
      src:'../../../assets/images/React.webp',
      alt:'Side 1',
      title:'React',
      aboutSkills:'I excel in developing responsive web apps using React hooks, Redux, RESTful APIs, and performance optimization techniques.'
    },
    {
      id: 2,
      src:'../../../assets/images/angular.png',
      alt:'Side 2',
      title:'Angular',
      aboutSkills:'With one year of Angular experience, I excel in building dynamic web apps using Angular CLI, RxJS, TypeScript, and NgRx.'
    },
    {
      id: 3,
      src:'../../../assets/images/nodejs.png',
      alt:'Side 3',
      title:'Nodejs',
      aboutSkills:'I excel in building scalable server-side applications, managing databases, and handling RESTful APIs.'
    },
    {
      id: 4,
      src:'../../../assets/images/Flowbite.png',
      alt:'Side 4',
      title:'Flowbite',
      aboutSkills:'I am proficient in Flowbite for styling web apps, leveraging its utility-first approach to streamline CSS development efficiently.'
    },
    {
      id: 5,
      src:'../../../assets/images/monogodb.png',
      alt:'Side 5',
      title:'MongoDB',
      aboutSkills:'I have practical experience with MongoDB, including schema design, CRUD operations, indexing, aggregation pipelines, and scaling for performance and availability'
    },
    {
      id: 6,
      src:'../../../assets/images/mysql.png',
      alt:'Side 5',
      title:'MySql',
      aboutSkills:'I have proficiency in MySQL, including database design, querying with SQL, indexing, transactions, stored procedures, and performance optimization.'
    }
  ]

  constructor() { }
  // Carusel Configatation
  @ViewChild('carousel', { static: false }) private carousel!: ElementRef;

 customOptions: OwlOptions = {
   loop: true,
   mouseDrag: false,
   touchDrag: false,
   pullDrag: false,
   dots: false,
   navSpeed: 600,
   navText: [ ' <img src="../../../assets/logos/Arrow 1 (Stroke).svg" alt="" />',
    '<img src="../../../assets/logos/Arrow 1 (Stroke) 2.svg" alt="" />',],
   responsive: {
     0: {
       items: 1 
     },
     400: {
       items: 2
     },
     760: {
       items: 3
     },
     1000: {
       items: 4
     }
   },
   nav: true,
    autoplayHoverPause: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
 }

}
