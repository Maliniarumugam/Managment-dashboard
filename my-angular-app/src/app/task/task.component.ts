import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = { id: 0, title: '', description: '', completed: false };
  editTask: Task | null = null;


  addTask(): void {
   this.tasks.push(this.newTask);
  }

  updateTask(): void {
    if (this.editTask) {
   const index = this.tasks.findIndex(t => t.id === this.editTask?.id);
    if (index > -1) {
      this.tasks[index] = this.editTask;
     }
    }
  }


  deleteTask(id: number): any {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  setEditTask(task: Task): void {
    this.editTask = { ...task };
  }

  ngOnInit(): void {
   console.log('component is called');
  }

}
