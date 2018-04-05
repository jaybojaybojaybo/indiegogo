import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects(){
    return this.projects;
  }

  addProject(newProject: Project) {
     this.projects.push(newProject);
  }
  //addProject() method refers to the this.projects defined in the service's constructor. this.projects refers to the specific area of our database where our list of Projects is stored.

  getProjectById(projectId: string){
   return this.database.object('projects/' + projectId);
  }

  updateProject(localUpdatedProject){
   var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
   projectEntryInFirebase.update({
     name: localUpdatedProject.title,
     starters: localUpdatedProject.artist,
     description: localUpdatedProject.description,
     goal: localUpdatedProject.goal,
     plan: localUpdatedProject.plan,
     userRewards: localUpdatedProject.userRewards,
     category: localUpdatedProject.category,
     imageUrl: localUpdatedProject.imageUrl
   });
  }
  //service needs a method to locate a specific Project's Firebase entry and update it.

  deleteProject(localProjectToDelete){
    var projectEntryInFirebase =      this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }
}
