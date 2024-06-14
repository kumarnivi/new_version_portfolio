import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  cards = [
    {
      image:
        '../../../assets/images/react_app.png',
      title: 'Design',
      heading:'Tea E-commerce App',
      description:
        '',
        buttons: [
          { text: 'React', link: '#' },
          { text: 'Nodejs', link: '#' },
          { text: 'MongoDB', link: '#' },
        ],
        link:"https://comrade1.onrender.com/",
        
        github:'github',
        githubName:'githubName'
   
      },

    {
      image:
        '../../../assets/images/book_store.png',
      title: 'Code',
      heading:'Book Store',
      description:
        '',
        buttons: [
          { text: 'Angular', link: '#' },
          { text: 'Animate.css', link: '#' },
          
        ],
        link:"https://dashing-lokum-e971aa.netlify.app/",
        
        github:'github',
        githubName:'githubName'
      },
    {
      image:
        '../../../assets/images/angular_leavapp.png',
      title: 'Launch',
      heading:'Leave Management App',
      description:
        '',
        buttons: [
          { text: 'Angular', link: '#' },
          { text: 'Nodejs', link: '#' },
          { text: 'MySql', link: '#' },
        ],
        link:"https://leave-application.netlify.app/",
        
        github:'github',
        githubName:'githubName'
    },
    {
      image:
        '../../../assets/images/library.png',
      title: 'Launch',
      heading:'Library Collection',
      description:
        '',
        buttons: [
          { text: 'Angular', link: '#' },
          { text: 'Animate.css', link: '#' },
          { text: 'EmailJs', link: '#' },
        ],
        link:"https://tranquil-madeleine-c46a90.netlify.app/",
        
        github:'github',
        githubName:'githubName'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
