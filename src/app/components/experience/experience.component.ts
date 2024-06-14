import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {


  items = [
    {
      title: 'Software Engineer (Intern) @ MFC',
      date: 'Aug-2023 to Feb-2024',
      description: 'I have extensive experience as a software engineer at Moodeforcode, specializing in website development. using Angular, Node.js, and MySQL. My role involves designing, implementing, and maintaining robust web applications, ensuring seamless user experiences and efficient data management.',
      open: false,
      location:"Colombo",
      link:"https://kumarnivi.github.io/my_portfolio/edu.html",
      linkName:"moodeforcode.com"
    },
    {
      title: 'UKi Coding School',
      date: 'Nov-2023 to June-2024',
      description: 'I studied full-stack development at Uki Coding School, where I learned website development using React, Node.js, and MongoDB. I developed real-world projects and gained basic business management and English skills, enhancing my overall proficiency in web development and project execution.',
      open: false,
      location:"Jaffna",
      link:"https://www.uki.life/",
      linkName:"Uki.life"
    },
    {
      title: 'Jarld Finance Company',
      date: 'Feb-2021 to Aug-2022',
      description: 'In my role as a cashier and sales marketign at Jarld Finance Company, I applied basic business ethics to ensure fair transactions and customer satisfaction. I navigated company structures efficiently, adhering to protocols to maintain operational integrity. My leadership was evident in guiding team efforts towards achieving sales targets and delivering exceptional service.',
      open: false,
      location:"Jaffna",
      link:"https://web.facebook.com/profile.php?id=100064703089749",
      linkName:"Jarlda Enterprises"
    }
  ];

  toggle(index: number) {
    this.items[index].open = !this.items[index].open;
  }
}
