import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos = ['Primera tarea', 'Second task', 'Third task', 'Study Angular'];
  task = '';
  isEditing = false;
  previousTask = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    // this.todos = [...this.todos, this.task]
    this.todos.push(this.task);
    this.task = '';
  }

  removeTask(element: string) {
    this.todos = this.todos.filter((item: string) => item !== element);
  }

  editTask(element: string) {
    this.isEditing = true;
    this.previousTask = element;
    this.task = element;
  }

  updateTask() {
    this.isEditing = false;
    const index = this.todos.findIndex((item: string) => item === this.previousTask);
    this.todos[index] = this.task;
    this.task = '';
  }

}
