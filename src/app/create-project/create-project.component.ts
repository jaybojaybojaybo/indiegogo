import { Component, Output, EventEmitter } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [ProjectService]
})
export class CreateProjectComponent {

  constructor(private projectService: ProjectService) { }

  addProject(
    category: string,
    description: string,
    goal: string,
    imageUrl: string,
    name: string,
    plan: string,
    starters: string,
    userRewards: string
  )
  {
    let newProject: Project = new Project(category, description, goal, imageUrl, name, plan, starters, userRewards);
    console.log(newProject.category);
    console.log(newProject.description);
    console.log(newProject.goal);
    console.log(newProject.imageUrl);
    console.log(newProject.name);
    console.log(newProject.plan);
    console.log(newProject.starters);
    console.log(newProject.userRewards);
    this.projectService.addProject(newProject);
  }
}
