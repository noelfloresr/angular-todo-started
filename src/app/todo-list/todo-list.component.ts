import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos = ['Primera tarea ', 'Second task', 'Third task', 'Study Angular'];
  task = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.todos.push(this.task);
    this.task = '';
  }

}
