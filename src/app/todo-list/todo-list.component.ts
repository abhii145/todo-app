import { Todo } from './../models/todo';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  newTodoTitle: string = '';
  newTodoDate: Date = new Date();
  todoList: Todo[] = [];

  ngOnInit(): void {
  let savedList =   localStorage.getItem('todoList');
  this.todoList = savedList ? JSON.parse(savedList) :[]
  }

  addToDo() {
    if (this.newTodoTitle.trim().length && this.newTodoDate) {
      let newTodoList: Todo = {
        id: Date.now(),
        title: this.newTodoTitle,
        date: this.newTodoDate,
      };
      this.todoList.push(newTodoList);
      this.newTodoTitle = '';
      this.newTodoDate = new Date();
      console.log(this.todoList);
    } else {
      alert('please enter description');
    }
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  DeleteTodo(id: number) {
    let newTodoList = this.todoList.filter((item) => item.id != id);
    this.todoList = newTodoList;
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }


EditTodo(id:number){

}

}
