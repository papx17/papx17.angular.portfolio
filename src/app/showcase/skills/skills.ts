import { Component } from '@angular/core';

interface Skill {
  name: string;
  iconClass?: string; // Para Devicon
  iconUrl?: string; // Para CDN de SimpleIcons
  level?: number; // Porcentaje de dominio (0 - 100)
}

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  skills: Skill[] = [
    { name: 'Angular', iconUrl: 'https://cdn.simpleicons.org/angular', level: 70 },
    { name: 'React', iconUrl: 'https://cdn.simpleicons.org/react', level: 80 },
    { name: 'TypeScript', iconUrl: 'https://cdn.simpleicons.org/typescript', level: 85 },
    { name: 'JavaScript', iconUrl: 'https://cdn.simpleicons.org/javascript', level: 90 },
    { name: 'NestJS', iconUrl: 'https://cdn.simpleicons.org/nestjs', level: 75 },
    { name: 'Java 21', iconUrl: 'https://cdn.simpleicons.org/openjdk', level: 90 },
    { name: 'Spring Boot', iconUrl: 'https://cdn.simpleicons.org/springboot', level: 95 },
    { name: 'Python', iconUrl: 'https://cdn.simpleicons.org/python', level: 90 },
    { name: 'FastAPI', iconUrl: 'https://cdn.simpleicons.org/fastapi', level: 80 },
    { name: 'Django', iconUrl: 'https://cdn.simpleicons.org/django', level: 85 },
    { name: 'PostgreSQL', iconUrl: 'https://cdn.simpleicons.org/postgresql', level: 85 },
    { name: 'MySQL', iconUrl: 'https://cdn.simpleicons.org/mysql', level: 80 },
    { name: 'Tailwind CSS', iconUrl: 'https://cdn.simpleicons.org/tailwindcss', level: 70 },
    { name: 'Docker', iconUrl: 'https://cdn.simpleicons.org/docker', level: 80 },
  ];
}
