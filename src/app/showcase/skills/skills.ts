import { Component } from '@angular/core';

interface Skill {
  name: string;
  iconClass?: string; // Para Devicon
  iconUrl?: string; // Para CDN de SimpleIcons
}

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  skills: Skill[] = [
    { name: 'Angular', iconUrl: 'https://cdn.simpleicons.org/angular' },
    { name: 'TypeScript', iconUrl: 'https://cdn.simpleicons.org/typescript' },
    { name: 'NestJS', iconUrl: 'https://cdn.simpleicons.org/nestjs' },
    { name: 'Java', iconUrl: 'https://cdn.simpleicons.org/openjdk' },
    { name: 'Spring Boot', iconUrl: 'https://cdn.simpleicons.org/springboot' },
    { name: 'PostgreSQL', iconUrl: 'https://cdn.simpleicons.org/postgresql' },
    { name: 'Tailwind CSS', iconUrl: 'https://cdn.simpleicons.org/tailwindcss' },
    { name: 'Python', iconUrl: 'https://cdn.simpleicons.org/python' },
    { name: 'Django', iconUrl: 'https://cdn.simpleicons.org/django' },
    { name: 'FastAPI', iconUrl: 'https://cdn.simpleicons.org/fastapi' },
    { name: 'MySql', iconUrl: 'https://cdn.simpleicons.org/mysql' },
    { name: 'Javascript', iconUrl: 'https://cdn.simpleicons.org/javascript' },
    { name: 'typescript', iconUrl: 'https://cdn.simpleicons.org/typescript' },
  ];
}
